'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Hero() {
  const canvasRef = useRef(null);
  const wrapRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    
    if (!canvas || !wrap) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
    camera.position.z = 5;
    
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const resize = () => {
      const r = canvas.getBoundingClientRect();
      renderer.setSize(r.width, r.height, false);
      camera.aspect = r.width / r.height;
      camera.updateProjectionMatrix();
    };
    
    resize();
    window.addEventListener('resize', resize);

    // Lighting
    scene.add(new THREE.AmbientLight(0xffffff, 0.5));
    const key = new THREE.DirectionalLight(0xffffff, 1.1);
    key.position.set(3, 3, 4);
    scene.add(key);
    const rim = new THREE.DirectionalLight(0xbe6200, 0.9);
    rim.position.set(-3, 1, -2);
    scene.add(rim);
    const fill = new THREE.DirectionalLight(0xff6a3d, 0.5);
    fill.position.set(1, -2, 2);
    scene.add(fill);

    // Build particle cloud
    const group = new THREE.Group();
    const count = 360;
    const cubeGeo = new THREE.BoxGeometry(0.06, 0.06, 0.06);
    const matCream = new THREE.MeshStandardMaterial({
      color: 0xf2ede0,
      metalness: 0.3,
      roughness: 0.4,
    });
    const matAmber = new THREE.MeshStandardMaterial({
      color: 0xbe6200,
      metalness: 0.4,
      roughness: 0.35,
      emissive: 0x5a2e00,
      emissiveIntensity: 0.5,
    });
    const matCoral = new THREE.MeshStandardMaterial({
      color: 0xff6a3d,
      metalness: 0.3,
      roughness: 0.35,
      emissive: 0x4a1500,
      emissiveIntensity: 0.4,
    });

    const particles = [];
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(1 - 2 * ((i + 0.5) / count));
      const theta = Math.PI * (1 + Math.sqrt(5)) * (i + 0.5);
      const rad = 1.15;
      const x = Math.cos(theta) * Math.sin(phi) * rad;
      const y = Math.sin(theta) * Math.sin(phi) * rad;
      const z = Math.cos(phi) * rad;
      const rng = Math.random();
      const mat = rng < 0.07 ? matAmber : rng < 0.12 ? matCoral : matCream;
      const cube = new THREE.Mesh(cubeGeo, mat);
      cube.position.set(x, y, z);
      cube.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
      cube.userData.home = new THREE.Vector3(x, y, z);
      group.add(cube);
      particles.push(cube);
    }
    scene.add(group);

    // Star target shape
    const starTargets = [];
    const arms = 8;
    const outerR = 1.35;
    const innerR = 0.45;
    for (let i = 0; i < count; i++) {
      const t = i / count;
      const armIdx = Math.floor(t * arms * 2);
      const local = (t * arms * 2) % 1;
      const a1 = (armIdx / (arms * 2)) * Math.PI * 2;
      const a2 = ((armIdx + 1) / (arms * 2)) * Math.PI * 2;
      const r1 = armIdx % 2 === 0 ? outerR : innerR;
      const r2 = armIdx % 2 === 0 ? innerR : outerR;
      const sx = r1 * Math.cos(a1) + (r2 * Math.cos(a2) - r1 * Math.cos(a1)) * local;
      const sy = r1 * Math.sin(a1) + (r2 * Math.sin(a2) - r1 * Math.sin(a1)) * local;
      const sz = (Math.random() - 0.5) * 0.25;
      starTargets.push(new THREE.Vector3(sx, sy, sz));
    }

    // Hover state
    let hover = false;
    wrap.addEventListener('mouseenter', () => { hover = true; });
    wrap.addEventListener('mouseleave', () => { hover = false; });

    const LERP_SPEED = 0.025;

    let t = 0;
    const render = () => {
      t += 0.005;

      particles.forEach((c, i) => {
        const target = hover ? starTargets[i] : c.userData.home;
        c.position.x += (target.x - c.position.x) * LERP_SPEED;
        c.position.y += (target.y - c.position.y) * LERP_SPEED;
        c.position.z += (target.z - c.position.z) * LERP_SPEED;
      });

      group.rotation.y += hover ? 0.001 : 0.004;
      group.rotation.z += hover ? 0.002 : 0;

      renderer.render(scene, camera);
      requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <header className="hero">
      <div className="hero-grid">
        <div className="hero-top reveal">
          <span className="mono">● Available Q2 2026 · Dubai, UAE</span>
          <span className="mono">Est. 2019 / Digital studio</span>
        </div>
        <div className="hero-stage">
          <h1>
            <span className="reveal-line"><span>VEND<span className="middle-gap">&nbsp;</span>AXIS</span></span>
            <span className="reveal-line" style={{display: 'block', fontSize: '.32em', letterSpacing: '.4em', marginTop: 12}}><span>DIGITAL&nbsp;&nbsp;STUDIO</span></span>
          </h1>
          <div ref={wrapRef} className="orb-wrap" id="orbWrap">
            <canvas ref={canvasRef} id="orbCanvas" />
            <div className="orb-ring">
              <svg viewBox="0 0 200 200">
                <defs><path id="ringPath" d="M100,100 m-92,0 a92,92 0 1,1 184,0 a92,92 0 1,1 -184,0" /></defs>
                <text>
                  <textPath href="#ringPath" startOffset="0%" textLength="578" lengthAdjust="spacingAndGlyphs">
                    APP DEVELOPMENT ✻ WEB DESIGN ✻ AUTOMATION ✻ BRANDING ✻ DIGITAL MARKETING ✻ UI/UX ✻ MOTION ✻ AI ✻
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>
        <div className="hero-bottom">
          <p className="hero-desc reveal">
            VendAxis is a <span className="italic">digital studio</span> based in Business Bay — engineering apps, websites, automations and brand systems for startups and enterprises who refuse to look average.
          </p>
          <div className="hero-cta-row reveal">
            <a href="#work" className="btn btn-primary">See the work →</a>
            <a href="#contact" className="btn btn-ghost">Start a project</a>
          </div>
        </div>
      </div>
      <div className="scroll-ind mono">
        SCROLL<br />↓
      </div>
    </header>
  );
}
