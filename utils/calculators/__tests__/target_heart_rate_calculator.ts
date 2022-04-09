import { Gender } from "types/types";
import TargetHeartRateCalculator from "utils/calculators/target_heart_rate_calculator";

describe("TargetHeartRateCalculator({age: number, fittRating: ExerciseFITT, gender: Gender, rhr: number})", () => {
  it("returns the correct result for females", () => {
    const test = {
      age: 45,
      gender: Gender.FEMALE,
      rhr: 72,
    };
    const expected = 148;
    const actual = TargetHeartRateCalculator(test);

    expect(actual).toBe(expected);
  });

  it("returns the correct result for males", () => {
    const test = {
      age: 45,
      gender: Gender.MALE,
      rhr: 72,
    };
    const expected = 149;
    const actual = TargetHeartRateCalculator(test);

    expect(actual).toBe(expected);
  });
});
