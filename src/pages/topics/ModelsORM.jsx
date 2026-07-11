import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import Callout from '../../components/Callout';
import TerminalBlock from '../../components/TerminalBlock';

export const headings = [
  { id: "concept", text: "1. Django Models", level: 2 },
  { id: "fields", text: "2. Common Field Types", level: 2 },
  { id: "migrations", text: "3. Migrations Commands", level: 2 },
  { id: "orm", text: "4. Django ORM (CRUD)", level: 2 }
];

export default function ModelsORM() {
  return (
    <div className="space-y-6">
      <section>
        <p className="text-base text-textMain/90 leading-relaxed font-sans">
          Django me Database ke saath communicate karne ke liye hume raw SQL queries likhne ki zarurat nahi padti.
          Django ek powerful <strong className="text-accent">ORM (Object-Relational Mapper)</strong> provide karta hai, jahan hum database tables ko normal Python Classes ke roop me define karte hain. Inhe hi hum <strong className="text-accent">Models</strong> kehte hain.
        </p>
      </section>

      <section id="concept">
        <h2 className="text-xl font-bold text-textMain border-b border-slate-800 pb-2 mb-4 font-mono">
          1. Django Models (models.py)
        </h2>
        <p className="text-sm text-textMuted font-sans">
          Har model class ek database table ko represent karti hai, aur class ke attributes us table ke columns hote hain. Let's see an example:
        </p>
        <CodeBlock
          filename="chai/models.py"
          language="python"
          code={`from django.db import models
from django.utils import timezone

class ChaiVariety(models.Model):
    # Class columns/fields
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='chais/')
    date_added = models.DateTimeField(default=timezone.now)
    price = models.IntegerField(default=10)
    description = models.TextField(default='')

    # Python representation of object
    def __str__(self):
        return self.name
`}
        />
        <Callout type="info" title="__str__ METHOD">
          Kisi bhi class ke andar <code className="font-mono text-accent bg-accent/10 px-1 rounded">__str__(self)</code> method likhna bohot useful hota hai. Ye Django Admin Panel aur Python Shell me object ka human-readable naam return karta hai (jaise "Masala Chai" ki jagah "ChaiVariety object (1)" nahi dikhta).
        </Callout>
      </section>

      <section id="fields">
        <h2 className="text-xl font-bold text-textMain border-b border-slate-800 pb-2 mb-4 font-mono">
          2. Common Field Types
        </h2>
        <p className="text-sm text-textMuted font-sans mb-3">
          Django me alag-alag tarah ke columns banane ke liye preset field classes hoti hain:
        </p>
        <div className="space-y-3 font-sans text-sm text-textMain/80 pl-2">
          <p>• <strong className="text-accent font-mono">CharField(max_length)</strong>: Chote text (string) data ke liye. Isme maximum character limit set karna mandatory hai.</p>
          <p>• <strong className="text-accent font-mono">TextField()</strong>: Lambe text messages, blogs ya description paragraphs store karne ke liye (no char limit).</p>
          <p>• <strong className="text-accent font-mono">IntegerField()</strong>: Whole numbers (price, quantity) database columns ke liye.</p>
          <p>• <strong className="text-accent font-mono">DateTimeField()</strong>: Dates aur timestamps store karne ke liye. <code className="font-mono text-accent bg-accent/10 px-1">default=timezone.now</code> se creation time automatically store hota hai.</p>
          <p>• <strong className="text-accent font-mono">ForeignKey()</strong>: Do tables ke beech relationship (One-To-Many) banane ke liye. Jaise ek <code className="font-mono text-accent">Review</code> hamesha ek <code className="font-mono text-accent">ChaiVariety</code> se linked hoga.</p>
        </div>
      </section>

      <section id="migrations">
        <h2 className="text-xl font-bold text-textMain border-b border-slate-800 pb-2 mb-4 font-mono">
          3. Migrations (SQLite updates)
        </h2>
        <p className="text-sm text-textMuted font-sans">
          Models file me class likhne ya change karne ke baad Django ko batana padta hai ki database me changes push karein. Iske liye do step command lines execute hote hain:
        </p>
        
        <div className="mt-4">
          <span className="text-xs font-semibold text-accent/80 font-mono block mb-1">Step A: Migrations File Taiyaar Karein</span>
          <TerminalBlock
            command="python manage.py makemigrations"
            explanation="Ye command models.py file me kiye gaye changes ko scan karke ek draft python instruction file (e.g. '0001_initial.py') banati hai."
          />
        </div>

        <div className="mt-4">
          <span className="text-xs font-semibold text-accent/80 font-mono block mb-1">Step B: Changes DB me apply Karein</span>
          <TerminalBlock
            command="python manage.py migrate"
            explanation="Ye command un draft instruction files ko actual database (SQLite / PostgreSQL) ke tabular architecture me tables create/update karke save kar deti hai."
          />
        </div>

        <Callout type="warning" title="REGISTER APP FIRST">
          Migrations tabhi work karengi jab tumhara Custom App (jaise 'chai') pehle <code className="font-mono text-accent bg-accent/10 px-1 rounded">settings.py</code> ke <code className="font-mono text-accent bg-accent/10 px-1 rounded">INSTALLED_APPS</code> ke andar registered hoga!
        </Callout>
      </section>

      <section id="orm">
        <h2 className="text-xl font-bold text-textMain border-b border-slate-800 pb-2 mb-4 font-mono">
          4. Django ORM (CRUD Operations)
        </h2>
        <p className="text-sm text-textMuted font-sans">
          Terminal ya views me bina direct SQL queries type kiye database se data manipulate karne ka method:
        </p>

        <CodeBlock
          filename="Django Python Shell / views.py"
          language="python"
          code={`# 1. CREATE: Naya object DB me insert karna
nayi_chai = ChaiVariety(name="Ginger Chai", price=15, description="Ginger flavor tea")
nayi_chai.save() # database me insert command save hoga

# 2. READ ALL: Saare records nikalna
all_chais = ChaiVariety.objects.all()

# 3. FILTER: Specific condition ke rows extract karna
cheap_chais = ChaiVariety.objects.filter(price__lte=15) # price <= 15

# 4. GET SINGLE OBJECT: Ek single record fetch karna (using unique ID)
chai_num_one = ChaiVariety.objects.get(id=1)

# 5. UPDATE: Existing column ki value modify karna
chai_to_edit = ChaiVariety.objects.get(id=2)
chai_to_edit.price = 20
chai_to_edit.save()

# 6. DELETE: Record remove karna DB se
chai_to_delete = ChaiVariety.objects.get(id=3)
chai_to_delete.delete()
`}
        />
      </section>
    </div>
  );
}
