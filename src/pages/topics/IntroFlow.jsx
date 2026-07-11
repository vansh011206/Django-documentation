import React from 'react';
import FlowDiagram from '../../components/FlowDiagram';

export const headings = [
  { id: "cycle", text: "1. Django Cycle", level: 2 },
  { id: "files", text: "2. Main Files Intro", level: 2 }
];

export default function IntroFlow() {
  return (
    <div className="space-y-6">
      <section>
        <p className="text-base text-textMain/90 leading-relaxed font-sans">
          Django ek <strong className="text-accent">MVT (Model-View-Template)</strong> architecture follow karne wala Python web framework hai.
          Iska main kaam hai web requests ko receive karna aur sahi HTML/Data response wapas browser ko bhej dena.
        </p>
      </section>

      <section id="cycle">
        <h2 className="text-xl font-bold text-textMain border-b border-slate-800 pb-2 mb-4 font-mono">
          Django Request-Response Cycle
        </h2>
        <p className="text-sm text-textMuted font-sans">
          Jab koi user tumhari website par kisi link par click karta hai, toh Django ke andar ye saara khel chalta hai:
        </p>
        
        {/* Render Flow diagram component */}
        <FlowDiagram />
      </section>

      <section id="files" className="mt-8">
        <h2 className="text-xl font-bold text-textMain border-b border-slate-800 pb-2 mb-4 font-mono">
          Summary (Hinglish me)
        </h2>
        <ul className="list-disc list-inside space-y-3 pl-2 text-sm text-textMain/80 font-sans">
          <li>
            <strong className="text-accent font-mono">urls.py</strong> ka kaam hai sirf <span className="underline decoration-accent/40">routing</span> handle karna. Ye URL ko dekhta hai aur views ke paas forward kar deta hai.
          </li>
          <li>
            <strong className="text-accent font-mono">views.py</strong> ka kaam hai saari <span className="underline decoration-accent/40">logic</span> lagana. DB se data nikalna, users ko check karna, etc.
          </li>
          <li>
            <strong className="text-accent font-mono">templates/</strong> hain tumhare static <span className="underline decoration-accent/40">HTML pages</span> jinme dynamic variable placeholders hote hain.
          </li>
          <li>
            <strong className="text-accent font-mono">settings.py</strong> tumhare pure project ka <span className="underline decoration-accent/40">control panel</span> hai. Koi bhi external setup ho, yahan register karna hi hoga.
          </li>
        </ul>
      </section>
    </div>
  );
}
