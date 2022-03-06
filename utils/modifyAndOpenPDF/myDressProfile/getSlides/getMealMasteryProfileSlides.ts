import { Supplement } from "types/types";
import { MyDressProfileFormState } from "types/types";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const getMealMasteryProfileSlides = async (
  userInput: MyDressProfileFormState
): Promise<ArrayBuffer | undefined> => {
  let slides;
  switch (userInput.supplementType) {
    case Supplement.ENERGY: {
      slides = await fetch(
        `${BASE_URL}/pdfs/Meal_Mastery_Profile_Energy.pdf`
      ).then((res) => res.arrayBuffer());
      break;
    }
    case Supplement.GI: {
      slides = await fetch(
        `${BASE_URL}/pdfs/Meal_Mastery_Profile_GI.pdf`
      ).then((res) => res.arrayBuffer());
      break;
    }
    case Supplement.HORMONE: {
      slides = await fetch(
        `${BASE_URL}/pdfs/Meal_Mastery_Profile_Hormone.pdf`
      ).then((res) => res.arrayBuffer());
      break;
    }
    default: {
      break;
    }
  }

  return slides;
};

export default getMealMasteryProfileSlides;
