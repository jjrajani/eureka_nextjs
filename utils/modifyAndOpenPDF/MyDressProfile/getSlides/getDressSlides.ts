const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || process.env.NEXT_PUBLIC_VERCEL_URL;

const getDressSlides = async (): Promise<ArrayBuffer | undefined> => {
  return await fetch(`${BASE_URL}/pdfs/DRESS_Dashboard.pdf`).then((res) =>
    res.arrayBuffer()
  );
};

export default getDressSlides;
