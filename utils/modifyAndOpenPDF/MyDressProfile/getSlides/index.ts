import { MyDressProfileFormState } from "types/types";
import { PDFDocument } from "pdf-lib";
import getDietTypeSlides from "utils/modifyAndOpenPDF/MyDressProfile/getSlides/getDietTypeSlides";
import getSupplementSlides from "utils/modifyAndOpenPDF/MyDressProfile/getSlides/getSupplementSlides";
import getRestRxSlides from "utils/modifyAndOpenPDF/MyDressProfile/getSlides/getRestRxSlides";
import getExerciseFittSlides from "utils/modifyAndOpenPDF/MyDressProfile/getSlides/getExerciseFittSlides";
import getFittTrackerSlides from "utils/modifyAndOpenPDF/MyDressProfile/getSlides/getFittTrackerSlides";
import getStressSlides from "utils/modifyAndOpenPDF/MyDressProfile/getSlides/getStressSlides";
import getDressSlides from "utils/modifyAndOpenPDF/MyDressProfile/getSlides/getDressSlides";
import attachSlides from "utils/modifyAndOpenPDF/utils/attachSlides";
import getPortionTrackerSlides from "utils/modifyAndOpenPDF/utils/getPortionTrackerSlides";
import getNutritionTipsSlides from "utils/modifyAndOpenPDF/MyDressProfile/getSlides/getNutritionTipsSlides";

interface GetMealMasterySlidesArgs {
  baseUrl: string;
  userInput: MyDressProfileFormState;
}

const getMealMasterySlides = async ({
  baseUrl,
  userInput,
}: GetMealMasterySlidesArgs) => {
  const introSlides = await fetch(
    `${baseUrl}/pdfs/DRESS_Intro_Slides.pdf`
  ).then((res) => res.arrayBuffer());

  const pdfDoc = await PDFDocument.load(introSlides);

  // Diet Type Slide
  const dietTypeSlides = await getDietTypeSlides({ baseUrl, userInput });
  await attachSlides(dietTypeSlides, pdfDoc);

  // Daily Portion Tracker
  const portionTrackerSlides = await getPortionTrackerSlides({ baseUrl });
  await attachSlides(portionTrackerSlides, pdfDoc, 4);

  // Nutrition Tips
  const nutritionTipsSlides = await getNutritionTipsSlides({ baseUrl });
  await attachSlides(nutritionTipsSlides, pdfDoc);

  // Conclusion Slides
  // const conclusionSlides = await getConclusionSlides();
  // await attachSlides(conclusionSlides, pdfDoc);

  // Rest Rx Slide
  const restRxSlides = await getRestRxSlides({ baseUrl, userInput });
  await attachSlides(restRxSlides, pdfDoc);

  // Exercies FITT Slide
  const exerciseFittSlides = await getExerciseFittSlides({ baseUrl, userInput });
  await attachSlides(exerciseFittSlides, pdfDoc);

  // FITT Tracker Slide
  const fittTrackerSlides = await getFittTrackerSlides({ baseUrl });
  await attachSlides(fittTrackerSlides, pdfDoc);

  // Stress Slide
  const stressSlides = await getStressSlides({ baseUrl, userInput });
  await attachSlides(stressSlides, pdfDoc);

  // Suplement Slide
  const supplementSlides = await getSupplementSlides({ baseUrl, userInput });
  await attachSlides(supplementSlides, pdfDoc);

  const dressDashboardSlides = await getDressSlides({ baseUrl });
  await attachSlides(dressDashboardSlides, pdfDoc);

  return pdfDoc;
};

export default getMealMasterySlides;
