const getDressSlides = async ({ baseUrl }: { baseUrl: string; }): Promise<ArrayBuffer | undefined> => {
  return await fetch(`${baseUrl}/pdfs/DRESS_Dashboard.pdf`).then((res) =>
    res.arrayBuffer()
  );
};

export default getDressSlides;
