import { useCallback, useState } from "react";
import { MealMasteryFormState } from "types/types";
import { Activity, Gender, Goal, CalculatorResult } from "types/types";
import {
  BMICalculator,
  BMRCalculator,
  CalorieIntakeCalculator,
  HandServingSizeCalculator,
  MacroRatioCalculator,
} from "utils/calculators";
import modifyAndOpenPDF from "utils/modifyAndOpenPDF";

export interface UseMealMastery {
  calculateResults: (vals: MealMasteryFormState) => void;
  loading: boolean;
  results?: CalculatorResult;
  downloadResults: () => void;
}

const useMealMastery = (): UseMealMastery => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<CalculatorResult>();
  const [formVals, setFormVals] = useState<MealMasteryFormState>();

  const calculateResults = useCallback(
    (vals: MealMasteryFormState) => {
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
        calorieIntake: parseInt(calorieIntake, 10),
        macro,
        weight: parseInt(vals.weight, 10),
      });

      setLoading(false);
      setResults({
        bmi,
        bmr,
        calorieIntake,
        macro,
        handSizes,
      });
    },
    [setLoading, setResults]
  );

  const downloadResults = useCallback(async () => {
    if (formVals && results) {
      const thing = await modifyAndOpenPDF(results, formVals);
    }
  }, [formVals, results]);

  return {
    calculateResults,
    downloadResults,
    loading,
    results,
  };
};

export default useMealMastery;
