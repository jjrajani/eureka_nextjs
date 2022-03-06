import uploadFile from "api/utils/google/drive/uploadFile";
import generateUserUrl from "api/utils/google/drive/generateUserUrl";
import validator from "validator";

export default async (req, res) => {
  console.log("req", req.query.email);
  const email = req.query.email;
  if (email) {
    const emailValid = validator.isEmail(email);
    if (emailValid) {
      const fileId = await uploadFile();
      // TODO: Email file to user;
      // const userViewUrl = await generateUserUrl(req.query.email, fileId);
    }

    res.status(200).json({ userViewUrl });
  } else {
    res.status(405).json({ error: "Email address required" });
  }
};
