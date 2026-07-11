import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import Callout from '../../components/Callout';

export const headings = [
  { id: "concept", text: "1. Django Forms Concept", level: 2 },
  { id: "modelform", text: "2. ModelForm Creation", level: 2 },
  { id: "template-render", text: "3. Rendering in HTML", level: 2 },
  { id: "view-save", text: "4. Form Saving in Views", level: 2 }
];

export default function FormsSetup() {
  return (
    <div className="space-y-6">
      <section>
        <p className="text-base text-textMain/90 leading-relaxed font-sans">
          Har dynamic website me users se inputs lene ke liye forms ki zarurat hoti hai.
          Django built-in <strong className="text-accent">Forms module</strong> provide karta hai, jo HTML form elements auto-generate karta hai, server-side data validations auto-run karta hai, aur data safe and secure database save karwata hai.
        </p>
      </section>

      <section id="concept">
        <h2 className="text-xl font-bold text-textMain border-b border-slate-800 pb-2 mb-4 font-mono">
          1. Form vs ModelForm
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans text-sm my-4">
          <div className="bg-slate-900/60 p-4 border border-slate-800 rounded-lg">
            <h4 className="font-bold text-accent mb-1.5 font-mono">forms.Form</h4>
            <p className="text-xs text-textMuted leading-relaxed">
              Ye normal custom data capture ke liye use kiya jata hai jahan seedhe database columns se data direct link nahi hota. Jaise Contact Us page ka email queries form ya dynamic calculation input parameters feed panels.
            </p>
          </div>
          <div className="bg-slate-900/60 p-4 border border-slate-800 rounded-lg">
            <h4 className="font-bold text-accent mb-1.5 font-mono">forms.ModelForm</h4>
            <p className="text-xs text-textMuted leading-relaxed">
              Ye tab use hota hai jab hamara form direct kisi database Model ke columns ke input mapping layout se connected hota hai (jaise new product create form jo database row generate karega). Ye models layout analyze karke validation functions auto-create kar deta hai.
            </p>
          </div>
        </div>
      </section>

      <section id="modelform">
        <h2 className="text-xl font-bold text-textMain border-b border-slate-800 pb-2 mb-4 font-mono">
          2. ModelForm Create Kaise Karein
        </h2>
        <p className="text-sm text-textMuted font-sans mb-3">
          Sabse pehle hamare app ke folder me ek naya file <strong className="font-mono text-accent">forms.py</strong> create karte hain:
        </p>
        <CodeBlock
          filename="chai/forms.py"
          language="python"
          code={`from django import forms
from .models import ChaiVariety

class ChaiVarietyForm(forms.ModelForm):
    class Meta:
        model = ChaiVariety # Model attach karein
        fields = ['name', 'price', 'description'] # columns list jo user form me fill karega
`}
        />
        <Callout type="tip" title="FIELDS SELECTION">
          Agar tum model ke saare field inputs form page display me represent karna chahte ho to manual array declaration ki jagah <code className="font-mono text-accent bg-accent/10 px-1 rounded">fields = '__all__'</code> set kar sakte ho!
        </Callout>
      </section>

      <section id="template-render">
        <h2 className="text-xl font-bold text-textMain border-b border-slate-800 pb-2 mb-4 font-mono">
          3. Template me Form Render Karna
        </h2>
        <p className="text-sm text-textMuted font-sans">
          HTML templates layout file ke andar forms rendering configure karte waqt ye structural syntax zaroori hai:
        </p>
        <CodeBlock
          filename="templates/chai/add_chai.html"
          language="html"
          code={`<!-- action empty matlab views function reload method execute karega -->
<form method="POST" class="form-container">
    <!-- CSRF Token: Django security cross-site scripts hacking block validation -->
    {% csrf_token %}
    
    <!-- Render Django fields inside paragraph tags -->
    {{ form.as_p }}
    
    <button type="submit">Save Chai</button>
</form>
`}
        />
        <Callout type="warning" title="CSRF TOKEN IS MANDATORY">
          Django me post parameters form submit handle karte waqt <code className="font-mono text-accent bg-accent/10 px-1 rounded">{"{% csrf_token %}"}</code> tag attach karna bilkul compulsory hai. Iske bina server browser par direct <strong className="text-red-400 font-mono">403 Forbidden Error</strong> response render kar dega!
        </Callout>
      </section>

      <section id="view-save">
        <h2 className="text-xl font-bold text-textMain border-b border-slate-800 pb-2 mb-4 font-mono">
          4. Forms Input Data Save in Views
        </h2>
        <p className="text-sm text-textMuted font-sans">
          Views handlers controller function flow write logic:
        </p>
        <CodeBlock
          filename="chai/views.py"
          language="python"
          code={`from django.shortcuts import render, redirect
from .forms import ChaiVarietyForm

def add_new_chai(request):
    if request.method == 'POST':
        # 1. Bind form parameters with request data object
        form = ChaiVarietyForm(request.POST)
        
        # 2. Server validation: datatype constraints checks
        if form.is_valid():
            # 3. Model parameters match karke safe database row auto-insert
            form.save()
            return redirect('all_chai') # save hone ke bad list page redirect
    else:
        # GET request handle: empty form initialization to render first time
        form = ChaiVarietyForm()
        
    return render(request, 'chai/add_chai.html', {'form': form})
`}
        />
      </section>
    </div>
  );
}
