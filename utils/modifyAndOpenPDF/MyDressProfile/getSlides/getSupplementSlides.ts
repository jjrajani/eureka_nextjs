import { Supplement } from "types/types";
import { MyDressProfileFormState } from "types/types";

interface GetSupplementTypeSlidesArgs {
  baseUrl: string;
  userInput: MyDressProfileFormState;
}

const getSupplementTypeSlides = async ({
  baseUrl,
  userInput
}: GetSupplementTypeSlidesArgs): Promise<ArrayBuffer | undefined> => {
  let slides;
  switch (userInput.supplementType) {
    case Supplement.ENERGY: {
      slides = await fetch(
        `${baseUrl}/pdfs/Supplement_Energy.pdf`
      ).then((res) => res.arrayBuffer());
      break;
    }
    case Supplement.GI: {
      slides = await fetch(`${baseUrl}/pdfs/Supplement_GI.pdf`).then((res) =>
        res.arrayBuffer()
      );
      break;
    }
    case Supplement.HORMONE: {
      slides = await fetch(
        `${baseUrl}/pdfs/Supplement_Hormone.pdf`
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
