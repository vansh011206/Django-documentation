import React from 'react';
import TerminalBlock from '../../components/TerminalBlock';
import CodeBlock from '../../components/CodeBlock';
import Callout from '../../components/Callout';

export const headings = [
  { id: "install", text: "1. NPM & Tailwind Setup", level: 2 },
  { id: "config", text: "2. Configure tailwind.config.js", level: 2 },
  { id: "input", text: "3. Input CSS File Creation", level: 2 },
  { id: "compile", text: "4. CLI Build & Watch", level: 2 },
  { id: "template", text: "5. Link Output CSS", level: 2 }
];

export default function TailwindSetup() {
  return (
    <div className="space-y-6">
      <section>
        <p className="text-base text-textMain/90 leading-relaxed font-sans">
          Django templates me clean design design banane ke liye Tailwind CSS standard setup kiya jata hai. Standalone NodeJS installation use karna sabse clean aur consistent method hai.
        </p>
      </section>

      <section id="install">
        <h2 className="text-xl font-bold text-textMain border-b border-slate-800 pb-2 mb-4 font-mono">
          1. Node/NPM packages setup
        </h2>
        <p className="text-sm text-textMuted font-sans">
          Sabse pehle project root folder me terminal open karein (venv outside rakh kar) aur packages install karein:
        </p>
        <TerminalBlock 
          command={[
            "npm init -y",
            "npm install -D tailwindcss postcss autoprefixer",
            "npx tailwindcss init"
          ]}
          explanation="Node environment initialize karega, Tailwind assets install karega, aur ek standalone tailwind.config.js generator run karega."
        />
      </section>

      <section id="config">
        <h2 className="text-xl font-bold text-textMain border-b border-slate-800 pb-2 mb-4 font-mono">
          2. Tailwind Config File Setting
        </h2>
        <p className="text-sm text-textMuted font-sans">
          Tailwind ko batayein ki hamare dynamic HTML template files kahan hain taaki wo utility classes scan kar sake.
        </p>
        <CodeBlock 
          filename="tailwind.config.js"
          language="javascript"
          code={`/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Project level templates scan karega
    "./templates/**/*.html",
    // Har individual App level templates scan karega
    "./**/templates/**/*.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`}
        />
      </section>

      <section id="input">
        <h2 className="text-xl font-bold text-textMain border-b border-slate-800 pb-2 mb-4 font-mono">
          3. Input CSS File Create Karein
        </h2>
        <p className="text-sm text-textMuted font-sans">
          Hamare main project static folder ke andar ek subfolder input file create karein, e.g. <code className="font-mono text-accent bg-accent/10 px-1 rounded">static/src/input.css</code> and write:
        </p>
        <CodeBlock 
          filename="static/src/input.css"
          language="css"
          code={`@tailwind base;
@tailwind components;
@tailwind utilities;`}
        />
      </section>

      <section id="compile">
        <h2 className="text-xl font-bold text-textMain border-b border-slate-800 pb-2 mb-4 font-mono">
          4. Build & Watch Compiler
        </h2>
        <p className="text-sm text-textMuted font-sans">
          Ab Tailwind CLI compilation process start karein taaki hum jo bhi files edit karein, output styles refresh ho sake:
        </p>
        <TerminalBlock 
          command="npx tailwindcss -i ./static/src/input.css -o ./static/css/output.css --watch"
          explanation="Ye watcher continuous background me chalega. Input file scan karega aur final optimized CSS 'static/css/output.css' me dump karega."
        />
      </section>

      <section id="template">
        <h2 className="text-xl font-bold text-textMain border-b border-slate-800 pb-2 mb-4 font-mono">
          5. Link In HTML Template
        </h2>
        <p className="text-sm text-textMuted font-sans">
          Final optimized CSS sheet template file me link karein:
        </p>
        <CodeBlock 
          filename="templates/base.html"
          language="html"
          code={`{% load static %}
<!DOCTYPE html>
<html>
<head>
    <!-- Output compiled stylesheet link -->
    <link rel="stylesheet" href="{% static 'css/output.css' %}">
</head>
<body class="bg-slate-900 text-slate-100 flex items-center justify-center min-h-screen">
    <h1 class="text-4xl font-extrabold text-teal-400">Tailwind Chal Gaya!</h1>
</body>
</html>
`}
        />
        <Callout type="tip" title="PRO DEV TIP">
          Jab tum development server chala rahe ho, toh tumhare do terminal screens chalenge: ek <code className="font-mono text-accent bg-accent/10 px-1 rounded">python manage.py runserver</code> ke liye aur doosra tailwind <code className="font-mono text-accent bg-accent/10 px-1 rounded">--watch</code> cli process ke liye.
        </Callout>
      </section>
    </div>
  );
}
