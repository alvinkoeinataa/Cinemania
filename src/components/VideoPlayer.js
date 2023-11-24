"use client";

import React from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const option = {
    width: "1000",
    height: "600",
  };

  return (
    <div>
      <YouTube
        videoId={youtubeId}
        onReady={(e) => {
          const iframe = e.target.getIframe();
          iframe.contentWindow.postMessage("https://www.youtube.com");
          e.target.pauseVideo();
        }}
        opts={option}
        className="flex justify-center items-center"
      />
    </div>
  );
};

export default VideoPlayer;
