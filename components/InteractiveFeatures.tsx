"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { estimateBudget, type FinishLevel, type ProjectType } from "../lib/project-tools.js";

const base = process.env.NODE_ENV === "production" ? "/titan-build-construction" : "";
const peso = new Intl.NumberFormat("en-PH", { style: "currency", currency: "PHP", maximumFractionDigits: 0 });

const projects = [
  { title: "Sierra House", type: "Residential", image: `${base}/images/project-residential.webp`, note: "Compact urban home concept" },
  { title: "Canopy Commons", type: "Commercial", image: `${base}/images/project-commercial.webp`, note: "Neighborhood retail concept" },
  { title: "Casa Amihan", type: "Residential", image: `${base}/images/hero-titan.webp`, note: "Tropical hillside home concept" },
  { title: "Luntian Living", type: "Renovation", image: `${base}/images/renovation-after.webp`, note: "Interior renewal concept" },
];

export function ProjectGallery() {
  const [filter, setFilter] = useState("All");
  const filtered = projects.filter((project) => filter === "All" || project.type === filter);
  return <>
    <div className="mt-10 flex flex-wrap gap-2" role="group" aria-label="Filter illustrative projects">
      {["All", "Residential", "Commercial", "Renovation"].map((item) => <button key={item} onClick={() => setFilter(item)} aria-pressed={filter === item} className={`focus-ring border px-5 py-3 text-xs font-extrabold uppercase tracking-[.13em] transition ${filter === item ? "border-orange bg-orange text-white" : "border-ink/20 bg-white hover:border-ink"}`}>{item}</button>)}
    </div>
    <div className="mt-8 grid gap-5 md:grid-cols-2" aria-live="polite">
      {filtered.map((project) => <article key={project.title} className="project-card group relative aspect-[4/3] overflow-hidden bg-ink"><Image src={project.image} alt={`${project.title}, an illustrative ${project.type.toLowerCase()} concept`} fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-[1.025]" /><div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" /><div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8"><p className="eyebrow text-orange">{project.type} · Illustrative</p><h3 className="display mt-2 text-3xl font-black uppercase sm:text-4xl">{project.title}</h3><p className="mt-1 text-sm text-white/65">{project.note}</p></div></article>)}
    </div>
  </>;
}

export function CostEstimator() {
  const [projectType, setProjectType] = useState<ProjectType>("residential");
  const [area, setArea] = useState(100);
  const [finish, setFinish] = useState<FinishLevel>("standard");
  const result = useMemo(() => estimateBudget(projectType, area, finish), [projectType, area, finish]);
  const labels = { essential: "Essential", standard: "Standard", premium: "Premium" };
  return <section id="estimator" data-reveal className="bg-ink px-5 py-24 text-white sm:py-32 lg:px-8"><div className="mx-auto max-w-7xl"><div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
    <div><p className="eyebrow text-orange">Sample budget planner</p><h2 className="display mt-4 text-5xl font-black uppercase leading-[.95] sm:text-7xl">Shape the starting point.</h2><p className="mt-6 max-w-lg leading-7 text-white/60">Explore a broad illustrative construction range. These sample rates are educational only—not quotations, offers, or current market pricing.</p></div>
    <div className="grid gap-8 bg-white p-7 text-ink sm:p-10"><div className="grid gap-6 sm:grid-cols-2">
      <label className="grid gap-2 text-sm font-bold">Project type<select value={projectType} onChange={(e) => setProjectType(e.target.value as ProjectType)} className="focus-ring border border-ink/20 bg-warm px-4 py-3 font-normal"><option value="residential">House construction</option><option value="commercial">Commercial construction</option><option value="renovation">Renovation</option></select></label>
      <label className="grid gap-2 text-sm font-bold">Floor area (m²)<input type="number" min="20" max="2000" value={area} onChange={(e) => setArea(Number(e.target.value))} className="focus-ring border border-ink/20 bg-warm px-4 py-3 font-normal" /></label>
    </div><fieldset><legend className="text-sm font-bold">Finish level</legend><div className="mt-3 grid grid-cols-3 gap-2">{(["essential","standard","premium"] as FinishLevel[]).map((level) => <button type="button" key={level} onClick={() => setFinish(level)} aria-pressed={finish === level} className={`focus-ring px-2 py-3 text-xs font-extrabold uppercase tracking-wider transition ${finish === level ? "bg-orange text-white" : "bg-warm hover:bg-ink/10"}`}>{labels[level]}</button>)}</div></fieldset>
    <div className="border-t border-ink/15 pt-7" aria-live="polite"><p className="eyebrow text-slate">Illustrative estimated range</p><p className="display mt-2 text-4xl font-black text-orange sm:text-6xl">{peso.format(result.total)}</p><div className="mt-6 grid gap-2 text-sm text-slate sm:grid-cols-3"><p><strong className="block text-ink">{result.area} m²</strong>Floor area</p><p><strong className="block text-ink">{peso.format(result.rate)}/m²</strong>Sample base rate</p><p><strong className="block text-ink">× {result.multiplier.toFixed(2)}</strong>{labels[finish]} finish</p></div><p className="mt-6 border-l-2 border-orange pl-4 text-xs leading-5 text-slate">Assumes a straightforward project scope and excludes land, professional fees, permits, site development, utilities, unusual ground conditions, and taxes. Real pricing requires plans, specifications, and a professional site assessment.</p></div>
    </div></div></div></section>;
}

export function BeforeAfter() {
  const [position, setPosition] = useState(50);
  return <section data-reveal className="bg-white px-5 py-24 sm:py-32 lg:px-8"><div className="mx-auto max-w-7xl"><div className="grid gap-8 lg:grid-cols-2 lg:items-end"><div><p className="eyebrow text-orange">Concept renovation</p><h2 className="display mt-4 text-5xl font-black uppercase leading-[.95] sm:text-7xl">See the shift.</h2></div><p className="max-w-lg leading-7 text-slate">Drag the control—or use the arrow keys—to compare a fictional living-room renewal concept. Both views are illustrative, not completed client work.</p></div>
    <div className="relative mt-12 aspect-[16/10] overflow-hidden bg-ink shadow-lift select-none"><Image src={`${base}/images/renovation-before.webp`} alt="Before: dated living room renovation concept" fill sizes="100vw" className="object-cover" draggable={false} /><div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100-position}% 0 0)` }}><Image src={`${base}/images/renovation-after.webp`} alt="After: contemporary tropical living room renovation concept" fill sizes="100vw" className="object-cover" draggable={false} /></div><div className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow" style={{ left: `${position}%` }}><span className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-4 border-white bg-orange font-black text-white shadow-lg">↔</span></div><span className="absolute left-4 top-4 bg-ink/80 px-3 py-2 text-xs font-bold uppercase tracking-wider text-white">After</span><span className="absolute right-4 top-4 bg-ink/80 px-3 py-2 text-xs font-bold uppercase tracking-wider text-white">Before</span><input aria-label="Before and after comparison" type="range" min="0" max="100" value={position} onChange={(e) => setPosition(Number(e.target.value))} className="comparison-range focus-ring absolute inset-0 h-full w-full cursor-ew-resize opacity-0" /></div>
  </div></section>;
}
