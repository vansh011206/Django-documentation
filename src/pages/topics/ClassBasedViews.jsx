import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import Callout from '../../components/Callout';

export const headings = [
  { id: "cbv-concept", text: "1. CBV Concept", level: 2 },
  { id: "generic-cbv", text: "2. Generic CBV Examples", level: 2 },
  { id: "fbv-vs-cbv", text: "3. Comparison: FBV vs CBV", level: 2 }
];

export default function ClassBasedViews() {
  return (
    <div className="space-y-6">
      <section>
        <p className="text-base text-textMain/90 leading-relaxed font-sans">
          Django me views likhne ke do primary concepts hain: <strong className="text-accent">Function-Based Views (FBVs)</strong> aur <strong className="text-accent">Class-Based Views (CBVs)</strong>.
          Kyunki common patterns (jaise list rendering, details fetching, creation handling) har web projects me lagbhag identical hote hain, Django generic classes provide karta hai jo code redundancies ko eliminate kar deti hain.
        </p>
      </section>

      <section id="cbv-concept">
        <h2 className="text-xl font-bold text-textMain border-b border-slate-800 pb-2 mb-4 font-mono">
          1. Class-Based Views (CBV) Kya Hai
        </h2>
        <p className="text-sm text-textMuted font-sans">
          FBVs me hum python functions define karte hain jisme dynamic logic logic conditional flow checks lagte hain (<code className="font-mono text-accent">if request.method == 'POST'</code>).
          Lekin CBVs me hum methods like <code className="font-mono text-accent">get()</code> aur <code className="font-mono text-accent">post()</code> override karte hain jo framework architecture level par auto-dispatch hote hain.
        </p>
      </section>

      <section id="generic-cbv">
        <h2 className="text-xl font-bold text-textMain border-b border-slate-800 pb-2 mb-4 font-mono">
          2. Generic CBV Examples
        </h2>
        <p className="text-sm text-textMuted font-sans mb-3">
          Django me pre-packaged generic views classes modules:
        </p>
        <div className="space-y-3 font-sans text-sm text-textMain/80 pl-2">
          <p>• <strong className="text-accent font-mono">ListView</strong>: Model table data ke all rows fetch karke rendering template variable data array auto-inject karta hai.</p>
          <p>• <strong className="text-accent font-mono">DetailView</strong>: Path identifiers use karke query primary key automatically matching row details render karti hai.</p>
          <p>• <strong className="text-accent font-mono">CreateView, UpdateView, DeleteView</strong>: UI forms auto-render parameters processing database mapping save systems.</p>
        </div>

        <CodeBlock
          filename="chai/views.py (Generic CBV version)"
          language="python"
          code={`from django.views.generic import ListView, DetailView
from .models import ChaiVariety

# 1. ListView: Lists all records automatically
class ChaiListView(ListView):
    model = ChaiVariety
    template_name = 'chai/all_chai.html'       # Custom template route map
    context_object_name = 'all_chais'          # HTML list variable loop variable name

# 2. DetailView: Fetches single record by pk automatically
class ChaiDetailView(DetailView):
    model = ChaiVariety
    template_name = 'chai/chai_detail.html'
    context_object_name = 'chai'
`}
        />
        
        <p className="text-sm text-textMuted font-sans mt-4">
          CBVs ko register karte waqt urls file configuration patterns me function conversions <code className="font-mono text-accent bg-accent/10 px-1 rounded">.as_view()</code> call zaroori hota hai:
        </p>
        <CodeBlock
          filename="chai/urls.py"
          language="python"
          code={`from django.urls import path
from .views import ChaiListView, ChaiDetailView

urlpatterns = [
    # ListView
    path('', ChaiListView.as_view(), name='all_chai'),
    
    # DetailView: expects integer pk to query DB automatically!
    path('<int:pk>/', ChaiDetailView.as_view(), name='chai_detail'),
]
`}
        />
      </section>

      <section id="fbv-vs-cbv">
        <h2 className="text-xl font-bold text-textMain border-b border-slate-800 pb-2 mb-4 font-mono">
          3. FBV vs CBV: Kaunsa Kab Use Karein?
        </h2>
        <p className="text-sm text-textMuted font-sans mb-4">
          Dono concepts ke options and trade-offs understanding constraints checklist parameters comparison:
        </p>

        <div className="overflow-x-auto my-6 border border-slate-800 rounded-lg">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-slate-900 border-b border-slate-800">
                <th className="p-3 font-semibold text-accent font-mono">Feature</th>
                <th className="p-3 font-semibold text-textMain font-sans">Function-Based Views (FBV)</th>
                <th className="p-3 font-semibold text-textMain font-sans">Class-Based Views (CBV)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-textMuted">
              <tr>
                <td className="p-3 font-semibold text-accent font-mono bg-slate-900/20">Learning Curve</td>
                <td className="p-3 text-xs">Easy. Plain python functions matching normal procedural logic flows.</td>
                <td className="p-3 text-xs">Moderate to Hard. Inheritance rules, mixins, method lifecycle knowledge requirement.</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-accent font-mono bg-slate-900/20">Reusability</td>
                <td className="p-3 text-xs">Low. Hard to extend, duplicate codes setup across controllers.</td>
                <td className="p-3 text-xs">Very High. Mixins decorators override inheritance properties perfectly.</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-accent font-mono bg-slate-900/20">Custom Complexities</td>
                <td className="p-3 text-xs">Extremely flexible. Pure customized python calculations handling.</td>
                <td className="p-3 text-xs">Can get complex. Overriding standard methods structure might feel messy.</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-accent font-mono bg-slate-900/20">Best Suited For</td>
                <td className="p-3 text-xs">Custom logic pages, quick prototypes, API views integration.</td>
                <td className="p-3 text-xs">Standard CRUD actions panels, repetitive dashboard views layouts.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Callout type="info" title="PRODUCTION RECOMMENDATION">
          Shuruat me hamesha <strong className="text-accent">FBVs (Function-Based Views)</strong> par focus karein. Isse requests, processing parameters, aur render responses flow ke internal concepts ache se clear hote hain.
        </Callout>
      </section>
    </div>
  );
}
