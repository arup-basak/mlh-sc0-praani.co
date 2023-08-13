


// components/HospitalCard.js

import React from 'react';

interface HospitalCardProps {
  name: string;
  address: string;
  phoneNumber: string;
}

const HospitalCard: React.FC<HospitalCardProps> = ({ name, address, phoneNumber }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <p className="text-gray-600 mb-2">{address}</p>
      <p className="text-gray-600">{phoneNumber}</p>
    </div>
  );
};

export default HospitalCard;
