import { MobileApp } from './mobile/MobileApp';
import DesktopApp from './App';

/**
 * Mobile portfolio vs desktop VFS: localStorage preference, else UA default.
 */
export function AppRoot() {
  const mobile = localStorage.getItem('view-preference') === 'mobile';
  return mobile ? <MobileApp /> : <DesktopApp />;
}
