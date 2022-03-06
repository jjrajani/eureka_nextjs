import sendEmail from "api/utils/google/gmail/sendEmail";

export default async (req, res) => {
  if (req.query.email) {
    //TODO: Validate is valid email
    const email = await sendEmail(req.query.email);
    console.log("email", email);
    if (email.id) {
      res.status(200).json({ success: "Yay! Email sent" });
    } else {
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Email address required" });
  }
};
