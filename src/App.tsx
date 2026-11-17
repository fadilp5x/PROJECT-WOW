import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Tools from "./pages/Tools";
import Impact from "./pages/Impact";
import Contact from "./pages/Contact";

export const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState<string>(window.location.pathname || "/");

  const navigateTo = (path: string) => {
    const [cleanPath, hash] = path.split("#");
    const target = cleanPath || "/";
    window.history.pushState(null, "", path);
    setCurrentPath(target);

    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || "/");
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const renderCurrentPage = () => {
    switch (currentPath) {
      case "/":
        return <Home onNavigate={navigateTo} />;
      case "/about":
        return <About onNavigate={navigateTo} />;
      case "/tools":
        return <Tools onNavigate={navigateTo} />;
      case "/impact":
        return <Impact onNavigate={navigateTo} />;
      case "/contact":
        return <Contact onNavigate={navigateTo} />;
      default:
        return <Home onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F3] text-[#08090B]">
      <Navbar currentPath={currentPath} onNavigate={navigateTo} />
      <main className="flex-1 pt-[72px]">
        {renderCurrentPage()}
      </main>
      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;
