import { useCallback, useState } from "react";
import { FormState } from "../types";
import { Activity, Gender, Goal, CalculatorResult } from "types";
import {
  BMICalculator,
  BMRCalculator,
  CalorieIntakeCalculator,
  HandServingSizeCalculator,
  MacroRatioCalculator,
} from "utils/calculators";

interface UseMealPlanner {
  calculateResults: (vals: FormState) => void;
  loading: boolean;
  results?: CalculatorResult;
}

const useMealPlanner = (): UseMealPlanner => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<CalculatorResult>();

  const calculateResults = useCallback(
    (vals: FormState) => {
      setLoading(true);
      setResults(undefined);

      let bmi = BMICalculator(vals.weight, {
        ft: vals.heightFt,
        IN: vals.heightIn,
      });

      let bmr = BMRCalculator({
        age: vals.age,
        gender: vals.gender as Gender,
        feet: vals.heightFt,
        inches: vals.heightIn,
        weight: vals.weight,
      });

      let calorieIntake = CalorieIntakeCalculator({
        activity: vals.activity as Activity,
        age: vals.age,
        goal: vals.goal as Goal,
        gender: vals.gender as Gender,
        feet: vals.heightFt,
        inches: vals.heightIn,
        weight: vals.weight,
      });

      let macro = MacroRatioCalculator(vals.goal as Goal);

      let handSizes = HandServingSizeCalculator({
        calorieIntake: parseInt(calorieIntake, 10),
        macro,
        weight: vals.weight,
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

  return {
    calculateResults,
    loading,
    results,
  };
};

export default useMealPlanner;
