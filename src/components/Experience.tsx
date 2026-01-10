import React from "react";
import { motion, useReducedMotion } from "framer-motion";

type ExperienceItem = {
  company: string;
  role: string;
  location?: string;
  date: string;
  headline: string;
  bullets: string[];
  tags: string[];
};

const experience: ExperienceItem[] = [
  {
    company: "Affiliated Monitoring",
    role: "Project Management Intern (PMO / Automation)",
    location: "NJ (Hybrid)",
    date: "Internship",
    headline:
      "Built PMO workflows + automation that leadership adopted to reduce manual admin work and standardize execution.",
    bullets: [
      "Designed a Project Management Office structure using Monday.com boards, templates, and standardized intake forms.",
      "Automated request capture + routing to reduce back-and-forth and improve data quality for reporting.",
      "Documented processes and trained stakeholders so the system was actually adopted (not just built).",
      "Improved visibility into project status via consistent fields, ownership, and timeline tracking.",
    ],
    tags: ["Monday.com", "Workflow Design", "Automation", "Process Improvement", "Microsoft 365", "Excel", "Visio"],
  },
  {
    company: "CAT scan (Capstone / AI iOS Project)",
    role: "ML + iOS Developer",
    location: "Kean University",
    date: "Academic Project",
    headline:
      "Built an end-to-end ML pipeline and deployed it into an iOS app using Swift + CoreML.",
    bullets: [
      "Trained and evaluated a CNN-based computer vision model for cat breed classification (metrics + experiments).",
      "Converted and deployed the model for on-device inference using CoreML inside a Swift/Xcode iOS application.",
      "Built an app flow that supports image input and returns user-friendly prediction output.",
      "Created presentation assets + demos to communicate technical decisions and results clearly to non-technical audiences.",
    ],
    tags: ["Swift", "Xcode", "CoreML", "Python", "Computer Vision", "CNNs", "Model Evaluation"],
  },
  {
    company: "Hawk Island Marina (Software Engineering Project)",
    role: "Full-Stack / Systems Contributor",
    location: "Delanco, NJ",
    date: "Academic Project",
    headline:
      "Built a web system to modernize marina operations, replacing paper workflows with a centralized platform.",
    bullets: [
      "Planned features using sprint structure + user stories focused on customer access and staff operations.",
      "Worked with backend + database workflows (reservations, customer records, operational dashboards).",
      "Supported secure access patterns and operational reporting goals (tracking + visibility).",
      "Collaborated in a team environment with iterative delivery, testing, and documentation.",
    ],
    tags: ["Web App", "Agile", "Team Collaboration", "Databases", "Dashboards", "Documentation"],
  },
  {
    company: "UNIQLO",
    role: "Customer Experience & Systems Support",
    location: "NJ",
    date: "Multiple roles",
    headline:
      "Trained and improved AI chatbot systems by translating real customer issues into structured knowledge and scripts.",
    bullets: [
      "Trained and edited chatbot knowledge base, intents, and response scripts based on live customer interactions.",
      "Identified gaps in automated support flows and created improved response logic for edge cases.",
      "Translated recurring customer problems into structured data for system-level fixes.",
      "Balanced high-volume frontline operations with technical documentation and feedback loops.",
    ],
    tags: ["AI Chatbots", "Knowledge Bases", "Script Design", "Customer Systems", "Operations", "Process Improvement"],
  },
  {
    company: "The Beautiful Foundation",
    role: "Research Assistant (International NGOs)",
    location: "Seoul, South Korea",
    date: "Jul 2022",
    headline:
      "Built data-driven NGO landscape reports to support nonprofit strategy and international outreach.",
    bullets: [
      "Collected and structured datasets on international NGOs operating in South Korea for organizational benchmarking.",
      "Aligned data collection methods with internal stakeholders to support strategic nonprofit initiatives.",
      "Synthesized findings into reports highlighting trends, gaps, and opportunities across the NGO ecosystem.",
      "Designed presentation decks to communicate insights clearly to leadership and partner organizations.",
    ],
    tags: ["Research", "Data Analysis", "Reporting", "Presentations", "Cross-Cultural Work", "Nonprofit Systems"],
  },
  {
    company: "City Mapping",
    role: "Research Assistant (UX & Localization)",
    location: "Seoul, South Korea",
    date: "Jul 2022",
    headline:
      "Built multilingual UX reference databases to improve navigation and accessibility for foreign visitors.",
    bullets: [
      "Created a structured visual database of signage, icons, and layouts to support multilingual design.",
      "Optimized wayfinding and clarity for non-Korean speakers through culturally sensitive design research.",
      "Supported accessibility goals by mapping confusing or inconsistent signage patterns across public spaces.",
    ],
    tags: ["UX Research", "Localization", "Accessibility", "Data Organization", "Optimization", "Visual Systems"],
  },
];

const Experience: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="pb-24" id="experience">
      <motion.h2
        className="my-20 text-center text-4xl font-semibold text-stone-900"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
        whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Experience
      </motion.h2>

      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8">
          {experience.map((item, index) => (
            <motion.article
              key={`${item.company}-${item.role}`}
              className="rounded-3xl border border-pink-200 bg-white/75 p-7 shadow-sm backdrop-blur-md transition hover:-translate-y-1 hover:shadow-md"
              initial={shouldReduceMotion ? false : { opacity: 0, x: -28 }}
              whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.04 }}
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-neutral-900">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-pink-800">
                    {item.company}
                    {item.location ? <span className="text-neutral-500"> • {item.location}</span> : null}
                  </p>
                </div>

                <span className="inline-flex w-fit items-center rounded-full border border-pink-200 bg-white/80 px-3 py-1 text-xs font-semibold text-pink-800">
                  {item.date}
                </span>
              </div>

              <p className="mt-4 text-neutral-800 leading-relaxed">
                {item.headline}
              </p>

              <ul className="mt-5 list-disc space-y-2 pl-5 text-neutral-800">
                {item.bullets.map((b) => (
                  <li key={b} className="leading-relaxed">
                    {b}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-pink-200 bg-white/85 px-3 py-1 text-xs font-semibold text-pink-800 shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
