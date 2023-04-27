import Image from 'next/image';
import React from 'react';

const Slider = () => {
  return (
    <div id="gallery" className="max-w-[1240px] mx-auto">
      <div className="relative flex justify-center p-4">
        <Image src="/slider.jpeg" alt="/" width="1440" height="600" />
      </div>
    </div>
  );
};

export default Slider;
