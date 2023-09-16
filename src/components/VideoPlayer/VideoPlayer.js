import { useRef, useEffect, useState } from "react";
import videojs from "video.js";
import "videojs-contrib-quality-levels";
import "videojs-hls-quality-selector";
import "video.js/dist/video-js.css";

export const VideoPlayer = ({
  videoId,
  videoURL = "",
  videoType = "",
  thumbnailURL = "",
  handleFinishVideo,
}) => {
  const videoRef = useRef();
  const [player, setPlayer] = useState(undefined);
  const [callFinishVideoAPI, setCallFinishVideoAPI] = useState(false);
  const [vidDuration, setVidDuration] = useState(50000);
  const videoSrc = getVideoSrc(videoType, videoURL);
  const videoJsOptions = {
    autoplay: false,
    preload: "auto",
    controls: true,
    poster: "",
    fluid: true,
    responsive: true,
    playbackRates: [0.5, 1, 1.5, 2],
    sources: [videoSrc],
    html5: {
      nativeAudioTracks: true,
      nativeVideoTracks: true,
      nativeTextTracks: true,
    },
  };

  /**  useEffect on mount start player */
  useEffect(() => {
    const v_player = videojs(videoRef.current, videoJsOptions, function onPlayerReady() {
      // console.log("onPlayerReady");
    });
    setPlayer(v_player);
    // console.log(videoJsOptions);

    return () => {
      if (player) player.dispose();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /** show quality selector */
  useEffect(() => {
    if (player && videoType === "hls") {
      player.hlsQualitySelector({ displayCurrentQuality: true });
    }
  }, [player, videoType]);

  /** useEffect player when videoURL get updated */
  useEffect(() => {
    if (player) {
      player.src(videoSrc);
      player.poster("");
      setCallFinishVideoAPI(false);
      setVidDuration(50000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoId, videoURL, thumbnailURL]);

  useEffect(() => {
    if (callFinishVideoAPI) {
      handleFinishVideo();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [callFinishVideoAPI]);

  const handleOnLoadMetadata = (e, px) => {
    setVidDuration(e.target.duration);
  };

  const handleOnTimeUpdate = (e) => {
    if (e.target.currentTime >= vidDuration - 10) {
      setCallFinishVideoAPI(true);
    }
  };

  return (
    <div data-vjs-player>
      <video
        ref={videoRef}
        onLoadedMetadata={handleOnLoadMetadata}
        onTimeUpdate={handleOnTimeUpdate}
        className="vidPlayer video-js vjs-default-skin vjs-big-play-centered vjs-16-9"
      ></video>
    </div>
  );
};

const getVideoSrc = (type = "hls", url = "") => {
  switch (type) {
    case "hls":
      return {
        src: url,
        type: "application/x-mpegURL",
        withCredentials: false,
      };
    case "mp4":
      return {
        src: url,
        type: "video/mp4",
      };
    case "webm":
      return {
        src: url,
        type: "video/webm",
      };
    default:
      return {};
  }
};
