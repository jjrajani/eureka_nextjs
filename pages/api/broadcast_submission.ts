import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";


const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const BASE_URL = req.headers.referer;
  console.log('BASE_URL', BASE_URL);
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
    await axios.get(
      `${BASE_URL}/api/send_pdf_to_user?filePath=${filePath}&name=${name}&email=${userInput.email}`
    ).catch(e => {
      console.log('Error sending PDF to user:', e.message)
    });
    const uploadedFile = await axios.get(
      `${BASE_URL}/api/save_file_to_drive?userName=${name}&filePath=${filePath}&email=${userInput.email}`
    ).catch(e => {
      console.log('Error saving file to drive:', e.message)
    });

    if (uploadedFile) {
      await axios.get(
        `${BASE_URL}/api/notify_eureka?fileId=${uploadedFile.data.fileId}&userName=${name}`
      ).catch(e => {
        console.log('Error notifying Eureka', e.message)
      });
      res.status(200).json({ filePath });
      return;
    } else {
      console.log("No Uploaded File")
      res.status(500).json(`Error Uplading File`);
      return;
    }


  } catch (error) {
    res.status(500).json(`Error generating pdf: ${error?.message}`);
    return;
  }
};

export default handler;
