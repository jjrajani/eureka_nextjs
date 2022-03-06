import uploadFile from "api/utils/google/drive/uploadFile";
import generateUserUrl from "api/utils/google/drive/generateUserUrl";

export default async (req, res) => {
  console.log("req", req.query.email);
  if (req.query.email) {
    //TODO: Validate is valid email
    const fileId = await uploadFile();
    const userViewUrl = await generateUserUrl(req.query.email, fileId);

    res.status(200).json({ userViewUrl });
  } else {
    res.status(405).json({ error: "Email address required" });
  }
};
