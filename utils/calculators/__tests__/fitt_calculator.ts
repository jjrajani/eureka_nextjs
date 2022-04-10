import { ExerciseFITT, DietPreference, ExerciseFITTCalcRes } from "types/types";
import ExerciseFITTCalculator from "utils/calculators/fitt_calculator";

describe("ExerciseFITTCalculator(exercise: ExerciseFITT, dietPreference: DietPreference)", () => {
  it("returns the correct result for BEGINNER PROTIEN", () => {
    const exercise = ExerciseFITT.BEGINNER;
    const dietPreference = DietPreference.PROTIEN;

    const expected: ExerciseFITTCalcRes = {
      strength: {
        percent: 50,
        duration: 15,
      },
      duration: 30,
      endurance: {
        percent: 30,
        duration: 9,
      },
      flexibility: {
        percent: 20,
        duration: 6,
      },
      frequency: "2-3x a week",
      intensity: "50% of Workout in THR Zone",
      time: "20-30 min OR 2-3x 10 min",
      type: "Whole Body FUNCTIONAL",
    };

    const actual = ExerciseFITTCalculator({ exercise, dietPreference });
    expect(actual).toStrictEqual(expected);
  });
  it("returns the correct result for BEGINNER CARB", () => {
    const exercise = ExerciseFITT.BEGINNER;
    const dietPreference = DietPreference.CARB;

    const expected: ExerciseFITTCalcRes = {
      strength: {
        percent: 30,
        duration: 9,
      },
      duration: 30,
      endurance: {
        percent: 50,
        duration: 15,
      },
      flexibility: {
        percent: 20,
        duration: 6,
      },
      frequency: "2-3x a week",
      intensity: "50% of Workout in THR Zone",
      time: "20-30 min OR 2-3x 10 min",
      type: "Whole Body FUNCTIONAL",
    };

    const actual = ExerciseFITTCalculator({ exercise, dietPreference });
    expect(actual).toStrictEqual(expected);
  });
  it("returns the correct result for BEGINNER MIXED", () => {
    const exercise = ExerciseFITT.BEGINNER;
    const dietPreference = DietPreference.MIXED;

    const expected: ExerciseFITTCalcRes = {
      strength: {
        percent: 40,
        duration: 12,
      },
      duration: 30,
      endurance: {
        percent: 40,
        duration: 12,
      },
      flexibility: {
        percent: 20,
        duration: 6,
      },
      frequency: "2-3x a week",
      intensity: "50% of Workout in THR Zone",
      time: "20-30 min OR 2-3x 10 min",
      type: "Whole Body FUNCTIONAL",
    };

    const actual = ExerciseFITTCalculator({ exercise, dietPreference });
    expect(actual).toStrictEqual(expected);
  });

  it("returns the correct result for INTERMEDIATE PROTIEN", () => {
    const exercise = ExerciseFITT.INTERMEDIATE;
    const dietPreference = DietPreference.PROTIEN;

    const expected: ExerciseFITTCalcRes = {
      strength: {
        percent: 50,
        duration: 20,
      },
      duration: 40,
      endurance: {
        percent: 30,
        duration: 12,
      },
      flexibility: {
        percent: 20,
        duration: 8,
      },
      frequency: "3-4x a week",
      intensity: "70% of Workout in THR Zone",
      time: "30-40 min OR 3-4x 10 min",
      type: "Whole Body WEIGHT BEARING",
    };

    const actual = ExerciseFITTCalculator({ exercise, dietPreference });
    expect(actual).toStrictEqual(expected);
  });
  it("returns the correct result for INTERMEDIATE CARB", () => {
    const exercise = ExerciseFITT.INTERMEDIATE;
    const dietPreference = DietPreference.CARB;

    const expected: ExerciseFITTCalcRes = {
      strength: {
        percent: 30,
        duration: 12,
      },
      duration: 40,
      endurance: {
        percent: 50,
        duration: 20,
      },
      flexibility: {
        percent: 20,
        duration: 8,
      },
      frequency: "3-4x a week",
      intensity: "70% of Workout in THR Zone",
      time: "30-40 min OR 3-4x 10 min",
      type: "Whole Body WEIGHT BEARING",
    };

    const actual = ExerciseFITTCalculator({ exercise, dietPreference });
    expect(actual).toStrictEqual(expected);
  });
  it("returns the correct result for INTERMEDIATE MIXED", () => {
    const exercise = ExerciseFITT.INTERMEDIATE;
    const dietPreference = DietPreference.MIXED;

    const expected: ExerciseFITTCalcRes = {
      strength: {
        percent: 40,
        duration: 16,
      },
      duration: 40,
      endurance: {
        percent: 40,
        duration: 16,
      },
      flexibility: {
        percent: 20,
        duration: 8,
      },
      frequency: "3-4x a week",
      intensity: "70% of Workout in THR Zone",
      time: "30-40 min OR 3-4x 10 min",
      type: "Whole Body WEIGHT BEARING",
    };

    const actual = ExerciseFITTCalculator({ exercise, dietPreference });
    expect(actual).toStrictEqual(expected);
  });

  it("returns the correct result for ADVANCED PROTIEN", () => {
    const exercise = ExerciseFITT.ADVANCED;
    const dietPreference = DietPreference.PROTIEN;

    const expected: ExerciseFITTCalcRes = {
      strength: {
        percent: 50,
        duration: 30,
      },
      duration: 60,
      endurance: {
        percent: 30,
        duration: 18,
      },
      flexibility: {
        percent: 20,
        duration: 12,
      },
      frequency: "4-6x a week",
      intensity: "90% of workout in THR Zone",
      time: "40-60 min",
      type: "Whole Body H.I.C.T.",
    };

    const actual = ExerciseFITTCalculator({ exercise, dietPreference });
    expect(actual).toStrictEqual(expected);
  });
  it("returns the correct result for ADVANCED CARB", () => {
    const exercise = ExerciseFITT.ADVANCED;
    const dietPreference = DietPreference.CARB;

    const expected: ExerciseFITTCalcRes = {
      strength: {
        percent: 30,
        duration: 18,
      },
      duration: 60,
      endurance: {
        percent: 50,
        duration: 30,
      },
      flexibility: {
        percent: 20,
        duration: 12,
      },
      frequency: "4-6x a week",
      intensity: "90% of workout in THR Zone",
      time: "40-60 min",
      type: "Whole Body H.I.C.T.",
    };

    const actual = ExerciseFITTCalculator({ exercise, dietPreference });
    expect(actual).toStrictEqual(expected);
  });
  it("returns the correct result for ADVANCED MIXED", () => {
    const exercise = ExerciseFITT.ADVANCED;
    const dietPreference = DietPreference.MIXED;

    const expected: ExerciseFITTCalcRes = {
      strength: {
        percent: 40,
        duration: 24,
      },
      duration: 60,
      endurance: {
        percent: 40,
        duration: 24,
      },
      flexibility: {
        percent: 20,
        duration: 12,
      },
      frequency: "4-6x a week",
      intensity: "90% of workout in THR Zone",
      time: "40-60 min",
      type: "Whole Body H.I.C.T.",
    };

    const actual = ExerciseFITTCalculator({ exercise, dietPreference });
    expect(actual).toStrictEqual(expected);
  });
});
