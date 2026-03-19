// ── COLOUR PALETTE ──
export const C = {
  ink:       "#1a1a18",
  inkMid:    "#4a4a44",
  inkLight:  "#8a8a80",
  paper:     "#faf8f3",
  cream:     "#f2efe6",
  gold:      "#b8952a",
  goldLight: "#e8d89a",
  greenDeep: "#1e3a2f",
  greenMid:  "#2d5a42",
  red:       "#b02828",
  redDeep:   "#7a1a1a",
  redLight:  "#f0d4d4",
  blue:      "#1a3a6e",
  blueMid:   "#2a5298",
  blueLight: "#d4e0f4",
};

// ── NAV LINKS ──
export const navLinks = [
  { label: "About",        href: "#about"        },
  { label: "Expertise",    href: "#expertise"    },
  { label: "Career",       href: "#career"       },
  { label: "Education",    href: "#education"    },
  { label: "Publications", href: "#publications" },
  { label: "Contact",      href: "#contact"      },
];

// ── HERO STATS ──
export const stats = [
  { num: "40",  label: "Years of professional experience",        icon: "📅", accent: C.red    },
  { num: "PhD", label: "University of Birmingham, UK · 2011",     icon: "🎓", accent: C.gold   },
  { num: "10+", label: "Countries represented in conferences",    icon: "🌍", accent: C.blueMid },
];

// ── EXPERTISE CARDS ──
export const expertise = [
  {
    icon: "🏛️",
    title: "Public Policy & Governance",
    accent: C.red,
    desc: "Design, analysis, and critique of public policy frameworks. Deep experience in Uganda's central and local government structures, regulatory environments, and governance reform processes.",
  },
  {
    icon: "📡",
    title: "Telecommunications Reform",
    accent: C.blueMid,
    desc: "Architect of key policy papers during Uganda's historic telecom privatisation. Ex-officio board member on Uganda Telecom Limited, Uganda Post Limited, and the National Frequency Registration Board.",
  },
  {
    icon: "🎯",
    title: "Leadership & Management",
    accent: C.gold,
    desc: "Training and developing leaders across sectors — from parliamentary pension scheme governance to secondary school headteachers across Eastern, Western, and Northern Uganda.",
  },
  {
    icon: "🔬",
    title: "Academic Research & Supervision",
    accent: C.blueMid,
    desc: "PhD supervisor and examiner. Published researcher with experience spanning conference papers, policy newsletters, and a full monograph on public sector service delivery.",
  },
  {
    icon: "🤝",
    title: "Corporate Governance Consulting",
    accent: C.red,
    desc: "Governance advisory to the Parliamentary Pension Scheme and Institute of Corporate Governance of Uganda. Managing director of Jet Governance and Leadership Consulting Ltd.",
  },
  {
    icon: "🌱",
    title: "Community & Social Development",
    accent: C.gold,
    desc: "Community empowerment through leadership training, counselling, and pastoral engagement. Trustee of Uganda Family Counselling Institute. Special Envoy in Inzu Ye Bamasaaba.",
  },
];

