"use client";

import { ReactElement, useRef } from "react";
import { GithubIcon } from "./github-icon";
import { ExternalLinkIcon } from "./external-link";
import { motion, useAnimate, useTime } from "framer-motion";
import { useWindowSize } from "@uidotdev/usehooks";
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
  const windowSize = useWindowSize();
  const [scope, animate] = useAnimate();
  const time = useTime();

  const videoRef = useRef<HTMLVideoElement | null>(null);
  let startTime = -1000;
  let exitTime = 0;
  let animationStarted = false;
  async function handleMouseEnter() {
    if (windowSize && windowSize.width && windowSize.width < 1024) {
      if (videoRef && videoRef.current) videoRef.current.play();
      return;
    }

    // @ts-ignore
    if (animationStarted || exitTime + 810 > time.current) return;
    animationStarted = true;
    // @ts-ignore
    startTime = time.current;

    if (videoRef && videoRef.current) {
      videoRef.current.play();
      if (srNo % 2 === 1) animate("video", { x: [0, 133, 0] });
      else animate("video", { x: [0, -133, 0] });
      animate(scope.current, { deltaEnter: [0, 133, 0] });
    }
  }

  async function handleMouseExit() {
    if (windowSize && windowSize.width && windowSize.width < 1024) {
      if (videoRef && videoRef.current) videoRef.current.pause();
      return;
    }

    if (!animationStarted) return;
    // @ts-ignore
    if (startTime + 810 > time.current)
      await new Promise((resolve) =>
        // @ts-ignore
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
    // @ts-ignore
    exitTime = time.current;
  }
  function handleAnimationUpdate(latest: {
    deltaEnter?: number;
    deltaExit?: number;
  }) {
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
      className={`relative flex flex-col ${
        srNo % 2 === 1 ? "lg:flex-row" : "lg:flex-row-reverse"
      } items-center lg:h-80 mb-8`}
    >
      <div
        className={`z-10 w-fit sm:w-3/4 lg:w-80 grid ${
          srNo % 2 === 1
            ? "lg:justify-start lg:justify-items-start"
            : "lg:justify-end lg:justify-items-end"
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
          className={`lg:w-[466px] bg-white shadow-lg rounded-md p-3 mb-3 ${
            srNo % 2 === 1 ? "start-0 text-left" : "end-0 lg:text-right"
          }`}
        >
          <p>{description}</p>
        </div>
        <ul
          className={`flex flex-wrap mb-3 w-3/4 lg:w-80 text-gray-400 ${
            srNo % 2 === 1 ? " justify-start" : " lg:justify-end"
          }`}
        >
          {toolsUsed.map((tool, index) => {
            return (
              <li
                key={index}
                className={`mr-4 ${srNo % 2 === 1 ? "" : "lg:mr-0 lg:ml-4"}`}
              >
                {tool}
              </li>
            );
          })}
        </ul>
        <div className="flex bg-red items-center mb-2 lg:mb-0">
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
        className={`lg:absolute lg:top-0 ${
          srNo % 2 === 1 ? "lg:right-0" : "lg:left-0"
        } h-fit sm:h-72 w-fit lg:w-7/12 `}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseExit}
        onUpdate={handleAnimationUpdate}
      >
        <video
          ref={videoRef}
          src={demoVid}
          loop
          muted
          className="w-full h-full object-cover rounded-md border border-gray-250 hover:cursor-pointer"
        />
      </motion.a>
    </div>
  );
}
