import Image from 'next/image';
import React from 'react';

const Header = () => {
  return (
    <div className='p-6 font-nunito'>
    <header className="flex justify-between items-center mb-2">
      <div className="text-2xl font-bold">Logo here</div>
          <span className='text-xl'>👋 Hello John Doe!</span>
        <Image 
        src="/frame-1000001498@2x.png" 
        alt="User avatar" 
        className="rounded-full w-10 h-10"
        width={20}
        height={20}
        />
    </header>
    </div>
  );
};

export default Header;