import { ExerciseFITT, DietPreference, ExerciseFITTCalcRes } from "types/types";
import ExerciseFITTCalculator from "../fitt_calculator";

describe.only("ExerciseFITTCalculator(exercise: ExerciseFITT, dietPreference: DietPreference)", () => {
  it("returns the correct result for BEGINNER PROTIEN", () => {
    const exercise = ExerciseFITT.BEGINNER;
    const dietPreference = DietPreference.PROTIEN;

    const expected: ExerciseFITTCalcRes = {
      strength: {
        percent: 50,
        duration: 15,
      },
      endurance: {
        percent: 30,
        duration: 9,
      },
      flexibility: {
        percent: 20,
        duration: 6,
      },
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
      endurance: {
        percent: 50,
        duration: 15,
      },
      flexibility: {
        percent: 20,
        duration: 6,
      },
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
      endurance: {
        percent: 40,
        duration: 12,
      },
      flexibility: {
        percent: 20,
        duration: 6,
      },
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
      endurance: {
        percent: 30,
        duration: 12,
      },
      flexibility: {
        percent: 20,
        duration: 8,
      },
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
      endurance: {
        percent: 50,
        duration: 20,
      },
      flexibility: {
        percent: 20,
        duration: 8,
      },
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
      endurance: {
        percent: 40,
        duration: 16,
      },
      flexibility: {
        percent: 20,
        duration: 8,
      },
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
      endurance: {
        percent: 30,
        duration: 18,
      },
      flexibility: {
        percent: 20,
        duration: 12,
      },
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
      endurance: {
        percent: 50,
        duration: 30,
      },
      flexibility: {
        percent: 20,
        duration: 12,
      },
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
      endurance: {
        percent: 40,
        duration: 24,
      },
      flexibility: {
        percent: 20,
        duration: 12,
      },
    };

    const actual = ExerciseFITTCalculator({ exercise, dietPreference });
    expect(actual).toStrictEqual(expected);
  });
});
