import React from 'react';

// Premium SVG Icons for each step
function BrowserIcon({ className }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
    </svg>
  );
}

function RouteIcon({ className }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8m-9-3.75h.008v.008H6V11.25Zm.008 0H6v.008h.008v-.008Zm0 3h.008v.008H6v-.008Zm.008 0H6v.008h.008v-.008Zm3-6h.008v.008H9V8.25Zm.008 0H9v.008h.008v-.008Zm0 3h.008v.008H9v-.008Zm.008 0H9v.008h.008v-.008Zm3-3h.008v.008h-.008V11.25Zm.008 0h-.008v.008h.008v-.008Zm0 3h-.008v.008h.008v-.008Zm.008 0h-.008v.008h.008v-.008Zm3-3h.008v.008h-.008V14.25Zm.008 0h-.008v.008h.008v-.008Zm0 3h-.008v.008h.008v-.008Zm.008 0h-.008v.008h.008v-.008Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21.5h19.5m-16.5-17h13.5a1.5 1.5 0 0 1 1.5 1.5V17.5a1.5 1.5 0 0 1-1.5 1.5h-13.5a1.5 1.5 0 0 1-1.5-1.5V6a1.5 1.5 0 0 1 1.5-1.5Z" />
    </svg>
  );
}

function BrainIcon({ className }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.43l-1.003.828c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.43l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
  );
}

function TemplateIcon({ className }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
    </svg>
  );
}

function ResponseIcon({ className }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
    </svg>
  );
}

export default function FlowDiagram() {
  const steps = [
    {
      num: "1",
      title: "User / Browser",
      desc: "User URL enter karta hai ya action trigger karta hai. Request execute hoti hai.",
      tag: "Request",
      icon: <BrowserIcon className="w-5 h-5 text-accent" />
    },
    {
      num: "2",
      title: "urls.py",
      desc: "Requested URL ko checks matching mapping controllers ke sath bind karta hai.",
      tag: "Router",
      icon: <RouteIcon className="w-5 h-5 text-accent" />
    },
    {
      num: "3",
      title: "views.py",
      desc: "Logical operations run hote hain, database operations process hote hain.",
      tag: "Controller",
      icon: <BrainIcon className="w-5 h-5 text-accent" />
    },
    {
      num: "4",
      title: "templates/",
      desc: "HTML templates file aur context parameters dynamically render hoten hain.",
      tag: "Template",
      icon: <TemplateIcon className="w-5 h-5 text-accent" />
    },
    {
      num: "5",
      title: "Browser Response",
      desc: "Final processed dynamic HTML response user screen par wapas return hoti hai.",
      tag: "Response",
      icon: <ResponseIcon className="w-5 h-5 text-accent" />
    }
  ];

  const djangoFiles = [
    {
      name: "settings.py",
      desc: "Project ka control room. Database connection, static files pathways, installed apps aur sari global settings isi file me hoti hain."
    },
    {
      name: "urls.py",
      desc: "Project ka address book. Kaunse URL path par kaunsa function/view trigger hoga, ye yahan likha jata hai."
    },
    {
      name: "views.py",
      desc: "Dimag of the application. Request ko process karna, calculations karna, aur render response return karna views ka kam hai."
    },
    {
      name: "templates/",
      desc: "User Interface files (HTML). Inme dynamic content display karne ke liye Django Template Language (DTL) use hoti hai."
    },
    {
      name: "Request / Response / Context",
      desc: "Request user ka browser bhejta hai. Response server wapas data (HTML) deta hai. Context wo thali (dictionary) hai jisme view data rakh kar template ko pass karta hai."
    }
  ];

  return (
    <div className="my-8">
      {/* Unified Vertical Roadmap Stepper (Fits perfectly in all viewport widths) */}
      <div className="space-y-6 relative before:absolute before:inset-0 before:left-5 before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-800/80">
        {steps.map((step, idx) => (
          <div key={idx} className="flex gap-4 md:gap-6 items-start relative pl-2 group">
            {/* Step number badge with pulsing hover border */}
            <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-700 text-xs flex items-center justify-center font-bold text-accent z-10 shrink-0 group-hover:bg-accent group-hover:text-bgMain group-hover:border-accent group-hover:shadow-[0_0_12px_rgba(0,245,212,0.4)] transition-all duration-300">
              {step.num}
            </div>
            
            {/* Glassmorphic timeline card */}
            <div className="flex-1 bg-[#111827]/75 backdrop-blur-sm border border-slate-800/80 hover:border-accent/40 rounded-xl p-5 transition-all duration-300 shadow-lg group-hover:shadow-[0_4px_20px_rgba(0,245,212,0.02)]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-accent/5 border border-accent/10 group-hover:border-accent/30 transition-colors">
                    {step.icon}
                  </div>
                  <h5 className="font-bold text-sm md:text-base text-textMain font-sans">
                    {step.title}
                  </h5>
                </div>
                <span className="text-[10px] tracking-wider uppercase font-bold text-accent bg-accent/10 px-2.5 py-1 rounded-full font-mono shrink-0 self-start sm:self-auto">
                  {step.tag}
                </span>
              </div>
              <p className="text-xs md:text-sm text-textMuted leading-relaxed font-sans">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Explanations Section */}
      <h3 className="text-lg font-semibold text-accent mb-4 flex items-center gap-2 mt-12">
        <span className="w-1.5 h-6 bg-accent rounded-full animate-pulse"></span>
        Core Components Ki Kahani (Hinglish Me)
      </h3>
      <div className="space-y-4">
        {djangoFiles.map((file, idx) => (
          <div key={idx} className="p-4 bg-[#111827]/60 rounded-lg border border-slate-800/80 hover:border-accent/20 hover:bg-[#111827]/80 transition-all duration-300">
            <h4 className="font-mono text-sm font-semibold text-accent mb-1 flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent"></span>
              {file.name}
            </h4>
            <p className="text-xs md:text-sm text-textMuted leading-relaxed font-sans">
              {file.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
