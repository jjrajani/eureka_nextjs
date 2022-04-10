const getPortionTrackerSlides = async ({baseUrl}: {baseUrl: string}): Promise<ArrayBuffer | undefined> => {
  return await fetch(`${baseUrl}/pdfs/Daily_Portion_Tracker.pdf`).then((res) =>
    res.arrayBuffer()
  );
};

export default getPortionTrackerSlides;
