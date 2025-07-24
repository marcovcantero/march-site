import React from "react";

interface AudioMiniPlayerProps {
  audioSrc: string;
  songTitle: string;
  songSubtitle?: string;
  className?: string;
}

const AudioMiniPlayer: React.FC<AudioMiniPlayerProps> = ({
  audioSrc,
  songTitle,
  songSubtitle,
  className = "",
}) => {
  return (
    <div
      className={className}
      style={{
        background: "rgba(30, 41, 59, 0.95)",
        borderRadius: "12px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
        padding: "16px",
        width: "360px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <audio
        src={audioSrc}
        controls
        autoPlay
        loop
        style={{ width: "320px", marginBottom: "10px" }}
      />
      <div className="text-white font-semibold text-base mb-1">{songTitle}</div>
      {songSubtitle && (
        <div className="text-gray-300 text-sm">{songSubtitle}</div>
      )}
    </div>
  );
};

export default AudioMiniPlayer;
