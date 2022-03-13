import type { NextApiRequest, NextApiResponse } from "next";
import getFolder from "api/utils/google/drive/getFolder";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const dressFolder = await getFolder("DRESS RESULTS");
  const userFolder = await getFolder("Jenna Rajani");

  res.status(200).json({ dressFolder, userFolder });
  // res.status(200).json({ success: "Commented out: Files not deleted" });
};
