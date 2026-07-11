import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import Callout from '../../components/Callout';
import TerminalBlock from '../../components/TerminalBlock';

export const headings = [
  { id: "overview", text: "1. Django Admin Introduction", level: 2 },
  { id: "superuser", text: "2. Create Superuser", level: 2 },
  { id: "register", text: "3. Register Models", level: 2 },
  { id: "customize", text: "4. Customize Admin Layout", level: 2 },
  { id: "reset-pass", text: "5. Reset Password", level: 2 },
  { id: "site-custom", text: "6. Site Customization", level: 2 }
];

export default function AdminPanel() {
  return (
    <div className="space-y-6">
      <section>
        <p className="text-base text-textMain/90 leading-relaxed font-sans">
          Django ka sabse bada selling point uska automatic, built-in <strong className="text-accent">Admin Panel</strong> (Dashboard) hai.
          Ye developer ko database data read, create, update, aur delete karne ke liye ek ready-to-use GUI panel de deta hai bina kisi custom backend interface banaye.
        </p>
      </section>

      <section id="overview">
        <h2 className="text-xl font-bold text-textMain border-b border-slate-800 pb-2 mb-4 font-mono">
          1. Django Admin Portal
        </h2>
        <p className="text-sm text-textMuted font-sans">
          Har naye project me Django admin portal default address <a href="http://127.0.0.1:8000/admin/" target="_blank" rel="noopener noreferrer" className="text-accent underline hover:text-accentHover">http://127.0.0.1:8000/admin/</a> par available hota hai.
          Lekin is portal me login karne ke liye hume ek master admin account (jise <strong className="text-accent">Superuser</strong> kehte hain) banana padta hai.
        </p>
      </section>

      <section id="superuser">
        <h2 className="text-xl font-bold text-textMain border-b border-slate-800 pb-2 mb-4 font-mono">
          2. Superuser Create Kaise Karein
        </h2>
        <p className="text-sm text-textMuted font-sans">
          Terminal/CLI kholo aur virtual env active hone par ye command run karo:
        </p>
        <TerminalBlock
          command="python manage.py createsuperuser"
          explanation="Ye CLI prompt start karega jahan Username, Email, aur Password set karna hoga. Type karte waqt password terminal screen par invisible rehta hai, so dhyan se type karein."
        />
        <Callout type="tip" title="DEFAULT MIGRATION NEEDED">
          createsuperuser command chalane se pehle ensure karo ki tumne <code className="font-mono text-accent bg-accent/10 px-1 rounded">python manage.py migrate</code> chala diya ho. Django default user tables database me create hone ke baad hi admin save ho sakta hai!
        </Callout>
      </section>

      <section id="register">
        <h2 className="text-xl font-bold text-textMain border-b border-slate-800 pb-2 mb-4 font-mono">
          3. Custom Models Register Karna
        </h2>
        <p className="text-sm text-textMuted font-sans">
          Jab tum koi naya model class database me banate ho (jaise `ChaiVariety`), toh wo automatic admin dashboard me show nahi hota. Use hume <strong className="font-mono text-accent">admin.py</strong> me register karna padta hai:
        </p>
        <CodeBlock
          filename="chai/admin.py"
          language="python"
          code={`from django.contrib import admin
from .models import ChaiVariety # Model import karein

# Simple registration
admin.site.register(ChaiVariety)
`}
        />
        <p className="text-sm text-textMain/80 font-sans mt-3">
          Ab admin dashboard reload karke login karo, tumhara <strong className="text-accent">ChaiVariety</strong> section CRUD dashboard me show hone lagega!
        </p>
      </section>

      <section id="customize">
        <h2 className="text-xl font-bold text-textMain border-b border-slate-800 pb-2 mb-4 font-mono">
          4. Custom Admin Panel Layout
        </h2>
        <p className="text-sm text-textMuted font-sans">
          By default, Django admin table me objects ka sirf string representation (<code className="font-mono text-accent">__str__</code> output) dikhata hai.
          Agar hume grid me multiple columns, search bar, filters aur extra parameters customize karne hon toh hum decorators aur Class attributes use karte hain:
        </p>
        <CodeBlock
          filename="chai/admin.py"
          language="python"
          code={`from django.contrib import admin
from .models import ChaiVariety

# Custom layout options definition
@admin.register(ChaiVariety)
class ChaiVarietyAdmin(admin.ModelAdmin):
    # 1. Grid tabular display columns
    list_display = ('name', 'price', 'date_added')
    
    # 2. Add filters side panel
    list_filter = ('date_added',)
    
    # 3. Add search bar dynamically matching fields
    search_fields = ('name',)
`}
        />
        <Callout type="info" title="DECORATOR VS REGISTER">
          <code className="font-mono text-accent bg-accent/10 px-1 rounded">@admin.register(ModelName)</code> ek elegant design pattern hai, jo simple register function ki jagah class ke upar lagaya jata hai aur control system ko clean rakhta hai.
        </Callout>
      </section>

      <section id="reset-pass">
        <h2 className="text-xl font-bold text-textMain border-b border-slate-800 pb-2 mb-4 font-mono">
          5. Admin/User Password Reset (CLI command)
        </h2>
        <p className="text-sm text-textMuted font-sans">
          Agar aap kisi bhi local user (including superuser) ka password bhool gaye hain, toh terminal se bina DB delete kiye password update karne ke liye ye command chalaayein:
        </p>
        <TerminalBlock
          command="python manage.py changepassword <username>"
          explanation="<username> ki jagah us admin ka name likhein jiska password change karna hai. Command run hote hi naya password enter karne ka option mil jayega."
        />
      </section>

      <section id="site-custom">
        <h2 className="text-xl font-bold text-textMain border-b border-slate-800 pb-2 mb-4 font-mono">
          6. Admin Portal Site Customization (Branding)
        </h2>
        <p className="text-sm text-textMuted font-sans">
          Django Admin dashboard ke top header bar aur browser title tag ko apne branding ke mutabik badalne ke liye hum <strong className="font-mono text-accent">urls.py</strong> ya <strong className="font-mono text-accent">admin.py</strong> ke end me ye parameters override kar sakte hain:
        </p>
        <CodeBlock
          filename="myproject/urls.py (or app/admin.py)"
          language="python"
          code={`from django.contrib import admin

# 1. Dashboard ke main top blue header bar ka text badle
admin.site.site_header = "Chai Aur Django Admin Portal"

# 2. Browser tab me dikhne wala Title tag badle
admin.site.site_title = "Chai Admin"

# 3. Welcome page ke index text header ko change karein
admin.site.index_title = "Swagat hai Chai management database dashboard me"
`}
        />
        <Callout type="tip" title="EASY BRANDING">
          In properties ko override karne ke liye kisi external package ya CSS overriding ki zaroorat nahi hai. Django natively is customize option settings ko design levels par fully support karta hai!
        </Callout>
      </section>
    </div>
  );
}
