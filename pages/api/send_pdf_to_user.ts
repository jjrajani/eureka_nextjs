import type { NextApiRequest, NextApiResponse } from "next";
import sendUserEmail from "api/utils/google/gmail/sendEmail/sendUserEmail";
import { DRESS_PDF_FILE_NAME } from "utils/constants";
import fs from "fs";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const filePath = req.query.filePath as string;
    const email = req.query.email as string;
    const name = req.query.name as string;

    if (!filePath && !email && !name) {
      res
        .status(422)
        .json(`User Input Error: filePath, name, and email required`);
        return;
    } else if (!filePath) {
      res.status(422).json(`User Input Error: filePath required`);
      return;
    } else if (!email) {
      res.status(422).json(`User Input Error: email required`);
      return;
    } else if (!name) {
      res.status(422).json(`User Input Error: name required`);
      return;
    }

    try {
      fs.readFile(filePath, async (err, data) => {
        if (err) {
          res.status(500).json({ err });
          return;
        }
        try {
          await sendUserEmail({
            fileName: DRESS_PDF_FILE_NAME,
            file: data,
            to: { name, email },
          });
          res.status(200).json({ filePath });
        } catch (err) {
          res.status(500).json(`Error sending pdf to user: ${err}`);
        }
      });
    } catch (err) {
      res.status(500).json(`Error sending pdf to user: ${err}`);
    }
  } catch (err) {
    res.status(500).json(`something went wrong: ${err.message}`);
  }
};

export default handler;
