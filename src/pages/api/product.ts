import type { NextApiRequest, NextApiResponse } from "next";
import productSchema from "@/schemas/product.schema";
import { model, models } from "mongoose";
import mongo from "@/libs/mongo";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  mongo();
  try {
    const mModel = models.products || model("products", productSchema);
    const data = await mModel.findOne(req.body);
    res.status(200).json(data);
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
}
