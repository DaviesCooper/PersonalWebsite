import { Routes, Route, Link, useLocation } from 'react-router-dom';

import { Home } from './pages/Home';
import { MarkdownPage } from './pages/MarkdownPage';
import styles from './MobileApp.module.css';
import { useMobileView } from '../../context/MobileViewContext';
import { SlEnvolopeLetter } from 'react-icons/sl';

const CONTENT_BY_PATH: Record<string, { url: string; title: string }> = {
  '/about': { url: '/about/About.md', title: 'About' },
  '/projects/genetic-stippling': {
    url: '/genetic-stippling/genetic-stippling.md',
    title: 'Genetic Stippling',
  },
  '/projects/auto-steamworks': {
    url: '/auto-steamworks/auto-steamworks.md',
    title: 'Auto Steamworks',
  },
  '/projects/hvvoculus': { url: '/hvvoculus/hvvoculus.md', title: 'Hvvoculus' },
};

function MobileContent() {
  const { pathname } = useLocation();
  if (pathname === '/') {
    return <Home />;
  }
  const content = CONTENT_BY_PATH[pathname];
  if (content) {
    return <MarkdownPage url={content.url} title={content.title} />;
  }
  return <Home />;
}

export function MobileApp() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const { setIsMobileView } = useMobileView();
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <div className={styles.logoGroup}>
          <Link to="/" className={styles.logo}>
            <img
              src="/logo.svg"
              alt=""
              className={styles.logoImage}
            />
          </Link>
          <a
            href="mailto:cooper@wildroseplains.ca"
            className={styles.emailBtn} // Add a class to style spacing
            title="Email me at cooper@wildroseplains.ca"
          >
            <SlEnvolopeLetter />
          </a>
        </div>

        {!isHome && (
          <Link to="/" className={styles.back} aria-label="Back to home">
            ← Back
          </Link>
        )}
      </header>

      <main className={styles.main}>
        <Routes>
          <Route path="*" element={<MobileContent />} />
        </Routes>
      </main>

      <footer className={styles.footer}>
        <button
          type="button"
          className={styles.desktopModeBtn}
          onClick={() => setIsMobileView(false)}
        >
          Desktop mode
        </button>
      </footer>
    </div>
  );
}
