import Image from 'next/image';
import React from 'react';

const YourFriends = () => {
    return (
      <div className="bg-orange-400 text-black rounded-xl p-4 font-nunito flex flex-row items-center w-[720px] h-[400px] justify-center">
        <div className="flex flex-col items-start max-w-80">
          <h2 className="text-4xl font-bold mb-4">Your Friends</h2>
          <p className="text-5xl">You have No friends yet</p>
        </div>
        <Image
          src="/illustrationvi-2@2x.png"
          alt="Sad face avatar"
          className="mb-4 h-52"
          width={200}
          height={150}
        />
      </div>
    );
  };
  
  export default YourFriends;
  