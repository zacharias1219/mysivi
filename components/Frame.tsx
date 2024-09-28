import type { NextPage } from "next";
import Image from "next/image";
import { useMemo, type CSSProperties } from "react";

export type FrameComponentType = {
  className?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propAlignSelf?: CSSProperties["alignSelf"];
};

const FrameComponent: NextPage<FrameComponentType> = ({
  className = "",
  propFlex,
  propAlignSelf,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      alignSelf: propAlignSelf,
    };
  }, [propFlex, propAlignSelf]);

  return (
    <div
      className={`absolute top-[40px] left-[27px] w-[364px] flex flex-row items-start justify-start gap-2 text-left text-base text-whitesmoke-100 font-satoshi ${className}`}
      style={frameDivStyle}
    >
      <div className="flex flex-row items-center justify-start">
        <Image
          className="w-[35px] relative h-[35px] object-contain"
          alt=""
          src="/5100-9-10-1@2x.png"
          width={35}
          height={35}
        />
      </div>
      <div className="flex-1 rounded-2xl bg-blue-2 flex flex-row items-center justify-center py-2 px-4">
        <div className="flex-1 relative">
          <span>
            <b>
              Hello, I want to make a purchase of some Dolo Masala ingredients
              today,
            </b>
            <span className="font-medium text-silver">{` `}</span>
          </span>
          <span className="font-medium text-silver">
            <span>could you help me out?</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
