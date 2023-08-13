import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import ProductInterface from '@/interface/product.interface';
import Image from 'next/image';
import Button from '@/components/Button';
import Head from 'next/head';
import LoadingSpinner from '@/components/LoadingSpinner';

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
        return <LoadingSpinner />
    }

    if (!data) {
        return <>No data available.</>;
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <Head>
                <title>{data.title}</title>
            </Head>
            <div className="max-w-4xl bg-white p-8 rounded-lg shadow-lg mx-4 md:mx-auto">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="flex-shrink-0">
                        <Image
                            src={`https://ik.imagekit.io/kftm0sihh/${data.imageFileName}`}
                            alt={data.title}
                            height={400}
                            width={400}
                            className="rounded-lg"
                        />
                    </div>
                    <div>
                        <h1 className="text-3xl font-semibold mb-2">{data.title}</h1>
                        <p className="text-gray-600 mb-2">{data.productName}</p>
                        <p className="text-green-600 text-xl font-semibold mb-4">${data.price}</p>
                        <p className="text-gray-800">{data.description}</p>
                        <div className="mt-4 flex space-x-4">
                            <Button text='Buy Now' onClick={() => { router.push(data.paymentLink) }} />
                            <Button text='Add To Cart' onClick={() => { }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
