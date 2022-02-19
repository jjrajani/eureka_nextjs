import { Supplement } from "types/types";
import { MealMasteryFormState } from "types/types";

const getSupplementTypeSlides = async (
  userInput: MealMasteryFormState
): Promise<ArrayBuffer | undefined> => {
  let slides;
  switch (userInput.supplementType) {
    case Supplement.ENERGY: {
      slides = await fetch("/pdfs/Supplement_Energy.pdf").then((res) =>
        res.arrayBuffer()
      );
      break;
    }
    case Supplement.GI: {
      slides = await fetch("/pdfs/Supplement_GI.pdf").then((res) =>
        res.arrayBuffer()
      );
      break;
    }
    case Supplement.HORMONE: {
      slides = await fetch("/pdfs/Supplement_Hormone.pdf").then((res) =>
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

export default getSupplementTypeSlides;
