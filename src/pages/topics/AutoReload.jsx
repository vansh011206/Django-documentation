import React from 'react';
import TerminalBlock from '../../components/TerminalBlock';
import CodeBlock from '../../components/CodeBlock';
import Callout from '../../components/Callout';

export const headings = [
  { id: "install", text: "1. Pip Package Install", level: 2 },
  { id: "settings", text: "2. Settings.py Settings", level: 2 },
  { id: "urls", text: "3. Urls.py Route Addition", level: 2 }
];

export default function AutoReload() {
  return (
    <div className="space-y-6">
      <section>
        <p className="text-base text-textMain/90 leading-relaxed font-sans">
          Har baar code change karne ke baad browser me manually click karke <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-xs font-mono">F5</kbd> reload karna bada boring kaam hai. Hum <strong className="text-accent font-mono">django-browser-reload</strong> set up karenge jo code save karte hi tab automatic reload kar dega.
        </p>
      </section>

      <section id="install">
        <h2 className="text-xl font-bold text-textMain border-b border-slate-800 pb-2 mb-4 font-mono">
          1. Django Browser Reload Package Install
        </h2>
        <p className="text-sm text-textMuted font-sans">
          Virtual env active rakh kar pip package install karein:
        </p>
        <TerminalBlock 
          command="pip install django-browser-reload"
          explanation="Ye library development server changes (HTML/CSS/Views) ko track karti hai aur client sync reload karti hai."
        />
      </section>

      <section id="settings">
        <h2 className="text-xl font-bold text-textMain border-b border-slate-800 pb-2 mb-4 font-mono">
          2. settings.py Configurations
        </h2>
        <p className="text-sm text-textMuted font-sans">
          App ko register karein aur iska middleware inject karein:
        </p>
        <CodeBlock 
          filename="settings.py"
          language="python"
          code={`INSTALLED_APPS = [
    ...
    'django_browser_reload', # Add here
]

MIDDLEWARE = [
    # Gzip middleware ke theek neeche add karna recommended hai
    # Django list me isko sabse niche bhi rakh sakte ho
    ...
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    
    # Browser reload middleware register karein
    'django_browser_reload.middleware.BrowserReloadMiddleware',
]`}
        />
      </section>

      <section id="urls">
        <h2 className="text-xl font-bold text-textMain border-b border-slate-800 pb-2 mb-4 font-mono">
          3. Project level urls.py Route Addition
        </h2>
        <p className="text-sm text-textMuted font-sans">
          Browser and server sync connection endpoint establish karne ke liye URL configure karein:
        </p>
        <CodeBlock 
          filename="myproject/urls.py"
          language="python"
          code={`from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.split),
    path('chai/', include('chai.urls')),
    
    # Reload sync URL map karein
    path("__reload__/", include("django_browser_reload.urls")),
]`}
        />
        <Callout type="tip" title="JADU CHAL GAYA!">
          Ab server ko <code className="font-mono text-accent bg-accent/10 px-1 rounded">python manage.py runserver</code> se restart karo. Template me koi bhi text change karke save dabao. Tum dekhoge browser automatically bina click kiye refresh ho jayega!
        </Callout>
      </section>
    </div>
  );
}
