import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'isMobileView';

export function useMobileViewPreference() {
  const [preference, setPreferenceState] = useState<boolean | null>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored !== null ? stored === 'true' : null;
  });

  useEffect(() => {
    if (preference === null) {
      localStorage.removeItem(STORAGE_KEY);
    } else {
      localStorage.setItem(STORAGE_KEY, String(preference));
    }
  }, [preference]);

  const setPreference = useCallback((value: boolean) => {
    setPreferenceState(value);
  }, []);

  const resetPreference = useCallback(() => {
    setPreferenceState(null);
  }, []);

  return {
    preference,          // boolean | null
    setPreference,
    resetPreference,
  };
}