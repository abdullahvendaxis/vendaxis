"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";

export default function SmoothScroll() {

  useEffect(() => {

    // PREMIUM SMOOTH SCROLL
    const lenis = new Lenis({
      duration: 1.8,

      lerp: 0.07,

      smoothWheel: true,
      smoothTouch: true,

      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,

      infinite: false,
    });

    // RAF LOOP
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // GSAP TICKER
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
    };

  }, []);

  return null;
}