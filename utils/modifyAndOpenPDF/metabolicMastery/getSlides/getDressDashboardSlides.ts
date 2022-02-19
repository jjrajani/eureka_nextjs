const getDressDashboardSlides = async (): Promise<ArrayBuffer | undefined> => {
  return await fetch("/pdfs/DRESS_Dashboard.pdf").then((res) =>
    res.arrayBuffer()
  );
};

export default getDressDashboardSlides;
