import nodemailer from "nodemailer";
import mailTemplate from "./mailtemplates.js";

const sendEmail = async (Name, Email) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const Mailer = mailTemplate(Name);

  const mailOptions = {
    from: process.env.EMAIL,
    to: Email,
    subject: Mailer.title,
    html: Mailer.html,
  };

  await transporter.sendMail(mailOptions);
};

export default sendEmail;
