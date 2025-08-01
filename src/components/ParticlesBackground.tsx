import React from "react";

export const ParticlesBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 w-full h-full bg-gradient-to-b from-[#0a0f2c] via-[#1c2259] to-black overflow-hidden">
      <div className="w-full h-full relative">
        {/* Star field */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:15px_15px] opacity-20 animate-pulse" />

        {/* Nebula glow 1 */}
        <div className="absolute top-1/4 left-1/3 w-[400px] h-[400px] bg-[#6d28d9] rounded-full blur-3xl opacity-20" />

        {/* Nebula glow 2 */}
        <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] bg-[#3b82f6] rounded-full blur-2xl opacity-20" />

        {/* Extra glow or distant star cluster */}
        <div className="absolute bottom-10 left-10 w-[200px] h-[200px] bg-[#9333ea] rounded-full blur-[100px] opacity-10" />
      </div>
    </div>
  );
};
