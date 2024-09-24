"use client";
import type { NextPage } from "next";
import GroupComponent from "@/components/Group";
import FrameComponent1 from "@/components/Frame1";
import FrameComponent2 from "@/components/Frame2";
import { useState, useEffect } from "react";
import { VideoCall } from "../../../api/videocall/videoCall";
import Image from "next/image";

const questionBank = [
  "What is your favorite hobby?",
  "What do you like to do in your free time?",
  "What is your favorite book?",
  "What is your favorite movie?",
  "What is your favorite type of music?",
  // Add more questions to the bank here
];

const ConnectingHuman: NextPage = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [videoCall, setVideoCall] = useState<VideoCall | null>(null);
  const [question, setQuestion] = useState("");

  const generateQuestion = () => {
    const randomIndex = Math.floor(Math.random() * questionBank.length);
    setQuestion(questionBank[randomIndex]);
  };

  useEffect(() => {
    // Instantiate the VideoCall class when the component is mounted
    const call = new VideoCall();
    call.joinRoom({
      appId: "your-app-id",
      channel: "your-channel-name",
      token: null,
      uid: 12345,
    });
    setVideoCall(call);

    return () => {
      call.leaveRoom();
    };
  }, []);

  useEffect(() => {
    generateQuestion();
  }, []);

  const handleToggleMute = () => {
    if (videoCall) {
      videoCall.toggleMicrophone(isMuted);  // Call toggleMicrophone method
      setIsMuted(!isMuted);  // Update the local mute state
    }
  };

  return (
    <div className="w-full relative bg-background h-[750px] overflow-hidden text-center text-5xl text-pri-100 font-nunito">
      <div className="absolute h-[calc(100%_-_125px)] top-[25px] bottom-[39px] left-[40px] rounded-3xl rounded-b-none bg-white w-[1402px] overflow-hidden text-xs text-pri-60">
        <div className="absolute top-[15px] left-[19px] rounded-lg bg-pri-10 w-[1354px] flex flex-row items-center justify-start py-1 pl-[7px] pr-[18px] box-border gap-2 text-left">
          <div className="w-[21px] relative rounded-[50%] bg-gainsboro-100 h-[21px]" />
          <b className="relative">Bot is Introducing</b>
        </div>
        <div className="absolute top-[56px] left-[calc(50%_-_538.8px)] flex flex-row items-end justify-center gap-[12.7px]">
          <GroupComponent
            henryjnrOsuji="Henryjnr. Osuji"
            propDisplay="unset"
            propMinWidth="unset"
            search="/ellipse-22@2x.png"
          />
          <FrameComponent1 />
          <GroupComponent
            henryjnrOsuji="Nishchal Gaba"
            propDisplay="unset"
            propMinWidth="unset"
            search="/ellipse-23@2x.png"
          />
        </div>
        <div className="absolute top-[262.2px] left-[calc(50%_-_293.5px)] rounded-176xl-4 bg-success-g50 flex flex-row items-start justify-start py-2 px-3 gap-0.5 text-sm text-success-g300 font-product-sans-medium">
          <Image
            className="w-[15.6px] relative h-[15.6px] overflow-hidden shrink-0 hidden"
            alt="Icon"
            src="/icons2.svg"
            width={16}
            height={16}
          />
          <div className="relative leading-[15.6px]">
            <span>{` Conversation starts once `}</span>
            <b className="font-product-sans">BOTNAME</b>
            <span>{` is done introducing. And would last for `}</span>
            <i className="font-bold font-product-sans">00:00</i>
            <span> period.</span>
          </div>
        </div>
        <div onClick={generateQuestion} className="absolute top-[400px] left-[calc(50%-100px)] rounded-2xl bg-pri-10 flex flex-row items-center justify-center py-2 px-[17px] gap-2.5 text-lgi text-pri-90 hover:bg-pri-50 font-product-sans-medium">
          <div className="relative">Regenerate question</div>
          <Image
            className="w-6 relative h-6"
            alt="Regenerate"
            src="/redo.svg"
            width={24}
            height={24}
             // Call generateQuestion when the regenerate button is clicked
          />
        </div>
        <div className="absolute top-[314px] left-[calc(50%_-_205px)] rounded-3xl bg-pri-base flex flex-row items-center justify-center p-4 text-17xl text-background">
          <b className="w-[379px] relative inline-block shrink-0">
            {question}
          </b>
        </div>
        <FrameComponent2 
          onToggleMute={handleToggleMute}  // Pass the mute toggle function to FrameComponent2
          isMuted={isMuted}  // Pass the mute state
        />
        <Image
          className="absolute top-[548px] left-[calc(50%_-_539px)] w-[1078px] h-0 hidden"
          alt="Line Decoration"
          src="/line-258.svg"
          width={1078}
          height={1078}
        />
      </div>
    </div>
  );
};

export default ConnectingHuman;