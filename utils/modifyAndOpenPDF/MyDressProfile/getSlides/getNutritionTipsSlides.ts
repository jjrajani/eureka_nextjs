const getNutritionTipsSlides = async ({baseUrl}: {baseUrl: string;}): Promise<ArrayBuffer | undefined> => {
  return await fetch(`${baseUrl}/pdfs/Nutrition_Tips.pdf`).then((res) =>
    res.arrayBuffer()
  );
};

export default getNutritionTipsSlides;
