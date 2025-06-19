import jwt from "jsonwebtoken";

const isAuth = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(400).json({ message: "token not found" });
    }

    const verifyToken = jwt.verify(token, process.env.JWT_SECRET); // 🧠 might throw jwt malformed

    req.userId = verifyToken.userId;
    next();
  } catch (error) {
    console.error("JWT verification failed:", error.message); // ✅ Add this too
    return res.status(500).json({ message: "Is Auth error" });
  }
};

export default isAuth;
