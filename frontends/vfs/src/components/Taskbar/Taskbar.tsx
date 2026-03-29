import type { WindowState } from '../../lib/types/window';
import styles from './Taskbar.module.css';
import { useMobileView } from '../../context/MobileViewContext';
import { FaMobileScreen } from "react-icons/fa6";
import { SlEnvolopeLetter } from "react-icons/sl";

interface TaskbarProps {
  windows: WindowState[];
  activeId: string | null;
  onFocus: (id: string) => void;
  onOpenTerminal: () => void;
}

export function Taskbar({ windows, activeId, onFocus, onOpenTerminal }: TaskbarProps) {
  const { setIsMobileView } = useMobileView();
  return (
    <footer className={styles.taskbar}>
      <button
        type="button"
        className={styles.startButton}
        onClick={onOpenTerminal}
        title="Terminal"
      >
        <img src="/logo.svg" alt="" className={styles.startIcon} aria-hidden />
        <span>Terminal</span>
      </button>
      <div className={styles.windowList}>
        {windows.map(win => (
          <button
            key={win.id}
            type="button"
            className={`${styles.taskbarBtn} ${activeId === win.id ? styles.active : ''} ${win.minimized ? styles.minimized : ''}`}
            onClick={() => onFocus(win.id)}
            title={win.title}
          >
            <span className={styles.taskbarTitle}>{win.title}</span>
          </button>
        ))}
      </div>
      <a
        href="mailto:cooper@wildroseplains.ca"
        className={styles.emailBtn}
        title="Email me at cooper@wildroseplains.ca"
      >
        <SlEnvolopeLetter />
      </a>
      <button
        type="button"
        className={styles.mobileModeBtn}
        onClick={() => setIsMobileView(true)}
        title="Switch to mobile portfolio view"
      >
        <FaMobileScreen />
      </button>
    </footer>
  );
}
