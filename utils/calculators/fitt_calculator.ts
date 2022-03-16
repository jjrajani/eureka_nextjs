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

const FrequencyCalculator = (exercise: ExerciseFITT) => {
  switch(exercise) {
    case ExerciseFITT.BEGINNER: {
      return "2-3x a week"
    }
    case ExerciseFITT.INTERMEDIATE: {
      return "3-4x a week"
    }
    default: {
      // ExerciseFITT.ADVANCED
      return "4-6x a week"
    }
  }
}

const IntensityCalculator = (exercise: ExerciseFITT) => {
  switch(exercise) {
    case ExerciseFITT.BEGINNER: {
      return "50% of Workout in THR Zone"
    }
    case ExerciseFITT.INTERMEDIATE: {
      return "70% of Workout in THR Zone"
    }
    default: {
      // ExerciseFITT.ADVANCED
      return "90% of workout in THR Zone"
    }
  }
}

const TimeCalculator = (exercise: ExerciseFITT) => {
  switch(exercise) {
    case ExerciseFITT.BEGINNER: {
      return "20-30 min OR 2-3x 10 min"
    }
    case ExerciseFITT.INTERMEDIATE: {
      return "30-40 min OR 3-4x 10 min"
    }
    default: {
      // ExerciseFITT.ADVANCED
      return "40-60 min"
    }
  }
}

const TypeCalculator = (exercise: ExerciseFITT) => {
  switch(exercise) {
    case ExerciseFITT.BEGINNER: {
      return "Whole Body FUNCTIONAL"
    }
    case ExerciseFITT.INTERMEDIATE: {
      return "Whole Body WEIGHT BEARING"
    }
    default: {
      // ExerciseFITT.ADVANCED
      return "Whole Body H.I.C.T."
    }
  }
}

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
  const frequency = FrequencyCalculator(exercise);
  const intensity = IntensityCalculator(exercise);
  const time = TimeCalculator(exercise);
  const type = TypeCalculator(exercise);

  return {
    strength,
    endurance,
    duration: completeWorkoutDuration,
    flexibility,
    frequency,
    intensity,
    time,
    type
  };
};

export default ExerciseFITTCalculator;