// ── CAREER TIMELINE ──
export const timeline = [
  {
    period: "2025 — Present",
    role: "Full-Time Lecturer, Public Policy",
    org: "School of Management Sciences, Uganda Management Institute",
    desc: "Teaching public policy at undergraduate and postgraduate levels, contributing to institutional research, and supervising dissertation students.",
    dot: C.gold,
  },
  {
    period: "2016 — 2024",
    role: "Consultant & Lecturer, Public Management",
    org: "Uganda Management Institute",
    desc: "Consulting on public management, policy, and governance. Supervisor and examiner for the MA in Public Management and Governance, and for PhD candidates.",
    dot: C.blueMid,
  },
  {
    period: "2015 — 2023",
    role: "Governance & Leadership Consultant",
    org: "Institute of Corporate Governance of Uganda · Jet Governance and Leadership Consulting Ltd",
    desc: "Governance advisory to the Parliamentary Pension Scheme. Board Trustee of Uganda Family Counselling Institute. Special Envoy for Inzu Ye Bamasaaba in Kampala.",
    dot: C.red,
  },
  {
    period: "2011 — 2015",
    role: "Lecturer, Governance, Management & Leadership",
    org: "Uganda Christian University · Makerere University (External Examiner)",
    desc: "Teaching and research in governance, public management, and leadership. External Examiner for Makerere University's Department of Political Science and Public Administration.",
    dot: C.blueMid,
  },
  {
    period: "1991 — 2002",
    role: "Ex-Officio Board Member & Privatisation Consultant",
    org: "Uganda Posts & Telecommunications Corporation · Uganda Telecom Limited · Uganda Post Limited · National Frequency Registration Board",
    desc: "Led coordination of Uganda's telecom sector restructuring and privatisation, working with Ministry of Finance, Works and Transport, and international partners including ITU Geneva.",
    dot: C.red,
  },
  {
    period: "1987 — 2009",
    role: "Senior Administrative Officer / District Executive Secretary",
    org: "Apac District · Ministry of Works and Transport · Government of Uganda",
    desc: "Began civil service career as Administrative Officer, rising to District Executive Secretary. Coordinated telecoms restructuring and authored policy papers across multiple ministries.",
    dot: C.gold,
  },
];

// ── EDUCATION ──
export const education = [
  { year: "2011", degree: "PhD in Public Policy",                          inst: "University of Birmingham, United Kingdom",  accent: C.blueMid },
  { year: "2000", degree: "Masters in Public Administration & Management", inst: "Makerere University, Kampala, Uganda",       accent: C.red     },
  { year: "1989", degree: "Certificate in Law for Administrative Officers",inst: "Law Development Centre, Kampala · CPS Part I", accent: C.gold  },
  { year: "1987", degree: "BA Honours (2:1) Political Science & Public Administration", inst: "Makerere University, Kampala, Uganda", accent: C.gold },
];

// ── COUNTRIES ──
export const countries = [
  { flag: "🇺🇬", name: "Uganda"                      },
  { flag: "🇬🇧", name: "United Kingdom"              },
  { flag: "🇨🇦", name: "Canada (Montreal, Toronto)"  },
  { flag: "🇺🇸", name: "United States (Washington DC)" },
  { flag: "🇨🇭", name: "Switzerland (ITU Geneva)"    },
  { flag: "🇵🇹", name: "Portugal (Lisbon)"           },
  { flag: "🇲🇹", name: "Malta"                       },
  { flag: "🇦🇷", name: "Argentina"                   },
  { flag: "🇿🇲", name: "Zambia (Lusaka)"             },
  { flag: "🇹🇿", name: "Tanzania (Arusha)"           },
  { flag: "🇪🇬", name: "Egypt (Cairo)"               },
  { flag: "🇩🇪", name: "Germany (Berlin)"            },
];

// ── COMMUNITY ──
export const community = [
  { title: "Pastoral & Faith Work",    dot: C.gold,    desc: "Active in spiritual community leadership, embodying the values of integrity and service that underpin his professional philosophy." },
  { title: "Community Empowerment",    dot: C.red,     desc: "Delivers leadership training at community level, connecting academic knowledge to the lived realities of ordinary Ugandans." },
  { title: "Counselling",              dot: C.blueMid, desc: "Board Trustee of the Uganda Family Counselling Institute — supporting mental health and family wellbeing across the country." },
  { title: "Gospel Music & Culture",   dot: C.red,     desc: "A passion for gospel music and cultural leadership within the Bamasaaba community as Special Envoy in Inzu Ye Bamasaaba, Kampala chapter." },
];

// ── CONTACT ──
export const contacts = [
  { icon: "📱", type: "Phone",       val: "+256 742 745 930",                        sub: "+256 705 451 920 / +256 776 451 920", bg: C.redDeep   },
  { icon: "✉️", type: "Email",       val: "tomwanyakala@gmail.com",                  sub: null,                                  bg: C.blue      },
  { icon: "🏫", type: "Institution", val: "Uganda Management Institute",              sub: "P.O. Box 20131, Kampala, Uganda",     bg: C.greenDeep },
  { icon: "💼", type: "Consultancy", val: "Jet Governance & Leadership Consulting Ltd", sub: "Kampala, Uganda",                  bg: C.redDeep   },
];
