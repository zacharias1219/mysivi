import type { NextPage } from "next";
import Image from "next/image";
import { useMemo, type CSSProperties } from "react";

export type GroupComponentType = {
  className?: string;
  henryjnrOsuji?: string;
  search?: string;

  /** Style props */
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
};

const GroupComponent: NextPage<GroupComponentType> = ({
  className = "",
  henryjnrOsuji,
  propDisplay,
  propMinWidth,
  search = "",
}) => {
  const henryjnrOsujiStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  return (
    <div
      className={`w-[447.2px] relative h-[190.3px] text-center rounded-xltext-base text-pri-90 font-product-sans ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] rounded-3xl bg-whitesmoke-300 w-[447.2px] h-[190.3px]" />
      <Image
        className="absolute top-[35.6px] left-[164.6px] rounded-[50%] w-[118.7px] h-[118.7px] object-cover"
        alt=""
        src={search || "/default-image-path.svg"}
        width={119}
        height={119}
      />
      <div
        className="absolute top-[159.3px] left-[31.3px]"
        style={henryjnrOsujiStyle}
      >
        {henryjnrOsuji}
      </div>
      <div className="absolute top-[127px] left-[240.8px] rounded-17xl bg-background flex flex-row items-center justify-center p-2">
        <Image className="w-4 relative h-4" alt="" src="/microphoneslash2.svg"
          width={20}
          height={20}
        />
      </div>
    </div>
  );
};

export default GroupComponent;
