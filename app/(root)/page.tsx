import React from 'react';
import Header from '@/components/Header';
import Type from '@/components/Type';
import LivePeople from '@/components/LivePeople';
import YourFriends from '@/components/YourFriends';

const App = () => {
  return (
    <div className="p-4">
      <Header />
      <div className="bg-blue-800 text-black rounded-xl p-8 mb-8">
        <div className="flex flex-row md:flex-col bg-white rounded-2xl font-nunito p-3 justify-between items-center mb-8">
          <h1 className="text-2xl font-bold mb-4 md:mb-0">Welcome to MySivi</h1>
          <button className="bg-white text-blue-900 text-xl rounded-full px-4 py-2">
            Select Mode
          </button>
        </div>
        <div className="flex items-center justify-center flex-row md:flex-col font-nunito space-x-40 md:space-y-0 md:space-x-4">
          <Type heading="Talk with a Person" description="AI Bot As Moderator" link="/channel" img="/rectangle-1@2x.png"/>
          <Type heading="Talk with AI Bot" description="AI bot will roleplay and talk with you." link="" img="/Robot-Emoji.png"/>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center md:flex-col gap-4">
        <LivePeople />
        <YourFriends />
      </div>
    </div>
  );
};

export default App;
