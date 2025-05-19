import React from "react";

const AnimatedNeedle = ({ cents }) => {
  const maxCents = 50;
  const clamped = Math.max(-maxCents, Math.min(maxCents, cents));
  const rotation = (clamped / maxCents) * 45;

  return (
    <div style={{ position: "relative", width: 200, height: 100, margin: "0 auto" }}>
      <div style={{ position: "absolute", bottom: 0, width: "100%", height: 10, background: "#ddd", borderRadius: 10 }} />
      <div style={{ position: "absolute", left: "50%", bottom: 0, width: 2, height: 20, background: "green", transform: "translateX(-50%)" }} />
      <div style={{
        position: "absolute",
        bottom: 10,
        left: "50%",
        width: 4,
        height: 80,
        background: "black",
        borderRadius: 2,
        transformOrigin: "bottom center",
        transform: `translateX(-50%) rotate(${rotation}deg)`,
        transition: "transform 0.3s ease-out"
      }} />
    </div>
  );
};

export default AnimatedNeedle;
