import { useState, useEffect, lazy, Suspense } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Preloader } from "@/components/Preloader";
import { PageTransitionProvider } from "@/components/PageTransition";

const HomePage = lazy(() => import("@/pages/HomePage").then(m => ({ default: m.HomePage })));
const VisionPage = lazy(() => import("@/pages/VisionPage").then(m => ({ default: m.VisionPage })));
const RetailLuxuryPage = lazy(() => import("@/pages/RetailLuxuryPage").then(m => ({ default: m.RetailLuxuryPage })));
const ActivationsPage = lazy(() => import("@/pages/ActivationsPage").then(m => ({ default: m.ActivationsPage })));
const GlobalStagesPage = lazy(() => import("@/pages/GlobalStagesPage").then(m => ({ default: m.GlobalStagesPage })));

export default function App() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname !== "/") {
      navigate("/", { replace: true });
    }
  }, []);

  const isScrollLocked = showPreloader && loading;

  const handleStartedOpening = () => {
    setLoading(false);
  };

  const handlePreloaderComplete = () => {
    setShowPreloader(false);
  };

  return (
    <PageTransitionProvider>
      {showPreloader && (
        <Preloader
          onStartedOpening={handleStartedOpening}
          onComplete={handlePreloaderComplete}
        />
      )}
      <Layout scrollLocked={isScrollLocked} hideNav={showPreloader && loading}>
        <Suspense fallback={<div className="h-screen bg-moa-black" />}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/vision" element={<VisionPage />} />
            <Route path="/retail-luxury" element={<RetailLuxuryPage />} />
            <Route path="/activations" element={<ActivationsPage />} />
            <Route path="/global-stages" element={<GlobalStagesPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </PageTransitionProvider>
  );
}
