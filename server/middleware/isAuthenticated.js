import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    // console.log(token);

    if (!token) {
      return res.status(401).json({ message: "User not authenticated." });
    }
    const decode = await jwt.verify(token, process.env.JWT_SECRET_KEY);
    // console.log(decode);
    if (!decode) {
      return res.status(401).json({ message: "Invalid token" });
    }
    req.id = decode.userId;
    next(); // responsible to run the next function written in the route always if i call this auth function first it will run till here and then the next function name written will be called
  } catch (error) {
    console.error('Auth Error:', error);
    return res.status(401).json({ message: "Authentication failed" });
  }
};

export default isAuthenticated;
