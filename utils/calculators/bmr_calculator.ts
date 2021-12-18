import { Gender } from "types/types";
const lbsToKg = (lbs: number): number => lbs / 2.2046;
const inToCm = (inches: number): number => inches * 2.54;

interface MifflinCalcArgs {
  age: number;
  gender: Gender;
  height: number; // height in cm
  weight: number;
}

const mifflinCalc = ({ age, gender, height, weight }: MifflinCalcArgs) => {
  // Mifflin-St Jeor Equation:
  // BMR (kcal / day) = 10 * weight (kg) + 6.25 * height (cm) – 5 * age (y) + s (kcal / day)
  // where s is +5 for males and -161 for females.

  age = age * 5;
  height = inToCm(height) * 6.25;
  weight = lbsToKg(weight) * 10;

  let BMR;

  if (gender === "male") {
    BMR = weight + height - age + 5;
  } else {
    BMR = weight + height - age - 161;
  }

  return BMR.toFixed(0);
};

interface BMRCalculatorArgs {
  age: number;
  gender: Gender;
  feet: number;
  inches: number;
  weight: number;
}

const BMRCalculator = ({
  age,
  gender,
  feet,
  inches,
  weight,
}: BMRCalculatorArgs): string => {
  let feetInInches = feet * 12;
  let height = feetInInches + inches;
  let mifflin = mifflinCalc({ age, gender, height, weight });

  return mifflin;
};

export default BMRCalculator;
