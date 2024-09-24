import Image from 'next/image';
import React from 'react';

const LivePeople = () => {
    return (
      <div className="bg-orange-400 text-black font-nunito rounded-xl p-4 w-[600px] h-[400px]">
        <h2 className="text-4xl font-bold mb-4">Live People</h2>
        <p className="text-md mb-4">Currently active persons</p>
        {Array(2)
          .fill(null)
          .map((_, i) => (
            <div
              key={i}
              className="flex justify-between items-center text-white bg-blue-800 rounded-full px-4 py-2 mb-2"
            >
              <div className="flex items-center space-x-2">
                <Image
                  src="/ellipse-14@2x.png"
                  alt="Person avatar"
                  className="rounded-full w-8 h-8"
                  width={20}
                  height={20}
                />
                <div>
                  <p className="font-bold">Bhavesh</p>
                  <p className="text-sm">Not friends yet</p>
                </div>
              </div>
              <div className="text-right flex md:gap-10 lg:gap-20">
                <p className="text-sm">Total Active Hours: 364 hours</p>
                <button className="bg-blue-900 text-white rounded-full px-4 py-1">
                  Start ➔
                </button>
              </div>
            </div>
          ))}
      </div>
    );
  };
  
  export default LivePeople;
  