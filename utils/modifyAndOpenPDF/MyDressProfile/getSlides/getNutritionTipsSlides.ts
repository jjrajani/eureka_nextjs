const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || process.env.NEXT_PUBLIC_VERCEL_URL;

const getNutritionTipsSlides = async (): Promise<ArrayBuffer | undefined> => {
  return await fetch(`${BASE_URL}/pdfs/Nutrition_Tips.pdf`).then((res) =>
    res.arrayBuffer()
  );
};

export default getNutritionTipsSlides;
