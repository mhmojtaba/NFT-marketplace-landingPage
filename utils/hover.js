"use client";
import React, { useEffect, useState } from "react";

const hover3d = (ref, { x = 0, y = 0, z = 0 }) => {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    const { offsetHeight, offsetWidth } = ref.current;
    const x = (e.clientX - offsetWidth / 2) / offsetWidth;
    const y = (e.clientY - offsetHeight / 2) / offsetHeight;

    setCoordinates({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const { current } = ref;

    current.addEventListener("mousemove", handleMouseMove);
    current.addEventListener("mouseenter", handleMouseEnter);
    current.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      current.removeEventListener("mousemove", handleMouseMove);
      current.removeEventListener("mouseenter", handleMouseEnter);
      current.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [ref]);

  const { x: xCoords, y: yCoords } = coordinates;
  const xTransform = isHovering ? xCoords * x : 0;
  const yTransform = isHovering ? yCoords * y : 0;
  const zTransform = isHovering ? z : 0;

  const transform = `perspective(1000px) rotateX(${yTransform}deg) rotateY(${-xTransform}deg) translateZ(${zTransform}px)`;
  const transition = isHovering && "all 0.1s ease";

  return { transform, transition };
};

export default hover3d;
