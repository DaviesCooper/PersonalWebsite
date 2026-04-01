import { MobileApp } from './components/Mobile/MobileApp';
import { DesktopApp } from './components/Desktop/DesktopApp';
import { MobileViewProvider } from './context/MobileViewContext';
import { useMobileView } from './hooks/useMobileView';

export function App() {
  const {
    isMobileView,
    setIsMobileView,
  } = useMobileView();

  return (
    <MobileViewProvider value={{ isMobileView, setIsMobileView }}>
      {isMobileView ? <MobileApp /> : <DesktopApp />}
    </MobileViewProvider>
  );
}