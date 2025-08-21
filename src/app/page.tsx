"use client";
import { useState } from "react";
import {
  BookOpen,
  GraduationCap,
  Mail,
  Phone,
  CalendarDays,
  Quote,
  ChevronRight,
  Menu,
  X,
  Shield,
  Users,
  User,
  School,
} from "lucide-react";

const BRAND = {
  name: "Afsah Institute",
  tagline: "Mastering Arabic Language and Quranic Memorization",
  ctaPrimary: "Apply Now",
  ctaSecondary: "Download Prospectus",
  contactEmail: "admissions@afsah.institute",
  contactPhone: "+1 (470) 555-0199",
  heroVerseEn:
    "And my brother Hārūn is more eloquent than me in speech (Q 28:34)",
  heroVerseAr: "وَأَخِى هَـٰرُونُ هُوَ أَفْصَحُ مِنِّى لِسَانًۭا",
  palette: {
    // Deep green + parchment + gold accents
    primary: "#27A7DF",
    primaryDark: "#1D2242",
    accent: "#FBDD5B",
    paper: "#FAF7F1",
    ink: "#1F2937",
  },
};

//“to speak clearly/eloquently; to make something plain (أفصح عن مراده).”
// Utility to blend custom brand colors into Tailwind via inline styles
const brandStyles = {
  "--brand-primary": BRAND.palette.primary,
  "--brand-primary-dark": BRAND.palette.primaryDark,
  "--brand-accent": BRAND.palette.accent,
  "--brand-paper": BRAND.palette.paper,
  "--brand-ink": BRAND.palette.ink,
} as React.CSSProperties;

const navItems = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Faculty", href: "#faculty" },
  { label: "Admissions", href: "#admissions" },
  { label: "Contact", href: "#contact" },
];

const programs = [
  {
    icon: <BookOpen className='h-6 w-6' aria-hidden />,
    title: "Arabic Program",
    desc: "Year-long track taking students from Beginners to Advanced level Arabic Proficiency.",
    highlights: [
      "1 hour Arabic (theory and lab components)",
      "Focus on all input and output skills with immersive experience",
      "In-person",
    ],
  },
  {
    icon: <GraduationCap className='h-6 w-6' aria-hidden />,
    title: "Hifdh Program",
    desc: "Full-time and Part-time memorization with sabaq, sabqi, and manzil [new, recent, and old] model.",
    highlights: [
      "Mon-Thurs, 10am–2pm",
      "Limited to 7 students for high quality outcome",
      "An all inclusive Focus on Tajwid [Science and Art of Recitation], with understanding and strict discipline.",
    ],
  },
  {
    icon: <User className='h-6 w-6' aria-hidden />,
    title: "Private Tutoring",
    desc: "Need help on Arabic homework, or clarification of concepts, or just want to revise. Schedule time with one of our instructors.",
    highlights: ["On-demand", "Flexibile Hours", "Online"],
  },
  {
    icon: <School className='h-6 w-6' aria-hidden />,
    title: "Maktab",
    desc: "After-school Qur’an and essentials for youth.",
    highlights: ["Akhlaq & Adab", "Seerah & Du‘a", "Community-centered"],
  },
];

const faculty = [
  {
    name: "Imam Matib Ahmad",
    role: "Imam & Lead Instructor",
    bio: "Specializing in Arabic, Quran, Fiqh and community leadership.",
  },
  {
    name: "Ustadha Rumsha Karim",
    role: "Lead Insturctor for Females",
    bio: "Specializing in Arabic and Islamic Studies, Certified in tajwid; passionate about youth education.",
  },
];

const faqs = [
  {
    q: "What is the institute’s ethos?",
    a: "We uphold classical Sunni scholarship while addressing contemporary needs with clarity and ihsan.",
  },
  {
    q: "Are classes in person?",
    a: "Yes, our core offerings are in-person to cultivate adab, presence, and community.",
  },
  {
    q: "Do you offer financial aid?",
    a: "Limited scholarships are available; please email admissions for details.",
  },
];

function Ornament() {
  return (
    <div
      aria-hidden
      className='pointer-events-none absolute inset-0 [mask-image:radial-gradient(60%_50%_at_50%_0%,black,transparent)]'
      style={{
        backgroundImage:
          "radial-gradient(circle at 20% 10%, rgba(194,160,90,.07), transparent 35%), radial-gradient(circle at 80% 0%, rgba(14,79,61,.08), transparent 35%)",
      }}
    />
  );
}

function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

