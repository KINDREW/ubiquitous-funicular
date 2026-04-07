import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Navbar  from './components/Navbar';
import Footer  from './components/Footer';

import Home      from './pages/Home';
import About     from './pages/About';
import Chapters  from './pages/Chapters';
import Resources from './pages/Resources';
import Events    from './pages/Events';
import Gallery   from './pages/Gallery';
import Contact   from './pages/Contact';
import Support   from './pages/Support';

import './styles/globals.css';

/* Scroll to top on every route change */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [pathname]);
  return null;
}

function AppLayout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main style={{ paddingTop: 'var(--nav-h)' }}>
        <Routes>
          <Route path="/"          element={<Home      />} />
          <Route path="/about"     element={<About     />} />
          <Route path="/chapters"  element={<Chapters  />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/events"    element={<Events    />} />
          <Route path="/gallery"   element={<Gallery   />} />
          <Route path="/contact"   element={<Contact   />} />
          <Route path="/support"   element={<Support   />} />
          {/* Catch-all → Home */}
          <Route path="*"          element={<Home      />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
