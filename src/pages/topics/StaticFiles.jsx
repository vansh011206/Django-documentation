import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import Callout from '../../components/Callout';
import FileTree from '../../components/FileTree';

export const headings = [
  { id: "folders", text: "1. Folder Location Options", level: 2 },
  { id: "settings-config", text: "2. Settings.py Settings", level: 2 },
  { id: "html-link", text: "3. Link CSS/Images In HTML", level: 2 }
];

export default function StaticFiles() {
  const staticTree = [
    {
      name: "myproject",
      isFolder: true,
      isOpen: true,
      children: [
        {
          name: "static",
          isFolder: true,
          isOpen: true,
          children: [
            {
              name: "css",
              isFolder: true,
              isOpen: false,
              children: [{ name: "style.css", isFolder: false }]
            },
            {
              name: "images",
              isFolder: true,
              isOpen: false,
              children: [{ name: "logo.png", isFolder: false }]
            }
          ]
        },
        { name: "settings.py", isFolder: false },
        { name: "manage.py", isFolder: false }
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <section>
        <p className="text-base text-textMain/90 leading-relaxed font-sans">
          CSS styles, JavaScript dynamic files, fonts aur images ko web pages par use karne ke liye Django me <strong className="text-accent">Static Files</strong> configuration setup kiya jata hai.
        </p>
      </section>

      <section id="folders">
        <h2 className="text-xl font-bold text-textMain border-b border-slate-800 pb-2 mb-4 font-mono">
          1. Static Files Kahan Rakhein?
        </h2>
        <p className="text-sm text-textMuted font-sans">
          Static files ko rakhne ke main do methods hain:
        </p>
        <ul className="list-disc list-inside space-y-2 text-sm text-textMain/80 pl-2 font-sans mt-3">
          <li>
            <strong className="text-accent font-mono">App Level Static:</strong> App ke andar templates jaisa same namespace: <code className="font-mono text-accent bg-accent/10 px-1 rounded">chai/static/chai/style.css</code>.
          </li>
          <li>
            <strong className="text-accent font-mono">Project Level Static:</strong> Pure project ke common assets ke liye, root parent folder me ek standalone <code className="font-mono text-accent bg-accent/10 px-1 rounded">static/</code> folder. Hum project level static folder recommend karte hain for common styles.
          </li>
        </ul>
        <FileTree treeData={staticTree} title="Project Level Static Folder Tree" />
      </section>

      <section id="settings-config">
        <h2 className="text-xl font-bold text-textMain border-b border-slate-800 pb-2 mb-4 font-mono">
          2. Settings.py Settings
        </h2>
        <p className="text-sm text-textMuted font-sans">
          Project root directory static folder ko detect karwane ke liye <strong className="font-mono text-accent">settings.py</strong> me ye parameters set karein:
        </p>
        <CodeBlock 
          filename="settings.py"
          language="python"
          code={`import os
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent

# 1. URL pattern for serving static assets (default)
STATIC_URL = 'static/'

# 2. Django ko batayein ki extra static folder kahan check kare (Project Level Static)
STATICFILES_DIRS = [
    BASE_DIR / "static", 
]

# 3. Production level collectstatic commands run hone par saare static files yahan collect honge
STATIC_ROOT = BASE_DIR / "staticfiles"
`}
        />
      </section>

      <section id="html-link">
        <h2 className="text-xl font-bold text-textMain border-b border-slate-800 pb-2 mb-4 font-mono">
          3. Templates Me Link Karein
        </h2>
        <p className="text-sm text-textMuted font-sans">
          Settings config ho gayi! Ab dynamic pages HTML layout me files link karne ke liye static engine call karein:
        </p>
        <CodeBlock 
          filename="templates/layout.html"
          language="html"
          code={`<!-- Load static helper at the very top -->
{% load static %}

<!DOCTYPE html>
<html>
<head>
    <!-- Linking CSS -->
    <link rel="stylesheet" href="{% static 'css/style.css' %}">
</head>
<body>
    
    <!-- Render Image -->
    <img src="{% static 'images/logo.png' %}" alt="Site Logo">

    <!-- Linking JavaScript -->
    <script src="{% static 'js/app.js' %}"></script>
</body>
</html>
`}
        />
        <Callout type="warning" title="REFRESH KA ISSUE">
          Jab tum CSS edit karte ho aur browser refresh karne par badlaav show nahi hoten, toh browser cached data load kar raha hota hai. Windows par <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-xs font-mono">Ctrl + F5</kbd> (Hard Reload) dabaayein.
        </Callout>
      </section>
    </div>
  );
}