function SectionTitle({
  eyebrow,
  title,
  sub,
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
}) {
  return (
    <div className='mx-auto max-w-2xl text-center'>
      {eyebrow && (
        <p
          className='text-sm tracking-widest uppercase text-gray-600'
          style={{ color: "var(--brand-primary)" }}
        >
          {eyebrow}
        </p>
      )}
      <h2 className='mt-2 font-serif text-3xl sm:text-4xl text-gray-900'>
        {title}
      </h2>
      {sub && <p className='mt-3 text-gray-600'>{sub}</p>}
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header
      className='sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-black/5'
      style={{ backgroundColor: "rgba(250,247,241,.7)" }}
    >
      <Container className='flex h-48 items-center justify-between'>
        <a href='#top' className='flex items-center gap-3'>
          <img
            src='/afsah-final-logo-02.png'
            alt={`${BRAND.name} logo`}
            className='h-24 w-24 rounded-full object-cover'
          />
          <span className='font-serif text-3xl text-gray-900'>
            {BRAND.name}
          </span>
        </a>
        <nav className='hidden md:flex items-center gap-8'>
          {navItems.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className='text-sm font-medium text-gray-700 hover:text-gray-900'
            >
              {n.label}
            </a>
          ))}
          <a
            href='#admissions'
            className='inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white shadow hover:shadow-md transition'
            style={{ backgroundColor: "var(--brand-primary)" }}
          >
            {BRAND.ctaPrimary} <ChevronRight className='h-4 w-4' />
          </a>
        </nav>
        <button
          className='md:hidden p-2'
          aria-label='Open menu'
          onClick={() => setOpen(true)}
        >
          <Menu className='h-6 w-6' />
        </button>
      </Container>

      {/* Mobile */}
      {open && (
        <div
          className='md:hidden border-t border-black/5'
          style={{ backgroundColor: "var(--brand-paper)" }}
        >
          <Container className='py-4'>
            <div className='flex items-center justify-between'>
              <span className='font-serif text-lg'>{BRAND.name}</span>
              <button
                className='p-2'
                aria-label='Close menu'
                onClick={() => setOpen(false)}
              >
                <X className='h-6 w-6' />
              </button>
            </div>
            <div className='mt-4 grid gap-3'>
              {navItems.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className='rounded-lg px-3 py-2 text-gray-800 hover:bg-black/5'
                >
                  {n.label}
                </a>
              ))}
              <a
                href='#admissions'
                onClick={() => setOpen(false)}
                className='mt-2 inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white shadow hover:shadow-md transition'
                style={{ backgroundColor: "var(--brand-primary)" }}
              >
                {BRAND.ctaPrimary} <ChevronRight className='h-4 w-4' />
              </a>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section
      id='top'
      className='relative overflow-hidden'
      style={{ backgroundColor: "var(--brand-paper)" }}
    >
      <Ornament />
      <Container className='relative grid gap-10 py-10 lg:grid-cols-2 lg:items-center'>
        <div>
          <p className='inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-gray-700 shadow-sm'>
            <Shield className='h-4 w-4' /> Arabic and Quranic Mastery
          </p>
          <h1 className='mt-4 font-serif text-4xl sm:text-5xl text-gray-900 leading-tight'>
            {BRAND.name}
          </h1>
          <p className='mt-4 text-lg text-gray-700 max-w-xl'>
            {BRAND.tagline}. We cultivate knowledge with adab, discipline, and
            community – preparing students to live Islam with clarity and
            excellence.
          </p>
          <div className='mt-6 flex flex-wrap items-center gap-3'>
            <a
              href='#admissions'
              className='inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white shadow hover:shadow-lg transition'
              style={{ backgroundColor: "var(--brand-primary)" }}
            >
              {BRAND.ctaPrimary} <ChevronRight className='h-4 w-4' />
            </a>
            <a
              href='#about'
              className='inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-gray-900 border border-black/10 bg-white hover:bg-black/5'
            >
              Learn More
            </a>
          </div>
          <div className='mt-8 rounded-xl border border-black/10 bg-white p-4 shadow-sm'>
            <div className='flex items-start gap-3'>
              <Quote className='h-5 w-5 mt-1' />
              <div>
                <p className='font-serif text-lg text-gray-900'>
                  {BRAND.heroVerseAr}
                </p>
                <p className='text-sm text-gray-600 mt-1'>
                  {BRAND.heroVerseEn}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function About() {
  return (
    <section id='about' className='relative py-20'>
      <Container>
        <SectionTitle eyebrow='About' title='Arabic and Quranic Mastery' />
        <div className='mx-auto mt-10 grid max-w-5xl gap-8 sm:grid-cols-2'>
          <div className='rounded-2xl border border-black/10 bg-white p-6 shadow-sm'>
            <h3 className='font-serif text-xl text-gray-900'>Our Classes</h3>
            <p className='mt-2 text-gray-700'>
              We provide Arabic classes (semester based, year long, private
              sessoins) and Quranic Learning sessions (memorization, revision,
              tafsir, tajwid) aimed for students for all levels and backgrounds
            </p>
          </div>
          <div className='rounded-2xl border border-black/10 bg-white p-6 shadow-sm'>
            <h3 className='font-serif text-xl text-gray-900'>
              Student Experience
            </h3>
            <p className='mt-2 text-gray-700'>
              Small cohorts or private sessions, attentive instruction, and a
              culture of ihsan. Students grow in knowledge and practice.
            </p>
          </div>
        </div>
      </Container>
      <Ornament />
    </section>
  );
}

