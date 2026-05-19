'use client';

import { useEffect, useState } from 'react';

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let p = 0;
    const tick = setInterval(() => {
      p += Math.random() * 9 + 2;
      if (p >= 100) {
        p = 100;
        clearInterval(tick);
      }
      setProgress(Math.floor(p));
    }, 70);

    const handleLoad = () => {
      setTimeout(() => {
        setDone(true);
        document.getElementById('nav')?.classList.add('show');
        
        // Trigger initial hero line reveals
        document.querySelectorAll('.hero .reveal, .hero .reveal-line').forEach((el, i) => {
          setTimeout(() => el.classList.add('in'), 100 + i * 120);
        });
      }, 1100);
    };

    // Check if document is already loaded
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      clearInterval(tick);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <div id="loader" className={`loader ${done ? 'done' : ''}`}>
      <div className="loader-logo">
        <span>V</span>
        <span>e</span>
        <span>n</span>
        <span>d</span>
        <span className="dot">✻</span>
        <span>A</span>
        <span>x</span>
        <span>i</span>
        <span>s</span>
      </div>
      <div className="loader-bar" />
      <div className="loader-pct" id="loaderPct">
        LOADING — {progress}%
      </div>
    </div>
  );
}
