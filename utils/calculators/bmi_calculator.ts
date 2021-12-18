const feetToIn = (feet: number): number => feet * 12;
const heightToIn = (feet: number, IN: number): number => {
  let feetInInches = feetToIn(feet),
    inches = IN + feetInInches;

  return inches;
};

interface Height {
  IN: number;
  ft: number;
}

const StandardBMICalculator = (lbs: number, height: Height): string => {
  const { IN, ft } = height;

  let inches = heightToIn(ft, IN);

  inches = inches * inches;

  let BMI = 703 * (lbs / inches);

  return BMI.toFixed(2);
};

const BMICalculator = (lbs: number, height: Height): string => {
  let standard = StandardBMICalculator(lbs, height);

  return standard;
};

export default BMICalculator;
