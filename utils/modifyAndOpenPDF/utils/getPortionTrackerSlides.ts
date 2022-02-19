const getPortionTrackerSlides = async (): Promise<ArrayBuffer | undefined> => {
  return await fetch("/pdfs/Daily_Portion_Tracker.pdf").then((res) =>
    res.arrayBuffer()
  );
};

export default getPortionTrackerSlides;
