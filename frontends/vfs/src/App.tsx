import { MobileApp } from './components/Mobile/MobileApp';
import { DesktopApp } from './components/Desktop/DesktopApp';
import { useState } from 'react';
import { MobileViewProvider } from './context/MobileViewContext';

/**
 * Mobile portfolio vs desktop VFS: localStorage preference, else UA default.
 */
export function App() {
  const [isMobileView, setIsMobileView] = useState(Boolean);

  return (
    <MobileViewProvider value={{ isMobileView, setIsMobileView }}>
      {
        isMobileView ?
          (<MobileApp />) :
          (<DesktopApp />)
      }
    </MobileViewProvider>
  )
}
