'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import '@/styles/five-steps.css';
import { STAGES } from '@/content/shared';

const COLORS: [number, number, number][] = [
  [123, 127, 228],
  [100, 110, 230],
  [124, 92, 252],
  [140, 110, 255],
  [160, 130, 255],
];

/* ===== CANVAS HELPERS ===== */
interface AnimController {
  start: () => void;
  stop: () => void;
}

function setupCanvas(canvas: HTMLCanvasElement): { ctx: CanvasRenderingContext2D; w: number; h: number } {
  const dpr = window.devicePixelRatio || 1;
  const w = canvas.clientWidth || 500;
  const h = canvas.clientHeight || 120;
  canvas.width = w * dpr;
  canvas.height = h * dpr;
  const ctx = canvas.getContext('2d')!;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  return { ctx, w, h };
}

/* ===== ANIMATION 1: CURATE ===== */
function createCurate(canvas: HTMLCanvasElement, stageIdx: number): AnimController {
  const col = COLORS[stageIdx];
  let running = false;
  let raf = 0;
  let dots: { sx: number; sy: number; x: number; y: number; tx: number; ty: number; speed: number; progress: number; size: number; delay: number }[] = [];
  let time = 0;

  function init() {
    const { w, h } = setupCanvas(canvas);
    dots = [];
    for (let i = 0; i < 40; i++) {
      const side = Math.floor(Math.random() * 4);
      let sx: number, sy: number;
      if (side === 0) { sx = Math.random() * w; sy = -6; }
      else if (side === 1) { sx = w + 6; sy = Math.random() * h; }
      else if (side === 2) { sx = Math.random() * w; sy = h + 6; }
      else { sx = -6; sy = Math.random() * h; }
      dots.push({
        sx, sy, x: sx, y: sy,
        tx: w / 2 + (Math.random() - 0.5) * 20,
        ty: h / 2 + (Math.random() - 0.5) * 10,
        speed: 0.009 + Math.random() * 0.012,
        progress: Math.random() * 0.3,
        size: 1.5 + Math.random() * 2,
        delay: Math.random() * 0.4,
      });
    }
  }

  function draw() {
    if (!running) return;
    const { ctx, w, h } = setupCanvas(canvas);
    ctx.clearRect(0, 0, w, h);
    time += 0.016;

    const grd = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, 40);
    grd.addColorStop(0, `rgba(${col[0]},${col[1]},${col[2]},0.12)`);
    grd.addColorStop(1, `rgba(${col[0]},${col[1]},${col[2]},0)`);
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, w, h);

    ctx.beginPath();
    ctx.moveTo(w * 0.15, 8);
    ctx.lineTo(w / 2 - 10, h / 2 - 5);
    ctx.lineTo(w / 2 + 10, h / 2 - 5);
    ctx.lineTo(w * 0.85, 8);
    ctx.strokeStyle = `rgba(${col[0]},${col[1]},${col[2]},0.04)`;
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, h - 8);
    ctx.lineTo(w / 2 - 10, h / 2 + 5);
    ctx.lineTo(w / 2 + 10, h / 2 + 5);
    ctx.lineTo(w, h - 8);
    ctx.strokeStyle = `rgba(${col[0]},${col[1]},${col[2]},0.04)`;
    ctx.stroke();

    for (const d of dots) {
      d.progress += d.speed;
      if (d.progress > 1) {
        d.progress = 0;
        const side = Math.floor(Math.random() * 4);
        if (side === 0) { d.sx = Math.random() * w; d.sy = -6; }
        else if (side === 1) { d.sx = w + 6; d.sy = Math.random() * h; }
        else if (side === 2) { d.sx = Math.random() * w; d.sy = h + 6; }
        else { d.sx = -6; d.sy = Math.random() * h; }
        d.x = d.sx; d.y = d.sy;
      }
      const t = Math.max(0, d.progress);
      const ease = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
      d.x = d.sx + (d.tx - d.sx) * ease;
      d.y = d.sy + (d.ty - d.sy) * ease;

      const alpha = Math.sin(t * Math.PI) * 0.7;
      ctx.beginPath();
      ctx.arc(d.x, d.y, d.size * 3, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${col[0]},${col[1]},${col[2]},${alpha * 0.06})`;
      ctx.fill();
      ctx.beginPath();
      ctx.arc(d.x, d.y, d.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${col[0]},${col[1]},${col[2]},${alpha})`;
      ctx.fill();
    }

    const pulse = 3 + Math.sin(time * 3) * 1.5;
    ctx.beginPath();
    ctx.arc(w / 2, h / 2, pulse, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${col[0]},${col[1]},${col[2]},0.6)`;
    ctx.fill();

    raf = requestAnimationFrame(draw);
  }

  init();
  return {
    start() { running = true; init(); draw(); },
    stop() { running = false; cancelAnimationFrame(raf); },
  };
}

/* ===== ANIMATION 2: SYNTHESIZE ===== */
function createSynthesize(canvas: HTMLCanvasElement, stageIdx: number): AnimController {
  const col = COLORS[stageIdx];
  let running = false;
  let raf = 0;
  let dots: { x: number; y: number; tx: number; ty: number; progress: number; speed: number; size: number; group: number }[] = [];
  let time = 0;

  function init() {
    const { w, h } = setupCanvas(canvas);
    dots = [];
    const cols = 8, rows = 3;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const tx = (w * 0.12) + (c / (cols - 1)) * (w * 0.76);
        const ty = (h * 0.22) + (r / (rows - 1)) * (h * 0.56);
        dots.push({
          x: Math.random() * w, y: Math.random() * h,
          tx, ty,
          progress: 0,
          speed: 0.008 + Math.random() * 0.009,
          size: 2 + Math.random() * 1.5,
          group: r,
        });
      }
    }
  }

  function draw() {
    if (!running) return;
    const { ctx, w, h } = setupCanvas(canvas);
    ctx.clearRect(0, 0, w, h);
    time += 0.016;

    for (const d of dots) {
      d.progress = Math.min(1, d.progress + d.speed);
      const t = d.progress;
      const ease = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

      const cx = d.x + (d.tx - d.x) * ease;
      const cy = d.y + (d.ty - d.y) * ease;

      const jitter = (1 - ease) * 18;
      const fx = cx + Math.sin(time * 2 + d.tx) * jitter;
      const fy = cy + Math.cos(time * 1.7 + d.ty) * jitter;

      const alpha = 0.3 + ease * 0.5;
      ctx.beginPath();
      ctx.arc(fx, fy, d.size * 3, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${col[0]},${col[1]},${col[2]},${alpha * 0.06})`;
      ctx.fill();
      ctx.beginPath();
      ctx.arc(fx, fy, d.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${col[0]},${col[1]},${col[2]},${alpha})`;
      ctx.fill();

      if (ease > 0.85) {
        const idx = dots.indexOf(d);
        const next = dots[idx + 1];
        if (next && next.group === d.group && next.progress > 0.85) {
          const nEase = next.progress < 0.5 ? 4 * next.progress * next.progress * next.progress : 1 - Math.pow(-2 * next.progress + 2, 3) / 2;
          void nEase; // used only for condition check above
          const groupAlpha = (ease - 0.85) / 0.15 * 0.15;
          ctx.beginPath();
          ctx.moveTo(d.tx, d.ty);
          ctx.lineTo(next.tx, next.ty);
          ctx.strokeStyle = `rgba(${col[0]},${col[1]},${col[2]},${groupAlpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }

    if (dots.every(d => d.progress >= 1)) {
      setTimeout(() => {
        if (!running) return;
        for (const d of dots) {
          d.x = Math.random() * (canvas.clientWidth || 500);
          d.y = Math.random() * (canvas.clientHeight || 120);
          d.progress = 0;
          d.speed = 0.008 + Math.random() * 0.009;
        }
      }, 500);
    }

    raf = requestAnimationFrame(draw);
  }

  init();
  return {
    start() { running = true; init(); draw(); },
    stop() { running = false; cancelAnimationFrame(raf); },
  };
}

