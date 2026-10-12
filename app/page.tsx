"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";

const base = process.env.NODE_ENV === "production" ? "/titan-build-construction" : "";

const services = [
  { n: "01", title: "House Construction", text: "Thoughtfully planned homes shaped around tropical living, practical budgets, and enduring materials." },
  { n: "02", title: "Renovation & Remodeling", text: "Purposeful upgrades that improve flow, comfort, efficiency, and the way an existing space feels." },
  { n: "03", title: "Commercial Construction", text: "Professional spaces designed to support daily operations while creating a confident customer experience." },
  { n: "04", title: "Design & Build", text: "A streamlined concept-to-construction approach with one coordinated team and a clearly defined path forward." },
];

const projects = [
  { title: "Sierra House", type: "Residential concept", image: `${base}/images/project-residential.webp`, className: "md:col-span-7" },
  { title: "Canopy Commons", type: "Commercial concept", image: `${base}/images/project-commercial.webp`, className: "md:col-span-5" },
  { title: "Casa Amihan", type: "Tropical home concept", image: `${base}/images/hero-titan.webp`, className: "md:col-span-12" },
];

function Arrow() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
}

export default function Home() {
  const [sent, setSent] = useState(false);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!e.currentTarget.checkValidity()) return;
    setSent(true);
    e.currentTarget.reset();
  }

  return (
    <main>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/95 text-white backdrop-blur">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#home" className="focus-ring flex items-center gap-3" aria-label="Titan Build Construction home">
            <span className="grid h-10 w-10 place-items-center bg-orange font-black text-lg">T</span>
            <span className="display text-base font-black leading-[.9] tracking-tight sm:text-lg">TITAN BUILD<br /><span className="text-[.58em] tracking-[.19em] text-white/65">CONSTRUCTION</span></span>
          </a>
          <nav aria-label="Main navigation" className="hidden items-center gap-8 text-xs font-bold uppercase tracking-[.14em] md:flex">
            <a className="focus-ring hover:text-orange" href="#services">Services</a>
            <a className="focus-ring hover:text-orange" href="#projects">Projects</a>
            <a className="focus-ring hover:text-orange" href="#about">Approach</a>
          </nav>
          <a href="#quote" className="focus-ring bg-orange px-4 py-3 text-xs font-extrabold uppercase tracking-[.12em] transition hover:bg-white hover:text-ink sm:px-5">Request a quote</a>
        </div>
      </header>

      <section id="home" className="relative min-h-[760px] overflow-hidden bg-ink text-white">
        <Image src={`${base}/images/hero-titan.webp`} alt="Contemporary tropical home in the final stage of construction" fill priority sizes="100vw" className="object-cover object-[60%_center]" />
        <div className="hero-shade absolute inset-0" />
        <div className="grid-lines absolute inset-0 opacity-60" />
        <div className="relative mx-auto flex min-h-[760px] max-w-7xl items-center px-5 pb-16 pt-36 lg:px-8">
          <div className="max-w-3xl">
            <p className="eyebrow mb-7 flex items-center gap-3 text-orange"><span className="h-px w-10 bg-orange" /> Philippine construction concept</p>
            <h1 className="display text-[clamp(3.5rem,9vw,8rem)] font-black uppercase leading-[.82]">Built with<br /><span className="text-orange">purpose.</span></h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/78 sm:text-xl">Built on Trust. Designed to Last. Thoughtful construction for homes and places made to serve people well.</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href="#services" className="focus-ring flex items-center justify-center gap-3 bg-orange px-7 py-4 text-sm font-extrabold uppercase tracking-wider hover:bg-white hover:text-ink">Explore services <Arrow /></a>
              <a href="#quote" className="focus-ring flex items-center justify-center gap-3 border border-white/40 px-7 py-4 text-sm font-extrabold uppercase tracking-wider hover:border-white hover:bg-white/10">Request a quote</a>
            </div>
          </div>
          <div className="absolute bottom-7 right-5 hidden items-center gap-4 border-l border-orange pl-4 text-xs uppercase tracking-[.16em] text-white/60 md:flex lg:right-8"><span>Plan</span><span className="text-orange">Build</span><span>Endure</span></div>
        </div>
      </section>

      <section id="services" className="px-5 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2">
            <div><p className="eyebrow text-orange">What we build</p><h2 className="display mt-4 max-w-xl text-5xl font-black uppercase leading-[.95] sm:text-7xl">Built around the way you live and work.</h2></div>
            <p className="max-w-lg self-end text-lg leading-8 text-slate">From a first sketch to the final detail, each service is framed around clear decisions, useful spaces, and construction that feels considered—not complicated.</p>
          </div>
          <div className="mt-16 grid border-l border-t border-ink/15 md:grid-cols-2">
            {services.map((service) => (
              <article key={service.n} className="group border-b border-r border-ink/15 p-7 transition hover:bg-ink hover:text-white sm:p-10">
                <div className="flex items-start justify-between"><span className="eyebrow text-orange">{service.n}</span><span className="text-2xl text-orange transition-transform group-hover:translate-x-1">→</span></div>
                <h3 className="display mt-14 text-3xl font-black uppercase sm:text-4xl">{service.title}</h3>
                <p className="mt-4 max-w-md leading-7 text-slate group-hover:text-white/65">{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-ink px-5 py-24 text-white sm:py-32 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.05fr_.95fr]">
          <div><p className="eyebrow text-orange">A considered process</p><h2 className="display mt-4 text-5xl font-black uppercase leading-[.95] sm:text-7xl">Clarity at every stage.</h2><p className="mt-7 max-w-lg text-lg leading-8 text-white/60">Good construction begins before work reaches the site. Our fictional studio model puts planning, honest scope, and coordination at the center of every project conversation.</p></div>
          <ol className="border-t border-white/15">
            {["Discover the brief", "Define the direction", "Coordinate the build", "Review every detail"].map((item, index) => <li key={item} className="flex items-center gap-6 border-b border-white/15 py-7"><span className="text-sm font-bold text-orange">0{index + 1}</span><span className="display text-2xl font-bold uppercase sm:text-3xl">{item}</span></li>)}
          </ol>
        </div>
      </section>

      <section id="projects" className="bg-white px-5 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="eyebrow text-orange">Selected concepts</p><h2 className="display mt-4 text-5xl font-black uppercase sm:text-7xl">Spaces with substance.</h2></div><p className="max-w-md text-sm leading-6 text-slate">The projects below are illustrative design concepts created for this fictional website. They are not completed client commissions.</p></div>
          <div className="mt-14 grid gap-5 md:grid-cols-12">
            {projects.map((project, i) => <article key={project.title} className={`${project.className} group relative overflow-hidden bg-ink ${i === 2 ? "aspect-[16/7]" : "aspect-[4/3]"}`}><Image src={project.image} alt={`${project.title}, an illustrative ${project.type.toLowerCase()}`} fill sizes="(min-width: 768px) 58vw, 100vw" className="object-cover transition duration-700 group-hover:scale-[1.025]" /><div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" /><div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8"><p className="eyebrow text-orange">{project.type}</p><h3 className="display mt-2 text-3xl font-black uppercase sm:text-4xl">{project.title}</h3></div></article>)}
          </div>
        </div>
      </section>

      <section id="quote" className="px-5 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto grid max-w-7xl overflow-hidden bg-ink shadow-lift lg:grid-cols-[.82fr_1.18fr]">
          <div className="relative overflow-hidden p-8 text-white sm:p-12 lg:p-14"><div className="grid-lines absolute inset-0 opacity-40" /><div className="relative"><p className="eyebrow text-orange">Start a conversation</p><h2 className="display mt-5 text-5xl font-black uppercase leading-[.92] sm:text-6xl">Tell us what you&apos;re planning.</h2><p className="mt-7 leading-7 text-white/60">Share the basics of your project using this demonstration form. No information is transmitted or stored.</p><div className="mt-12 border-l-2 border-orange pl-5 text-sm leading-6 text-white/55"><strong className="block text-white">Demo notice</strong>This fictional form only shows an on-screen confirmation.</div></div></div>
          <div className="bg-white p-8 sm:p-12 lg:p-14">
            {sent ? <div className="flex min-h-[460px] flex-col items-start justify-center" role="status" aria-live="polite"><span className="grid h-14 w-14 place-items-center rounded-full bg-orange text-2xl text-white">✓</span><h3 className="display mt-7 text-4xl font-black uppercase">Thanks for exploring.</h3><p className="mt-4 max-w-md leading-7 text-slate">Your demo submission was confirmed on this screen only. No personal information was sent or saved.</p><button className="focus-ring mt-8 text-sm font-extrabold uppercase tracking-wider text-orange" onClick={() => setSent(false)}>Start another demo →</button></div> :
            <form onSubmit={submit} className="grid gap-6" noValidate={false}>
              <label className="grid gap-2 text-sm font-bold">Name <input required name="name" autoComplete="name" className="focus-ring border border-ink/20 bg-warm px-4 py-3.5 font-normal" placeholder="Your name" /></label>
              <label className="grid gap-2 text-sm font-bold">Contact number or email <input required name="contact" autoComplete="email" className="focus-ring border border-ink/20 bg-warm px-4 py-3.5 font-normal" placeholder="How we could reach you" /></label>
              <label className="grid gap-2 text-sm font-bold">Project type <select required name="type" defaultValue="" className="focus-ring border border-ink/20 bg-warm px-4 py-3.5 font-normal"><option value="" disabled>Select a service</option>{services.map(s => <option key={s.n}>{s.title}</option>)}</select></label>
              <label className="grid gap-2 text-sm font-bold">Project description <textarea required minLength={20} name="description" rows={5} className="focus-ring resize-y border border-ink/20 bg-warm px-4 py-3.5 font-normal" placeholder="Tell us about the space, location, and general goals (minimum 20 characters)." /></label>
              <p className="text-xs leading-5 text-slate">Demo only. Submitting does not send a real inquiry or store the details entered.</p>
              <button type="submit" className="focus-ring flex items-center justify-center gap-3 bg-orange px-7 py-4 text-sm font-extrabold uppercase tracking-wider text-white hover:bg-ink">Show demo confirmation <Arrow /></button>
            </form>}
          </div>
        </div>
      </section>

      <footer className="border-t border-ink/15 px-5 py-10 lg:px-8"><div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-slate md:flex-row md:items-center md:justify-between"><div><strong className="display text-xl text-ink">TITAN BUILD CONSTRUCTION</strong><p className="mt-2">Fictional business created as a website design concept.</p></div><div className="flex flex-col gap-2 md:items-end"><a href="https://agosyn-digital.netlify.app" target="_blank" rel="noreferrer" className="focus-ring font-bold text-ink underline decoration-orange decoration-2 underline-offset-4 hover:text-orange">Website concept by AGOSYN DIGITAL</a><p>© {new Date().getFullYear()} Concept presentation</p></div></div></footer>
    </main>
  );
}
