"use client";
import { ReactElement, useEffect, useRef } from "react";
import gsap from "gsap";

export function EyeAnimation(): ReactElement {
  const eyesRef = useRef<HTMLDivElement | null>(null);
  const leftEyeRef = useRef<any | null>(null);
  const rightEyeRef = useRef<any | null>(null);

  useEffect(() => {
    if (
      !eyesRef ||
      !eyesRef.current ||
      !leftEyeRef ||
      !leftEyeRef.current ||
      !rightEyeRef ||
      !rightEyeRef.current
    )
      return;

    let bounds = eyesRef.current.getBoundingClientRect();
    const eyesBounds = {
      x: bounds?.x,
      y: bounds?.y + window.scrollY,
    };

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!mediaQuery || mediaQuery.matches) {
      leftEyeRef.current.style.transformOrigin = "50% 50%";
      leftEyeRef.current.style.transformBox = "fill-box";
      rightEyeRef.current.style.transformOrigin = "50% 50%";
      rightEyeRef.current.style.transformBox = "fill-box";
      rightEyeRef.current.style.transform = "rotate(140deg)";
      leftEyeRef.current.style.transform = "rotate(140deg)";
    } else {
      gsap.to([leftEyeRef.current, rightEyeRef.current], {
        rotate: 140,
        transformOrigin: "50% 50%",
        delay: 0.25,
        duration: 1.25,
        ease: "elastic.out(1, 0.4)",
        stagger: 0.05,
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      const origin = {
        x: clientX - eyesBounds.x,
        y: clientY - eyesBounds.y,
      };

      let angle = Math.atan2(origin.y, origin.x);
      let deg = (angle * 180) / Math.PI;

      gsap.to([leftEyeRef.current, rightEyeRef.current], {
        rotate: deg + 90,
        transformOrigin: "50% 50%",
        ease: "elastic.out(1, 0.4)",
        duration: 1.5,
        stagger: 0.025,
      });
    };

    if (window.innerWidth >= 768 && mediaQuery && !mediaQuery.matches) {
      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, []);

  return (
    <div
      ref={eyesRef}
      className="w-10 h-5 text-black dark:text-neutral-100 focus:outline-none"
    >
      <svg viewBox="0 0 34 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g ref={leftEyeRef}>
          <path
            d="M8 15.25C12.0041 15.25 15.25 12.0041 15.25 8C15.25 3.99594 12.0041 0.75 8 0.75C3.99594 0.75 0.75 3.99594 0.75 8C0.75 12.0041 3.99594 15.25 8 15.25Z"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M8 9C10.2091 9 12 7.20914 12 5C12 2.79086 10.2091 1 8 1C5.79086 1 4 2.79086 4 5C4 7.20914 5.79086 9 8 9Z"
            fill="currentColor"
          />
        </g>
        <g ref={rightEyeRef}>
          <path
            d="M26 15.25C30.0041 15.25 33.25 12.0041 33.25 8C33.25 3.99594 30.0041 0.75 26 0.75C21.9959 0.75 18.75 3.99594 18.75 8C18.75 12.0041 21.9959 15.25 26 15.25Z"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M26 9C28.2091 9 30 7.20914 30 5C30 2.79086 28.2091 1 26 1C23.7909 1 22 2.79086 22 5C22 7.20914 23.7909 9 26 9Z"
            fill="currentColor"
          />
        </g>
      </svg>
    </div>
  );
}
