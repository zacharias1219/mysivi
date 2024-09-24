import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useMemo, type CSSProperties } from "react";

export type OnboardingType = {
  className?: string;
  liveModeHighlight?: string;
  robot?: string;

  /** Style props */
  liveModeHighlightGap?: CSSProperties["gap"];
  liveModeDescriptionWidth?: CSSProperties["width"];
  liveModeDescriptionLeft?: CSSProperties["left"];
  talkWithAContainerLeft?: CSSProperties["left"];
  talkWithALeft?: CSSProperties["left"];
  propLeft?: CSSProperties["left"];
  lineArrowLeftIconPadding?: CSSProperties["padding"];
};

const Onboarding: NextPage<OnboardingType> = ({
  className = "",
  liveModeHighlightGap,
  liveModeDescriptionWidth,
  liveModeDescriptionLeft,
  talkWithAContainerLeft,
  talkWithALeft,
  propLeft,
  lineArrowLeftIconPadding,
  liveModeHighlight = "",
  robot,
}) => {
  const onboardingStyle: CSSProperties = useMemo(() => {
    return {
      gap: liveModeHighlightGap,
    };
  }, [liveModeHighlightGap]);

  const progressDotsStyle: CSSProperties = useMemo(() => {
    return {
      width: liveModeDescriptionWidth,
      left: liveModeDescriptionLeft,
    };
  }, [liveModeDescriptionWidth, liveModeDescriptionLeft]);

  const ellipseDivStyle: CSSProperties = useMemo(() => {
    return {
      left: talkWithAContainerLeft,
    };
  }, [talkWithAContainerLeft]);

  const ellipseDiv1Style: CSSProperties = useMemo(() => {
    return {
      left: talkWithALeft,
    };
  }, [talkWithALeft]);

  const ellipseDiv2Style: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const modeOptionsStyle: CSSProperties = useMemo(() => {
    return {
      padding: lineArrowLeftIconPadding,
    };
  }, [lineArrowLeftIconPadding]);

  return (
    <div
      className={`w-full relative rounded-3xl bg-pri-base overflow-hidden flex flex-col items-start justify-start pt-[34px] px-[191px] pb-[48.5px] box-border gap-[53px] max-w-full text-left text-17xl text-dark-1 font-linotte-bold lg:gap-[26px] lg:pt-[22px] lg:px-[47px] lg:pb-8 lg:box-border ${className}`}
      style={onboardingStyle}
    >
      <div
        className="w-[851px] h-[1138px] absolute !m-[0] bottom-[-469px] left-[-40px]"
        style={progressDotsStyle}
      >
        <div
          className="absolute top-[16px] left-[-271px] rounded-[50%] bg-gainsboro-300 w-[1122px] h-[1122px]"
          style={ellipseDivStyle}
        />
        <div
          className="absolute top-[16px] left-[-473px] rounded-[50%] bg-lightgray w-[1122px] h-[1122px] z-[1]"
          style={ellipseDiv1Style}
        />
        <div
          className="absolute top-[0px] left-[-649px] rounded-[50%] bg-lightgray w-[1122px] h-[1122px] z-[2]"
          style={ellipseDiv2Style}
        />
      </div>
      <div className="self-stretch rounded-3xl bg-white overflow-hidden flex flex-row items-start justify-between py-5 pl-9 pr-[35px] gap-5 z-[3] lg:flex-wrap">
        <h1 className="m-0 relative text-inherit font-normal font-[inherit] lg:text-10xl">
          Welcome to MySivi
        </h1>
        <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0 text-right text-xl text-secondary-5 font-nunito">
          <h2 className="m-0 self-stretch relative text-inherit font-semibold font-[inherit]">
            Select Mode
          </h2>
        </div>
      </div>
      <div
        className="self-stretch flex flex-row items-start justify-center py-0 pl-0 pr-0.5 box-border max-w-full text-center text-13xl text-gray"
        style={modeOptionsStyle}
      >
        <div className="rounded-20xl flex flex-row items-center justify-start gap-6 max-w-full z-[3]  lg:flex-wrap">
          <div className="rounded-12xl bg-white1 overflow-hidden flex flex-col items-center justify-start p-6 box-border gap-[15px] max-w-full lg:flex-1">
            <Image
              className="w-[125.6px] h-[125.6px] relative rounded-81xl object-cover"
              loading="lazy"
              alt=""
              src={liveModeHighlight || "/default-image-path.svg"}
              width={20}
              height={20}
            />
            <div className="flex flex-col items-center justify-start gap-4">
              <h1 className="m-0 w-[284px] relative text-inherit tracking-[0.03em] capitalize font-normal font-[inherit] inline-block lg:text-7xl">
                <p className="m-0">Talk with a Person</p>
                <p className="m-0">(LIVE)</p>
              </h1>
              <div className="w-[270px] relative text-base tracking-[0.03em] capitalize font-nunito inline-block">
                AI bot as moderator
              </div>
            </div>
            <Link href="/channel">
            <div className="rounded-2xl bg-pri-base flex flex-row items-center justify-center py-2 px-[21px] gap-2.5 text-left text-17xl text-pri-10">
              <div className="relative inline-block min-w-[84px] lg:text-10xl">
                Start
              </div>
              <Image
                className="h-6 w-6 relative object-contain"
                alt=""
                src="/line-arrowleft2.svg"
                width={20}
                height={20}
              />
            </div>
            </Link>
          </div>
          <div className="w-[317px] rounded-12xl bg-white1 flex flex-col items-center justify-start p-6 box-border gap-[15px] lg:flex-1">
            <Image
              className="w-[125.6px] h-[125.6px] relative object-cover"
              loading="lazy"
              alt=""
              src={robot || "/default-image-path.svg"}
              width={20}
              height={20}
            />
            <div className="self-stretch flex flex-col items-center justify-start gap-4">
              <h1 className="m-0 w-[153px] relative text-inherit tracking-[0.03em] capitalize font-normal font-[inherit] inline-block lg:text-7xl">
                Talk with AI Bot
              </h1>
              <div className="self-stretch relative text-base tracking-[0.03em] font-nunito overflow-hidden text-ellipsis whitespace-nowrap">
                AI bot will roleplay and talk with you
              </div>
            </div>
            <div className="rounded-2xl bg-pri-base flex flex-row items-center justify-center py-2 px-[21px] gap-2.5 text-left text-17xl text-pri-10">
              <div className="relative inline-block min-w-[84px] lg:text-10xl">
                Start
              </div>
              <Image
                className="h-6 w-6 relative object-contain"
                alt=""
                src="/line-arrowleft2.svg"
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
