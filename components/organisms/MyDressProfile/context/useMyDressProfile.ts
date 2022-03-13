import { useCallback, useEffect, useState } from "react";
import {
  Activity,
  ExerciseFITT,
  DietPreference,
  Gender,
  Goal,
  MyDressProfileCalculatorResult,
  MyDressProfileFormState,
} from "types/types";
import {
  BMICalculator,
  BMRCalculator,
  CalorieIntakeCalculator,
  ExerciseFITTCalculator,
  HandServingSizeCalculator,
  MacroRatioCalculator,
  TargetHeartRateCalculator,
} from "utils/calculators";
import modifyAndOpenPDF from "utils/modifyAndOpenPDF/MyDressProfile/modifyAndOpenMyDressProfilePDF";
import axios from "axios";

export interface UseMyDressProfile {
  calculateResults: (vals: MyDressProfileFormState) => void;
  loading: boolean;
  pdfFilePath?: string;
  results?: MyDressProfileCalculatorResult;
  userInput?: MyDressProfileFormState;
  // downloadResults: () => void;
}

const useMyDressProfile = (): UseMyDressProfile => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<MyDressProfileCalculatorResult>();
  const [formVals, setFormVals] = useState<MyDressProfileFormState>();
  const [pdfFilePath, setPDFFilePath] = useState<string>();

  const cleanUpOldPDF = useCallback(() => {
    try {
      axios.get(`/api/cleanup_temp_file?filePath=${pdfFilePath}`);
    } catch (e) {
      console.log("e", e.message);
    }
    setPDFFilePath(undefined);
  }, [pdfFilePath, setPDFFilePath]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const beforeUnload = () => {
        console.log("beforeUnload");
      };
      window.addEventListener("onbeforeunload", cleanUpOldPDF);

      return () => {
        window.removeEventListener("onbeforeunload", cleanUpOldPDF);
      };
    }
  }, [cleanUpOldPDF]);

  const calculateResults = useCallback(
    async (vals: MyDressProfileFormState) => {
      if (pdfFilePath) {
        cleanUpOldPDF();
      }
      setFormVals(vals);
      setLoading(true);
      setResults(undefined);

      let bmi = BMICalculator(parseInt(vals.weight, 10), {
        ft: parseInt(vals.heightFt, 10),
        IN: parseInt(vals.heightIn, 10),
      });

      let bmr = BMRCalculator({
        age: parseInt(vals.age, 10),
        gender: vals.gender as Gender,
        feet: parseInt(vals.heightFt, 10),
        inches: parseInt(vals.heightIn, 10),
        weight: parseInt(vals.weight, 10),
      });

      let calorieIntake = CalorieIntakeCalculator({
        activity: vals.activity as Activity,
        age: parseInt(vals.age, 10),
        goal: vals.goal as Goal,
        gender: vals.gender as Gender,
        feet: parseInt(vals.heightFt, 10),
        inches: parseInt(vals.heightIn, 10),
        weight: parseInt(vals.weight, 10),
      });

      let macro = MacroRatioCalculator(vals.goal as Goal);

      let handSizes = HandServingSizeCalculator({
        calorieIntake: calorieIntake,
        macro,
        weight: parseInt(vals.weight, 10),
      });

      let exerciseFitt = ExerciseFITTCalculator({
        exercise: vals.exerciseFitt as ExerciseFITT,
        dietPreference: vals.dietPreference as DietPreference,
      });

      let targetHeartRate = TargetHeartRateCalculator({
        age: parseInt(vals.age, 10),
        gender: vals.gender as Gender,
        rhr: parseInt(vals.rhr, 10),
      });

      const _results = {
        bmi,
        bmr,
        calorieIntake,
        exerciseFitt,
        macro,
        handSizes,
        targetHeartRate,
      };

      setResults(_results);
      try {
        await generatePdf(_results, vals);
      } catch (err) {
        console.dir(err);
        setLoading(false);
      }
      setLoading(false);
    },
    [setLoading, setResults, pdfFilePath]
  );

  const generatePdf = useCallback(
    async (
      _results: MyDressProfileCalculatorResult,
      userInput: MyDressProfileFormState
    ) => {
      const res = await axios.get(
        `/api/generate_pdf?results=${JSON.stringify(
          _results
        )}&userInput=${JSON.stringify(userInput)}`
      );

      setPDFFilePath(res.data.filePath);

      axios.get(
        `/api/broadcast_submission?filePath=${
          res.data.filePath
        }&userInput=${JSON.stringify(userInput)}`
      );
    },
    [setPDFFilePath]
  );

  return {
    calculateResults,
    pdfFilePath,
    loading,
    results,
    userInput: formVals,
  };
};

export default useMyDressProfile;
