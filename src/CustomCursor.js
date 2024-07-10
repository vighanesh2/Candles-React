import React, { useEffect, useRef } from 'react';
import './CustumCursor.css';

const CustomCursor = ({ gifUrl }) => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div className="custom-cursor" ref={cursorRef}>
      <img src={gifUrl} alt="custom cursor" />
    </div>
  );
};

export default CustomCursor;
