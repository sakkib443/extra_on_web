"use client";
import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

export default function ScrollProvider({ children }) {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
  el: document.querySelector("#scroll-container"),
  smooth: true,
  lerp: 0.06,        // silky softness
  multiplier: 0.8,   // slow speed
});


    return () => scroll.destroy();
  }, []);

  return <div id="scroll-container">{children}</div>;
}
