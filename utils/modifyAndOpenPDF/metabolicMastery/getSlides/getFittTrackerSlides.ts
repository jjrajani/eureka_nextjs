const getFittTrackerSlides = async (): Promise<ArrayBuffer | undefined> => {
  return await fetch("/pdfs/Daily_FITT_Tracker.pdf").then((res) =>
    res.arrayBuffer()
  );
};

export default getFittTrackerSlides;
