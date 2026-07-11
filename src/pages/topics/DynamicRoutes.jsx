import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import Callout from '../../components/Callout';

export const headings = [
  { id: "params", text: "1. Dynamic URL Parameters", level: 2 },
  { id: "views-handling", text: "2. Views Handling", level: 2 },
  { id: "get-or-404", text: "3. get_object_or_404 Shortcut", level: 2 }
];

export default function DynamicRoutes() {
  return (
    <div className="space-y-6">
      <section>
        <p className="text-base text-textMain/90 leading-relaxed font-sans">
          Badi websites me har ek item (jaise dynamic blog, dynamic product ya single chai variety detail) ke liye alag se manually routing link banana bekar practice hai.
          Iske liye hum <strong className="text-accent">Dynamic Routing</strong> use karte hain jahan URL ka ek part variable ban jaata hai.
        </p>
      </section>

      <section id="params">
        <h2 className="text-xl font-bold text-textMain border-b border-slate-800 pb-2 mb-4 font-mono">
          1. Dynamic URL Parameters
        </h2>
        <p className="text-sm text-textMuted font-sans">
          Urls routing configure karte waqt hum variable placeholders ko angular brackets <code className="font-mono text-accent bg-accent/10 px-1 rounded">&lt;type:variable_name&gt;</code> ke andar declare karte hain:
        </p>
        <CodeBlock
          filename="chai/urls.py"
          language="python"
          code={`from django.urls import path
from . import views

urlpatterns = [
    # Static url
    path('', views.all_chai, name='all_chai'),
    
    # Dynamic url: <int:chai_id> parameter integer type handle karega
    path('<int:chai_id>/', views.chai_detail, name='chai_detail'),
]
`}
        />
        <Callout type="info" title="PATH CONVERTERS">
          Django me standard 3 converters use hote hain:
          <br />• <code className="font-mono text-accent">int</code>: Match karega digits integers (e.g. 1, 45).
          <br />• <code className="font-mono text-accent">str</code>: Match karega simple string bina slash '/' characters ke.
          <br />• <code className="font-mono text-accent">slug</code>: Match karega lowercase hyphens and alphanumeric patterns (e.g. 'masala-chai-recipe').
        </Callout>
      </section>

      <section id="views-handling">
        <h2 className="text-xl font-bold text-textMain border-b border-slate-800 pb-2 mb-4 font-mono">
          2. Views File me Receive Karna
        </h2>
        <p className="text-sm text-textMuted font-sans">
          Hamare matching view function ke definition argument me request param ke just baad exact wahi name declare karna hoga jo humne urls path converters configuration me dala tha:
        </p>
        <CodeBlock
          filename="chai/views.py"
          language="python"
          code={`from django.shortcuts import render
from .models import ChaiVariety

def chai_detail(request, chai_id):
    # chai_id variable integer store karega jo request URL se extract hua hai.
    # Database filtering:
    single_chai = ChaiVariety.objects.get(id=chai_id)
    
    context = {
        'chai': single_chai
    }
    return render(request, 'chai/chai_detail.html', context)
`}
        />
      </section>

      <section id="get-or-404">
        <h2 className="text-xl font-bold text-textMain border-b border-slate-800 pb-2 mb-4 font-mono">
          3. Bulletproof handling using get_object_or_404
        </h2>
        <p className="text-sm text-textMuted font-sans">
          Agar upar wale function me user ne direct browser search URL me <code className="font-mono text-accent">/999/</code> daal diya, aur database me us range ki koi primary key save nahi hai, toh python model query crash kar jayega aur server throw karega <code className="text-red-400 font-mono">DoesNotExist</code> runtime error dashboard crash screen ke saath.
          Isse bachne ke liye standard robust standard function shortcut use karte hain:
        </p>
        <CodeBlock
          filename="chai/views.py (Safe version)"
          language="python"
          code={`from django.shortcuts import render, get_object_or_404
from .models import ChaiVariety

def chai_detail(request, chai_id):
    # get_object_or_404(ModelName, query_conditions)
    # Agar data na mile to ye automatically standard Page Not Found (404) response screen bhej dega backend crash kiye bina!
    single_chai = get_object_or_404(ChaiVariety, pk=chai_id)
    
    return render(request, 'chai/chai_detail.html', {'chai': single_chai})
`}
        />
        <Callout type="warning" title="pk MEANING">
          Database queries me <code className="font-mono text-accent bg-accent/10 px-1 rounded">pk</code> ka simple fullform <strong className="font-mono">Primary Key</strong> hota hai. Har table column interface me unique identifier represent karne ke liye standard pk key attribute use karte hain.
        </Callout>
      </section>
    </div>
  );
}
