import React from 'react';
import Image from 'next/image';

interface Props {
  heading: string;
  price: number;
  imgName: string
}

const ProductCard: React.FC<Props> = (props: Props) => {
  return (
    <div className="m-4 relative bg-pink-100 rounded-xl overflow-hidden shadow-md transform hover:scale-105 transition-transform">
      <div className="flex flex-col items-center p-4">
        <Image
          src={`https://ik.imagekit.io/kftm0sihh/${props.imgName}`}
          className="bg-red-500 rounded-xl"
          alt="Hero Icon"
          width={160}
          height={160}
        />
        <h1 className="py-2 text-xl font-semibold text-center">{props.heading}</h1>
        <h1 className="py-2 text-lg font-semibold text-center">${props.price.toFixed(2)}</h1>
        <div className="mt-4 flex justify-center space-x-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
            Buy Now
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
