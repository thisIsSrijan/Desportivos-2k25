import { z } from "zod";
import nodemailer from "nodemailer";
import User from "../model/usermodel.js";

const userSchema = z.object({
  Name: z.string().min(1, "Name is required").max(100, "Name is too long"),
  CollegeName: z.string().min(1, "College name is required"),
  PhoneNumber: z.string().regex(/^\d{10}$/, "Phone number must be 10 digits"),
  Email: z.string().email("Invalid email address"),
  City: z.string().min(1, "City is required"),
  State: z.string().min(1, "State is required"),
  Domain: z.string().min(1, "Domain is required"),
});

const sendThankYouEmail = async (Name, Email) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "adityabajpayee7@gmail.com",
      pass: "tgwemtwmbyynmvbp",
    },
  });

  const mailOptions = {
    from: "adityabajpayee7@gmail.com",
    to: Email,
    subject: "Thank You for Registering - Despo'2K25",
    text: `Hi ${Name},\n\nThank you for registering for Despo'2K25! We are thrilled to have you join us. Stay tuned for more updates about the event.\n\nBest regards,\nThe Despo'2K25 Team`,
  };

  await transporter.sendMail(mailOptions);
};

async function registerUser(req, res) {
  try {
    userSchema.parse(req.body);
  } catch (error) {
    return res.status(400).json({ message: error.errors[0]?.message });
  }

  const { Name, CollegeName, PhoneNumber, Email, City, State, Domain } =
    req.body;

  try {
    const existingUser = await User.findOne({ Email, Domain });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User is already registered with this domain" });
    }

    const user = new User({
      Name,
      CollegeName,
      PhoneNumber,
      Email,
      City,
      State,
      Domain,
    });

    await user.save();

    await sendThankYouEmail(Name, Email);

    return res.status(200).json({ message: "Registered Successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to create user" });
  }
}

export { registerUser };
