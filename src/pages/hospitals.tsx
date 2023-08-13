import { useState, useEffect } from 'react'
import axios from 'axios'
import LoadingSpinner from '@/components/LoadingSpinner';

const Hospital = () => {
    const [data, setData] = useState<any[]>()
    const [isLoading, setLoading] = useState(true);
    const location = [12, 13];
    useEffect(() => {
        const fetchData = async () => {
            const resp = await axios.post('/api/hospitals', {
                position: location
            })
            if(resp.data) {
                const hospitals = resp.data
                console.log(hospitals)
                setData(hospitals)
                setLoading(false)
            }
        }

        if(isLoading) {
            fetchData()
       }
    })
    if(isLoading) {
        return <LoadingSpinner />
    }
    return (
        <div>
            {
                data?.map((item, index) => {
                    return (
                        <div key={index}>
                            {item.name}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Hospital