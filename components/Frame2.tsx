import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

export type FrameComponent2Type = {
  className?: string;
  onToggleMute: () => void;
  isMuted: boolean;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "", onToggleMute, isMuted }) => {
  return (
    <div
      className={`absolute top-[480px] left-[calc(50%_-_188px)] shadow-[11px_-2px_28px_rgba(0,_0,_0,_0.25),_-14px_9px_47.5px_9px_rgba(0,_0,_0,_0.2)] rounded-2xl bg-whitesmoke-200 w-[376px] overflow-hidden flex flex-row items-center justify-center py-4 px-6 box-border gap-[58px] text-center text-xs text-black font-product-sans ${className}`}
    >
      <div className="flex flex-col items-center justify-center gap-1">
        <div className="rounded-3xl bg-pri-50 flex flex-row items-center justify-start p-[11.8px]" onClick={onToggleMute}>
          <Image
            className="w-[33px] relative h-[33px]"
            alt="Mute/Unmute Icon"
            src={isMuted ? "/microphoneslash21.svg" : "/microphone.svg"}
            width={33}
            height={33}
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-1">
        <Link href="/">
        <div className="rounded-3xl bg-red flex flex-row items-center justify-start p-[11.8px]">
          <Image className="w-[33px] relative h-[33px]" alt="End Call" src="/call.svg" width={33} height={33} />
        </div>
        </Link>
      </div>
    </div>
  );
};

export default FrameComponent2;
