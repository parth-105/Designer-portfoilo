
import { useState, useEffect, useRef, RefObject } from 'react';

type UseScrollAnimationReturnType = [RefObject<HTMLDivElement>, boolean];

const useScrollAnimation = (options?: IntersectionObserverInit): UseScrollAnimationReturnType => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optional: unobserve after it's visible so the animation doesn't re-trigger
          if(ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold: 0.1,
        ...options,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, options]);

  return [ref, isVisible];
};

export default useScrollAnimation;
