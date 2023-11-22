"use client";

import React from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const option = {
    width: "1000",
    height: "600",
  };

  document.cookie = "nama_cookie=nilai_cookie; samesite=None; secure";

  return (
    <div>
      <YouTube videoId={youtubeId} onReady={(e) => e.target.pauseVideo()} opts={option} className="flex w-[100vw] justify-center items-center" />
    </div>
  );
};

export default VideoPlayer;
