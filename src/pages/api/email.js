const mg = require("mailgun-js");

const mailgun = () =>
  mg({
    apiKey: "8dcf3d5cf5e680c9de1fd2e8f3b8208b-07a637b8-07bd6798",
    domain: "sandbox86e01290c8ba487ab45c007ec15e26a1.mailgun.org",
  });

export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
  const { email, subject, message } = req.body;
  mailgun()
    .messages()
    .send(
      {
        from: "Jokha <Jokha@databoat.om>",
        to: `${email}`,
        subject: `${subject}`,
        html: `<p>${message}</p>`,
      },
      (error, body) => {
        if (error) {
          console.log(error);
          res.status(500).send({ message: "Error in sending email" });
        } else {
          console.log(body);
          res.send({ message: "Email sent successfully" });
        }
      }
    );
}
