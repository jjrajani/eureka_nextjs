import { Gender } from "types/types";

interface TargetHeartRateCalculatorArgs {
  age: number;
  gender: Gender;
  rhr: number;
}

const TargetHeartRateCalculator = ({
  age,
  gender,
  rhr,
}: TargetHeartRateCalculatorArgs) => {
  // defaults are for Gender.FEMALE
  let start = 206,
    multiplier = 0.85;

  if (gender === Gender.MALE) {
    start = 220;
    multiplier = 0.75;
  }

  const result = (start - age - rhr) * multiplier + rhr;
  return Math.round(result);
};

export default TargetHeartRateCalculator;
