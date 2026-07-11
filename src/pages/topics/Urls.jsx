import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import Callout from '../../components/Callout';

export const headings = [
  { id: "concept", text: "1. Routing Concept", level: 2 },
  { id: "project-urls", text: "2. Project urls.py Configuration", level: 2 },
  { id: "app-urls", text: "3. App urls.py Configuration", level: 2 }
];

export default function Urls() {
  return (
    <div className="space-y-6">
      <section>
        <p className="text-base text-textMain/90 leading-relaxed font-sans">
          Jab koi user website par koi link open karta hai (jaise: <code className="font-mono text-accent">/chai/order/</code>), toh Django <strong className="font-mono text-accent">urls.py</strong> me checking karta hai taaki pata chale ki kaunsi request kis view function ko deni hai.
        </p>
      </section>

      <section id="concept">
        <h2 className="text-xl font-bold text-textMain border-b border-slate-800 pb-2 mb-4 font-mono">
          1. URL Routing Kaise Kaam Karta Hai?
        </h2>
        <p className="text-sm text-textMuted font-sans">
          Django me do types ke routing routes banaye jaate hain:
        </p>
        <ul className="list-disc list-inside space-y-2 text-sm text-textMain/80 pl-2 font-sans mt-3">
          <li>
            <strong className="text-accent">Project Level URLs:</strong> Pure project ke pathways. Ye requests ko specific apps ke paas redirect karte hain.
          </li>
          <li>
            <strong className="text-accent">App Level URLs:</strong> App ke specific features (jaise all posts, single post details, edit post) ko local views ke saath map karte hain.
          </li>
        </ul>
      </section>

      <section id="project-urls">
        <h2 className="text-xl font-bold text-textMain border-b border-slate-800 pb-2 mb-4 font-mono">
          2. Project Level URLs (myproject/urls.py)
        </h2>
        <p className="text-sm text-textMuted font-sans">
          Yahan hum <code className="font-mono text-accent bg-accent/10 px-1 rounded">include()</code> function use karke incoming request app urls.py ko hand over karte hain.
        </p>
        <CodeBlock 
          filename="myproject/urls.py"
          language="python"
          code={`from django.contrib import admin
from django.urls import path, include # include import karna zaroori hai

urlpatterns = [
    path('admin/', admin.site.split),
    
    # Jab path '/chai/...' start hoga, request 'chai.urls' file me transfer ho jayegi
    path('chai/', include('chai.urls')), 
]`}
        />
      </section>

      <section id="app-urls">
        <h2 className="text-xl font-bold text-textMain border-b border-slate-800 pb-2 mb-4 font-mono">
          3. App Level URLs (chai/urls.py)
        </h2>
        <p className="text-sm text-textMuted font-sans">
          Ab app folder ke andar hume ek naya <strong className="font-mono text-accent">urls.py</strong> manually create karna padta hai aur views import karke routes mapping karni padti hai:
        </p>
        <CodeBlock 
          filename="chai/urls.py"
          language="python"
          code={`from django.urls import path
from . import views # same directory se views file import karein

urlpatterns = [
    # path('', ...) matlab direct '/chai/' hit karne par home view trigger hoga
    path('', views.all_chai, name='all_chai'),
    
    # Path '/chai/order/' hit karne par order view chalega
    path('order/', views.chai_order, name='chai_order'),
]`}
        />
        <Callout type="tip" title="PATH ARGUMENTS EXPLAINED">
          <code className="font-mono text-accent">path('route/', view_function, name='alias')</code>
          <ul className="list-decimal list-inside pl-2 space-y-1.5 mt-2 text-xs">
            <li><strong>route:</strong> Browser URL path (jaise 'order/').</li>
            <li><strong>view_function:</strong> Views.py ka handler function (jaise views.chai_order).</li>
            <li><strong>name:</strong> Route ka alias, jisse HTML templates me hardcoded links likhne ki zarurat nahi padti.</li>
          </ul>
        </Callout>
      </section>
    </div>
  );
}
