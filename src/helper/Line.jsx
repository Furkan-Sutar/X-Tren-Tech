import React, { useEffect, useRef, useState } from 'react';
import 'tailwindcss/tailwind.css';

const Line = () => {
  const [inView, setInView] = useState(false);
  const lineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (lineRef.current) {
      observer.observe(lineRef.current);
    }

    return () => {
      if (lineRef.current) {
        observer.unobserve(lineRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full mb-10 h-0.5 bg-gray-700 relative">
      <div
        ref={lineRef}
        className={`absolute h-0.5 bg-cyan-400 transition-all duration-1000 ${inView ? 'w-1/4' : 'w-0'}`}
      ></div>
    </div>
  );
};

export default Line;
