import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import Callout from '../../components/Callout';

export const headings = [
  { id: "syntax", text: "1. DTL Syntax Details", level: 2 },
  { id: "dots", text: "2. Dot Notation", level: 2 },
  { id: "settings", text: "3. Template Settings Config", level: 2 },
  { id: "static", text: "4. Load Static Files", level: 2 }
];

export default function Templates() {
  return (
    <div className="space-y-6">
      <section>
        <p className="text-base text-textMain/90 leading-relaxed font-sans">
          Django me <strong className="text-accent">Templates</strong> simple HTML pages hote hain jinme Django Template Language (DTL) tags use karke backend se bheja gaya data render kiya jata hai.
        </p>
      </section>

      <section id="syntax">
        <h2 className="text-xl font-bold text-textMain border-b border-slate-800 pb-2 mb-4 font-mono">
          1. DTL Syntax Elements
        </h2>
        <p className="text-sm text-textMuted font-sans">
          Templates me code likhte waqt main 3 cheezein hoti hain:
        </p>
        
        <div className="space-y-4 mt-4">
          <div className="border border-slate-800 rounded-lg p-4 bg-slate-950/20">
            <h4 className="font-mono text-sm font-semibold text-accent mb-2">
              Double Curly Braces {'{{ }}'} — Variable Display
            </h4>
            <p className="text-xs text-textMuted mb-2">
              Kuch bhi display karwane ke liye double braces use hote hain:
            </p>
            <CodeBlock 
              language="html"
              code={`<p>Welcome back, {{ username }}!</p>
<p>Today is {{ date }}</p>`}
            />
          </div>

          <div className="border border-slate-800 rounded-lg p-4 bg-slate-950/20">
            <h4 className="font-mono text-sm font-semibold text-accent mb-2">
              Braces and Percent {'{% %}'} — Logic Control
            </h4>
            <p className="text-xs text-textMuted mb-2">
              Loops chalana, checks (if/else) lagana, URL building, template inheritance control tags:
            </p>
            <CodeBlock 
              language="html"
              code={`{% if user.is_authenticated %}
  <p>Logout kar lo yahan se.</p>
{% else %}
  <p>Pehle register karo yaar.</p>
{% endif %}

<ul>
  {% for item in items_list %}
    <li>{{ item }}</li>
  {% empty %}
    <li>Kuch stock nahi hai!</li>
  {% endfor %}
</ul>`}
            />
          </div>

          <div className="border border-slate-800 rounded-lg p-4 bg-slate-950/20">
            <h4 className="font-mono text-sm font-semibold text-accent mb-2">
              Pipe Symbol {'|'} — Template Filters
            </h4>
            <p className="text-xs text-textMuted mb-2">
              Data print karne se pehle modify karna (capitalise, lowercase, list length extract):
            </p>
            <CodeBlock 
              language="html"
              code={`<!-- Name ko capital uppercase banayega -->
<h2>{{ student.name|upper }}</h2>

<!-- List ki length dikhayega -->
<p>Total items: {{ items_list|length }}</p>

<!-- String truncate limit karega -->
<p>{{ description|truncatechars:50 }}</p>`}
            />
          </div>
        </div>
      </section>

      <section id="dots">
        <h2 className="text-xl font-bold text-textMain border-b border-slate-800 pb-2 mb-4 font-mono">
          2. Dot Notation (Accessing Objects)
        </h2>
        <p className="text-sm text-textMuted font-sans">
          Python me dictionary key access karne ke liye keys array use hota hai <code className="font-mono text-accent bg-accent/10 px-1 rounded">dict['key']</code> ya attributes ke liye <code className="font-mono text-accent bg-accent/10 px-1 rounded">obj.attr</code>. But DTL templates me sab kuch dot <strong className="font-mono text-accent">.</strong> symbol se hi resolve hota hai!
        </p>
        <CodeBlock 
          language="html"
          code={`<!-- Class/Object attribute access -->
<p>Roll: {{ student.roll_no }}</p>

<!-- Dict keys retrieve -->
<p>City: {{ my_dict.city }}</p>

<!-- List item retrieve (by index) -->
<p>First Element: {{ list_items.0 }}</p>`}
        />
      </section>

      <section id="settings">
        <h2 className="text-xl font-bold text-textMain border-b border-slate-800 pb-2 mb-4 font-mono">
          3. DIRS and APP_DIRS Settings
        </h2>
        <p className="text-sm text-textMuted font-sans">
          Django templates kahan dhundhega? Ye <strong className="font-mono text-accent">settings.py</strong> ki <code className="font-mono text-accent bg-accent/10 px-1 rounded">TEMPLATES</code> variable me configured hota hai.
        </p>
        <CodeBlock 
          filename="settings.py"
          language="python"
          code={`TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        # DIRS me global templates directories check hote hain
        'DIRS': [BASE_DIR / 'templates'], 
        
        # APP_DIRS=True tells Django: har App ke andar standard 'templates' folder check karo
        'APP_DIRS': True, 
        ...
    },
]`}
        />
      </section>

      <section id="static">
        <h2 className="text-xl font-bold text-textMain border-b border-slate-800 pb-2 mb-4 font-mono">
          4. Static Files Load Kaise Karein
        </h2>
        <p className="text-sm text-textMuted font-sans">
          HTML templates me CSS, Images ya JavaScript files include karne ke liye hume static files engine load karna padta hai:
        </p>
        <CodeBlock 
          language="html"
          code={`<!-- HTML file ke sabse top par ye call karo -->
{% load static %}

<!-- Links reference mapping -->
<link rel="stylesheet" href="{% static 'css/main.css' %}">
<img src="{% static 'images/chai_cup.png' %}" alt="Chai Logo">
<script src="{% static 'js/app.js' %}"></script>`}
        />
      </section>
    </div>
  );
}
