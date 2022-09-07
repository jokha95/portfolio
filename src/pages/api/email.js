// const express = require("express");
// // const dotenv = require("dotenv");
// const Mailgun = require('mailgun.js');


// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// export default function handler(req, res) {
//   const { email, subject, message } = req.body;
//   const mg = mailgun.client({
//     username: 'api',
//     key: '35081c47f27d7be8daf4cbf84f2beb12-07a637b8-9d8a2d09',
//   });
//   mg.messages
//     .create(sandboxf8873af164e446da8a5ed6f26fa87d3b.mailgun.org, {
//       from: "Mailgun Sandbox <postmaster@sandboxf8873af164e446da8a5ed6f26fa87d3b.mailgun.org>",
//       to: ["moh.anghabo@gmail.com"],
//       subject: "Hello",
//       text: "Testing some Mailgun awesomness!",
//     })
//     .then(msg => res.status(200).json({ msg})) // logs response data
//     .catch(err => res.status(200).json({ err})); // logs any error`;
//   }

// const port = process.env.PORT || 4000;
// app.listen(port, () => {
//   console.log(`serve at http://localhost:${port}`);
// });

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

// const formData = require('form-data');
// const Mailgun = require('mailgun.js');
// const mailgun = new Mailgun(formData);
// const mg = mailgun.client({
// 	username: 'api',
// 	key: '35081c47f27d7be8daf4cbf84f2beb12-07a637b8-9d8a2d09',
// });
// mg.messages
// 	.create(sandboxf8873af164e446da8a5ed6f26fa87d3b.mailgun.org, {
// 		from: "Mailgun Sandbox <postmaster@sandboxf8873af164e446da8a5ed6f26fa87d3b.mailgun.org>",
// 		to: ["moh.anghabo@gmail.com"],
// 		subject: "Hello",
// 		text: "Testing some Mailgun awesomness!",
// 	})
// 	.then(msg => console.log(msg)) // logs response data
// 	.catch(err => console.log(err)); // logs any error`;


// You can see a record of this email in your logs: https://app.mailgun.com/app/logs.

// You can send up to 300 emails/day from this sandbox server.
// Next, you should add your own domain so you can send 10000 emails/month for free.

const mg = require("mailgun-js");


const mailgun = () =>
  mg({
    apiKey: "8dcf3d5cf5e680c9de1fd2e8f3b8208b-07a637b8-07bd6798",
    domain: "sandbox86e01290c8ba487ab45c007ec15e26a1.mailgun.org",
  });

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
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

// const port = process.env.PORT || 4000;
// app.listen(port, () => {
//   console.log(`serve at http://localhost:${port}`);
// });