/* ===== ANIMATION 3: CONSOLIDATE ===== */
function createConsolidate(canvas: HTMLCanvasElement, stageIdx: number): AnimController {
  const col = COLORS[stageIdx];
  let running = false;
  let raf = 0;
  let nodes: { x: number; y: number; size: number }[] = [];
  let edges: { a: number; b: number; dist: number }[] = [];
  let time = 0;
  let lineProgress = 0;

  function init() {
    const { w, h } = setupCanvas(canvas);
    nodes = [];
    edges = [];
    const positions = [
      [0.12, 0.3], [0.25, 0.7], [0.38, 0.25], [0.42, 0.65],
      [0.55, 0.45], [0.62, 0.2], [0.68, 0.72], [0.78, 0.38],
      [0.88, 0.6], [0.5, 0.85], [0.18, 0.5], [0.85, 0.18],
    ];
    for (const [px, py] of positions) {
      nodes.push({ x: px * w, y: py * h, size: 2.5 + Math.random() * 2 });
    }
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < w * 0.28) {
          edges.push({ a: i, b: j, dist });
        }
      }
    }
    lineProgress = 0;
  }

  function draw() {
    if (!running) return;
    const { ctx, w, h } = setupCanvas(canvas);
    ctx.clearRect(0, 0, w, h);
    time += 0.016;
    lineProgress = Math.min(1, lineProgress + 0.013);

    for (let i = 0; i < edges.length; i++) {
      const e = edges[i];
      const edgeStart = i / edges.length * 0.6;
      const edgeProgress = Math.max(0, Math.min(1, (lineProgress - edgeStart) / 0.4));
      if (edgeProgress <= 0) continue;

      const a = nodes[e.a], b = nodes[e.b];
      const ex = a.x + (b.x - a.x) * edgeProgress;
      const ey = a.y + (b.y - a.y) * edgeProgress;
      const alpha = edgeProgress * 0.25;

      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(ex, ey);
      ctx.strokeStyle = `rgba(${col[0]},${col[1]},${col[2]},${alpha})`;
      ctx.lineWidth = 1.2;
      ctx.stroke();

      if (edgeProgress > 0.1 && edgeProgress < 0.95) {
        const tp = (edgeProgress * 3) % 1;
        const tdx = a.x + (b.x - a.x) * tp;
        const tdy = a.y + (b.y - a.y) * tp;
        ctx.beginPath();
        ctx.arc(tdx, tdy, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${col[0]},${col[1]},${col[2]},0.5)`;
        ctx.fill();
      }
    }

    for (const n of nodes) {
      const pulse = 1 + Math.sin(time * 2 + n.x * 0.1) * 0.3;
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.size * 3, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${col[0]},${col[1]},${col[2]},0.06)`;
      ctx.fill();
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.size * pulse, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${col[0]},${col[1]},${col[2]},0.6)`;
      ctx.fill();
    }

    if (lineProgress >= 1) {
      setTimeout(() => { if (running) { lineProgress = 0; } }, 750);
    }

    raf = requestAnimationFrame(draw);
  }

  init();
  return {
    start() { running = true; init(); draw(); },
    stop() { running = false; cancelAnimationFrame(raf); },
  };
}

/* ===== ANIMATION 4: PRIORITIZE ===== */
function createPrioritize(canvas: HTMLCanvasElement, stageIdx: number): AnimController {
  const col = COLORS[stageIdx];
  let running = false;
  let raf = 0;
  let clusters: {
    rank: number; sx: number; sy: number; tx: number; ty: number;
    dots: { offX: number; offY: number; size: number }[];
    progress: number; speed: number; alpha: number;
  }[] = [];
  let time = 0;
  let phase: 'scatter' | 'sort' | 'hold' = 'scatter';
  let phaseTime = 0;
  const CLUSTER_COUNT = 7;

  function init() {
    const { w, h } = setupCanvas(canvas);
    clusters = [];

    const sizes: number[] = [];
    for (let i = 0; i < CLUSTER_COUNT; i++) {
      sizes.push(CLUSTER_COUNT - i);
    }
    const shuffled = [...sizes].sort(() => Math.random() - 0.5);
    const sortedSizes = [...sizes];

    for (let i = 0; i < CLUSTER_COUNT; i++) {
      const rank = shuffled[i];
      const sortedIdx = sortedSizes.indexOf(shuffled[i]);

      const sx = w * 0.1 + Math.random() * w * 0.8;
      const sy = h * 0.15 + Math.random() * h * 0.65;

      const spacing = w * 0.78 / CLUSTER_COUNT;
      const tx = w * 0.12 + sortedIdx * spacing + spacing / 2;
      const ty = h * 0.5;

      const dotCount = rank + 2;
      const clusterDots: { offX: number; offY: number; size: number }[] = [];
      const coreSize = 2 + rank * 0.5;
      for (let d = 0; d < dotCount; d++) {
        const angle = (d / dotCount) * Math.PI * 2;
        const dist = d === 0 ? 0 : (4 + Math.random() * (rank * 1.5));
        clusterDots.push({
          offX: d === 0 ? 0 : Math.cos(angle) * dist,
          offY: d === 0 ? 0 : Math.sin(angle) * dist * 0.7,
          size: d === 0 ? coreSize : (1 + Math.random() * 1.5),
        });
      }

      clusters.push({
        rank, sx, sy, tx, ty,
        dots: clusterDots,
        progress: 0,
        speed: 0.015 + Math.random() * 0.009,
        alpha: 0.3 + (rank / CLUSTER_COUNT) * 0.5,
      });
    }

    phase = 'scatter';
    phaseTime = 0;
  }

  function draw() {
    if (!running) return;
    const { ctx, w, h } = setupCanvas(canvas);
    ctx.clearRect(0, 0, w, h);
    time += 0.016;
    phaseTime += 0.016;

    if (phase === 'scatter' && phaseTime > 0.5) {
      phase = 'sort';
      phaseTime = 0;
    }
    if (phase === 'sort') {
      for (const c of clusters) {
        c.progress = Math.min(1, c.progress + c.speed);
      }
      if (clusters.every(c => c.progress >= 1)) {
        phase = 'hold';
        phaseTime = 0;
      }
    }
    if (phase === 'hold' && phaseTime > 1.0) {
      init();
      return;
    }

    if (phase === 'hold' || (phase === 'sort' && clusters[0].progress > 0.7)) {
      const markerAlpha = phase === 'hold' ? 0.3 : (clusters[0].progress - 0.7) / 0.3 * 0.3;
      ctx.font = "500 8px 'SF Mono', 'Cascadia Code', 'Fira Code', monospace";
      ctx.textAlign = 'center';
      for (const c of clusters) {
        const sortedIdx = clusters.filter(o => o.rank > c.rank).length;
        ctx.fillStyle = `rgba(${col[0]},${col[1]},${col[2]},${markerAlpha})`;
        ctx.fillText('#' + (sortedIdx + 1), c.tx, c.ty + 28);
      }
    }

    for (const c of clusters) {
      const t = c.progress;
      const ease = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

      const cx = c.sx + (c.tx - c.sx) * ease;
      const cy = c.sy + (c.ty - c.sy) * ease;

      const jitter = (1 - ease) * 6;

      for (const d of c.dots) {
        const dx = cx + d.offX + Math.sin(time * 1.5 + d.offX) * jitter;
        const dy = cy + d.offY + Math.cos(time * 1.2 + d.offY) * jitter;

        ctx.beginPath();
        ctx.arc(dx, dy, d.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${col[0]},${col[1]},${col[2]},${c.alpha * 0.06})`;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(dx, dy, d.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${col[0]},${col[1]},${col[2]},${c.alpha})`;
        ctx.fill();
      }

      if (ease > 0.9) {
        const ringAlpha = (ease - 0.9) / 0.1 * 0.12;
        const ringR = 6 + c.rank * 2.5;
        ctx.beginPath();
        ctx.arc(c.tx, c.ty, ringR, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${col[0]},${col[1]},${col[2]},${ringAlpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }

    ctx.beginPath();
    ctx.moveTo(w * 0.08, h * 0.5 + 20);
    ctx.lineTo(w * 0.92, h * 0.5 + 20);
    ctx.strokeStyle = `rgba(${col[0]},${col[1]},${col[2]},0.04)`;
    ctx.lineWidth = 0.5;
    ctx.stroke();

    raf = requestAnimationFrame(draw);
  }

  init();
  return {
    start() { running = true; init(); draw(); },
    stop() { running = false; cancelAnimationFrame(raf); },
  };
}

/* ===== ANIMATION 5: STORE INTELLIGENTLY ===== */
function createStore(canvas: HTMLCanvasElement, stageIdx: number): AnimController {
  const col = COLORS[stageIdx];
  let running = false;
  let raf = 0;
  let dots: {
    x: number; y: number; tx: number; ty: number;
    progress: number; speed: number; size: number;
    tier: number; idx: number;
  }[] = [];
  let time = 0;

  const TIERS = [
    { label: 'HOT', slots: 4, brightness: 1.0, glowMul: 0.15 },
    { label: 'WARM', slots: 5, brightness: 0.55, glowMul: 0.08 },
    { label: 'COLD', slots: 6, brightness: 0.25, glowMul: 0.03 },
  ];

  function init() {
    const { w, h } = setupCanvas(canvas);
    dots = [];

    const tierGap = 12;
    const tierW = (w * 0.52 - tierGap * 2) / 3;
    const tierStartX = w * 0.42;
    const tierTop = h * 0.12;
    const tierH = h * 0.58;

    let dotIdx = 0;
    for (let t = 0; t < 3; t++) {
      const tier = TIERS[t];
      const tx0 = tierStartX + t * (tierW + tierGap);
      const cols2 = 2;
      const rows = Math.ceil(tier.slots / cols2);
      const cellW = (tierW - 12) / cols2;
      const cellH = Math.min(14, (tierH - 16) / rows);

      for (let s = 0; s < tier.slots; s++) {
        const c2 = s % cols2;
        const row = Math.floor(s / cols2);
        dots.push({
          x: w * 0.05 + Math.random() * w * 0.28,
          y: h * 0.1 + Math.random() * h * 0.8,
          tx: tx0 + 8 + c2 * cellW + cellW / 2,
          ty: tierTop + 14 + row * cellH + cellH / 2,
          progress: 0,
          speed: 0.010 + Math.random() * 0.012,
          size: 2,
          tier: t,
          idx: dotIdx++,
        });
      }
    }
  }

  function draw() {
    if (!running) return;
    const { ctx, w, h } = setupCanvas(canvas);
    ctx.clearRect(0, 0, w, h);
    time += 0.016;

    const tierGap = 12;
    const tierW = (w * 0.52 - tierGap * 2) / 3;
    const tierStartX = w * 0.42;
    const tierTop = h * 0.12;
    const tierH = h * 0.58;

    // Draw the three containers
    for (let t = 0; t < 3; t++) {
      const tier = TIERS[t];
      const tx0 = tierStartX + t * (tierW + tierGap);
      const br = tier.brightness;

      const glowR = 20 + (1 - t * 0.3) * 15;
      const grd = ctx.createRadialGradient(
        tx0 + tierW / 2, tierTop + tierH / 2, 0,
        tx0 + tierW / 2, tierTop + tierH / 2, glowR + tierW * 0.3,
      );
      grd.addColorStop(0, `rgba(${col[0]},${col[1]},${col[2]},${tier.glowMul})`);
      grd.addColorStop(1, `rgba(${col[0]},${col[1]},${col[2]},0)`);
      ctx.fillStyle = grd;
      ctx.fillRect(tx0 - 10, tierTop - 10, tierW + 20, tierH + 20);

      ctx.beginPath();
      ctx.roundRect(tx0, tierTop, tierW, tierH, 6);
      ctx.strokeStyle = `rgba(${col[0]},${col[1]},${col[2]},${0.08 + br * 0.18})`;
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.fillStyle = `rgba(${col[0]},${col[1]},${col[2]},${0.01 + br * 0.03})`;
      ctx.fill();

      ctx.fillStyle = `rgba(${col[0]},${col[1]},${col[2]},${0.12 + br * 0.25})`;
      ctx.font = `600 ${Math.max(7, Math.min(9, tierW * 0.12))}px 'SF Mono', 'Cascadia Code', 'Fira Code', monospace`;
      ctx.textAlign = 'center';
      ctx.fillText(tier.label, tx0 + tierW / 2, tierTop + tierH + 14);

      const barW = tierW * 0.5;
      const barH = 2;
      const barX = tx0 + (tierW - barW) / 2;
      const barY = tierTop + tierH + 18;
      ctx.beginPath();
      ctx.roundRect(barX, barY, barW, barH, 1);
      ctx.fillStyle = `rgba(${col[0]},${col[1]},${col[2]},${0.04 + br * 0.12})`;
      ctx.fill();

      if (t === 0) {
        const pulseAlpha = 0.03 + Math.sin(time * 2.5) * 0.02;
        ctx.beginPath();
        ctx.roundRect(tx0 - 1, tierTop - 1, tierW + 2, tierH + 2, 7);
        ctx.strokeStyle = `rgba(${col[0]},${col[1]},${col[2]},${pulseAlpha})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      }
    }

    // Draw dots
    let allStored = true;
    for (const d of dots) {
      d.progress = Math.min(1, d.progress + d.speed);
      const t = d.progress;
      const ease = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
      const tier = TIERS[d.tier];
      const br = tier.brightness;

      const dx = d.x + (d.tx - d.x) * ease;
      const dy = d.y + (d.ty - d.y) * ease;

      const jitter = (1 - ease) * 10;
      const fx = dx + Math.sin(time * 3 + d.idx * 1.7) * jitter;
      const fy = dy + Math.cos(time * 2.5 + d.idx * 2.3) * jitter;

      const alpha = (0.2 + ease * 0.6) * br + 0.15;
      if (t < 1) allStored = false;

      if (ease < 0.9) {
        ctx.beginPath();
        ctx.arc(fx, fy, d.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${col[0]},${col[1]},${col[2]},${alpha * 0.06})`;
        ctx.fill();
      }

      if (ease > 0.92) {
        const morphT = (ease - 0.92) / 0.08;
        const ss = d.size * (1.4 + morphT * 0.4);
        const radius = d.size * (1 - morphT) + 1.5 * morphT;
        ctx.beginPath();
        ctx.roundRect(d.tx - ss, d.ty - ss, ss * 2, ss * 2, radius);
        ctx.fillStyle = `rgba(${col[0]},${col[1]},${col[2]},${0.15 + br * 0.45})`;
        ctx.fill();
      } else {
        ctx.beginPath();
        ctx.arc(fx, fy, d.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${col[0]},${col[1]},${col[2]},${alpha})`;
        ctx.fill();
      }
    }

    // Left side source dots
    const srcAlpha = Math.max(0, 0.18 - dots[0].progress * 0.2);
    if (srcAlpha > 0.01) {
      for (let i = 0; i < 8; i++) {
        const sx = w * 0.05 + Math.sin(i * 1.1) * w * 0.1;
        const sy = h * 0.12 + i * h * 0.1;
        ctx.beginPath();
        ctx.arc(sx, sy, 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${col[0]},${col[1]},${col[2]},${srcAlpha})`;
        ctx.fill();
      }
    }

    // Reset cycle
    if (allStored) {
      setTimeout(() => {
        if (!running) return;
        init();
      }, 1200);
    }

    raf = requestAnimationFrame(draw);
  }

  init();
  return {
    start() { running = true; init(); draw(); },
    stop() { running = false; cancelAnimationFrame(raf); },
  };
}

/* ===== COMPONENT ===== */
export default function FiveStepsCallout() {
  const [active, setActive] = useState(-1);
  const pipeRef = useRef<HTMLDivElement>(null);
  const bgCanvasRef = useRef<HTMLCanvasElement>(null);
  const stageCanvasRefs = useRef<(HTMLCanvasElement | null)[]>([]);
  const animControllersRef = useRef<AnimController[]>([]);
  const autoTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const autoIdxRef = useRef(0);
  const hoveredRef = useRef(false);
  const activeRef = useRef(-1);
  const bgRafRef = useRef(0);

  // Keep activeRef in sync
  useEffect(() => { activeRef.current = active; }, [active]);

  const stopAuto = useCallback(() => {
    if (autoTimerRef.current) {
      clearInterval(autoTimerRef.current);
      autoTimerRef.current = null;
    }
  }, []);

  const activate = useCallback((idx: number) => {
    if (activeRef.current === idx) return;
    // Stop previous animation
    if (activeRef.current >= 0 && animControllersRef.current[activeRef.current]) {
      animControllersRef.current[activeRef.current].stop();
    }
    setActive(idx);
    activeRef.current = idx;
    // Start new animation after expand transition
    if (animControllersRef.current[idx]) {
      setTimeout(() => {
        if (activeRef.current === idx) animControllersRef.current[idx].start();
      }, 150);
    }
  }, []);

  const startAuto = useCallback(() => {
    stopAuto();
    autoTimerRef.current = setInterval(() => {
      activate(autoIdxRef.current % 5);
      autoIdxRef.current++;
    }, 2400);
  }, [stopAuto, activate]);

  const handleStageEnter = useCallback((i: number) => {
    hoveredRef.current = true;
    stopAuto();
    activate(i);
  }, [stopAuto, activate]);

  const handlePipClick = useCallback((i: number) => {
    hoveredRef.current = true;
    stopAuto();
    activate(i);
    autoIdxRef.current = i + 1;
  }, [stopAuto, activate]);

  const handlePipeLeave = useCallback(() => {
    hoveredRef.current = false;
    autoIdxRef.current = (activeRef.current + 1) || 0;
    startAuto();
  }, [startAuto]);

  // Initialize animations + background canvas + auto-play
  useEffect(() => {
    const creators = [createCurate, createSynthesize, createConsolidate, createPrioritize, createStore];
    const controllers: AnimController[] = [];

    // Init per-stage animation controllers
    for (let i = 0; i < 5; i++) {
      const canvas = stageCanvasRefs.current[i];
      if (canvas) {
        controllers.push(creators[i](canvas, i));
      }
    }
    animControllersRef.current = controllers;

    // Background canvas
    const bgCanvas = bgCanvasRef.current;
    const pipe = pipeRef.current;
    if (!bgCanvas || !pipe) return;

    const bgCtx = bgCanvas.getContext('2d')!;
    let bgParticles: { x: number; y: number; vx: number; vy: number; size: number; alpha: number; ci: number }[] = [];
    let bgTime = 0;
    let bgRunning = true;

    function initBg(w: number, h: number) {
      bgParticles = [];
      for (let i = 0; i < 25; i++) {
        bgParticles.push({
          x: Math.random() * w, y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.1,
          vy: (Math.random() - 0.5) * 0.08,
          size: 0.5 + Math.random() * 1,
          alpha: 0.02 + Math.random() * 0.05,
          ci: Math.floor(Math.random() * 5),
        });
      }
    }

    function resizeBg() {
      if (!bgCanvas || !pipe) return;
      const dpr = window.devicePixelRatio || 1;
      const r = pipe.getBoundingClientRect();
      bgCanvas.width = r.width * dpr;
      bgCanvas.height = r.height * dpr;
      bgCanvas.style.width = r.width + 'px';
      bgCanvas.style.height = r.height + 'px';
      bgCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initBg(r.width, r.height);
    }

    function drawBg() {
      if (!bgRunning || !bgCanvas) return;
      const w = bgCanvas.width / (window.devicePixelRatio || 1);
      const h = bgCanvas.height / (window.devicePixelRatio || 1);
      bgCtx.clearRect(0, 0, w, h);
      bgTime += 0.016;

      for (const p of bgParticles) {
        p.x += p.vx + Math.sin(bgTime * 0.2 + p.y * 0.005) * 0.03;
        p.y += p.vy + Math.cos(bgTime * 0.15 + p.x * 0.005) * 0.02;
        if (p.x < -5) p.x = w + 5;
        if (p.x > w + 5) p.x = -5;
        if (p.y < -5) p.y = h + 5;
        if (p.y > h + 5) p.y = -5;
        const c = COLORS[p.ci];
        bgCtx.beginPath();
        bgCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        bgCtx.fillStyle = `rgba(${c[0]},${c[1]},${c[2]},${p.alpha})`;
        bgCtx.fill();
      }

      bgRafRef.current = requestAnimationFrame(drawBg);
    }

    // IntersectionObserver to boot when visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            resizeBg();
            drawBg();
            setTimeout(() => {
              autoIdxRef.current = 0;
              startAuto();
            }, 600);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    observer.observe(pipe);
    window.addEventListener('resize', resizeBg);

    return () => {
      bgRunning = false;
      cancelAnimationFrame(bgRafRef.current);
      stopAuto();
      for (const c of controllers) c.stop();
      observer.disconnect();
      window.removeEventListener('resize', resizeBg);
    };
  }, [startAuto, stopAuto]);

  return (
    <div className="pipe-wrapper">
      <div className="pipe" ref={pipeRef} onMouseLeave={handlePipeLeave}>
        <canvas ref={bgCanvasRef} />
        <div className="pipe-inner">
          <div className="pipe-title">The Five-Step Context Generation Pipeline</div>

          <div className="stages">
            {STAGES.map((stage, i) => (
              <div
                key={i}
                className={`stage${active === i ? ' active' : ''}`}
                onMouseEnter={() => handleStageEnter(i)}
              >
                <div className="stage-row">
                  <div className="node">
                    <span className="node-num">{stage.num}</span>
                  </div>
                  <div className="info">
                    <div className="label-row">
                      <div className="name">{stage.name}</div>
                      <div className="tag">{stage.tag}</div>
                    </div>
                    <div className="desc">{stage.desc}</div>
                  </div>
                </div>
                <div className="stage-anim">
                  <canvas
                    ref={(el) => { stageCanvasRefs.current[i] = el; }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="skip">
            Most AI systems skip steps 1&ndash;4. <em>That&rsquo;s the gap.</em>
          </div>

          <div className="pips">
            {STAGES.map((_, i) => (
              <div
                key={i}
                className={`pip${active >= i ? ' on' : ''}`}
                onClick={() => handlePipClick(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
