import {
  MyDressProfileCalculatorResult,
  MyDressProfileFormState,
} from "types/types";
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
import getConclusionSlides from "utils/modifyAndOpenPDF/utils/getConclusionSlides";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const getMealMasterySlides = async (
  results: MyDressProfileCalculatorResult,
  userInput: MyDressProfileFormState
) => {
  const introSlides = await fetch(
    `${BASE_URL}/pdfs/Metabolic_Mastery_Intro_Slides.pdf`
  ).then((res) => res.arrayBuffer());

  const pdfDoc = await PDFDocument.load(introSlides);

  // Diet Type Slide
  const dietTypeSlides = await getDietTypeSlides(userInput);
  await attachSlides(dietTypeSlides, pdfDoc);

  // Daily Portion Tracker
  const portionTrackerSlides = await getPortionTrackerSlides();
  await attachSlides(portionTrackerSlides, pdfDoc, 4);

  // Conclusion Slides
  const conclusionSlides = await getConclusionSlides();
  await attachSlides(conclusionSlides, pdfDoc);

  const restRxSlides = await getRestRxSlides(userInput);
  await attachSlides(restRxSlides, pdfDoc, 8);

  const exerciseFittSlides = await getExerciseFittSlides(userInput);
  await attachSlides(exerciseFittSlides, pdfDoc, 9);

  const fittTrackerSlides = await getFittTrackerSlides();
  await attachSlides(fittTrackerSlides, pdfDoc, 10);

  const stressSlides = await getStressSlides(userInput);
  await attachSlides(stressSlides, pdfDoc, 11);

  // Suplement Slide
  const supplementSlides = await getSupplementSlides(userInput);
  await attachSlides(supplementSlides, pdfDoc, 12);

  const dressDashboardSlides = await getDressSlides();
  await attachSlides(dressDashboardSlides, pdfDoc, 13);

  return pdfDoc;
};

export default getMealMasterySlides;
