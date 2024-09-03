"use client";
import { useEffect, useRef } from 'react';

export default function CursorColorChanger() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const cursor = cursorRef.current;
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed w-12 h-12 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-dracula-green opacity-70 blur-sm animate-glow"
      style={{ zIndex: 1000 }}
    ></div>
  );
}