function Programs() {
  return (
    <section
      id='programs'
      className='relative py-20'
      style={{ backgroundColor: "var(--brand-paper)" }}
    >
      <Container>
        <SectionTitle
          eyebrow='Programs'
          title='Paths of Study'
          sub='From foundational studies to full-time Hifdh, choose the track that fits your goals.'
        />
        <div className='mx-auto mt-10 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {programs.map((p) => (
            <article
              key={p.title}
              className='rounded-2xl border border-black/10 bg-white p-6 shadow-sm'
            >
              <div
                className='inline-flex h-10 w-10 items-center justify-center rounded-lg'
                style={{
                  backgroundColor: "rgba(14,79,61,.08)",
                  color: "var(--brand-primary)",
                }}
              >
                {p.icon}
              </div>
              <h3 className='mt-4 font-serif text-xl text-gray-900'>
                {p.title}
              </h3>
              <p className='mt-2 text-gray-700'>{p.desc}</p>
              <ul className='mt-3 space-y-1 text-sm text-gray-600 list-disc pl-5'>
                {p.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
      <Ornament />
    </section>
  );
}

function Faculty() {
  return (
    <section id='faculty' className='relative py-20'>
      <Container>
        <SectionTitle
          eyebrow='Faculty'
          title='Guided by Teachers'
          sub='Learn with instructors committed to your growth.'
        />
        <div className='mx-auto mt-10 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {faculty.map((f) => (
            <div
              key={f.name}
              className='rounded-2xl border border-black/10 bg-white p-6 shadow-sm'
            >
              <div className='h-16 w-16 rounded-full bg-gradient-to-br from-[color:var(--brand-primary)] to-[color:var(--brand-primary-dark)]' />
              <h3 className='mt-4 font-serif text-lg text-gray-900'>
                {f.name}
              </h3>
              <p
                className='text-sm font-medium'
                style={{ color: "var(--brand-primary)" }}
              >
                {f.role}
              </p>
              <p className='mt-2 text-gray-700'>{f.bio}</p>
            </div>
          ))}
        </div>
      </Container>
      <Ornament />
    </section>
  );
}

function Admissions() {
  return (
    <section
      id='admissions'
      className='relative py-20'
      style={{
        background: "linear-gradient(180deg, var(--brand-paper), #ffffff)",
      }}
    >
      <Container>
        <SectionTitle
          eyebrow='Admissions'
          title='Join the Next Cohort'
          sub='Limited seats to preserve quality. Early applications encouraged.'
        />
        <div className='mx-auto mt-10 grid max-w-5xl gap-6 lg:grid-cols-2'>
          <div className='rounded-2xl border border-black/10 bg-white p-6 shadow-sm'>
            <h3 className='font-serif text-xl text-gray-900'>Key Dates</h3>
            <ul className='mt-3 space-y-2 text-gray-700'>
              <li>
                <strong>Fall Term:</strong> Aug 11 – Dec 17
              </li>
              <li>
                <strong>Spring Term:</strong> Jan 5 – May 7
              </li>
              <li>
                <strong>Classes:</strong> In-person
              </li>
            </ul>
            <a
              href='#contact'
              className='mt-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white shadow hover:shadow-md transition'
              style={{ backgroundColor: "var(--brand-primary)" }}
            >
              Contact Admissions <ChevronRight className='h-4 w-4' />
            </a>
          </div>
        </div>
      </Container>
      <Ornament />
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className='relative py-20'>
      <Container>
        <SectionTitle eyebrow='FAQ' title='Common Questions' />
        <div className='mx-auto mt-10 max-w-3xl divide-y divide-black/10 rounded-2xl border border-black/10 bg-white shadow-sm'>
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <details
                key={f.q}
                open={isOpen}
                onToggle={(e) => {
                  const el = e.currentTarget as HTMLDetailsElement;
                  setOpen(el.open ? i : null);
                }}
                className='group'
              >
                <summary className='flex cursor-pointer list-none items-center justify-between px-6 py-4'>
                  <span className='font-medium text-gray-900'>{f.q}</span>
                  <span className='text-sm text-gray-600'>
                    {isOpen ? "−" : "+"}
                  </span>
                </summary>
                <div className='px-6 pb-5 text-gray-700'>{f.a}</div>
              </details>
            );
          })}
        </div>
      </Container>
      <Ornament />
    </section>
  );
}

