import { useState, useEffect } from "react";

/**
 * useViewport
 * Returns live { width, height } and forces a re-render whenever:
 *  - the window resizes (covers desktop drag-resize)
 *  - the device orientation changes (portrait ↔ landscape)
 *  - the visual viewport changes (iOS Safari address-bar collapse, etc.)
 *
 * Using this hook in a component means React will re-evaluate all
 * clamp() / vw / vh values via the updated inline styles.
 */
export function useViewport() {
  const [viewport, setViewport] = useState({
    width:  window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const update = () => {
      setViewport({
        width:  window.innerWidth,
        height: window.innerHeight,
      });
    };

    // 1. Standard resize (desktop + some Android)
    window.addEventListener("resize", update);

    // 2. Orientation change — fires on rotate, but may fire BEFORE
    //    the browser has finished updating innerWidth/innerHeight,
    //    so we delay by one frame to get the correct final dimensions.
    const onOrientationChange = () => {
      requestAnimationFrame(() => {
        requestAnimationFrame(update); // double-rAF for iOS Safari reliability
      });
    };
    window.addEventListener("orientationchange", onOrientationChange);

    // 3. Visual viewport API — catches iOS Safari bottom-bar resize
    //    and any other sub-frame viewport shifts.
    const vv = window.visualViewport;
    if (vv) vv.addEventListener("resize", update);

    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", onOrientationChange);
      if (vv) vv.removeEventListener("resize", update);
    };
  }, []);

  return viewport;
}