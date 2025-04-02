import { clerkClient } from "@clerk/express";
import { getAuth } from "@clerk/express";


export const protectRoute = async (req, res, next) => {
    console.log("req at protectRoute", req.rawHeaders);
    const auth = getAuth(req); // Extract auth manually
    console.log("Manual Auth:", auth);
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
