import React from 'react';
import CodeBlock from '../../components/CodeBlock';

export const headings = [
  { id: "manage", text: "manage.py", level: 2 },
  { id: "config-folder", text: "Project Config Folder", level: 2 },
  { id: "inner-files", text: "Inner Files Ka Kaam", level: 2 }
];

export default function FileStructure() {
  return (
    <div className="space-y-6">
      <section>
        <p className="text-base text-textMain/90 leading-relaxed font-sans">
          Jab tum <code className="font-mono text-accent bg-accent/10 px-1 rounded">django-admin startproject myproject .</code> chalate ho, toh ye saari default files create hoti hain. Inka structure aur roles samajhna zaruri hai.
        </p>
      </section>

      <section id="manage">
        <h2 className="text-xl font-bold text-textMain border-b border-slate-800 pb-2 mb-4 font-mono">
          manage.py
        </h2>
        <p className="text-sm text-textMuted font-sans">
          Ye project ke root layout par milta hai. Ye tumhara main command line manager hai. Isko run karke tum database migrates, server trigger aur new apps start karte ho.
        </p>
        <CodeBlock 
          code={`# manage.py ko direct edit karne ki zarurat nahi padti.
# Hum ise command line me use karte hain, jaise:
python manage.py runserver
python manage.py migrate
python manage.py startapp <app_name>`}
          language="python"
        />
      </section>

      <section id="config-folder">
        <h2 className="text-xl font-bold text-textMain border-b border-slate-800 pb-2 mb-4 font-mono">
          Project Config Folder (myproject/)
        </h2>
        <p className="text-sm text-textMuted font-sans">
          Is folder ke andar tumhare project ki main configuration files rehti hain:
        </p>
      </section>

      <section id="inner-files">
        <h2 className="text-lg font-semibold text-accent mb-4 flex items-center gap-2">
          <span className="w-1.5 h-6 bg-accent rounded-full"></span>
          Inner Files Ka Kaam (Hinglish bullets)
        </h2>
        <ul className="space-y-4 pl-1 text-sm text-textMain/80 font-sans">
          <li className="border-l-2 border-slate-800 pl-4 py-1">
            <strong className="text-accent font-mono block">__init__.py</strong>
            Ek khali file jo Python ko batati hai ki ye directory ek importable Python package hai. Ise kabhi manually edit nahi kiya jata.
          </li>
          <li className="border-l-2 border-slate-800 pl-4 py-1">
            <strong className="text-accent font-mono block">settings.py</strong>
            Sabse important file. Project ki configurations (database connection, installed apps, static assets paths, middleware keys, timezone) yahan control hoti hain.
          </li>
          <li className="border-l-2 border-slate-800 pl-4 py-1">
            <strong className="text-accent font-mono block">urls.py</strong>
            Website ke routes map karta hai. Kaunsa URL hit karne par kaunsi view trigger hogi, uski list isi file me store hoti hai.
          </li>
          <li className="border-l-2 border-slate-800 pl-4 py-1">
            <strong className="text-accent font-mono block">wsgi.py / asgi.py</strong>
            Production server deployment configurations. Jab tum websockets ya production servers (Gunicorn/Uvicorn) set up karoge, tab ye gateway entries kaam aayengi. WSGI stands for Web Server Gateway Interface and ASGI for Asynchronous.
          </li>
        </ul>
      </section>
    </div>
  );
}
