import React, { useEffect, useState } from "react";
import "./PlayVideo.css";
import { BiLike, BiShare } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { IoIosShareAlt } from "react-icons/io";
import { IoMdSave } from "react-icons/io";
import { MdNotificationsActive } from "react-icons/md";
import { API_KEY, value_converter } from "../../data";
import moment from "moment";
import { useParams } from "react-router-dom";

const PlayVideo = ({ setSidebar }) => {
  const { videoId } = useParams();
  const [apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState([]);

  const handleSubscribe = async () => {};

  const fetchVideoData = async () => {
    const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&maxHeight=60&regionCode=IN&key=${API_KEY}`;
    await fetch(videoDetails_url)
      .then((response) => response.json())
      .then((data) => setApiData(data.items[0]));
  };
  const fetchOtherData = async () => {
    const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&maxHeight=60&regionCode=IN&key=${API_KEY}`;
    await fetch(channelData_url)
      .then((response) => response.json())
      .then((data) => setChannelData(data.items[0]));

    const commentUrl = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;
    await fetch(commentUrl)
      .then((response) => response.json())
      .then((data) => setCommentData(data.items));
  };
  useEffect(() => {
    fetchVideoData();
  }, [videoId]);
  useEffect(() => {
    if (apiData) {
      fetchOtherData();
    }
  }, [apiData]);
  return (
    <div className="flex flex-col ml-4 justify-start play-video">
      <iframe
        className="rounded-lg"
        height="503"
        width="883"
        src={`https://www.youtube.com/embed/${videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        // allowfullscreen
      ></iframe>

      <div className="play-video-info px-3 play-video-info">
        <h3 className="font-bold text-xl text-pretty my-1 py-1  text-black">
          {apiData ? apiData.snippet.title : "Title Here"}
        </h3>
        <div className="flex items-center text-sm justify-between">
          <p className="text-gray-500 text-sm">
            {apiData
              ? value_converter(`${apiData.statistics.viewCount}`)
              : "16k"}{" "}
            {apiData
              ? moment(`${apiData.snippet.publishedAt}`).fromNow()
              : "2 days ago"}
          </p>
          <span className="cursor-pointer flex items-center">
            <BiLike size={"20px"} />{" "}
            {apiData
              ? value_converter(`${apiData.statistics.likeCount}`)
              : "16k"}{" "}
          </span>
          <span className="cursor-pointer">
            <BiDislike size={"20px"} />
          </span>
          <span className="cursor-pointer">
            <BiShare size={"20px"} />
          </span>
          <span className="cursor-pointer">
            <IoMdSave size={"20px"} />
          </span>
        </div>
        <hr className="3px solid black" />
        <div className="publisher flex justify-between items-center">
          <div className="flex space-x-2">
            <div>
              <img
                src={
                  channelData ? channelData.snippet.thumbnails.default.url : ""
                }
                alt=""
                className=""
              />
            </div>
            <div>
              <p className=" text-black font-bold text-pretty">
                {apiData ? apiData.snippet.channelTitle : "TED TALKS"}
              </p>
              <span>
                {channelData
                  ? value_converter(`${channelData.statistics.subscriberCount}`)
                  : "1M"}{" "}
                Subscribers
              </span>
            </div>
          </div>
          <div className="subscribe flex items-center space-x-1">
            <button className="cursor-pointer bg-red-700 border-r-2 rounded-lg text-white font-bold px-4 py-2 subscribe-button">
              Subscribe
            </button>
            <MdNotificationsActive className="cursor-pointer" size={"34px"} />
          </div>
        </div>

        <div className="video-desciption text-gray-700 font-medium">
          <p>Channel that is uniquely identified for coding</p>
          <p>
            {apiData
              ? apiData.snippet.description.slice(0, 199)
              : "Description Here"}
          </p>
        </div>
        <hr />
        <h4>
          {" "}
          {apiData
            ? value_converter(`${apiData.statistics.commentCount}`)
            : "1024"}
          &nbsp;comments
        </h4>
        {commentData.map((item, index) => {
          return (
            <div className="comment flex space-x-2 mt-2" key={index}>
              {" "}
              {/* user */}
              <img
                src={
                  commentData
                    ? item.snippet.topLevelComment.snippet.authorProfileImageUrl
                    : "comments"
                }
                className="w-[74px] h-[54px] rounded-full cursor-pointer"
                alt=""
              />
              <div>
                <h3
                  className=" text-black font-semibold text-pretty"
                  key={index}
                >
                  {commentData
                    ? item.snippet.topLevelComment.snippet.authorDisplayName
                    : ""}
                  <span>&bull;1 day ago</span>
                </h3>
                <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                <div className="comment-action flex items-center text-lg space-x-2">
                  <div className="flex items-center">
                    {" "}
                    <BiLike />
                    <span>
                      {value_converter(
                        `${item.snippet.topLevelComment.snippet.likeCount}`
                      )}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <BiDislike />
                    <span>30</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div className=""></div>
      </div>
    </div>
  );
};

export default PlayVideo;
