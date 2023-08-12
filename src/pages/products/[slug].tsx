import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import ProductInterface from '@/interface/product.interface';
import Image from 'next/image';

const API_URL = '/api/product';

function Page() {
    const router = useRouter();

    const [data, setData] = useState<ProductInterface | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const request = await axios.post(API_URL, { productId: router.query.slug });
                const jsonData = request.data;
                setData(jsonData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                // Handle error state here
            }
        };

        if (loading) {
            fetchData();
        }
    }, [router.query.slug, loading]);

    if (loading) {
        return <>Loading...</>;
    }

    if (!data) {
        return <>No data available.</>;
    }

    return (
        <div>
            <Image
                src={`https://ik.imagekit.io/kftm0sihh/${data.imageFileName}`}
                alt={data.title}
                height={160}
                width={160}
                layout="fixed"
            />
            <div>{data.title}</div>
            <div>{data.productName}</div>
            <div>{data.price}</div>
            <div>{data.description}</div>
        </div>
    );
}

export default Page;
