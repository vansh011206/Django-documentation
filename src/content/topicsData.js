export const CATEGORIES = {
  BASICS: "Shuruat (Basics)",
  APP_CORE: "App & Routing",
  TEMPLATES_DATA: "Templates & Context",
  DATABASE: "Database & Models (ORM)",
  USER_INPUT: "Forms & User Input",
  ADVANCED: "Authentication & CBVs",
  DEV_FLOW: "Power Dev Setup"
};

export const topicsData = [
  {
    id: "flow",
    title: "Django Flow",
    description: "Django Request-Response cycle aur files ka aapas me connection.",
    path: "/",
    category: CATEGORIES.BASICS
  },
  {
    id: "setup",
    title: "Project Setup",
    description: "Virtual env setup karne se lekar server run karne tak ka tarika.",
    path: "/setup",
    category: CATEGORIES.BASICS
  },
  {
    id: "structure",
    title: "Project File Structure",
    description: "Django project create hone par milne wali standard files ka intro.",
    path: "/structure",
    category: CATEGORIES.BASICS
  },
  {
    id: "app",
    title: "App Creation",
    description: "Naya Django app banana, register karna, aur directory structure.",
    path: "/app",
    category: CATEGORIES.APP_CORE
  },
  {
    id: "urls",
    title: "URLs (urls.py)",
    description: "Incoming URL requests ko matching views ke saath bind karna.",
    path: "/urls",
    category: CATEGORIES.APP_CORE
  },
  {
    id: "views",
    title: "Views (views.py)",
    description: "Requests process karna, calculations run karna, aur response bhejna.",
    path: "/views",
    category: CATEGORIES.APP_CORE
  },
  {
    id: "templates",
    title: "Templates & DTL",
    description: "HTML documents me dynamic data print karna DTL tags se.",
    path: "/templates",
    category: CATEGORIES.TEMPLATES_DATA
  },
  {
    id: "context",
    title: "Context Data",
    description: "Views se data pack karke Templates tak surakshit pahunchana.",
    path: "/context",
    category: CATEGORIES.TEMPLATES_DATA
  },
  {
    id: "static",
    title: "Static Files",
    description: "CSS, JS, images aur client-side assets load karne ka configuration.",
    path: "/static",
    category: CATEGORIES.TEMPLATES_DATA
  },
  {
    id: "models",
    title: "Models & Migrations",
    description: "Database structure define karna aur migrations run karna.",
    path: "/models",
    category: CATEGORIES.DATABASE
  },
  {
    id: "admin",
    title: "Django Admin Panel",
    description: "Superuser banana aur models ko built-in dashboard par register karna.",
    path: "/admin",
    category: CATEGORIES.DATABASE
  },
  {
    id: "dynamic-routes",
    title: "Dynamic Routing",
    description: "URLs me dynamic parameters capture karna aur get_object_or_404 use karna.",
    path: "/dynamic-routes",
    category: CATEGORIES.USER_INPUT
  },
  {
    id: "forms",
    title: "Django Forms & ModelForms",
    description: "User input handle karna, POST requests process karna, aur data validate karna.",
    path: "/forms",
    category: CATEGORIES.USER_INPUT
  },
  {
    id: "auth",
    title: "User Authentication",
    description: "Built-in login, logout Views aur views ko protect karne ke tareeqe.",
    path: "/auth",
    category: CATEGORIES.ADVANCED
  },
  {
    id: "cbv",
    title: "CBVs vs FBVs",
    description: "Class-Based Views ka basic intro aur Function-Based Views se comparison.",
    path: "/cbv",
    category: CATEGORIES.ADVANCED
  },
  {
    id: "tailwind",
    title: "Tailwind CSS",
    description: "Django templates me utility-first CSS integration setup step-by-step.",
    path: "/tailwind",
    category: CATEGORIES.DEV_FLOW
  },
  {
    id: "autoreload",
    title: "Browser Auto-Reload",
    description: "Code me save dabaate hi browser automatic reload karwane ki settings.",
    path: "/autoreload",
    category: CATEGORIES.DEV_FLOW
  }
];
