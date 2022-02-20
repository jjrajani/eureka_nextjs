import {
  ExerciseFITT,
  DietPreference,
  ExerciseFITTCalcRes,
  PercentDuration,
} from "types/types";
import getPercentage from "utils/getPercentage";

const getWorkoutDuration = (exercise: ExerciseFITT) => {
  // Default assumes ExerciseFITT.BEGINNER;
  let workoutDuration = 30;
  switch (exercise) {
    case ExerciseFITT.BEGINNER: {
      workoutDuration = 30;
      break;
    }
    case ExerciseFITT.INTERMEDIATE: {
      workoutDuration = 40;
      break;
    }
    case ExerciseFITT.ADVANCED: {
      workoutDuration = 60;
      break;
    }
  }

  return workoutDuration;
};

interface InnerCalculatorArgs {
  completeWorkoutDuration: number;
  dietPreference: DietPreference;
}

const EnduranceCalculator = ({
  completeWorkoutDuration,
  dietPreference,
}: InnerCalculatorArgs): PercentDuration => {
  let endurancePercent = 30;
  switch (dietPreference) {
    case DietPreference.PROTIEN: {
      endurancePercent = 30;
      break;
    }
    case DietPreference.CARB: {
      endurancePercent = 50;
      break;
    }
    case DietPreference.MIXED: {
      endurancePercent = 40;
      break;
    }
    default: {
      break;
    }
  }

  return {
    percent: endurancePercent,
    duration: Math.round(
      getPercentage(endurancePercent, completeWorkoutDuration)
    ),
  };
};

const FlexibilityCalculator = ({
  completeWorkoutDuration,
  dietPreference,
}: InnerCalculatorArgs): PercentDuration => {
  let flexibilityPercent = 20;
  switch (dietPreference) {
    case DietPreference.PROTIEN: {
      flexibilityPercent = 20;
      break;
    }
    case DietPreference.CARB: {
      flexibilityPercent = 20;
      break;
    }
    case DietPreference.MIXED: {
      flexibilityPercent = 20;
      break;
    }
    default: {
      break;
    }
  }

  return {
    percent: flexibilityPercent,
    duration: Math.round(getPercentage(20, completeWorkoutDuration)),
  };
};

const StrengthCalculator = ({
  completeWorkoutDuration,
  dietPreference,
}: InnerCalculatorArgs): PercentDuration => {
  // Default assumes Protien
  let strengthPercent: number = 50;

  switch (dietPreference) {
    case DietPreference.PROTIEN: {
      strengthPercent = 50;
      break;
    }
    case DietPreference.CARB: {
      strengthPercent = 30;

      break;
    }
    case DietPreference.MIXED: {
      strengthPercent = 40;
      break;
    }
    default: {
      break;
    }
  }

  return {
    percent: strengthPercent,
    duration: Math.round(
      getPercentage(strengthPercent, completeWorkoutDuration)
    ),
  };
};

interface ExerciseFITTCalculatorArgs {
  exercise: ExerciseFITT;
  dietPreference: DietPreference;
}

const ExerciseFITTCalculator = ({
  exercise,
  dietPreference,
}: ExerciseFITTCalculatorArgs): ExerciseFITTCalcRes => {
  let completeWorkoutDuration = getWorkoutDuration(exercise);

  const strength = StrengthCalculator({
    completeWorkoutDuration,
    dietPreference,
  });
  const endurance = EnduranceCalculator({
    completeWorkoutDuration,
    dietPreference,
  });
  const flexibility = FlexibilityCalculator({
    completeWorkoutDuration,
    dietPreference,
  });

  return {
    strength,
    endurance,
    flexibility,
  };
};

export default ExerciseFITTCalculator;
