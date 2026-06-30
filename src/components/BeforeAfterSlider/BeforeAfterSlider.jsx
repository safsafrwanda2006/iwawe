import React, { useState, useRef, useCallback, useEffect } from 'react';
import './BeforeAfterSlider.css';

const ANIMATION_DURATION = 3000; // ms for one sweep
const PAUSE_DURATION = 1200;     // ms to hold at each end

const BeforeAfterSlider = ({ beforeSrc, afterSrc, beforeAlt, afterAlt }) => {
  const [position, setPosition] = useState(100); // starts fully showing BEFORE
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);
  const animFrameRef = useRef(null);
  const pauseTimerRef = useRef(null);

  // ── Auto-animation ──────────────────────────────────────────────────────────
  const animateTo = useCallback((from, to, onDone) => {
    const start = performance.now();
    const step = (now) => {
      const elapsed = now - start;
      const t = Math.min(elapsed / ANIMATION_DURATION, 1);
      // ease-in-out cubic
      const eased = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      setPosition(from + (to - from) * eased);
      if (t < 1) {
        animFrameRef.current = requestAnimationFrame(step);
      } else {
        setPosition(to);
        onDone?.();
      }
    };
    animFrameRef.current = requestAnimationFrame(step);
  }, []);

  const runLoop = useCallback(() => {
    // Sweep: BEFORE (100%) → AFTER (0%)
    animateTo(100, 0, () => {
      pauseTimerRef.current = setTimeout(() => {
        // Sweep back: AFTER (0%) → BEFORE (100%)
        animateTo(0, 100, () => {
          pauseTimerRef.current = setTimeout(runLoop, PAUSE_DURATION);
        });
      }, PAUSE_DURATION);
    });
  }, [animateTo]);

  // Start on mount
  useEffect(() => {
    pauseTimerRef.current = setTimeout(runLoop, PAUSE_DURATION);
    return () => {
      cancelAnimationFrame(animFrameRef.current);
      clearTimeout(pauseTimerRef.current);
    };
  }, [runLoop]);

  // Resume auto-animation when user stops dragging
  useEffect(() => {
    if (!isDragging) {
      const resume = setTimeout(() => {
        // Restart loop from current position
        const current = position;
        cancelAnimationFrame(animFrameRef.current);
        clearTimeout(pauseTimerRef.current);
        // Finish current direction, then loop
        const goTo = current > 50 ? 0 : 100;
        animateTo(current, goTo, () => {
          pauseTimerRef.current = setTimeout(runLoop, PAUSE_DURATION);
        });
      }, 2000); // Wait 2 s after user releases before resuming
      return () => clearTimeout(resume);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDragging]);

  // ── Drag logic ──────────────────────────────────────────────────────────────
  const getPositionFromX = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clamped = Math.max(0, Math.min(x, rect.width));
    setPosition((clamped / rect.width) * 100);
  }, []);

  const startDrag = useCallback(() => {
    cancelAnimationFrame(animFrameRef.current);
    clearTimeout(pauseTimerRef.current);
    setIsDragging(true);
  }, []);

  const stopDrag = useCallback(() => {
    setIsDragging(false);
  }, []);

  const onMouseDown = (e) => { e.preventDefault(); startDrag(); };
  const onTouchStart = () => startDrag();

  const onMouseMove = useCallback((e) => {
    if (!isDragging) return;
    getPositionFromX(e.clientX);
  }, [isDragging, getPositionFromX]);

  const onTouchMove = useCallback((e) => {
    if (!isDragging) return;
    getPositionFromX(e.touches[0].clientX);
  }, [isDragging, getPositionFromX]);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', stopDrag);
      window.addEventListener('touchmove', onTouchMove, { passive: true });
      window.addEventListener('touchend', stopDrag);
    }
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', stopDrag);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', stopDrag);
    };
  }, [isDragging, onMouseMove, onTouchMove, stopDrag]);

  return (
    <div
      ref={containerRef}
      className="bas-container"
      aria-label="Before and after image comparison slider"
    >
      {/* AFTER image — always visible as base layer */}
      <img
        src={afterSrc}
        alt={afterAlt || 'After cleaning'}
        className="bas-image bas-after"
        draggable={false}
      />

      {/* BEFORE image — clipped from the right */}
      <div className="bas-before-wrapper" style={{ width: `${position}%` }}>
        <img
          src={beforeSrc}
          alt={beforeAlt || 'Before cleaning'}
          className="bas-image bas-before"
          draggable={false}
        />
      </div>

      {/* Labels */}
      <span className="bas-label bas-label-before">Before</span>
      <span className="bas-label bas-label-after">After</span>

      {/* Divider + Handle */}
      <div
        className={`bas-divider ${isDragging ? 'dragging' : ''}`}
        style={{ left: `${position}%` }}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        role="slider"
        aria-valuenow={Math.round(position)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Drag to compare before and after"
        tabIndex={0}
        onKeyDown={(e) => {
          startDrag();
          if (e.key === 'ArrowLeft') setPosition((p) => Math.max(0, p - 2));
          if (e.key === 'ArrowRight') setPosition((p) => Math.min(100, p + 2));
          stopDrag();
        }}
      >
        <div className="bas-handle">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
