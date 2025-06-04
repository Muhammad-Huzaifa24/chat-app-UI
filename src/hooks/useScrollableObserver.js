import { useEffect, useState } from "react";

function useScrollableObserver(ref) {
  const [isScrollable, setIsScrollable] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const checkScrollability = () => {
      const el = ref.current;
      if (!el) return;
      setIsScrollable(el.scrollHeight > el.clientHeight || el.scrollWidth > el.clientWidth);
    };

    checkScrollability(); // Check on mount

    const resizeObserver = new ResizeObserver(() => {
      checkScrollability();
    });

    resizeObserver.observe(ref.current);

    return () => {
      if (ref.current) {
        resizeObserver.unobserve(ref.current);
      }
    };
  }, [ref]);

  return isScrollable;
}

export default useScrollableObserver;
