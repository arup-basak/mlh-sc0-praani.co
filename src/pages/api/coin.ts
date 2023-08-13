import type { NextApiRequest, NextApiResponse } from "next";
import { model, models } from "mongoose";
import mongo from "@/libs/mongo";
import userSchema from "@/schemas/user.schema";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    mongo();
    const sid = req.body.sid as string;
    const value = req.body.value as number;

    try {
        const mModel = models.users || model("users", userSchema);

        await mModel.findOneAndUpdate(
            { sid: sid },
            { $inc: { coins: value } },
            { new: true }
        )
        res.status(200).json({ response: true });
    } catch (error: any) {
        console.log(error);
        res.status(500).json({ response: false });
    }
}
