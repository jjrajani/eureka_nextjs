const getConclusionSlides = async (): Promise<ArrayBuffer | undefined> => {
  return await fetch("/pdfs/Conclusion_Slides.pdf").then((res) =>
    res.arrayBuffer()
  );
};

export default getConclusionSlides;
