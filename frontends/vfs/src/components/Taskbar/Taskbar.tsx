import type { WindowState } from '../../core/types/window';
import { setViewPreference } from '@shared/viewPreference';
import styles from './Taskbar.module.css';

interface TaskbarProps {
  windows: WindowState[];
  activeId: string | null;
  onFocus: (id: string) => void;
  onOpenTerminal: () => void;
}

export function Taskbar({ windows, activeId, onFocus, onOpenTerminal }: TaskbarProps) {
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
      <button
        type="button"
        className={styles.mobileModeBtn}
        onClick={() => setViewPreference('mobile')}
        title="Switch to mobile portfolio view"
      >
        Mobile mode
      </button>
    </footer>
  );
}
