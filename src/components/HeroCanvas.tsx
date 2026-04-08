"use client";

import { useRef, useEffect } from "react";

const PARTICLE_COUNT_DESKTOP = 300;
const GRID_COLS_DESKTOP = 20;
const GRID_ROWS_DESKTOP = 15;

type Particle = {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  vx: number;
  vy: number;
  radius: number;
};

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const parent = canvas.parentElement;
    if (!parent) return;

    // Skip canvas on mobile (<=768px) for battery/performance
    const isMobile = window.innerWidth <= 768;
    if (isMobile) return;

    // Skip canvas entirely if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const PARTICLE_COUNT = PARTICLE_COUNT_DESKTOP;
    const GRID_COLS = GRID_COLS_DESKTOP;
    const GRID_ROWS = GRID_ROWS_DESKTOP;

    let particles: Particle[] = [];
    let mouseX = -9999;
    let mouseY = -9999;
    let animationId: number;
    let width = 0;
    let height = 0;

    function resize() {
      if (!parent || !canvas) return;
      const rect = parent.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width;
      canvas.height = height;
    }

    function initParticles() {
      particles = [];

      // First, fill every grid cell with one particle to ensure full coverage
      const totalCells = GRID_COLS * GRID_ROWS;
      const cellW = width / GRID_COLS;
      const cellH = height / GRID_ROWS;

      for (let i = 0; i < totalCells && i < PARTICLE_COUNT; i++) {
        const col = i % GRID_COLS;
        const row = Math.floor(i / GRID_COLS);
        const targetX = col * cellW + cellW / 2 + (Math.random() - 0.5) * cellW * 0.6;
        const targetY = row * cellH + cellH / 2 + (Math.random() - 0.5) * cellH * 0.6;

        particles.push({
          x: targetX + (Math.random() - 0.5) * 40,
          y: targetY + (Math.random() - 0.5) * 40,
          targetX,
          targetY,
          vx: 0,
          vy: 0,
          radius: 1.5 + Math.random() * 1.5,
        });
      }

      // Then scatter remaining particles randomly across the full canvas
      for (let i = totalCells; i < PARTICLE_COUNT; i++) {
        const targetX = Math.random() * width;
        const targetY = Math.random() * height;

        particles.push({
          x: targetX + (Math.random() - 0.5) * 40,
          y: targetY + (Math.random() - 0.5) * 40,
          targetX,
          targetY,
          vx: 0,
          vy: 0,
          radius: 1.5 + Math.random() * 1.5,
        });
      }
    }

    function draw() {
      if (!ctx) return;

      ctx.clearRect(0, 0, width, height);

      const styles = getComputedStyle(document.documentElement);
      const particleColor = styles.getPropertyValue("--canvas-particle").trim() || "rgba(255,255,255,0.7)";
      const lineColor = styles.getPropertyValue("--canvas-line").trim() || "rgba(255,255,255,0.1)";

      // Update particles
      for (const p of particles) {
        // Drift toward target with noise
        const noiseX = (Math.random() - 0.5) * 0.3;
        const noiseY = (Math.random() - 0.5) * 0.3;
        p.vx += (p.targetX - p.x) * 0.02 + noiseX;
        p.vy += (p.targetY - p.y) * 0.02 + noiseY;
        p.vx *= 0.9;
        p.vy *= 0.9;

        // Mouse repulsion
        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120 && dist > 0) {
          const force = (120 - dist) / 120;
          p.vx += (dx / dist) * force * 3;
          p.vy += (dy / dist) * force * 3;
        }

        p.x += p.vx;
        p.y += p.vy;
      }

      // Draw connections
      ctx.strokeStyle = lineColor;
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 80) {
            ctx.globalAlpha = 1 - dist / 80;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;

      // Draw particles
      ctx.fillStyle = particleColor;
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationId = requestAnimationFrame(draw);
    }

    function onMouseMove(e: MouseEvent) {
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    }

    function onMouseLeave() {
      mouseX = -9999;
      mouseY = -9999;
    }

    resize();
    initParticles();
    draw();

    function onResize() {
      resize();
      initParticles();
    }

    parent.addEventListener("mousemove", onMouseMove);
    parent.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animationId);
      parent.removeEventListener("mousemove", onMouseMove);
      parent.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="hero-canvas"
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}
