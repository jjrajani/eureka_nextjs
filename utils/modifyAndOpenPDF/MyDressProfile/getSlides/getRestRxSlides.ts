import { RestRx } from "types/types";
import { MyDressProfileFormState } from "types/types";

interface GetMealMasteryProfileSlidesArgs {
  baseUrl: string;
  userInput: MyDressProfileFormState
}

const getMealMasteryProfileSlides = async ({
  baseUrl,
  userInput
}: GetMealMasteryProfileSlidesArgs): Promise<ArrayBuffer | undefined> => {
  let slides;
  switch (userInput.restRx) {
    case RestRx.POOR: {
      slides = await fetch(`${baseUrl}/pdfs/Rest_Rx_Poor.pdf`).then((res) =>
        res.arrayBuffer()
      );
      break;
    }
    case RestRx.FAIR: {
      slides = await fetch(`${baseUrl}/pdfs/Rest_Rx_Fair.pdf`).then((res) =>
        res.arrayBuffer()
      );
      break;
    }
    case RestRx.GOOD: {
      slides = await fetch(`${baseUrl}/pdfs/Rest_Rx_Good.pdf`).then((res) =>
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

export default getMealMasteryProfileSlides;
