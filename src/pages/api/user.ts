import type { NextApiRequest, NextApiResponse } from "next";
import mongo from "@/libs/mongo";
import { model, models } from "mongoose"; // Added Model import
import userSchema from "@/schemas/user.schema";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    mongo();
    const sid = req.body.sid as string;
    try {
        const UserModel = models.users || model('users', userSchema);
    
        const response = await UserModel.findOne({ "sid": sid });
            
        if (response) {
            res.status(200).json({...response});
        } 
        else {
            const newUser = new UserModel(req.body);
            const savedUser = await newUser.save();
            console.log(savedUser)
            res.status(200).json(savedUser);
        }
    } catch (error: any) {
        console.error(error); 
        res.status(500).json({ "message": "Internal Server Error" });
    }
}
