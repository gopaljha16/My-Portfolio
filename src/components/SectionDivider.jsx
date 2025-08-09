import React from "react";

const SectionDivider = () => {
  return (
    <div className="container-px">
      <div className="relative h-16 sm:h-20">
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </div>
    </div>
  );
};

export default SectionDivider;
