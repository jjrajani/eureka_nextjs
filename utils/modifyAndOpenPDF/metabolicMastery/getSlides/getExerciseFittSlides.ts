import { ExerciseFITT } from "types/types";
import { MetabolicMasteryFormState } from "types/types";

const getExerciesFittSlides = async (
  userInput: MetabolicMasteryFormState
): Promise<ArrayBuffer | undefined> => {
  let slides;
  switch (userInput.exerciseFitt) {
    case ExerciseFITT.BEGINNER: {
      slides = await fetch("/pdfs/FITT_Beginner.pdf").then((res) =>
        res.arrayBuffer()
      );
      break;
    }
    case ExerciseFITT.INTERMEDIATE: {
      slides = await fetch("/pdfs/FITT_Intermediate.pdf").then((res) =>
        res.arrayBuffer()
      );
      break;
    }
    case ExerciseFITT.ADVANCED: {
      slides = await fetch("/pdfs/FITT_Advanced.pdf").then((res) =>
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
