import nodemailer from "nodemailer";
import mailTemplate from "./mailtemplates.js";

const sendEmail = async (Name, Email, Domain, Sports) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const Mailer = mailTemplate(Name, Domain, Sports);

  const mailOptions = {
    from: process.env.EMAIL,
    to: Email,
    subject: `Thank you for registering in Desportivos'25`,
    html: Mailer.html,
  };

  await transporter.sendMail(mailOptions);
  console.log("mail sent");
};

export default sendEmail;
