import React from "react";
import "./Video.css";
import PlayVideo from "../PlayVideo/PlayVideo";
import Recommended from "../Recommended/Recommended";
import { useParams } from "react-router-dom";
const Video = () => {
  const { videoId, categoryId } = useParams();
  return (
    <div className="flex space-x-3 play-container">
      <div className="w-[85%]">
        <PlayVideo videoId={videoId} />
      </div>
      <div className="">
        <Recommended categoryId={categoryId} />
      </div>
    </div>
  );
};

export default Video;
