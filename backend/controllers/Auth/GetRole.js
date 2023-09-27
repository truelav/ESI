import mongoose from "mongoose";
import User from '../../models/User.js'

export const getRole = async (req, res) => {

    const userId = req.params.id

    try {
        const user =  await User.findOne(id)
        if(!user){
            res.status(500).json({message: `user not found`})
        }
    } catch(error){
        console.log(error)
        res.status(500).json(error);
    }
}