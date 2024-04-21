"use client";

import { ReactElement, useRef } from "react";
import { GithubIcon } from "./github-icon";
import { ExternalLinkIcon } from "./external-link";
import { motion, useAnimate, useMotionValue, useTime } from "framer-motion";
import Link from "next/link";

export function Project({
  srNo,
  title,
  description,
  toolsUsed,
  githubLink,
  liveLink,
  demoVid,
}: {
  srNo: number;
  title: string;
  description: string;
  toolsUsed: string[];
  githubLink: string;
  liveLink: string;
  demoVid: string;
}): ReactElement {
  const [scope, animate] = useAnimate();
  const time = useTime();

  const videoRef = useRef<HTMLVideoElement | null>(null);
  let startTime = -1000;
  let exitTime = 0;
  let animationStarted = false;
  async function handleMouseEnter() {
    if (animationStarted || exitTime + 810 > time.current) return;
    animationStarted = true;
    startTime = time.current;

    if (videoRef && videoRef.current) {
      videoRef.current.play();
      if (srNo % 2 === 1) animate("video", { x: [0, 133, 0] });
      else animate("video", { x: [0, -133, 0] });
      animate(scope.current, { deltaEnter: [0, 133, 0] });
    }
  }

  async function handleMouseExit() {
    if (!animationStarted) return;
    if (startTime + 810 > time.current)
      await new Promise((resolve) =>
        setTimeout(resolve, startTime + 810 - time.current)
      );

    if (videoRef && videoRef.current) {
      videoRef.current.pause();
      //   videoRef.current.currentTime = 0;

      if (srNo % 2 === 1) animate("video", { x: [0, 133, 0] });
      else animate("video", { x: [0, -133, 0] });
      animate(scope.current, { deltaExit: [0, 133, 0] });
    }

    animationStarted = false;
    exitTime = time.current;
  }
  function handleAnimationUpdate(latest: {
    deltaEnter?: number;
    deltaExit?: number;
  }) {
    console.log("hi3");
    // console.log(latest);
    if (
      latest.deltaEnter &&
      latest.deltaEnter >= 132 &&
      videoRef &&
      videoRef.current &&
      videoRef.current.parentElement
    ) {
      videoRef.current.parentElement.style.zIndex = "20";
    }
    if (
      latest.deltaExit &&
      latest.deltaExit >= 132 &&
      videoRef &&
      videoRef.current &&
      videoRef.current.parentElement
    ) {
      videoRef.current.parentElement.style.zIndex = "0";
    }
  }
  return (
    <div
      className={`relative flex ${
        srNo % 2 === 1 ? "flex-row" : "flex-row-reverse"
      } items-center h-80 mb-8`}
    >
      <div
        className={`z-10 w-80 grid ${
          srNo % 2 === 1
            ? "justify-start justify-items-start"
            : "justify-end justify-items-end"
        }`}
      >
        <h3 className="mb-1">
          <Link
            href="https://algo-hub.adityastack.dev"
            target="_blank"
            rel="noopener noreferrer"
            className=" text-xl text-black font-semibold"
          >
            {title}
          </Link>
        </h3>
        <div
          className={`w-[466px] bg-white shadow-lg p-3 rounded-md mb-3 ${
            srNo % 2 === 1 ? " start-0 text-left" : " end-0 text-right"
          }`}
        >
          <p>{description}</p>
        </div>
        <ul
          className={`flex flex-wrap mb-3 w-80 text-gray-400 ${
            srNo % 2 === 1 ? " justify-start" : " justify-end"
          }`}
        >
          {toolsUsed.map((tool, index) => {
            return (
              <li key={index} className={`${srNo % 2 === 1 ? "mr-4" : "ml-4"}`}>
                {tool}
              </li>
            );
          })}
        </ul>
        <div className="flex bg-red items-center">
          <Link href={githubLink} target="_blank" rel="noopener noreferrer">
            <GithubIcon className="w-6 h-6 hover:text-gray-700 transition-all duration-50 mr-1" />
          </Link>
          <Link href={liveLink} target="_blank" rel="noopener noreferrer">
            <ExternalLinkIcon className="w-6 h-6 hover:text-gray-700 transition-all duration-50" />
          </Link>
        </div>
      </div>
      <motion.a
        href={liveLink}
        target="_blank"
        rel="noopener noreferrer"
        ref={scope}
        className={`absolute top-0 ${
          srNo % 2 === 1 ? " right-0" : " left-0"
        }  h-72 w-7/12`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseExit}
        onUpdate={handleAnimationUpdate}
      >
        <video
          ref={videoRef}
          src={demoVid}
          loop
          muted
          className="w-full h-72 object-cover rounded-md border border-gray-250 hover:cursor-pointer"
        />
      </motion.a>
    </div>
  );
}
