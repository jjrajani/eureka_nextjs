const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || process.env.NEXT_PUBLIC_VERCEL_URL;

const getPortionTrackerSlides = async (): Promise<ArrayBuffer | undefined> => {
  return await fetch(`${BASE_URL}/pdfs/Daily_Portion_Tracker.pdf`).then((res) =>
    res.arrayBuffer()
  );
};

export default getPortionTrackerSlides;
