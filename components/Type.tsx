import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface TypeProps {
  heading: string;
  description: string;
  link: string;
  img: string;
}

const Type: React.FC<TypeProps> = ({ heading, description, link, img }) => {
    return (
      <div className="bg-white flex flex-col items-center max-w-80 rounded-3xl p-4 flex-1">
        <Image
          src={img}
          alt="Avatar"
          className="mx-auto mb-4 h-52"
          width={200}
          height={150}
        />
        <h2 className="text-3xl font-bold mb-2">{heading}</h2>
        <p className="text-gray-500 mb-4">{description}</p>
        <Link href={link}>    
            <button className="bg-blue-800 text-white rounded-full px-6 py-2 hover:bg-blue-950">
            Start ➔
            </button>
        </Link>
      </div>
    );
  };
  
  export default Type;
  