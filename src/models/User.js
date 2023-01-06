import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  location: String,
});

userSchema.pre("save", async function () {
  console.log("user password", this.password);
  this.password = await bcrypt.hash(this.password, 5);
  console.log("Hash", this.password);
});
//await bcrypt.hash(this.password-> 우리가 암호화 해야할 데이터 즉, 입력한 user 데이터);

const User = mongoose.model("User", userSchema);

export default User;
