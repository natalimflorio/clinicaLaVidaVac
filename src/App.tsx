/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import PortfolioPage from "./pages/PortfolioPage";
import FolderPage from "./pages/FolderPage";
import Folder2Page from "./pages/Folder2Page";
import Folder3Page from "./pages/Folder3Page";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/folder" element={<FolderPage />} />
        <Route path="/folder2" element={<Folder2Page />} />
        <Route path="/folder3" element={<Folder3Page />} />
      </Routes>
    </Router>
  );
}
