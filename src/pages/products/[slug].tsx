import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import ProductInterface from '@/interface/product.interface';
import Image from 'next/image';
import Button from '@/components/Button';
import Head from 'next/head';

function Page() {
    const router = useRouter();

    const [data, setData] = useState<ProductInterface | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const request = await axios.post('/api/product', { productId: router.query.slug });
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
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <Head>
                <title>{data.title}</title>
            </Head>
            <div className="max-w-xl bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center">
                    <div className="mr-4">
                        <Image
                            src={`https://ik.imagekit.io/kftm0sihh/${data.imageFileName}`}
                            alt={data.title}
                            height={160}
                            width={160}
                        />
                    </div>
                    <div>
                        <h1 className="text-2xl font-semibold">{data.title}</h1>
                        <p className="text-gray-600">{data.productName}</p>
                        <p className="text-green-600">${data.price}</p>
                        <p className="text-gray-800">{data.description}</p>
                        <Button text='Buy Now' onClick={() => { router.push(data.paymentLink) }} />
                        <Button text='Add To Cart' onClick={() => { }} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
