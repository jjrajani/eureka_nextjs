import { Supplement } from "types/types";
import { MealMasteryFormState } from "types/types";

const getMealMasteryProfileSlides = async (
  userInput: MealMasteryFormState
): Promise<ArrayBuffer | undefined> => {
  let slides;
  switch (userInput.supplementType) {
    case Supplement.ENERGY: {
      slides = await fetch(
        "/pdfs/Meal_Mastery_Profile_Energy.pdf"
      ).then((res) => res.arrayBuffer());
      break;
    }
    case Supplement.GI: {
      slides = await fetch("/pdfs/Meal_Mastery_Profile_GI.pdf").then((res) =>
        res.arrayBuffer()
      );
      break;
    }
    case Supplement.HORMONE: {
      slides = await fetch(
        "/pdfs/Meal_Mastery_Profile_Hormone.pdf"
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
