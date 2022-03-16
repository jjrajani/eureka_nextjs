import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const filePath = req?.query?.filePath as string;
  const userInput = JSON.parse(req.query.userInput as string);
  const name = `${userInput.first} ${userInput.last}`.trim();

  if (!filePath) {
    res
      .status(422)
      .json(`Error broadcasting submission: filePath param required`);
    return;
  }

  try {
    axios.get(
      `${BASE_URL}/api/send_pdf_to_user?filePath=${filePath}&name=${name}&email=${userInput.email}`
    );
    const uploadedFile = await axios.get(
      `${BASE_URL}/api/save_file_to_drive?userName=${name}&filePath=${filePath}`
    );
    axios.get(
      `${BASE_URL}/api/notify_erueka?fileId=${uploadedFile.data.fileId}&userName=${name}`
    );
    res.status(200).json({ filePath });
    return;
  } catch (error) {
    res.status(500).json(`Error generating pdf: ${error?.message}`);
    return;
  }
};

export default handler;
