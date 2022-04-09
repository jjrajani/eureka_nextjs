import { StressStage } from "types/types";
import { MyDressProfileFormState } from "types/types";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || process.env.NEXT_PUBLIC_VERCEL_URL;

const getExerciesFittSlides = async (
  userInput: MyDressProfileFormState
): Promise<ArrayBuffer | undefined> => {
  let slides;
  switch (userInput.stress) {
    case StressStage.COMPENSATORY: {
      slides = await fetch(
        `${BASE_URL}/pdfs/Stress_Compensatory.pdf`
      ).then((res) => res.arrayBuffer());
      break;
    }
    case StressStage.ACUTE: {
      slides = await fetch(`${BASE_URL}/pdfs/Stress_Acute.pdf`).then((res) =>
        res.arrayBuffer()
      );
      break;
    }
    case StressStage.EXHAUSTION: {
      slides = await fetch(
        `${BASE_URL}/pdfs/Stress_Exhaustion.pdf`
      ).then((res) => res.arrayBuffer());
      break;
    }
    default: {
      break;
    }
  }

  return slides;
};

export default getExerciesFittSlides;
