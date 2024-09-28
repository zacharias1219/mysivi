import type { NextPage } from "next";
import Image from "next/image";

export type StatusItemsType = {
  className?: string;
};

const StatusItems: NextPage<StatusItemsType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[139px] left-[271px] w-[898px] flex flex-col items-start justify-start gap-4 text-left text-xl text-pri-100 font-product-sans ${className}`}
    >
      <div className="self-stretch flex flex-col items-center justify-center gap-4 text-pri-base">
        <div className="self-stretch flex flex-col items-center justify-center gap-2">
          <div className="relative">Role playing</div>
          <div className="self-stretch relative text-29xl text-pri-100 text-center">
            You’re a Retailer, talk to a customer
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-2 text-5xl text-green">
          <b className="relative tracking-[0.02em]">Difficulty: Easy</b>
          <div className="flex flex-row items-center justify-start gap-2 text-pri-50">
            <Image
              className="w-[31px] relative h-[31px]"
              alt=""
              src="/timer.svg"
              width={20}
              height={20}
            />
            <b className="relative tracking-[0.02em]">3-5 Minutes</b>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-1 text-center text-5xl">
        <div className="h-8 flex flex-row items-center justify-start gap-2.5">
          <Image 
          className="w-6 relative h-6" 
          alt="" 
          src="/task.svg"
          width={20}
          height={20}
          />
          <div className="relative">TASK</div>
        </div>
        <div className="self-stretch relative text-base tracking-[0.02em] text-pri-50 text-left">
          At the end of this role play, you are expected to
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-4 text-45xl font-linotte-heavy">
        <div className="self-stretch rounded-4xl bg-gainsboro-100 flex flex-row items-center justify-between py-4 px-6">
          <div className="flex flex-row items-center justify-start gap-4">
            <div className="relative">1</div>
            <div className="w-[237px] relative text-base tracking-[0.02em] font-product-sans inline-block shrink-0">
              Repeat the text after the Arfie.
            </div>
          </div>
          <div className="w-[33px] rounded-43xl bg-dimgray-200 h-[33.8px] flex flex-col items-center justify-center py-[9px] px-[7px] box-border">
            <Image
              className="w-3.5 relative h-[10.2px]"
              alt=""
              src="/vector.svg"
              width={20}
              height={20}
            />
          </div>
        </div>
        <div className="self-stretch rounded-4xl bg-gainsboro-100 flex flex-row items-center justify-between py-4 px-6">
          <div className="flex-1 flex flex-row items-center justify-start gap-4">
            <div className="relative">2</div>
            <div className="w-[349px] relative text-base tracking-[0.02em] font-product-sans inline-block shrink-0">
              Listen to the Audio and Video and repeat the statements.
            </div>
          </div>
          <div className="w-[33px] rounded-43xl bg-dimgray-200 h-[33.8px] flex flex-col items-center justify-center py-[9px] px-[7px] box-border">
            <Image
              className="w-3.5 relative h-[10.2px]"
              alt=""
              src="/vector.svg"
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusItems;
