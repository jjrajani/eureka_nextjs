import { useCallback, useState } from "react";
import { MyDressProfileFormState } from "types/types";
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

export interface UseMyDressProfile {
  calculateResults: (vals: MyDressProfileFormState) => void;
  loading: boolean;
  results?: MyDressProfileCalculatorResult;
  userInput?: MyDressProfileFormState;
  // downloadResults: () => void;
}

const useMyDressProfile = (): UseMyDressProfile => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<MyDressProfileCalculatorResult>();
  const [formVals, setFormVals] = useState<MyDressProfileFormState>();

  const calculateResults = useCallback(
    (vals: MyDressProfileFormState) => {
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

      setLoading(false);

      setResults({
        bmi,
        bmr,
        calorieIntake,
        exerciseFitt,
        macro,
        handSizes,
        targetHeartRate,
      });
    },
    [setLoading, setResults]
  );

  // const downloadResults = useCallback(async () => {
  //   if (formVals && results) {
  //     await modifyAndOpenPDF(results, formVals);
  //   }
  // }, [formVals, results]);

  return {
    calculateResults,
    // downloadResults,
    loading,
    results,
    userInput: formVals,
  };
};

export default useMyDressProfile;
