import React from 'react';
import TerminalBlock from '../../components/TerminalBlock';
import CodeBlock from '../../components/CodeBlock';
import Callout from '../../components/Callout';
import FileTree from '../../components/FileTree';

export const headings = [
  { id: "create", text: "1. Create App Command", level: 2 },
  { id: "register", text: "2. Register In Settings", level: 2 },
  { id: "templates-structure", text: "3. Template Folder Naming", level: 2 },
  { id: "file-tree", text: "4. App Directory Tree", level: 2 }
];

export default function AppCreation() {
  const appTree = [
    {
      name: "chai",
      isFolder: true,
      isOpen: true,
      children: [
        {
          name: "migrations",
          isFolder: true,
          isOpen: false,
          children: [
            { name: "__init__.py", isFolder: false }
          ]
        },
        {
          name: "templates",
          isFolder: true,
          isOpen: true,
          children: [
            {
              name: "chai",
              isFolder: true,
              isOpen: true,
              children: [
                { name: "all_chai.html", isFolder: false }
              ]
            }
          ]
        },
        { name: "__init__.py", isFolder: false },
        { name: "admin.py", isFolder: false },
        { name: "apps.py", isFolder: false },
        { name: "models.py", isFolder: false },
        { name: "tests.py", isFolder: false },
        { name: "views.py", isFolder: false }
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <section>
        <p className="text-base text-textMain/90 leading-relaxed font-sans">
          Django project ke andar hum discrete functionality ke liye <strong className="text-accent">Apps</strong> banate hain. Jaise users module ke liye 'accounts' app, blogs ke liye 'blog' app, etc. Ek project me multiple apps ho sakti hain.
        </p>
      </section>

      <section id="create">
        <h2 className="text-xl font-bold text-textMain border-b border-slate-800 pb-2 mb-4 font-mono">
          1. Django App Kaise Banayein
        </h2>
        <p className="text-sm text-textMuted font-sans">
          Naya app create karne ke liye manage.py script ko startapp commands pass karein:
        </p>
        <TerminalBlock 
          command="python manage.py startapp chai"
          explanation="Hum 'chai' naam ka app create kar rahe hain."
        />
      </section>

      <section id="register">
        <h2 className="text-xl font-bold text-textMain border-b border-slate-800 pb-2 mb-4 font-mono">
          2. App Ko Settings Me Register Karein (Don't Forget!)
        </h2>
        <p className="text-sm text-textMuted font-sans">
          App banane ke baad, Django ko tab tak pata nahi chalega jab tak hum ise <strong className="font-mono text-accent">settings.py</strong> ki <code className="font-mono text-accent bg-accent/10 px-1 rounded">INSTALLED_APPS</code> list me register na karein.
        </p>
        <CodeBlock 
          filename="myproject/settings.py"
          language="python"
          code={`# settings.py ke andar INSTALLED_APPS dhundho aur apna app add karo

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    
    # Apna naya app register karo
    'chai', 
]`}
        />
        <Callout type="warning" title="DHYAN DEIN (MUST DO STUFF)">
          Agar app ko settings.py me add nahi kiya, toh models migrations, URLs or view templates kaam nahi karenge. Django is app ko totally ignore kar dega.
        </Callout>
      </section>

      <section id="templates-structure">
        <h2 className="text-xl font-bold text-textMain border-b border-slate-800 pb-2 mb-4 font-mono">
          3. Templates Folder Naming Convention
        </h2>
        <p className="text-sm text-textMuted font-sans">
          Django me templates rendering ka ek strict rules hai. App ke andar hum seedhe HTML file nahi rakhte, balki ek double folder structure banate hain:
        </p>
        <div className="bg-slate-900/60 p-4 border border-slate-800 rounded-lg font-mono text-xs my-4 space-y-1.5">
          <div className="text-textMuted">❌ GALAT: <span className="text-red-400">chai/templates/all_chai.html</span></div>
          <div className="text-accent">✅ SAHI: <span className="text-green-400">chai/templates/chai/all_chai.html</span></div>
        </div>
        <p className="text-xs text-textMuted leading-relaxed font-sans">
          <strong>Aisa kyun?</strong> Kyunki Django saare apps ke templates ko ek badi list me collect karta hai. Agar do apps me same name ki file hui (jaise: index.html), toh name collision ho jayega. Apne app-name ka nested folder banane se namespace separate ho jata hai.
        </p>
      </section>

      <section id="file-tree">
        <h2 className="text-xl font-bold text-textMain border-b border-slate-800 pb-2 mb-4 font-mono">
          4. Complete App Directory Tree
        </h2>
        <p className="text-sm text-textMuted font-sans">
          Ek standard app folder banne ke baad uski folder structures aisi dikhni chahiye:
        </p>
        <FileTree treeData={appTree} title="chai App Structure" />
      </section>
    </div>
  );
}
