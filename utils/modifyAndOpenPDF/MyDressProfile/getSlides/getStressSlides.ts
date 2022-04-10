import { StressStage } from "types/types";
import { MyDressProfileFormState } from "types/types";

interface GetExerciesFittSlidesArgs {
  baseUrl: string;
  userInput: MyDressProfileFormState;
}

const getExerciesFittSlides = async ({
  baseUrl,
  userInput
}: GetExerciesFittSlidesArgs): Promise<ArrayBuffer | undefined> => {
  let slides;
  switch (userInput.stress) {
    case StressStage.COMPENSATORY: {
      slides = await fetch(
        `${baseUrl}/pdfs/Stress_Compensatory.pdf`
      ).then((res) => res.arrayBuffer());
      break;
    }
    case StressStage.ACUTE: {
      slides = await fetch(`${baseUrl}/pdfs/Stress_Acute.pdf`).then((res) =>
        res.arrayBuffer()
      );
      break;
    }
    case StressStage.EXHAUSTION: {
      slides = await fetch(
        `${baseUrl}/pdfs/Stress_Exhaustion.pdf`
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
