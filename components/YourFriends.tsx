import Image from 'next/image';
import React from 'react';

const YourFriends = () => {
    return (
      <div className="bg-orange-400 text-black rounded-lg p-2 h-80 font-nunito flex flex-row items-center justify-center">
        <div className="flex flex-col items-start left-3 max-w-80">
          <h2 className="text-4xl font-bold mb-4">Your Friends</h2>
          <p className="text-5xl">You have No friends yet</p>
        </div>
        <Image
          src="/illustrationvi-2@2x.png"
          alt="Sad face avatar"
          className="mb-4 h-52"
          width={180}
          height={135}
        />
      </div>
    );
  };
  
  export default YourFriends;
  