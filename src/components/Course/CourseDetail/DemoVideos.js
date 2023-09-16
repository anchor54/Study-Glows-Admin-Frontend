import { useEffect, useState } from "react";
import { VideoPlayer } from "../../VideoPlayer/VideoPlayer";

export const DemoVideos = ({ refName = null, demoVideoData }) => {
  const [playVideo, setPlayVideo] = useState();

  const handlePlayVideo = (video) => {
    setPlayVideo(video);
  };

  useEffect(() => {
    demoVideoData &&
      demoVideoData.length > 0 &&
      demoVideoData[0]?.video &&
      handlePlayVideo(demoVideoData[0]);
  }, [demoVideoData]);

  return (
    demoVideoData &&
    demoVideoData.length > 0 && (
      <div className="demoVideoSection" ref={refName}>
        <h2 className="display_small">Demo Videos</h2>
        <div className="content">
          <div className="grid">
            <div className="lecture_video">
              {playVideo && playVideo?.video && playVideo?.video?.id && (
                <>
                  <VideoPlayer
                    videoId={playVideo?.video?.id}
                    videoType={playVideo?.video?.videoType}
                    videoURL={playVideo?.video?.videoURL}
                    handleFinishVideo={undefined}
                  />
                  <p className="body_large">{playVideo?.name}</p>
                </>
              )}
            </div>
            <div className="demo_playlist">
              <p className="heading_large">Course Playlist</p>
              <div className="wrapper">
                {demoVideoData.map((item, key) => (
                  <div
                    key={`demo_video_${item?.id}_${key}`}
                    className={`item ${item === playVideo ? "active" : undefined}`}
                    onClick={() => handlePlayVideo(item)}
                  >
                    {item?.name}
                    <span>10 Min</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
