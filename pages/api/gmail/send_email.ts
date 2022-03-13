import sendUserEmail from "api/utils/google/gmail/sendUserEmail/sendUserEmail";
import validator from "validator";

export default async (req, res) => {
  const email = req.query.email;
  if (email) {
    const emailValid = validator.isEmail(email);
    if (emailValid) {
      const emailRes = await sendUserEmail(email);

      if (emailRes.id) {
        res.status(200).json({ success: "Yay! Email sent" });
      } else {
        res.status(500).json({ error: "Internal Server Error" });
      }
    } else {
      res.status(422).json({ error: `Email ${email} invalid` });
    }
  } else {
    res.status(405).json({ error: "Email address required" });
  }
};
