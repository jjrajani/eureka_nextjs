import { ExerciseFITT } from "types/types";
import { MyDressProfileFormState } from "types/types";

interface GetExerciesFittSlidesArgs {
  baseUrl: string,
  userInput: MyDressProfileFormState
}

const getExerciesFittSlides = async ({
  baseUrl,
  userInput
}: GetExerciesFittSlidesArgs): Promise<ArrayBuffer | undefined> => {
  let slides;
  switch (userInput.exerciseFitt) {
    case ExerciseFITT.BEGINNER: {
      slides = await fetch(`${baseUrl}/pdfs/FITT_Beginner.pdf`).then((res) =>
        res.arrayBuffer()
      );
      break;
    }
    case ExerciseFITT.INTERMEDIATE: {
      slides = await fetch(
        `${baseUrl}/pdfs/FITT_Intermediate.pdf`
      ).then((res) => res.arrayBuffer());
      break;
    }
    case ExerciseFITT.ADVANCED: {
      slides = await fetch(`${baseUrl}/pdfs/FITT_Advanced.pdf`).then((res) =>
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
