import { ExerciseFITT } from "types/types";
import { MyDressProfileFormState } from "types/types";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const getExerciesFittSlides = async (
  userInput: MyDressProfileFormState
): Promise<ArrayBuffer | undefined> => {
  let slides;
  switch (userInput.exerciseFitt) {
    case ExerciseFITT.BEGINNER: {
      slides = await fetch(`${BASE_URL}/pdfs/FITT_Beginner.pdf`).then((res) =>
        res.arrayBuffer()
      );
      break;
    }
    case ExerciseFITT.INTERMEDIATE: {
      slides = await fetch(
        `${BASE_URL}/pdfs/FITT_Intermediate.pdf`
      ).then((res) => res.arrayBuffer());
      break;
    }
    case ExerciseFITT.ADVANCED: {
      slides = await fetch(`${BASE_URL}/pdfs/FITT_Advanced.pdf`).then((res) =>
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

export default getExerciesFittSlides;
