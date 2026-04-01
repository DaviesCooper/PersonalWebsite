import { useEffect, useState, useMemo } from 'react';

const MOBILE_QUERY = '(max-width: 768px)';

export function useIsMobileDevice(): boolean {
  const mediaQuery = useMemo(() => {
    return window.matchMedia(MOBILE_QUERY);
  }, []);

  const [isMobile, setIsMobile] = useState(() => mediaQuery.matches);

  useEffect(() => {
    const handler = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, [mediaQuery]);

  return isMobile;
}