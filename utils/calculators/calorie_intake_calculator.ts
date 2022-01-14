import { BMRCalculator } from "./";
import { Activity, Gender, Goal } from "types/types";

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

  if (activity === Activity.LOW) {
    calorieIntake *= 1.375;
  } else if (activity === Activity.MODERATE) {
    calorieIntake *= 1.55;
  } else if (activity === Activity.HIGH) {
    calorieIntake *= 1.725;
  }

  if (goal === Goal.WEIGHT_LOSS) {
    calorieIntake -= 500;
  } else if (goal === Goal.BODY_RECOMP) {
    calorieIntake -= 250;
  } else if (goal === Goal.WEIGHT_GAIN) {
    calorieIntake += 500;
  }

  if (activity === Activity.MODERATE) {
    if (gender === Gender.FEMALE) {
      calorieIntake += 200;
    } else if (gender === Gender.MALE) {
      calorieIntake += 300;
    }
  } else if (activity === Activity.HIGH) {
    if (gender === Gender.FEMALE) {
      calorieIntake += 400;
    } else if (gender === Gender.MALE) {
      calorieIntake += 500;
    }
  }

  return calorieIntake.toFixed(0);
};

export default CalorieIntakeCalculator;
