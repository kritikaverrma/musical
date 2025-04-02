import { clerkClient } from "@clerk/express";
import { getAuth } from "@clerk/express";


export const protectRoute = async (req, res, next) => {
    console.log("req at protectRoute", req.rawHeaders);
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
    return res.status(401).json({ message: "No token found in headers" });
  }

  try {
    const verifiedToken = await clerkClient.verifyToken(token);
    console.log("✅ Verified Token:", verifiedToken);
    res.json({ verifiedToken });
  } catch (error) {
    console.error("❌ Token verification failed:", error);
    res.status(401).json({ message: "Invalid or expired token", error });
  }
    if (!auth.userId) {
        return res.status(401).json({ message: "Unauthorized - you must be logged in" });
    }

    req.auth = auth; // Assign manually if missing
    next();
};

export const requireAdmin = async (req, res, next) => {
    try {
        const currentUser = await clerkClient.users.getUser(req.auth.userId);
        const isAdmin = process.env.ADMIN_EMAIL === currentUser.primaryEmailAddress?.emailAddress;

        if (!isAdmin) {
            return res.status(403).json({ message: "Unauthorized - you must be an admin" });
        }

        next();
    } catch (error) {
        next(error);
    }
};
