import { DietPreference } from "types/types";
import { MyDressProfileFormState } from "types/types";
import { PDFDocument } from "pdf-lib";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || process.env.NEXT_PUBLIC_VERCEL_URL;

const getDietTypeSlides = async (
  userInput: MyDressProfileFormState
): Promise<ArrayBuffer | undefined> => {
  let slides;
  switch (userInput.dietPreference) {
    case DietPreference.PROTIEN: {
      slides = await fetch(
        `${BASE_URL}/pdfs/Meal_Type_Protein.pdf`
      ).then((res) => res.arrayBuffer());
      break;
    }
    case DietPreference.CARB: {
      slides = await fetch(`${BASE_URL}/pdfs/Meal_Type_Carb.pdf`).then((res) =>
        res.arrayBuffer()
      );
      break;
    }
    case DietPreference.MIXED: {
      slides = await fetch(`${BASE_URL}/pdfs/Meal_Type_Mixed.pdf`).then((res) =>
        res.arrayBuffer()
      );
      break;
    }
    default: {
      break;
    }
  }

  return slides;
};

export default getDietTypeSlides;
