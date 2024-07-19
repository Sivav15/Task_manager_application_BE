const { default: axios } = require("axios");
const userModel = require("../../models/user");
const jwt = require("jsonwebtoken");

const googleLogin = async (req, res) => {
  try {
    const { token } = req.body;
    const { data } = await axios.get(
      `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${token}`
    );
    const { email } = data;
    let user = await userModel.findOne({ email });

    if (!user)
      return res.status(404).json({
        message: "User does not exist",
      });

    const jwtToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({ token: jwtToken, message: "login successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Internal Server Error",
      error: err,
    });
  }
};

module.exports = googleLogin;
