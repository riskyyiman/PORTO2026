'use client';

import React from 'react';
import Typewriter from 'typewriter-effect';

export const TypingEffect = () => {
  return (
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">
      <Typewriter
        options={{
          strings: ['Front-End Web Developer', 'Web Developer Enthusiast'],
          autoStart: true,
          loop: true,
          delay: 100,
          deleteSpeed: 50,
          wrapperClassName: 'bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500',
          cursorClassName: 'text-cyan-400',
        }}
      />
    </span>
  );
};
