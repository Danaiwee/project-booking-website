import User from "../models/user.model.js";

export const checkAdmin = async(req, res, next) => {
    try {
        const user = await User.findById(req.user._id);
        if(user.isAdmin){
            next();
        } else {
            return res.status(401).json({error: "Unauthorized - You are not admin"})
        };
    } catch (error) {
        console.log("Error in checkAdmin: ", error.message);
        res.status(500).json({error: "Internal server error"})
    };
};