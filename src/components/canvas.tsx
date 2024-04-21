"use client";
import React, { useEffect, useRef, useState } from "react";

export function MyCanvas() {
  const r180 = Math.PI;
  const r90 = Math.PI / 2;
  const r15 = Math.PI / 12;
  const color = "#888888";
  const MIN_BRANCH = 7;
  const len = 6;
  const { random } = Math;

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const reqRef = useRef<number>(0);
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });
  const steps = useRef<(() => void)[]>([]);

  function initCanvas(
    canvas: HTMLCanvasElement,
    width: number,
    height: number,
    _dpi?: number
  ) {
    const ctx = canvas.getContext("2d")!;

    const dpr = window.devicePixelRatio || 1;
    const bsr = 1;
    const dpi = _dpi || dpr / bsr;

    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    canvas.width = dpi * width;
    canvas.height = dpi * height;
    ctx.scale(dpi, dpi);
    return { ctx, dpi };
  }

  function polar2cart(x = 0, y = 0, r = 0, theta = 0) {
    const dx = r * Math.cos(theta);
    const dy = r * Math.sin(theta);
    return [x + dx, y + dy];
  }

  useEffect(() => {
    if (size.width !== window.innerWidth || size.height !== window.innerHeight)
      setSize({ width: window.innerWidth, height: window.innerHeight });

    const canvas = canvasRef.current!;
    const { ctx } = initCanvas(canvas, window.innerWidth, window.innerHeight);

    function step(x: number, y: number, rad: number, counter: number | 0) {
      const length = random() * len;
      counter += 1;

      const [nx, ny] = polar2cart(x, y, length, rad);

      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(nx, ny);
      ctx.stroke();

      const rad1 = rad + random() * r15;
      const rad2 = rad - random() * r15;

      if (
        nx < -100 ||
        nx > size.width + 100 ||
        ny < -100 ||
        ny > size.height + 100
      )
        return;
      const rate = counter <= MIN_BRANCH ? 0.8 : 0.5;

      if (random() < rate)
        steps.current = [...steps.current, () => step(nx, ny, rad1, counter)];
      if (random() < rate)
        steps.current = [...steps.current, () => step(nx, ny, rad2, counter)];
    }

    steps.current = [];
    ctx.clearRect(0, 0, size.width, size.height);
    ctx.lineWidth = 0.1;
    ctx.strokeStyle = color;
    steps.current = [
      () => step(random() * window.innerWidth, -5, r90, 0),
      () => step(random() * window.innerWidth, window.innerHeight + 5, -r90, 0),
      () => step(-5, random() * window.innerHeight, 0, 0),
      () => step(window.innerWidth + 5, random() * window.innerHeight, r180, 0),
    ];

    if (window.innerWidth < 500) steps.current = steps.current.slice(0, 2);

    let lastTime = performance.now();

    function animate(timestamp: number) {
      if (!lastTime) lastTime = timestamp;
      const elapsedTime = timestamp - lastTime;

      if (elapsedTime > 1000 / 40) {
        const prevSteps = steps.current;
        steps.current = [];

        prevSteps.forEach((i) => {
          if (random() < 0.5) steps.current = [...steps.current, i];
          else i();
        });

        lastTime = timestamp;
      }

      reqRef.current = requestAnimationFrame(animate);
    }

    // Start animation (if step still in stack then exec)
    reqRef.current = requestAnimationFrame(animate);

    // Clean up
    return () => cancelAnimationFrame(reqRef.current);
  }, [size.height, size.width, r15, r90, r180, random]);

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 pointer-events-none print:hidden z-[-1] bg-white">
      <div className="w-full h-full absolute inset-0 bg-gradient-radial from-white to-transparent z-[-1] blur-lg" />

      <canvas
        ref={canvasRef}
        width="400"
        height="400"
        className="w-full h-full absolute z-[-2]"
      />
    </div>
  );
}
