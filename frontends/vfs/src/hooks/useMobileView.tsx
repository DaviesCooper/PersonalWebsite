import { useMemo } from 'react';
import { useIsMobileDevice } from './useIsMobileDevice';
import { useMobileViewPreference } from './useMobileViewPreference';

export function useMobileView() {
  const isMobileDevice = useIsMobileDevice();
  const { preference, setPreference, resetPreference } = useMobileViewPreference();

  const isMobileView = useMemo(() => {
    return preference ?? isMobileDevice;
  }, [preference, isMobileDevice]);

  return {
    isMobileView,
    setIsMobileView: setPreference,
    resetIsMobileView: resetPreference,
    isAuto: preference === null,
  };
}