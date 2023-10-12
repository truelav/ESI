import User from "../../models/User/User.js";

export const getAllUsers = async (req, res) => {
    try {
        const allUsers = await User.find({});

        if(!allUsers){
            res.status(400).json({message: "no users found", allUsers: []})
        }

        res.status(200).json(allUsers);
    } catch(error){
        res.status(500).json({ message: error });
    }
}