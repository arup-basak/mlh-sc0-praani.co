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

  try {
    const userLocation = {
      latitude: req.body.position[0], // Make sure req.body.position is an array with at least 2 elements
      longitude: req.body.position[1]
    };

    const mModel = models.hospitals || model("hospitals", hospitalSchema)
    const allHospitals = await mModel.find({})

    // console.log(allHospitals)

    // Calculate distances and sort hospitals based on distance
    const hospitalsWithDistances = allHospitals.map(hospital => {
      if (hospital.location && hospital.location.length >= 2) {
        return {
          ...hospital.toObject(),
          distance: haversineDistance(
            userLocation.latitude, userLocation.longitude,
            hospital.location[0], hospital.location[1]
          )
        };
      }
      return hospital;
    });

    hospitalsWithDistances.sort((a, b) => a.distance - b.distance);

    // Get the five nearest hospitals
    const nearestHospitals = hospitalsWithDistances.slice(0, 3);

    res.status(200).json(nearestHospitals);
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
