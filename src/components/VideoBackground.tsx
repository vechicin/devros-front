import React from "react";
import "./VideoBackground.css";

interface VideoBackgroundProps {
  src: string;
  poster?: string;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ src, poster }) => (
  <video
    className="video-bg"
    src={src}
    poster={poster}
    autoPlay
    loop
    muted
    playsInline
  />
);

export default VideoBackground;
