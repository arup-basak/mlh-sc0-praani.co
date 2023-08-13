import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductInterface from '@/interface/product.interface';
import ProductCard from '@/components/ProductCard';
import Head from 'next/head';
import LoadingSpinner from '@/components/LoadingSpinner';

const Products = () => {
    const [data, setData] = useState<ProductInterface[]>([]); // Initialize as an empty array
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/products/'); // Use 'get' instead of 'post'
                const jsonData = response.data;
                if (response.status === 200) {
                    setData(jsonData);
                    setLoading(false);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false); // Handle error loading state
            }
        };

        fetchData(); // Call the fetchData function directly

    }, []); // Provide an empty dependency array

    if (isLoading) {
        return <LoadingSpinner />
    }

    return (
        <>
            <Head>
                <title>Our Products</title>
            </Head>
            <div className = 'bg-[#fdfcdc]'>
            <div className='grid grid-cols-4 m-auto w-3/4 -z-10 '>
                {data.map((item, index) => (
                    <ProductCard
                        key={index}
                        heading={item.productName}
                        price={item.price}
                        imgName={item.imageFileName}
                        id={String(item.productId)}
                    />
                ))}
            </div>
            </div>
        </>
    );
};

export default Products;
