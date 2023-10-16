const jwt = require("jsonwebtoken");

exports.checkQR = async (req, res) => {
  try {
    const { code, token } = req.query;
    const SECRETKEY = "kyawmobilemawlamyine";
    const decoded = jwt.verify(token, SECRETKEY);
    console.log(parseInt(decoded) === parseInt(code));
    return parseInt(decoded) === parseInt(code)
      ? res.status(200).json({ msg: "success" })
      : res.status(401).json({
          msg: "Invalid qr",
        });
  } catch (error) {
    return res.status(400).json({
      msg: error,
    });
  }
};
