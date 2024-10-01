import React, { useEffect, useState } from "react";
import "./Recommended.css";
import { API_KEY, value_converter } from "../../data";
import { Link } from "react-router-dom";
const Recommended = ({ categoryId }) => {
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    const reletedvideo_url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${categoryId}&key=${API_KEY}`;

    await fetch(reletedvideo_url)
      .then((Response) => Response.json())
      .then((data) => setApiData(data.items));
  };
  useEffect(() => {
    fetchData();
  }, []);
  // return (
  //   <div className="recommended ml-0">
  //     {apiData.map((item, index) => {
  //       return (
  //         <Link
  //           to={`video/${item.snippet.categoryId}/${item.id}`}
  //           className="flex"
  //           key={index}
  //         >
  //           <div className="flex">
  //             <div className="w-[30vw] mb-2">
  //               {" "}
  //               <img
  //                 src={item.snippet.thumbnails.medium.url}
  //                 alt=""
  //                 className="h-[30vh]"
  //               />
  //             </div>

  //             <div className="-ml-">
  //               <h4 className="font-bold">{item.snippet.title}</h4>
  //               <h5 className="font-semibold">{item.snippet.title}</h5>
  //               <p className="text-sm font-semibold">
  //                 {value_converter(`${item.statistics.viewCount}`)}
  //               </p>
  //             </div>
  //           </div>
  //         </Link>
  //       );
  //     })}
  //   </div>
  // );

  return (
    <div className="recommended flex-wrap">
      {apiData.map((item, index) => {
        return (
          <Link
            to={`/video/${item.snippet.categoryId}/${item.id}`}
            className="flex   mb-2  object-cover hover:bg-gray-100 rounded-md space-x-1"
            key={index}
          >
            <div className="mb-2 sm:mb-0 w-full object-cover ">
              <img
                src={item.snippet.thumbnails.medium.url}
                alt={item.snippet.title}
                className="rounded-lg shadow-md"
              />
            </div>

            <div className="ml-0 flex flex-col flex-wrap justify-normal">
              <h4 className="font-bold text-lg text-gray-900  mb-1 ">
                {item.snippet.title}
              </h4>
              <h5 className="font-semibold text-sm text-gray-700 mb-2">
                {item.snippet.channelTitle}
              </h5>
              <p className="text-sm text-gray-600 font-semibold">
                {value_converter(`${item.statistics.viewCount}`)} views
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Recommended;
