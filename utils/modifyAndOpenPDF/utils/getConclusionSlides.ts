const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || process.env.NEXT_PUBLIC_VERCEL_URL;

const getConclusionSlides = async (): Promise<ArrayBuffer | undefined> => {
  return await fetch(`${BASE_URL}/pdfs/Conclusion_Slides.pdf`).then((res) =>
    res.arrayBuffer()
  );
};

export default getConclusionSlides;
