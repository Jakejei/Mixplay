import React from "react";

const MusicWave = () => {
  const bars = Array.from({ length: 20 });

  return (
    <div style={{
      position: "fixed",
      top: 0, left: 0,
      width: "100vw", height: "100vh",
      zIndex: -1,
      background: "#0a286c",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "flex-end",
      padding: "0 5%"
    }}>
      {bars.map((_, i) => (
        <div key={i} style={{
          width: 6,
          height: 20,
          background: "rgba(255, 255, 255, 0.3)",
          borderRadius: 2,
          animation: "wavePulse 1.6s ease-in-out infinite",
          animationDelay: `${i * 0.1}s`
        }} />
      ))}

      <style>{`
        @keyframes wavePulse {
          0%, 100% { height: 20px; opacity: 0.3; }
          50% { height: 80px; opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default MusicWave;
