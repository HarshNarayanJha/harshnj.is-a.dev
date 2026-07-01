export const socialLinks = [
  { name: "Github", path: "https://github.com/HarshNarayanJha", icon: "logos/github" },
  { name: "Linkedin", path: "https://linkedin.com/in/harshnj", icon: "logos/linkedin" },
  { name: "Leetcode", path: "https://leetcode.com/u/harshnj", icon: "logos/leetcode" },
]

export const accounts = [
  { name: "Github", path: "https://github.com/HarshNarayanJha" },
  { name: "Leetcode", path: "https://leetcode.com/u/harshnj" },
  { name: "Code::Stats", path: "https://codestats.net/users/harshnj" },
  { name: "CSES", path: "https://cses.fi/user/345212" },
  { name: "TryHackMe", path: "https://tryhackme.com/p/harshnj" },
]

interface Skill {
  name: string
  tooltip: string
  logo: `skills/${string}`
  color: string
  darkColor: string
  skillType: "languages" | "systems" | "frameworks" | "intelligence"
}

// https://simpleicons.org
export const skills: Skill[] = [
  // ==========================================
  // LANGUAGES
  // ==========================================
  {
    name: "Python",
    tooltip: "First Computer Language learnt. I can make anything with this. My favorite!",
    logo: "skills/python",
    color: "#3776AB",
    darkColor: "#5A9FD4",
    skillType: "languages",
  },
  {
    name: "TypeScript",
    tooltip: "I think TypeScript is better than JavaScript",
    logo: "skills/ts",
    color: "#2563EB",
    darkColor: "#60A5FA",
    skillType: "languages",
  },
  {
    name: "JavaScript",
    tooltip: "But JavaScript is also great!",
    logo: "skills/js",
    color: "#EAB308",
    darkColor: "#FACC15",
    skillType: "languages",
  },
  {
    name: "Rust",
    tooltip: "Learning Rust since it's awesome!",
    logo: "skills/rust",
    color: "#1C1C1C",
    darkColor: "#F97316",
    skillType: "languages",
  },
  {
    name: "Golang",
    tooltip: "Learning concurrency...",
    logo: "skills/golang",
    color: "#00ADD8",
    darkColor: "#008BBF",
    skillType: "languages",
  },
  {
    name: "C++",
    tooltip:
      "Super performant programming language for low level stuff and simulations, also C and ASM",
    logo: "skills/cpp",
    color: "#00599C",
    darkColor: "#3B82F6",
    skillType: "languages",
  },
  {
    name: "Kotlin",
    tooltip: "Now this is what I make mobile Apps in!",
    logo: "skills/kotlin",
    color: "#7F52FF",
    darkColor: "#A78BFA",
    skillType: "languages",
  },
  {
    name: "C#",
    tooltip: "Very fun language to write, been exploring .NET, it's fun.",
    logo: "skills/csharp",
    color: "#79288d",
    darkColor: "#A78BFA",
    skillType: "languages",
  },

  // ==========================================
  // SYSTEMS & INFRASTRUCTURE
  // ==========================================
  {
    name: "Docker",
    tooltip: "Awesome stuff, reproducible environments...",
    logo: "skills/docker",
    color: "#0284C7",
    darkColor: "#38BDF8",
    skillType: "systems",
  },
  {
    name: "Podman",
    tooltip: "Podman is a great alternative to Docker",
    logo: "skills/podman",
    color: "#7C3AED",
    darkColor: "#C084FC",
    skillType: "systems",
  },
  {
    name: "AWS",
    tooltip: "Too difficult to fully master",
    logo: "skills/aws",
    color: "#D97706",
    darkColor: "#FBBF24",
    skillType: "systems",
  },
  {
    name: "Git",
    tooltip: "Thank god Linus made git. Also thanks for Linux ❤️",
    logo: "skills/git",
    color: "#DC2626",
    darkColor: "#F87171",
    skillType: "systems",
  },
  {
    name: "Arch Linux",
    tooltip:
      "My primary Operating System, Arch Linux. I love it. Strong understanding of Linux systems, networking, and CLI",
    logo: "skills/arch",
    color: "#0EA5E9",
    darkColor: "#0EA5E9",
    skillType: "systems",
  },
  {
    name: "Hyprland",
    tooltip: "My favorite WM that I use, Hyprland",
    logo: "skills/hyprland",
    color: "#06B6D4",
    darkColor: "#67E8F9",
    skillType: "systems",
  },
  {
    name: "PostgreSQL",
    tooltip: "Pretty awesome database, has so many features...",
    logo: "skills/postgresql",
    color: "#4169E1",
    darkColor: "#87CEEB",
    skillType: "systems",
  },
  {
    name: "MongoDB",
    tooltip: "Nice NoSQL storage...",
    logo: "skills/mongo",
    color: "#16A34A",
    darkColor: "#4ADE80",
    skillType: "systems",
  },

  // ==========================================
  // FRAMEWORKS & TOOLS
  // ==========================================
  {
    name: "SvelteKit",
    tooltip: "My goto web framework for the future",
    logo: "skills/svelte",
    color: "#FF3E00",
    darkColor: "#FF6A3D",
    skillType: "frameworks",
  },
  {
    name: "React",
    tooltip: "React is a great library for building user interfaces",
    logo: "skills/react",
    color: "#0EA5E9",
    darkColor: "#67E8F9",
    skillType: "frameworks",
  },
  {
    name: "Next.js",
    tooltip: "It is just amazing, but not for everything!",
    logo: "skills/next",
    color: "#111111",
    darkColor: "#E5E7EB",
    skillType: "frameworks",
  },
  {
    name: "Vue.js",
    tooltip: "Vue is nice!",
    logo: "skills/vue",
    color: "#059669",
    darkColor: "#6EE7B7",
    skillType: "frameworks",
  },
  {
    name: "Tailwind",
    tooltip: "Before you actually use it, you think it will increase your work. But...",
    logo: "skills/tailwind",
    color: "#0891B2",
    darkColor: "#67E8F9",
    skillType: "frameworks",
  },
  {
    name: "Django",
    tooltip: "My goto web fullstack framework before SvelteKit",
    logo: "skills/django",
    color: "#0F3E2E",
    darkColor: "#1C7C54",
    skillType: "frameworks",
  },
  {
    name: "FastAPI",
    tooltip: "Nice fast api servers...",
    logo: "skills/fastapi",
    color: "#009688",
    darkColor: "#00796B",
    skillType: "frameworks",
  },
  {
    name: "Drizzle",
    tooltip: "Awesome ORM for the web",
    logo: "skills/drizzle",
    color: "#6AA21A",
    darkColor: "#A0E83F",
    skillType: "frameworks",
  },
  {
    name: "Supabase",
    tooltip: "Supabase is Awesome, much better than AWS for simple stuff",
    logo: "skills/supabase",
    color: "#16A34A",
    darkColor: "#4ADE80",
    skillType: "frameworks",
  },
  {
    name: "GitHub Actions",
    tooltip: "Automating builds, tests, and deployments",
    logo: "skills/githubactions",
    color: "#2088FF",
    darkColor: "#E5E7EB",
    skillType: "frameworks",
  },
  {
    name: "Godot",
    tooltip: "I make games in Godot now",
    logo: "skills/godot",
    color: "#3B82F6",
    darkColor: "#60A5FA",
    skillType: "frameworks",
  },
  {
    name: "Unity",
    tooltip: "Used to use Unity, before it went downhill with stuff",
    logo: "skills/unity",
    color: "#111111",
    darkColor: "#D1D5DB",
    skillType: "frameworks",
  },
  {
    name: "Blender",
    tooltip: "Made a lot of stuff in blender",
    logo: "skills/blender",
    color: "#EA580C",
    darkColor: "#FB923C",
    skillType: "frameworks",
  },
  {
    name: "Obsidian",
    tooltip: "My note taking app of choice",
    logo: "skills/obsidian",
    color: "#7C3AED",
    darkColor: "#A78BFA",
    skillType: "frameworks",
  },
  {
    name: "Typst",
    tooltip: "Modern LaTeX alternative for me, my resume is built in typst.",
    logo: "skills/typst",
    color: "#239DAD",
    darkColor: "#4FD1E0",
    skillType: "frameworks",
  },

  // ==========================================
  // INTELLIGENCE & AI TOOLS
  // ==========================================
  {
    name: "PyTorch",
    tooltip: "Learning this go-to library for ML and deep-learning",
    logo: "skills/pytorch",
    color: "#EE4C2C",
    darkColor: "#FF6A3D",
    skillType: "intelligence",
  },
  {
    name: "Cursor",
    tooltip: "They have indeed developed some nice code review features.",
    logo: "skills/cursor",
    color: "#0052FF",
    darkColor: "#38BDF8",
    skillType: "intelligence",
  },
  {
    name: "Claude",
    tooltip: "Best for writing code and UI's I believe, but not better than humans.",
    logo: "skills/claude",
    color: "#D97706",
    darkColor: "#F59E0B",
    skillType: "intelligence",
  },
  {
    name: "Gemini",
    tooltip: "They have some nice models as well",
    logo: "skills/gemini",
    color: "#1A73E8",
    darkColor: "#669DF2",
    skillType: "intelligence",
  },
  // {
  //   name: "Antigravity",
  //   tooltip: "Python's secret Easter egg built-in fly module (`import antigravity`).",
  //   logo: "skills/antigravity",
  //   color: "#10B981",
  //   darkColor: "#34D399",
  //   skillType: "intelligence",
  // },
  {
    name: "Zed",
    tooltip: "Zed, The high-performance engine IDE I use, pretty simple.",
    logo: "skills/zed",
    color: "#1D4ED8",
    darkColor: "#D1D5DB",
    skillType: "intelligence",
  },
]

export const RESUME_DOC_URI =
  "https://docs.google.com/document/d/1lc73m1GYgfdQgenc_bOOsHIVTeNUh-HHB7NJ-QmjXII/edit?usp=sharing"

export const RESUME_PATH = "/resume.pdf"

export const PGP_PUBLIC_KEY_SIG = "my-public-key.asc"
export const PGP_PUBLIC_KEY = "3CADBCCC757BB7FAD06B544269DA8424ED6666F5"
export const KEYBASE_ACCOUNT_URI = "https://keybase.io/harshnj"
