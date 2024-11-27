import { z } from "zod";
import User from "../model/usermodel.js";
import { configDotenv } from "dotenv";
import sendEmail from "../Utils/mailSender.js";

configDotenv();

const userSchema = z.object({
  Name: z.string().min(1, "Name is required").max(100, "Name is too long"),
  CollegeName: z.string().min(1, "College name is required"),
  PhoneNumber: z.string().regex(/^\d{10}$/, "Phone number must be 10 digits"),
  Email: z.string().email("Invalid email address"),
  City: z.string().min(1, "City is required"),
  State: z.string().min(1, "State is required"),
  Domain: z.string().min(1, "Domain is required"),
});

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

    await sendEmail(Name, Email);

    return res.status(200).json({ message: "Registered Successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to create user" });
  }
}

export { registerUser };
