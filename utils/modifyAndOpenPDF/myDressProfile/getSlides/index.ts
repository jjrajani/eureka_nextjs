import {
  MyDressProfileCalculatorResult,
  MyDressProfileFormState,
} from "types/types";
import { PDFDocument } from "pdf-lib";
import getDietTypeSlides from "./getDietTypeSlides";
import getSupplementSlides from "./getSupplementSlides";
import getRestRxSlides from "./getRestRxSlides";
import getExerciseFittSlides from "./getExerciseFittSlides";
import getFittTrackerSlides from "./getFittTrackerSlides";
import getStressSlides from "./getStressSlides";
import getDressSlides from "./getDressSlides";
import attachSlides from "../../utils/attachSlides";
import getPortionTrackerSlides from "../../utils/getPortionTrackerSlides";
import getConclusionSlides from "../../utils/getConclusionSlides";

const getMealMasterySlides = async (
  results: MyDressProfileCalculatorResult,
  userInput: MyDressProfileFormState
) => {
  const introSlides = await fetch(
    "/pdfs/Metabolic_Mastery_Intro_Slides.pdf"
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
