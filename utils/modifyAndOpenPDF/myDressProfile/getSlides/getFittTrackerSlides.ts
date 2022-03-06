const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const getFittTrackerSlides = async (): Promise<ArrayBuffer | undefined> => {
  return await fetch(`${BASE_URL}/pdfs/Daily_FITT_Tracker.pdf`).then((res) =>
    res.arrayBuffer()
  );
};

export default getFittTrackerSlides;