function Contact() {
  return (
    <section
      id='contact'
      className='relative py-20'
      style={{ backgroundColor: "var(--brand-paper)" }}
    >
      <Container>
        <SectionTitle
          eyebrow='Contact'
          title='We’d love to hear from you'
          sub='Reach out for admissions, volunteering, or sponsorship.'
        />
        <div className='mx-auto mt-10 grid max-w-5xl gap-6 lg:grid-cols-2'>
          <form
            className='rounded-2xl border border-black/10 bg-white p-6 shadow-sm'
            action={`mailto:${BRAND.contactEmail}`}
            method='post'
            encType='text/plain'
          >
            <div className='grid gap-4'>
              <div>
                <label className='block text-sm font-medium text-gray-700'>
                  Full Name
                </label>
                <input
                  className='mt-1 w-full rounded-lg border border-black/10 px-3 py-2 outline-none focus:ring-2'
                  style={{
                    boxShadow: "inset 0 1px 0 rgba(0,0,0,.02)",
                    accentColor: "var(--brand-primary)",
                  }}
                  name='name'
                  required
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700'>
                  Email
                </label>
                <input
                  type='email'
                  className='mt-1 w-full rounded-lg border border-black/10 px-3 py-2 outline-none focus:ring-2'
                  name='email'
                  required
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700'>
                  Message
                </label>
                <textarea
                  className='mt-1 w-full rounded-lg border border-black/10 px-3 py-2 outline-none focus:ring-2'
                  name='message'
                  rows={4}
                  required
                />
              </div>
              <button
                type='submit'
                className='inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white shadow hover:shadow-lg transition'
                style={{ backgroundColor: "var(--brand-primary)" }}
              >
                <Mail className='h-4 w-4' /> Send Message
              </button>
            </div>
            <p className='mt-4 text-sm text-gray-600'>
              Or email us directly:{" "}
              <a className='underline' href={`mailto:${BRAND.contactEmail}`}>
                {BRAND.contactEmail}
              </a>
            </p>
          </form>

          <div className='rounded-2xl border border-black/10 bg-white p-6 shadow-sm'>
            <h3 className='font-serif text-xl text-gray-900'>
              Admissions Hotline
            </h3>
            <p className='mt-2 flex items-center gap-2 text-gray-700'>
              <Phone className='h-5 w-5' /> {BRAND.contactPhone}
            </p>
          </div>
        </div>
      </Container>
      <Ornament />
    </section>
  );
}

function Footer() {
  return (
    <footer
      className='relative border-t border-black/5 py-10'
      style={{ backgroundColor: "var(--brand-paper)" }}
    >
      <Container className='flex flex-col items-center justify-between gap-6 sm:flex-row'>
        <p className='text-sm text-gray-600'>
          © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
        </p>
        <div className='flex items-center gap-4 text-sm text-gray-600'>
          <a href='#about' className='hover:text-gray-900'>
            About
          </a>
          <a href='#programs' className='hover:text-gray-900'>
            Programs
          </a>
          <a href='#admissions' className='hover:text-gray-900'>
            Admissions
          </a>
          <a href='#contact' className='hover:text-gray-900'>
            Contact
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default function AfsahInstituteLandingPage() {
  return (
    <main
      style={brandStyles}
      className='min-h-screen scroll-smooth font-sans [--tw-ring-color:var(--brand-primary)]'
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Inter:wght@400;500;600;700&display=swap');
        :root { color-scheme: light; }
        .font-serif { font-family: 'Cormorant Garamond', ui-serif, Georgia, Cambria, "Times New Roman", Times, serif; }
        .font-sans  { font-family: 'Inter', ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"; }
        html { scroll-behavior: smooth; }
        body { background: var(--brand-paper); color: var(--brand-ink); }
      `}</style>
      <Nav />
      <Hero />
      <About />
      <Programs />
      <Faculty />
      <Admissions />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
