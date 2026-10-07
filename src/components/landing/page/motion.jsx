'use client';

import React, { useEffect, useRef, useState } from 'react';
import { animate, motion, useInView, useReducedMotion } from 'framer-motion';

export const EASE_OUT = [0.22, 1, 0.36, 1];

const euro = new Intl.NumberFormat('nl-NL', {
  style: 'currency',
  currency: 'EUR',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const euroRounded = new Intl.NumberFormat('nl-NL', {
  style: 'currency',
  currency: 'EUR',
  maximumFractionDigits: 0,
});

export function formatEuro(value, { rounded = false } = {}) {
  return (rounded ? euroRounded : euro).format(value);
}

export function Reveal({
  as = 'div',
  children,
  delay = 0,
  y = 18,
  duration = 0.7,
  amount = 0.25,
  className,
  ...rest
}) {
  const reduce = useReducedMotion();
  const Comp = motion[as] || motion.div;

  return (
    <Comp
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration, delay, ease: EASE_OUT }}
      className={className}
      {...rest}
    >
      {children}
    </Comp>
  );
}

export function Stagger({ as = 'div', children, className, stagger = 0.08, delay = 0, amount = 0.2 }) {
  const reduce = useReducedMotion();
  const Comp = motion[as] || motion.div;

  return (
    <Comp
      className={className}
      initial={reduce ? false : 'hidden'}
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {children}
    </Comp>
  );
}

export const staggerItem = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } },
};

/** Tweens between successive values whenever `value` changes. */
export function AnimatedNumber({ value, format, duration = 0.8, className }) {
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(value);
  const current = useRef(value);

  useEffect(() => {
    if (reduce) {
      current.current = value;
      setDisplay(value);
      return undefined;
    }
    const controls = animate(current.current, value, {
      duration,
      ease: EASE_OUT,
      onUpdate: (v) => {
        current.current = v;
        setDisplay(v);
      },
    });
    return () => controls.stop();
  }, [value, duration, reduce]);

  const text = format ? format(display) : formatEuro(display, { rounded: true });
  return <span className={className}>{text}</span>;
}

/**
 * Counts from 0 to `value` once in view (or once `start` becomes true).
 * Renders the final value on the server so the markup is never empty.
 */
export function CountUp({ value, duration = 1.4, delay = 0, start, rounded = false, format, className }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(value);
  const [armed, setArmed] = useState(false);
  const shouldRun = start === undefined ? inView : start;

  useEffect(() => {
    if (!reduce) {
      setDisplay(0);
      setArmed(true);
    }
  }, [reduce]);

  useEffect(() => {
    if (!armed || !shouldRun) return undefined;
    let frame;
    let startTime;
    const timeout = window.setTimeout(() => {
      const tick = (now) => {
        if (startTime === undefined) startTime = now;
        const t = Math.min(1, (now - startTime) / (duration * 1000));
        const eased = 1 - Math.pow(1 - t, 4);
        setDisplay(value * eased);
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, delay * 1000);

    return () => {
      window.clearTimeout(timeout);
      cancelAnimationFrame(frame);
    };
  }, [armed, shouldRun, value, duration, delay]);

  const text = format ? format(display) : formatEuro(display, { rounded });

  return (
    <span ref={ref} className={className}>
      {text}
    </span>
  );
}
