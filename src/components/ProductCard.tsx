import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface Props {
  heading: string;
  price: number;
  imgName: string;
  id: string;
}

const ProductCard: React.FC<Props> = (props: Props) => {
  const { push } = useRouter();

  const handleAboutClick = () => {
    push(`/products/${props.id}`);
  };

  const handleAddToCart = () => {
    // Placeholder logic: Add the product to the cart
    alert(`Added ${props.heading} to the cart`);
  };

  return (
    <div className="m-4 relative bg-white rounded-xl overflow-hidden shadow-md transform hover:scale-105 transition-transform ">
      <div className="flex flex-col items-center p-4 justify-between h-max">
        <Image
          src={`https://ik.imagekit.io/kftm0sihh/${props.imgName}`}
          className="bg-gray-300 rounded-xl"
          alt={props.heading}
          width={160}
          height={160}
        />
        <div>
          <h1 className="py-2 text-xl font-semibold text-center">{props.heading}</h1>
          <h1 className="py-2 text-lg font-semibold text-center">₹{props.price.toFixed(2)}</h1>
          <div className="mt-4 flex justify-center space-x-4">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
              onClick={handleAboutClick}
            >
              About This
            </button>
            <button
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
