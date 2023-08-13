import { useState, useEffect } from 'react'
import axios from 'axios'
import LoadingSpinner from '@/components/LoadingSpinner';
import HospitalCard from '@/components/HospitalCard';
import HospitalInterface from '@/interface/hospital.interface';

const Hospital = () => {
    const [data, setData] = useState<any[]>()
    const [isLoading, setLoading] = useState(true);
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);

    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLatitude(position.coords.latitude)
                    setLongitude(position.coords.longitude)
                },
                (error) => {
                    console.error("Error getting geolocation:", error);
                }
            );
        } else {
            console.log("Geolocation is not available in this browser.");
        }
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const resp = await axios.post('/api/hospitals', {
                position: [latitude, longitude]
            })
            if (resp.data) {
                const hospitals = resp.data
                console.log(hospitals)
                setData(hospitals)
                setLoading(false)
            }
        }

        if (isLoading) {
            fetchData()
        }
    })
    if (isLoading) {
        return <LoadingSpinner />
    }
    return (
        <div className='bg-yellow-100 h-[80vh] p-2'>
            <div className='m-auto w-3/5'>
                {
                    data?.map((item: HospitalInterface, index) => {
                        return (
                            <HospitalCard
                                key={index}
                                name={item.name}
                                address={item.address}
                                phoneNumber={item.contact}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Hospital