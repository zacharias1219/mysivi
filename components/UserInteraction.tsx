import type { NextPage } from "next";
import Image from "next/image";

export type UserInteractionType = {
  className?: string;
};

const UserInteraction: NextPage<UserInteractionType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch rounded-24xl bg-pri-60 flex flex-row items-center justify-between py-[7px] pl-5 pr-[11px] text-left text-xl text-pri-10 font-nunito ${className}`}
    >
      <div className="flex flex-row items-center justify-start gap-[7px]">
        <Image
          className="w-[34px] relative rounded-[50%] h-[34px] object-cover"
          alt=""
          src="/ellipse-141@2x.png"
          width={34}
          height={34}
        />
        <div className="flex flex-col items-start justify-start gap-1">
          <div className="self-stretch relative font-semibold">Bhavesh</div>
          <div className="relative text-xs font-semibold">Not friends yet</div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-start gap-1 text-xs text-dimgray-100">
        <div className="relative font-semibold">Total Active Hours:</div>
        <div className="relative text-sm font-linotte-bold text-pri-10">
          364 hours
        </div>
      </div>
      <div className="rounded-2xl bg-pri-base flex flex-row items-center justify-center py-2 px-[22px] gap-2.5 text-base font-linotte-bold">
        <div className="relative">Start</div>
        <Image
          className="w-4 relative h-4 object-contain"
          alt=""
          src="/line-arrowleft3.svg"
          width={20}
          height={20}
        />
      </div>
    </div>
  );
};

export default UserInteraction;
