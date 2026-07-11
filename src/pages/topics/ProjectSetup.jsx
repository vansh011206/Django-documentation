import React from 'react';
import TerminalBlock from '../../components/TerminalBlock';
import Callout from '../../components/Callout';

export const headings = [
  { id: "venv", text: "1. Virtual Env Setup", level: 2 },
  { id: "install", text: "2. Django Installation", level: 2 },
  { id: "project", text: "3. Start Project", level: 2 },
  { id: "run", text: "4. Start Server", level: 2 }
];

export default function ProjectSetup() {
  return (
    <div className="space-y-6">
      <section>
        <p className="text-base text-textMain/90 leading-relaxed font-sans">
          Django start karne se pehle hume ek <strong className="text-accent">Isolated Environment</strong> banana chahiye taaki dependencies doosre projects se collide na karein. Hum yahan <strong className="font-mono text-accent">uv</strong> (faster alternative to standard pip/venv) use karenge.
        </p>
      </section>

      <section id="venv">
        <h2 className="text-xl font-bold text-textMain border-b border-slate-800 pb-2 mb-4 font-mono">
          1. Virtual Environment Banaayein
        </h2>
        <p className="text-sm text-textMuted font-sans">
          Sabse pehle environment generate karne ke liye ye command chalaayein:
        </p>
        <TerminalBlock 
          command="uv venv"
          explanation="Ye command project folder ke andar '.venv' folder bana degi jisme sab kuch isolate rahega."
        />

        <p className="text-sm text-textMuted font-sans mt-4">
          Ab is environment ko activate karein:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          <div>
            <span className="text-xs font-semibold text-accent/80 font-mono block mb-1">Windows Powershell/CMD</span>
            <TerminalBlock 
              command=".venv\Scripts\activate"
              explanation="Windows OS par terminal me virtual env activate karne ke liye."
            />
          </div>
          <div>
            <span className="text-xs font-semibold text-accent/80 font-mono block mb-1">macOS / Linux terminal</span>
            <TerminalBlock 
              command="source .venv/bin/activate"
              explanation="Mac ya Linux/Ubuntu environment ke liye activation command."
            />
          </div>
        </div>
      </section>

      <section id="install">
        <h2 className="text-xl font-bold text-textMain border-b border-slate-800 pb-2 mb-4 font-mono">
          2. Django Install Karein
        </h2>
        <p className="text-sm text-textMuted font-sans">
          Environment activate hone ke baad, local environment me Django install karein:
        </p>
        <TerminalBlock 
          command="pip install django"
          explanation="Ye Django web framework ko hamare venv ke andar download aur unpack karega."
        />
      </section>

      <section id="project">
        <h2 className="text-xl font-bold text-textMain border-b border-slate-800 pb-2 mb-4 font-mono">
          3. Django Project Create Karein
        </h2>
        <p className="text-sm text-textMuted font-sans">
          Ab hum startproject command se naya project initialize karenge.
        </p>
        <TerminalBlock 
          command="django-admin startproject myproject ."
          explanation="Project name 'myproject' hai. Last me '.' lagane se extra nested directory nahi banegi. Sahi structure create hoga."
        />
        <Callout type="tip" title="DOT ( . ) MAANGTA HAI!">
          Command ke end me dot <code className="font-mono text-accent bg-accent/10 px-1 rounded">.</code> lagana mat bhulna! Agar dot nahi lagaya toh Django ek folder ke andar doosra same name ka folder bana deta hai, jo file structuring me confuse karta hai.
        </Callout>
      </section>

      <section id="run">
        <h2 className="text-xl font-bold text-textMain border-b border-slate-800 pb-2 mb-4 font-mono">
          4. Development Server Run Karein
        </h2>
        <p className="text-sm text-textMuted font-sans">
          Sari configurations setup ho gayi hain. Ab test server chalate hain:
        </p>
        <TerminalBlock 
          command="python manage.py runserver"
          explanation="Server up ho jaayega. Default address: http://127.0.0.1:8000/"
        />
        <p className="text-sm text-textMain/80 font-sans mt-3">
          Browser me <a href="http://127.0.0.1:8000/" target="_blank" rel="noopener noreferrer" className="text-accent underline hover:text-accentHover">http://127.0.0.1:8000/</a> open karke check karo. Django ka rocket flying indicator chal raha hoga!
        </p>
      </section>
    </div>
  );
}
