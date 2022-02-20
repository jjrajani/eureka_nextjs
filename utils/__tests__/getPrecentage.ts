import getPercentage from "../getPercentage";

describe("getPercentage(partialValue: number, totalValue: number)", () => {
  it("returns the correct percent", () => {
    const testPartial = 20,
      testTotal = 10;
    const expected = 2;
    const actual = getPercentage(testPartial, testTotal);

    expect(actual).toBe(expected);
  });

  it("returns the correct percent", () => {
    const testPartial = 100,
      testTotal = 2;
    const expected = 2;
    const actual = getPercentage(testPartial, testTotal);

    expect(actual).toBe(expected);
  });

  it("returns the correct percent", () => {
    const testPartial = 200,
      testTotal = 2;
    const expected = 4;
    const actual = getPercentage(testPartial, testTotal);

    expect(actual).toBe(expected);
  });
});
