import { BMRCalculator } from "./";
import { Activity, Gender, Goal } from "types";

interface CalorieIntakeCalculatorArgs {
  activity: Activity;
  age: number;
  gender: Gender;
  goal: Goal;
  feet: number;
  inches: number;
  weight: number;
}

const CalorieIntakeCalculator = ({
  activity,
  age,
  gender,
  goal,
  feet,
  inches,
  weight,
}: CalorieIntakeCalculatorArgs): string => {
  let BMR = BMRCalculator({ age, gender, feet, inches, weight });

  let bmr = parseInt(BMR);

  let calorieIntake = bmr;

  if (activity === "low") {
    calorieIntake *= 1.375;
  } else if (activity === "moderate") {
    calorieIntake *= 1.55;
  } else if (activity === "high") {
    calorieIntake *= 1.725;
  }

  if (goal === "weightLoss") {
    calorieIntake -= 500;
  } else if (goal === "bodyRecomp") {
    calorieIntake -= 250;
  }

  return calorieIntake.toFixed(0);
};

export default CalorieIntakeCalculator;
