import { useState } from "react";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./index.css";
import { Navigation } from "@/components/ui/navigation";
import type { PageType } from "@/components/ui/navigation/types";

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const handleNavigate = (page: PageType) => setCurrentPage(page);

  return (
    <>
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <Routes>
        <Route path="/" element={<Home onNavigate={handleNavigate} />} />
      
      </Routes>
    </>
  );
}


export { App };