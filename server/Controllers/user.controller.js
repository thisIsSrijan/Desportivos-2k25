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
  Sports: z.string().min(1, "this field is required"),
});

async function registerUser(req, res) {
  try {
    // console.log(req.body);
    userSchema.parse(req.body);
  } catch (error) {
    return res.status(400).json({ message: error.errors[0]?.message });
  }

  const { Name, CollegeName, PhoneNumber, Email, City, State, Domain, Sports } =
    req.body;

  try {
    const existingUser = await User.findOne({ Email, Domain, Sports });
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
      Sports,
    });

    await user.save();

    await sendEmail(Name, Email, Domain, Sports);

    try {
      const response = await fetch(process.env.SHEET_API, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            Name,
            CollegeName,
            PhoneNumber,
            Email,
            City,
            State,
            Domain,
            Sports,
          },
        }),
      });

      const sheetResponse = await response.json();
      if (response.ok) {
        console.log("Data sent to Google Sheet successfully:", sheetResponse);
      } else {
        console.error("Failed to send data to Google Sheet:", sheetResponse);
      }
    } catch (sheetError) {
      console.error("Error while sending data to SheetDB:", sheetError);
    }

    return res.status(200).json({ message: "Registered Successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to create user" });
  }
}

export { registerUser };
