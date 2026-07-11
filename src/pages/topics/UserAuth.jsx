import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import Callout from '../../components/Callout';

export const headings = [
  { id: "auth-system", text: "1. Django Auth System", level: 2 },
  { id: "views-routes", text: "2. Built-in Login/Logout Views", level: 2 },
  { id: "protect-views", text: "3. Protecting Views", level: 2 }
];

export default function UserAuth() {
  return (
    <div className="space-y-6">
      <section>
        <p className="text-base text-textMain/90 leading-relaxed font-sans">
          Har dynamic web application me user login, logout aur security authorization setup karna primary requirement hoti hai.
          Django ek ready-to-use, robust built-in <strong className="text-accent">User Model</strong> aur security subsystem package provide karta hai taaki hume auth systems scratch se design na karna pade.
        </p>
      </section>

      <section id="auth-system">
        <h2 className="text-xl font-bold text-textMain border-b border-slate-800 pb-2 mb-4 font-mono">
          1. Django Built-in User Model
        </h2>
        <p className="text-sm text-textMuted font-sans">
          Django standard installation ke sath <code className="font-mono text-accent">django.contrib.auth.models</code> module ke andar ek <strong className="text-accent">User</strong> class table pre-configured deta hai.
          Is database architecture table columns me default set properties available hoti hain:
        </p>
        <div className="space-y-2 font-sans text-sm text-textMain/80 pl-2 mt-3">
          <p>• <strong className="text-accent font-mono">username</strong>: Unique login name.</p>
          <p>• <strong className="text-accent font-mono">password</strong>: Highly encrypted hash password security.</p>
          <p>• <strong className="text-accent font-mono">email, first_name, last_name</strong>: Optional parameters.</p>
          <p>• <strong className="text-accent font-mono">is_superuser, is_staff</strong>: Control authorizations configurations.</p>
        </div>
      </section>

      <section id="views-routes">
        <h2 className="text-xl font-bold text-textMain border-b border-slate-800 pb-2 mb-4 font-mono">
          2. Built-in Login / Logout Views
        </h2>
        <p className="text-sm text-textMuted font-sans">
          Hume custom HTML form input variables verification views likhne ki zarurat nahi hai. Django standard controller classes modules automatically authentication handle karte hain:
        </p>
        
        <CodeBlock
          filename="myproject/urls.py (Project level urls)"
          language="python"
          code={`from django.contrib import admin
from django.urls import path, include
from django.contrib.auth import views as auth_views # Import built-in views

urlpatterns = [
    path('admin/', admin.site.override_urls),
    
    # Ready-made Django authentication views
    path('login/', auth_views.LoginView.as_view(template_name='registration/login.html'), name='login'),
    path('logout/', auth_views.LogoutView.as_view(next_page='login'), name='logout'),
]
`}
        />

        <p className="text-sm text-textMuted font-sans mt-3">
          Template side par registration/login.html code script simple hota hai:
        </p>
        <CodeBlock
          filename="templates/registration/login.html"
          language="html"
          code={`<h2>Account Login</h2>
<form method="POST">
    {% csrf_token %}
    <!-- Django auto-creates username/password fields -->
    {{ form.as_p }}
    <button type="submit">Sign In</button>
</form>
`}
        />
      </section>

      <section id="protect-views">
        <h2 className="text-xl font-bold text-textMain border-b border-slate-800 pb-2 mb-4 font-mono">
          3. Views Security check (@login_required)
        </h2>
        <p className="text-sm text-textMuted font-sans">
          Agar tum chahte ho ki koi page (jaise product create page) bina login kiye open na ho sake, toh views logic functions ke upar <code className="font-mono text-accent bg-accent/10 px-1 rounded">@login_required</code> decorator wrap kar sakte hain:
        </p>
        <CodeBlock
          filename="chai/views.py"
          language="python"
          code={`from django.shortcuts import render
from django.contrib.auth.decorators import login_required # Decorator import karein

# Protect simple view
@login_required(login_url='login') # Agar logged-in nahi hai to login name url screen redirect
def user_dashboard(request):
    # Logged-in user information directly accessed: request.user
    curr_user = request.user
    return render(request, 'chai/dashboard.html', {'user': curr_user})
`}
        />
        <Callout type="tip" title="TEMPLATE SIDE CHECK">
          Template HTML page check me login state determine karne ke liye dynamic conditional parameter tags display kar sakte hain:
          <code className="block mt-2 font-mono text-accent bg-[#0d1117] p-2 rounded">
            {"{% if user.is_authenticated %}"}
            <br />&nbsp;&nbsp;Welcome, {"{{ user.username }}"}!
            <br />{"{% else %}"}
            <br />&nbsp;&nbsp;&lt;a href="{"{% url 'login' %}"}"&gt;Please Login&lt;/a&gt;
            <br />{"{% endif %}"}
          </code>
        </Callout>
      </section>
    </div>
  );
}
