import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import Callout from '../../components/Callout';

export const headings = [
  { id: "concept", text: "1. Context Concept", level: 2 },
  { id: "views-pass", text: "2. Passing From View", level: 2 },
  { id: "template-display", text: "3. Display In Template", level: 2 }
];

export default function Context() {
  return (
    <div className="space-y-6">
      <section>
        <p className="text-base text-textMain/90 leading-relaxed font-sans">
          Views se calculations aur processing karne ke baad jo dynamic values (variables, dictionaries, lists, objects) hume user screen par show karni hoti hain, unhe hum ek <strong className="text-accent">Context Dictionary</strong> me wrap karke bhejte hain.
        </p>
      </section>

      <section id="concept">
        <h2 className="text-xl font-bold text-textMain border-b border-slate-800 pb-2 mb-4 font-mono">
          1. Context Kya Hai?
        </h2>
        <p className="text-sm text-textMuted font-sans">
          Context ek simple Python dictionary <code className="font-mono text-accent bg-accent/10 px-1 rounded">{'{key: value}'}</code> hoti hai.
        </p>
        <ul className="list-disc list-inside space-y-1.5 text-sm text-textMain/80 pl-2 font-sans mt-3">
          <li><strong>Keys:</strong> Template variables ke names ban jaate hain.</li>
          <li><strong>Values:</strong> Un variables ke real values ban jaate hain (string, int, dict, list, class instances).</li>
        </ul>
      </section>

      <section id="views-pass">
        <h2 className="text-xl font-bold text-textMain border-b border-slate-800 pb-2 mb-4 font-mono">
          2. View Se Context Kaise Bhein?
        </h2>
        <p className="text-sm text-textMuted font-sans">
          Views me render response generate karte waqt 3rd argument dictionary send kiya jata hai:
        </p>
        <CodeBlock 
          filename="views.py"
          language="python"
          code={`from django.shortcuts import render

def order_detail(request):
    # Dynamic values prepare karein
    ordered_items = ["Adrak Chai", "Bun Maska", "Samosa"]
    user_name = "Vanshaj"
    bill_amount = 120
    is_vip = True
    
    # Pack values in a dictionary
    context_data = {
        'items': ordered_items,
        'customer': user_name,
        'total': bill_amount,
        'vip_user': is_vip
    }
    
    # context_data dictionary pass kar rahe hain render function me
    return render(request, 'chai/order.html', context_data)
`}
        />
      </section>

      <section id="template-display">
        <h2 className="text-xl font-bold text-textMain border-b border-slate-800 pb-2 mb-4 font-mono">
          3. Template Me Use Kaise Karein?
        </h2>
        <p className="text-sm text-textMuted font-sans">
          View se dynamic dictionary keys direct variable bankar access hoti hain:
        </p>
        <CodeBlock 
          filename="templates/chai/order.html"
          language="html"
          code={`<h1>Order Summary For: {{ customer }}</h1>

{% if vip_user %}
  <p className="vip-badge">Aap VIP customer hain! 10% discount added.</p>
{% endif %}

<h3>Items ordered:</h3>
<ul>
  {% for item in items %}
    <li>{{ item }}</li>
  {% endfor %}
</ul>

<p>Grand Total: Rs. {{ total }}/-</p>
`}
        />
        <Callout type="tip" title="KEY NAME IS DTL VARIABLE">
          Notice karo views me key name <code className="font-mono text-accent bg-accent/10 px-1 rounded">'customer'</code> thaa, toh template me wahi variables ban gaya <code className="font-mono text-accent bg-accent/10 px-1 rounded">{'{{ customer }}'}</code>. Backend python variable name <code className="font-mono text-accent bg-accent/10 px-1 rounded">user_name</code> wahan accessible nahi hoga.
        </Callout>
      </section>
    </div>
  );
}
