import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Layout/Header';
import { Footer } from './components/Layout/Footer';
import { FloatingActions } from './components/Home/FloatingActions';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { ServicesPage } from './pages/ServicesPage';
import { ThermolockPage } from './pages/ThermolockPage';
import { ContactPage } from './pages/ContactPage';
import { PageTransition } from './components/Layout/PageTransition';

// Scroll to top wrapper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-brand-dark text-gray-200 font-sans selection:bg-brand-red selection:text-white">
        <Header />
        <main className="flex-grow">
          <PageTransition>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/thermolock" element={<ThermolockPage />} />
              <Route path="/products" element={<ThermolockPage />} /> {/* Alias for safety */}
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </PageTransition>
        </main>
        <Footer />
        <FloatingActions />
      </div>
    </HashRouter>
  );
};

export default App;