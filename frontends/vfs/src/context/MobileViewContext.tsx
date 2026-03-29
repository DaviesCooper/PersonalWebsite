import { createContext, useContext, type ReactNode } from 'react';

export interface MobileViewContextValue {
  readonly isMobileView: boolean;
  readonly setIsMobileView: (isMobileView: boolean) => void;
}

const MobileViewContext = createContext<MobileViewContextValue | null>(null);

export function MobileViewProvider(props: {
  readonly value: MobileViewContextValue;
  readonly children: ReactNode;
}): JSX.Element {
  return (
    <MobileViewContext.Provider value={props.value}>
      {props.children}
    </MobileViewContext.Provider>
  );
}

export function useMobileView(): MobileViewContextValue {
  const ctx = useContext(MobileViewContext);
  if (ctx == null) {
    throw new Error('useMobileView must be used within MobileViewProvider');
  }
  return ctx;
}
