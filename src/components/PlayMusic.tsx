"use client";

import React, { useRef } from "react";
import boop from "@/public/sounds/boop.mp3";
import IconButton from "@mui/material/IconButton";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export const PlayMusic = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
    console.log("play");
  };

  // const handlePause = () => {
  //   audioRef.current.pause();
  // };

  // const handleStop = () => {
  //   audioRef.current.pause();
  //   audioRef.current.currentTime = 0;
  // };

  return (
    <div className="flex flex-wrap content-center justify-center mb-16 mr-8">
      <div className="w-56 h-56 flex flex-wrap content-center justify-center rounded-full bg-white drop-shadow-2xl shadow-gray-50">
        <div className="w-28 h-28 flex flex-wrap content-center justify-center rounded-full bg-white drop-shadow-2xl shadow-gray-100">
          <IconButton onClick={handlePlay}>
            <PlayArrowIcon />
          </IconButton>
          <audio hidden ref={audioRef} controls>
            <source src={boop} type="audio/mpeg" />
          </audio>
        </div>
      </div>
    </div>
  );
};
