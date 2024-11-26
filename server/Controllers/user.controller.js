import User from "../model/usermodel.js";

async function registerUser(req, res) {
  const { Name, CollegeName, PhoneNumber, Email, City, State, Domain } =
    req.body;
  const user = new User({
    Name,
    CollegeName,
    PhoneNumber,
    Email,
    City,
    State,
    Domain,
  });
  try {
    await user.save();
    return res.status(200).json({ message: "Registered Successfully" });
  } catch (error) {
    console.log(error);

    return res.status(400).json({ message: "Failed to create user" });
  }
}

export { registerUser };
