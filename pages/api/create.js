import initDB from "../../helpers/initDB";
import User from "../../models/User";
import bcrypt from "bcryptjs";
import Cart from "../../models/Cart";
initDB();

export default async (req, res) => {
  const { name, price, mediaUrl, description } = req.body;
  try {
    if (!name || !price || !mediaUrl || !description) {
      return res.status(422).json({ error: "please add all the fields" });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(422).json({ error: "data already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const newProduct = await new User({
      name,
      email,
      password: hashedPassword,
    }).save();
    await new Cart({ user: newUser._id }).save();
    res.status(201).json({ message: "signup success" });
  } catch (err) {
    console.log(err);
  }
};
