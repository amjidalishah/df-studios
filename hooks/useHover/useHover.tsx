"use client"
import { useState, useRef, useEffect, RefObject } from "react";
import debounce from "lodash.debounce";

export function useHover() {
  const [value, setValue] = useState(false);
  const ref: RefObject<HTMLElement> = useRef(null);
  const handleMouseOver = debounce(() => setValue(true), 100);
  const handleMouseOut = debounce(() => setValue(false), 100);
  
  useEffect(
    () => {
      const node = ref.current;
      if (node) {
        node.addEventListener("mouseover", handleMouseOver);
        node.addEventListener("mouseout", handleMouseOut);
        return () => {
          node.removeEventListener("mouseover", handleMouseOver);
          node.removeEventListener("mouseout", handleMouseOut);
          handleMouseOver.cancel();
          handleMouseOut.cancel();
        };
      }
    },
    [ref.current] // Recall only if ref changes
  );
  
  return [ref, value];
}
