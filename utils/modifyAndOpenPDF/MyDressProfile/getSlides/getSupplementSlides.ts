import { Supplement } from "types/types";
import { MyDressProfileFormState } from "types/types";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || process.env.NEXT_PUBLIC_VERCEL_URL;

const getSupplementTypeSlides = async (
  userInput: MyDressProfileFormState
): Promise<ArrayBuffer | undefined> => {
  let slides;
  switch (userInput.supplementType) {
    case Supplement.ENERGY: {
      slides = await fetch(
        `${BASE_URL}/pdfs/Supplement_Energy.pdf`
      ).then((res) => res.arrayBuffer());
      break;
    }
    case Supplement.GI: {
      slides = await fetch(`${BASE_URL}/pdfs/Supplement_GI.pdf`).then((res) =>
        res.arrayBuffer()
      );
      break;
    }
    case Supplement.HORMONE: {
      slides = await fetch(
        `${BASE_URL}/pdfs/Supplement_Hormone.pdf`
      ).then((res) => res.arrayBuffer());
      break;
    }
    default: {
      break;
    }
  }

  return slides;
};

export default getSupplementTypeSlides;
