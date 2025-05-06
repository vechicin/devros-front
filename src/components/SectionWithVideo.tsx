import React from "react";
import VideoBackground from "./VideoBackground";
import "./SectionWithVideo.css";

interface SectionWithVideoProps {
  videoSrc: string;
  poster?: string;
  children: React.ReactNode;
}

const SectionWithVideo: React.FC<SectionWithVideoProps> = ({
  videoSrc,
  poster,
  children,
}) => (
  <section className="section-video-wrapper">
    <VideoBackground src={videoSrc} poster={poster} />
    <div className="section-content">{children}</div>
  </section>
);

export default SectionWithVideo;
