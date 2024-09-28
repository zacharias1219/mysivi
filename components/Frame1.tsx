import type { NextPage } from "next";
import Image from "next/image";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center relative gap-[13px] text-center text-lgi text-pri-base font-product-sans-medium ${className}`}
    >
      <div className="w-[159px] rounded-3xl bg-linen h-[45px] flex flex-row items-center justify-center py-[14.5px] px-[12.1px] box-border gap-[12.1px] z-[0]">
        <Image
          className="w-[24.2px] relative h-[24.2px] overflow-hidden shrink-0 hidden"
          alt=""
          src="/icons.svg"
          width={24}
          height={24}
        />
        <div className="flex-1 flex flex-row items-center justify-center">
          <div className="flex flex-row items-center justify-start relative gap-1.5">
            <Image
              className="w-[19.3px] relative h-[19.3px] z-[0]"
              alt=""
              src="/group-1000001128.svg"
              width={19}
              height={19}
            />
            <div className="relative leading-[18.9px] z-[1]">00:00</div>
            <Image
              className="w-[18.9px] absolute !m-[0] top-[4.7px] left-[40.8px] h-[18.9px] overflow-hidden shrink-0 hidden z-[2]"
              alt=""
              src="/icons1.svg"
              width={19}
              height={19}
            />
          </div>
        </div>
      </div>
      <Image
        className="w-[125px] relative h-[125px] object-cover z-[1]"
        alt=""
        src="/group-1000001129@2x.png"
        width={125}
        height={125}
      />
      <div className="w-[66px] absolute !m-[0] top-[171.7px] left-[47px] [filter:blur(4.3px)] rounded-[50%] bg-pri-100 h-1 z-[2]" />
    </div>
  );
};

export default FrameComponent1;
