import type { NextApiRequest, NextApiResponse } from 'next'
import hospitalSchema from '@/schemas/hospital.schema'
import { model, models } from 'mongoose'
import mongo from '@/libs/mongo'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  mongo();

  const location = [req.body.position[0], req.body.position[1]]; // Access user location

  try {
    const mModel = models.hospitals || model("hospitals", hospitalSchema)
    const data = await mModel.find({})
    res.status(200).json(data)
  } catch (error: any) {
    console.log(error)
    res.status(500).json({ error: 'Internal server error' })
  }
}
