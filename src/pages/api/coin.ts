import type { NextApiRequest, NextApiResponse } from "next";
import { model, models } from "mongoose";
import mongo from "@/libs/mongo";
import profileCoinSchema from "@/schemas/coin.schema";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    mongo();
    try {
        const mModel = models.coins || model("coins", profileCoinSchema);
        const data = await mModel.find(req.body);
        res.status(200).json(data);
    } catch (error: any) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
    }
}
