import { ExerciseFITT, Gender, Range, ExerciseFITTCalcRes } from "types/types";

const TimeInMinsCalculator = ({
  exercise,
}: {
  exercise: ExerciseFITT;
}): Range => {
  if (exercise === ExerciseFITT.BEGINNER) {
    return {
      low: 30,
      high: 40,
    };
  } else if (exercise === ExerciseFITT.INTERMEDIATE) {
    return {
      low: 40,
      high: 60,
    };
  }
  return {
    low: 60,
    high: 90,
  };
};

interface IntensityCalculatorArgs {
  age: number;
  gender: Gender;
  rhr: number;
}
const IntensityCalculator = ({ age, gender, rhr }: IntensityCalculatorArgs) => {
  let constant = gender === Gender.MALE ? 220 : 206;
  let multiplier = gender === Gender.MALE ? 0.75 : 0.85;

  let base = constant - age - rhr;

  return Math.round(base * multiplier + rhr);
};

const FrequencyCalculator = ({
  exercise,
}: {
  exercise: ExerciseFITT;
}): Range => {
  if (exercise === ExerciseFITT.BEGINNER) {
    return {
      low: 2,
      high: 3,
    };
  } else if (exercise === ExerciseFITT.INTERMEDIATE) {
    return {
      low: 3,
      high: 4,
    };
  }
  return {
    low: 4,
    high: 6,
  };
};

interface ExerciseFITTCalculatorArgs {
  age: number;
  exercise: ExerciseFITT;
  gender: Gender;
  rhr: number;
}

const ExerciseFITTCalculator = ({
  age,
  exercise,
  gender,
  rhr,
}: ExerciseFITTCalculatorArgs): ExerciseFITTCalcRes => {
  const frequency = FrequencyCalculator({ exercise });
  const intensity = IntensityCalculator({ age, gender, rhr });
  const time = TimeInMinsCalculator({ exercise });

  return {
    frequency,
    intensity,
    time,
  };
};

export default ExerciseFITTCalculator;
