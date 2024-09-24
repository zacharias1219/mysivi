"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { NextPage } from "next";
import Image from 'next/image';

export type ConnectingHumanType = object;

const ConnectingHuman: NextPage<ConnectingHumanType> = () => {
  const router = useRouter();
  const [timer, setTimer] = useState(5);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    if (timer === 0) {
      clearInterval(intervalId);
      router.push(`/channel/${8888888}`);
    }

    return () => clearInterval(intervalId);
  }, [timer, router]);

  return (
    <div
      className={`w-[1440px] bg-white max-w-full h-[800px] overflow-hidden text-center text-5xl text-pri-100 font-linotte-bold`}
    >
      <div className="w-full h-full flex justify-center items-center">
        <div className="absolute top-[-58px] left-[-311px] rounded-[50%] bg-gainsboro-200 w-[1122px] h-[1122px]" />
        <div className="absolute top-[-58px] left-[-513px] rounded-[50%] bg-secondary-1 w-[1122px] h-[1122px] opacity-[0.22]" />
        <div className="absolute top-[-74px] left-[-689px] rounded-[50%] bg-secondary-1 w-[1122px] h-[1122px] opacity-[0.18]" />
      </div>
      <Image
        src="/frame-1618868427.svg"
        className="absolute top-[153px] left-[86px] w-[569px] h-[575px]"
        alt=""
        width={569}
        height={575}
      />
      <div className="absolute top-[calc(50%_-_109.5px)] left-[768px] w-[572px] flex flex-col items-start justify-start gap-2 text-left text-pri-50 font-product-sans">
        <div className="self-stretch relative tracking-[0.03em]">Searching</div>
        <b className="self-stretch relative text-[62px] tracking-[0.03em] capitalize text-pri-90">
          CONNECTING TO PERSON
        </b>
        <div className="self-stretch relative text-xl tracking-[0.03em] text-pri-100">
          This might take a while, we suggest you stay patient..
        </div>
      </div>
    </div>
  );
};

export default ConnectingHuman;