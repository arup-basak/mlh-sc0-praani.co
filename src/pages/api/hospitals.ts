// import type { NextApiRequest, NextApiResponse } from 'next'
// import hospitalSchema from '@/schemas/hospital.schema'
// import { model, models } from 'mongoose'
// import mongo from '@/libs/mongo'

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<any>
// ) {
//   mongo();

//   const location = [req.body.position[0], req.body.position[1]]; // Access user location

//   try {
//     const mModel = models.hospitals || model("hospitals", hospitalSchema)
//     const data = await mModel.find({})
//     res.status(200).json(data)
//   } catch (error: any) {
//     console.log(error)
//     res.status(500).json({ error: 'Internal server error' })
//   }
// }







import type { NextApiRequest, NextApiResponse } from 'next'
import hospitalSchema from '@/schemas/hospital.schema'
import { model, models } from 'mongoose'
import mongo from '@/libs/mongo'

// Function to calculate distance using Haversine formula
function haversineDistance(
  lat1: number, lon1: number,
  lat2: number, lon2: number
): number {
  const R = 6371; // Earth's radius in kilometers
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  return distance;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  mongo();

  const userLocation = {
    latitude: req.body.position[0],
    longitude: req.body.position[1]
  };

  try {
    const mModel = models.hospitals || model("hospitals", hospitalSchema)
    const allHospitals = await mModel.find({})

    // Calculate distances and sort hospitals based on distance
    const hospitalsWithDistances = allHospitals.map(hospital => ({
      ...hospital.toObject(),
      distance: haversineDistance(
        userLocation.latitude, userLocation.longitude,
        hospital.position[0], hospital.position[1]
      )
    }));
    hospitalsWithDistances.sort((a, b) => a.distance - b.distance);

    // Get the five nearest hospitals
    const nearestHospitals = hospitalsWithDistances.slice(0, 3);

    res.status(200).json(nearestHospitals);
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
