import React, { useEffect, useRef, useState } from "react";

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentMusicTrack, setCurrentMusicTrack] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const tracks = [
    {
      title: "Track 1",
      source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Track 2",
      source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
      image: "https://via.placeholder.com/150",
    },
  ];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setTrackProgress(
          (audioRef.current.currentTime / audioRef.current.duration) * 100
        );
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  function handlePauseAndPlay() {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  }

  function handleSkipTrack(getDirection) {
    if (getDirection === "forward") {
      setCurrentMusicTrack((prevTrack) => (prevTrack + 1) % tracks.length);
    } else if (getDirection === "backward") {
      setCurrentMusicTrack(
        (prevTrack) => (prevTrack - 1 + tracks.length) % tracks.length
      );
    }

    setTrackProgress(0);
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl text-orange-700 font-semibold mb-4">
        Music Player
      </h1>

      <h2 className="text-2xl mb-2">{tracks[currentMusicTrack].title}</h2>
      <img
        src={tracks[currentMusicTrack].image}
        alt={tracks[currentMusicTrack].title}
        className="w-[25%] rounded-md"
      />
      <audio ref={audioRef} src={tracks[currentMusicTrack].source} />
      <div className="h-[15px] w-[50%] rounded-[8px] bg-orange-300 my-5 overflow-hidden ">
        <div
          style={{
            width: `${trackProgress}%`,
            background: isPlaying ? "#3498db" : "#a43636",
            height: "15px",
          }}
        ></div>
      </div>
      <div className="flex gap-2 mt-3">
        <button
          onClick={() => handleSkipTrack("backward")}
          className="bg-orange-600 px-2 py-2 rounded-md"
        >
          Backward
        </button>
        <button
          onClick={handlePauseAndPlay}
          className="bg-orange-600 px-2 py-2 rounded-md"
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
        <button
          onClick={() => handleSkipTrack("forward")}
          className="bg-orange-600 px-2 py-2 rounded-md"
        >
          Forward
        </button>
      </div>
    </div>
  );
};

export default MusicPlayer;
