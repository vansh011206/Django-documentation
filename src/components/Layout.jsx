import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { topicsData, CATEGORIES } from '../content/topicsData';
import { BookOpenIcon, MenuIcon, XIcon, SearchIcon, ArrowLeftIcon, ArrowRightIcon } from './Icons';

export default function Layout({ children, headings = [] }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  
  // Sidebar state persistent in local storage, default to true on desktop, false on mobile
  const [isSidebarOpen, setIsSidebarOpen] = useState(() => {
    const saved = localStorage.getItem('django_docs_sidebar');
    if (saved !== null) return JSON.parse(saved);
    return window.innerWidth >= 1024; // True for lg screens, false for small screens
  });

  // Save sidebar state to localStorage
  useEffect(() => {
    localStorage.setItem('django_docs_sidebar', JSON.stringify(isSidebarOpen));
  }, [isSidebarOpen]);

  // Close sidebar automatically on mobile route transitions
  useEffect(() => {
    if (window.innerWidth < 1024) {
      setIsSidebarOpen(false);
    }
  }, [location.pathname]);

  // Prevent body scrolling on mobile when sidebar is open
  useEffect(() => {
    if (isSidebarOpen && window.innerWidth < 1024) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isSidebarOpen]);

  const scrollContainerRef = useRef(null);

  // Scroll content container back to top smoothly when route changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, [location.pathname]);

  // Find current topic metadata
  const currentIdx = topicsData.findIndex(t => t.path === location.pathname);
  const currentTopic = currentIdx !== -1 ? topicsData[currentIdx] : null;
  const prevTopic = currentIdx > 0 ? topicsData[currentIdx - 1] : null;
  const nextTopic = currentIdx !== -1 && currentIdx < topicsData.length - 1 ? topicsData[currentIdx + 1] : null;

  // Filter topics based on search query
  const filteredTopics = topicsData.filter(topic =>
    topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    topic.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    topic.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Group filtered topics by category
  const groupedTopics = Object.values(CATEGORIES).reduce((acc, cat) => {
    const matches = filteredTopics.filter(t => t.category === cat);
    if (matches.length > 0) {
      acc[cat] = matches;
    }
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-bgMain text-textMain flex flex-col font-sans selection:bg-accent/20">
      
      {/* Top navbar on mobile/tablet */}
      <header className="lg:hidden flex items-center justify-between px-4 py-3 bg-bgCard border-b border-slate-800 sticky top-0 z-30">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-1.5 rounded text-textMuted hover:text-accent hover:bg-slate-800 transition-colors"
            aria-label="Open sidebar"
          >
            <MenuIcon size={20} />
          </button>
          <Link to="/" className="flex items-center gap-2 text-textMain font-semibold tracking-wide">
            <BookOpenIcon size={18} className="text-accent hidden sm:block" />
            <span className="font-mono text-xs sm:text-sm font-bold text-accent">django.hinglish</span>
          </Link>
        </div>
        <div className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-accent/90 hidden sm:block">
          v1.0.0
        </div>
      </header>

      {/* Main layout frame */}
      <div className="flex-1 flex relative">
        
        {/* Sidebar backdrop for mobile drawer overlay */}
        {isSidebarOpen && (
          <div
            onClick={() => setIsSidebarOpen(false)}
            className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300"
          />
        )}

        {/* Sidebar Panel */}
        <aside
          className={`fixed lg:sticky top-0 bottom-0 left-0 w-72 bg-bgCard border-r border-slate-800 flex flex-col transition-transform duration-300 z-50 lg:z-10 h-[100dvh] lg:h-screen ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
          }`}
        >
          {/* Sidebar Header */}
          <div className="px-5 py-4 border-b border-slate-800 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <BookOpenIcon size={22} className="text-accent" />
              <div className="flex flex-col">
                <span className="font-mono text-base font-black tracking-wider text-accent leading-none">DJANGO</span>
                <span className="text-[10px] text-textMuted tracking-wider uppercase font-semibold mt-0.5">Hinglish Notes</span>
              </div>
            </Link>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="lg:hidden p-1 rounded text-textMuted hover:text-accent hover:bg-slate-800 transition-colors"
              aria-label="Close sidebar"
            >
              <XIcon size={18} />
            </button>
          </div>

          {/* Search bar */}
          <div className="p-4 border-b border-slate-800/60">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-textMuted pointer-events-none">
                <SearchIcon size={15} />
              </span>
              <input
                type="text"
                placeholder="Topic search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-bgMain border border-slate-800 rounded-md py-1.5 pl-9 pr-4 text-sm text-textMain placeholder:text-textMuted/60 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent font-sans transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-textMuted hover:text-accent"
                >
                  <XIcon size={14} />
                </button>
              )}
            </div>
          </div>

          {/* Sidebar scroll list */}
          <nav className="flex-1 overflow-y-auto p-4 custom-scrollbar space-y-6">
            {Object.keys(groupedTopics).length > 0 ? (
              Object.entries(groupedTopics).map(([category, items]) => (
                <div key={category} className="space-y-1">
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-textMuted px-2 py-1">
                    {category}
                  </h4>
                  <ul className="space-y-0.5">
                    {items.map(topic => {
                      const isActive = location.pathname === topic.path;
                      return (
                        <li key={topic.id}>
                          <Link
                            to={topic.path}
                            className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                              isActive
                                ? 'bg-accent/10 border-l-2 border-accent text-accent pl-4'
                                : 'text-textMain/80 hover:text-accent hover:bg-slate-800/40'
                            }`}
                          >
                            <span className={`w-1 h-1 rounded-full ${isActive ? 'bg-accent' : 'bg-transparent'}`}></span>
                            {topic.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))
            ) : (
              <div className="text-center py-6 text-textMuted text-xs font-sans">
                Koi topic nahi mila :(
              </div>
            )}
          </nav>
          
          {/* Footer indicator */}
          <div className="p-4 border-t border-slate-800 bg-[#0d131f] flex items-center justify-between text-[11px] text-textMuted font-mono">
            <span>By a Django Learner</span>
            <span>v1.0.0</span>
          </div>
        </aside>

        {/* Main Content Pane */}
        <main className="flex-1 min-w-0 flex">
          
          {/* Primary text content scroll area */}
          <div ref={scrollContainerRef} className="flex-1 overflow-y-auto px-4 md:px-8 py-8 md:py-12 flex flex-col justify-between max-w-4xl mx-auto">
            
            {/* Top info and header */}
            <article className="prose prose-invert max-w-none flex-1">
              {currentTopic && (
                <header className="mb-8 pb-6 border-b border-slate-800/80">
                  <span className="text-[10px] tracking-wider uppercase font-bold text-accent px-2 py-0.5 rounded bg-accent/10 font-mono">
                    {currentTopic.category}
                  </span>
                  <h1 className="text-3xl md:text-4xl font-extrabold text-textMain mt-3 mb-2 tracking-tight">
                    {currentTopic.title}
                  </h1>
                  <p className="text-sm md:text-base text-textMuted font-sans">
                    {currentTopic.description}
                  </p>
                </header>
              )}

              {/* Children rendered page content */}
              <div className="font-sans leading-relaxed text-textMain/90 space-y-6">
                {children}
              </div>
            </article>

            {/* Prev / Next footer navigation buttons */}
            <footer className="mt-16 pt-6 border-t border-slate-800 flex items-center justify-between gap-4">
              {prevTopic ? (
                <Link
                  to={prevTopic.path}
                  className="flex-1 max-w-[200px] flex items-center gap-2.5 p-3 rounded-lg border border-slate-800 bg-bgCard hover:border-accent/40 text-left transition-all"
                >
                  <ArrowLeftIcon size={16} className="text-accent shrink-0" />
                  <div className="overflow-hidden">
                    <div className="text-[10px] uppercase font-bold text-textMuted tracking-wider leading-none">PREVIOUS</div>
                    <div className="text-xs font-semibold text-textMain truncate mt-1">{prevTopic.title}</div>
                  </div>
                </Link>
              ) : (
                <div className="flex-1 max-w-[200px]"></div>
              )}

              {nextTopic ? (
                <Link
                  to={nextTopic.path}
                  className="flex-1 max-w-[200px] flex items-center justify-between gap-2.5 p-3 rounded-lg border border-slate-800 bg-bgCard hover:border-accent/40 text-right transition-all ml-auto"
                >
                  <div className="overflow-hidden w-full">
                    <div className="text-[10px] uppercase font-bold text-textMuted tracking-wider leading-none">NEXT</div>
                    <div className="text-xs font-semibold text-textMain truncate mt-1">{nextTopic.title}</div>
                  </div>
                  <ArrowRightIcon size={16} className="text-accent shrink-0" />
                </Link>
              ) : (
                <div className="flex-1 max-w-[200px]"></div>
              )}
            </footer>
          </div>

          {/* Right mini table of contents on desktop (visible on widescreen 1280px+) */}
          {headings.length > 0 && (
            <aside className="hidden xl:block w-64 border-l border-slate-800/50 p-6 space-y-4 sticky top-0" style={{ height: '100vh' }}>
              <div className="text-[10px] font-bold uppercase tracking-wider text-textMuted mb-2">
                On This Page
              </div>
              <ul className="space-y-2 text-xs font-medium">
                {headings.map((heading, idx) => (
                  <li key={idx} style={{ paddingLeft: `${(heading.level - 2) * 12}px` }}>
                    <a
                      href={`#${heading.id}`}
                      className="text-textMuted hover:text-accent transition-colors block py-0.5 truncate border-l border-transparent hover:border-accent/40 pl-2 -ml-2"
                    >
                      {heading.text}
                    </a>
                  </li>
                ))}
              </ul>
            </aside>
          )}

        </main>
      </div>
    </div>
  );
}
