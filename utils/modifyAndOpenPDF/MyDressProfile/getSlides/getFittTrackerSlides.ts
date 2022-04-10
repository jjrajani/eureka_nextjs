const getFittTrackerSlides = async ({
  baseUrl
}: {
  baseUrl: string
}): Promise<ArrayBuffer | undefined> => {
  return await fetch(`${baseUrl}/pdfs/Daily_FITT_Tracker.pdf`).then((res) =>
    res.arrayBuffer()
  );
};

export default getFittTrackerSlides;
