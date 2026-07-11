import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import Callout from '../../components/Callout';

export const headings = [
  { id: "concept", text: "1. Views Introduction", level: 2 },
  { id: "httpresponse", text: "2. HttpResponse vs Render", level: 2 },
  { id: "code-example", text: "3. Views.py Code Example", level: 2 }
];

export default function Views() {
  return (
    <div className="space-y-6">
      <section>
        <p className="text-base text-textMain/90 leading-relaxed font-sans">
          Django me <strong className="font-mono text-accent">views.py</strong> wo jagah hai jahan saara backend logics chalta hai. Views incoming requests receive karte hain aur returns me response dete hain.
        </p>
      </section>

      <section id="concept">
        <h2 className="text-xl font-bold text-textMain border-b border-slate-800 pb-2 mb-4 font-mono">
          1. View Ka Role
        </h2>
        <p className="text-sm text-textMuted font-sans">
          URL routing ke match hone par jo views triggered hota hai, uska workflow ye hota hai:
        </p>
        <ul className="list-disc list-inside space-y-2 text-sm text-textMain/80 pl-2 font-sans mt-3">
          <li>Browser ke request parameter ko receive karna.</li>
          <li>Database queries run karna ya processing calculations karna.</li>
          <li>User browser ko standard responses package package wapas bhejna.</li>
        </ul>
      </section>

      <section id="httpresponse">
        <h2 className="text-xl font-bold text-textMain border-b border-slate-800 pb-2 mb-4 font-mono">
          2. HttpResponse vs render()
        </h2>
        <p className="text-sm text-textMuted font-sans">
          Django views me responses wapas bhejte waqt standard do tareeqe use hoten hain:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 font-sans">
          <div className="bg-slate-900/60 p-4 border border-slate-800 rounded-lg">
            <h4 className="font-bold text-sm text-accent mb-1.5 font-mono">HttpResponse()</h4>
            <p className="text-xs text-textMuted leading-relaxed">
              Ye raw static content bhejta hai browser ko. Isme hum seedhe string text ya direct HTML code pass karte hain. CSS/Design control karna impossible hota hai.
            </p>
          </div>
          <div className="bg-slate-900/60 p-4 border border-slate-800 rounded-lg">
            <h4 className="font-bold text-sm text-accent mb-1.5 font-mono">render()</h4>
            <p className="text-xs text-textMuted leading-relaxed">
              Ye dynamic HTML template load karta hai. Ye pure templates file ko server par scan karke compile karta hai, aur dynamic python variable context inject karke bhejta hai.
            </p>
          </div>
        </div>
      </section>

      <section id="code-example">
        <h2 className="text-xl font-bold text-textMain border-b border-slate-800 pb-2 mb-4 font-mono">
          3. Views.py Live Code
        </h2>
        <p className="text-sm text-textMuted font-sans">
          Hamare <strong className="font-mono text-accent">chai</strong> app ke views file ka coding:
        </p>
        <CodeBlock 
          filename="chai/views.py"
          language="python"
          code={`from django.shortcuts import render
from django.http import HttpResponse # Raw response ke liye import zaroori hai

# 1. Simple view returning raw text
def home_simple(request):
    return HttpResponse("<h1>Hello World! Swagat hai Django me.</h1>")

# 2. Production level view rendering a template page
def all_chai(request):
    # dynamic context prepare karein (optional)
    data = {
        'total_types': 5,
        'special': 'Masala Chai'
    }
    # render command: render(request, template_path, context_dict)
    return render(request, 'chai/all_chai.html', data)
`}
        />
        <Callout type="tip" title="RENDER PATH NOTE">
          Notice karo render function me humne template path <code className="font-mono text-accent bg-accent/10 px-1 rounded">'chai/all_chai.html'</code> likha hai, na ki sirf <code className="font-mono text-accent bg-accent/10 px-1 rounded">'all_chai.html'</code>. Ye humare template folder namespace separation rule ke wajah se hai!
        </Callout>
      </section>
    </div>
  );
}
