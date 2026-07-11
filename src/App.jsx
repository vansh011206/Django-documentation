import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Loader from './components/Loader';

// Import all topic pages and their corresponding TOC headings
import IntroFlow, { headings as introHeadings } from './pages/topics/IntroFlow';
import ProjectSetup, { headings as setupHeadings } from './pages/topics/ProjectSetup';
import FileStructure, { headings as structureHeadings } from './pages/topics/FileStructure';
import AppCreation, { headings as appHeadings } from './pages/topics/AppCreation';
import Urls, { headings as urlsHeadings } from './pages/topics/Urls';
import Views, { headings as viewsHeadings } from './pages/topics/Views';
import Templates, { headings as templatesHeadings } from './pages/topics/Templates';
import Context, { headings as contextHeadings } from './pages/topics/Context';
import StaticFiles, { headings as staticHeadings } from './pages/topics/StaticFiles';
import ModelsORM, { headings as modelsHeadings } from './pages/topics/ModelsORM';
import AdminPanel, { headings as adminHeadings } from './pages/topics/AdminPanel';
import DynamicRoutes, { headings as dynamicRoutesHeadings } from './pages/topics/DynamicRoutes';
import FormsSetup, { headings as formsHeadings } from './pages/topics/FormsSetup';
import UserAuth, { headings as authHeadings } from './pages/topics/UserAuth';
import ClassBasedViews, { headings as cbvHeadings } from './pages/topics/ClassBasedViews';
import TailwindSetup, { headings as tailwindHeadings } from './pages/topics/TailwindSetup';
import AutoReload, { headings as reloadHeadings } from './pages/topics/AutoReload';

// Scroll to top helper component on route change
function ScrollToTop() {
  const { pathname } = window.location;
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [showLoader, setShowLoader] = useState(true);

  return (
    <>
      {showLoader && <Loader onFinished={() => setShowLoader(false)} />}
      <Router>
        <ScrollToTop />
        <Routes>
          <Route 
            path="/" 
            element={<Layout headings={introHeadings}><IntroFlow /></Layout>} 
          />
          <Route 
            path="/setup" 
            element={<Layout headings={setupHeadings}><ProjectSetup /></Layout>} 
          />
          <Route 
            path="/structure" 
            element={<Layout headings={structureHeadings}><FileStructure /></Layout>} 
          />
          <Route 
            path="/app" 
            element={<Layout headings={appHeadings}><AppCreation /></Layout>} 
          />
          <Route 
            path="/urls" 
            element={<Layout headings={urlsHeadings}><Urls /></Layout>} 
          />
          <Route 
            path="/views" 
            element={<Layout headings={viewsHeadings}><Views /></Layout>} 
          />
          <Route 
            path="/templates" 
            element={<Layout headings={templatesHeadings}><Templates /></Layout>} 
          />
          <Route 
            path="/context" 
            element={<Layout headings={contextHeadings}><Context /></Layout>} 
          />
          <Route 
            path="/static" 
            element={<Layout headings={staticHeadings}><StaticFiles /></Layout>} 
          />
          <Route 
            path="/models" 
            element={<Layout headings={modelsHeadings}><ModelsORM /></Layout>} 
          />
          <Route 
            path="/admin" 
            element={<Layout headings={adminHeadings}><AdminPanel /></Layout>} 
          />
          <Route 
            path="/dynamic-routes" 
            element={<Layout headings={dynamicRoutesHeadings}><DynamicRoutes /></Layout>} 
          />
          <Route 
            path="/forms" 
            element={<Layout headings={formsHeadings}><FormsSetup /></Layout>} 
          />
          <Route 
            path="/auth" 
            element={<Layout headings={authHeadings}><UserAuth /></Layout>} 
          />
          <Route 
            path="/cbv" 
            element={<Layout headings={cbvHeadings}><ClassBasedViews /></Layout>} 
          />
          <Route 
            path="/tailwind" 
            element={<Layout headings={tailwindHeadings}><TailwindSetup /></Layout>} 
          />
          <Route 
            path="/autoreload" 
            element={<Layout headings={reloadHeadings}><AutoReload /></Layout>} 
          />
          {/* Fallback route back to home */}
          <Route 
            path="*" 
            element={<Layout headings={introHeadings}><IntroFlow /></Layout>} 
          />
        </Routes>
      </Router>
    </>
  );
}
