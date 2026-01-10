import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const NAME = "Alexandra Mallqui";
const LOCATION = "Clifton, NJ";
const EMAIL = "alexandramallqui@gmail.com";
const PHONE = "(862)944-5256"; // <-- replace

const Contact: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const copy = async (label: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(label);
      setTimeout(() => setCopied(null), 1200);
    } catch {
      // fallback: do nothing (clipboard may be blocked)
    }
  };

  return (
    <section className="pb-32" id="contact">
      <div className="mx-auto max-w-6xl px-4">
        {/* This is the "different vibe" wrapper */}
        <motion.div
          className="relative overflow-hidden rounded-[28px] border border-pink-200 bg-white/60 shadow-sm backdrop-blur-md"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Accent strip */}
          <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-pink-400 via-pink-300 to-pink-200" />

          <div className="grid gap-10 p-8 md:grid-cols-2 md:p-12">
            {/* LEFT */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
            >
              <p className="text-sm font-semibold text-pink-800">Contact</p>
              <h2 className="mt-3 text-4xl font-semibold text-neutral-900">
                Get in touch: 
              </h2>

              <p className="mt-4 max-w-md text-neutral-800 leading-relaxed">
                  Always open to new opportunities and meaningful work. Feel free to reach out via email, and I'll get back to you as soon as I can.
              </p>

              {/* Big identity block */}
              <div className="mt-8 rounded-2xl border border-pink-200 bg-white/80 p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-pink-800">
                  Name
                </p>
                <p className="mt-1 text-lg font-semibold text-neutral-900">{NAME}</p>

              </div>

              {/* CTA buttons */}
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={`mailto:${EMAIL}`}
                  className="rounded-xl bg-pink-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-pink-800"
                >
                  Email me
                </a>

                <a
                  href={`tel:${PHONE.replace(/[^\d+]/g, "")}`}
                  className="rounded-xl border border-pink-300 bg-white/70 px-6 py-3 text-sm font-semibold text-pink-800 shadow-sm transition hover:bg-white hover:shadow-md"
                >
                  Call me
                </a>
              </div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              className="flex flex-col justify-center gap-4"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.12 }}
            >
              <CopyTile
                title="Email"
                value={EMAIL}
                onCopy={() => copy("Email", EMAIL)}
                copied={copied === "Email"}
              />
              <CopyTile
                title="Phone"
                value={PHONE}
                onCopy={() => copy("Phone", PHONE)}
                copied={copied === "Phone"}
              />
              <CopyTile
                title="Location"
                value={LOCATION}
                onCopy={() => copy("Location", LOCATION)}
                copied={copied === "Location"}
              />

              
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const MiniStat: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="rounded-xl border border-pink-200 bg-white/85 px-4 py-3">
    <p className="text-[11px] font-semibold uppercase tracking-wide text-pink-800">
      {label}
    </p>
    <p className="mt-1 font-medium text-neutral-900">{value}</p>
  </div>
);

const CopyTile: React.FC<{
  title: string;
  value: string;
  onCopy: () => void;
  copied: boolean;
}> = ({ title, value, onCopy, copied }) => (
  <div className="group rounded-2xl border border-pink-200 bg-white/80 p-5 shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-md">
    <div className="flex items-start justify-between gap-4">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-pink-800">
          {title}
        </p>
        <p className="mt-1 text-base font-semibold text-neutral-900 break-all">
          {value}
        </p>
      </div>

      <button
        onClick={onCopy}
        className="rounded-xl border border-pink-300 bg-white/70 px-4 py-2 text-xs font-semibold text-pink-800 transition group-hover:bg-pink-50"
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  </div>
);

export default Contact;
