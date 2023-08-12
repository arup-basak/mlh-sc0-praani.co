import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductInterface from '@/interface/product.interface';

const Products = () => {
    const [data, setData] = useState<ProductInterface[]>();
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        const fetch = async () => {
            const response = await axios.post('/api/products/');
            const jsonData = response.data;
            if(jsonData) {
                setData(jsonData);
                setLoading(false);
            }
        }
        if(isLoading) {
            fetch();
        }
    })

    if(isLoading) {
        return <>Loading...</>
    }
    return (
        <div>
            {
                data?.map((item, index) => {
                    return (
                        <div key={index}>
                            {item.productName}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Products