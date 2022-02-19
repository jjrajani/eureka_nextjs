import {
  Gender,
  Activity,
  Goal,
  DietPreference,
  Supplement,
} from "types/types";
import { MealMasteryCalculatorResult, MealMasteryFormState } from "types/types";
import { PDFDocument } from "pdf-lib";
import getDietTypeSlides from "./getDietTypeSlides";
import getSupplementSlides from "./getSupplementSlides";
import getMealMasteryProfileSlides from "./getMealMasteryProfileSlides";
import attachSlides from "../../utils/attachSlides";
import getPortionTrackerSlides from "../../utils/getPortionTrackerSlides";
import getConclusionSlides from "../../utils/getConclusionSlides";

const getMealMasterySlides = async (
  results: MealMasteryCalculatorResult,
  userInput: MealMasteryFormState
) => {
  console.log("results", results);
  console.log("userInput", userInput);

  const introSlides = await fetch(
    "/pdfs/Meal_Mastery_Intro_Slides.pdf"
  ).then((res) => res.arrayBuffer());

  const pdfDoc = await PDFDocument.load(introSlides);

  // Diet Type Slide
  const dietTypeSlides = await getDietTypeSlides(userInput);
  await attachSlides(dietTypeSlides, pdfDoc);

  // Daily Portion Tracker
  const portionTrackerSlides = await getPortionTrackerSlides();
  await attachSlides(portionTrackerSlides, pdfDoc, 4);

  // Suplement Slide
  const supplementSlides = await getSupplementSlides(userInput);
  await attachSlides(supplementSlides, pdfDoc);

  // Meal Master Profile
  const mealMasterySlides = await getMealMasteryProfileSlides(userInput);
  await attachSlides(mealMasterySlides, pdfDoc);

  // Conclusion Slides
  const conclusionSlides = await getConclusionSlides();
  await attachSlides(conclusionSlides, pdfDoc);
  getConclusionSlides;

  return pdfDoc;
};

export default getMealMasterySlides;
