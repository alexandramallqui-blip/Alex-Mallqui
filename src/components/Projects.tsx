import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import PdfModal from "./PdfModal";
import VideoModal from "./VideoModal";
import {
  catScanAlgoPdfUrl,
  catScanAppPdfUrl,
  catScanCoverImg,
  catScanVideoUrl,
  marinaKickoffPdfUrl,
} from "../constants/projects";

/** ---------- Tags ---------- */
const catScanAppTags = ["Swift", "Xcode", "iOS", "CoreML", "Camera & Photos", "UI/UX"];
const catScanMlTags = ["Python", "Computer Vision", "CNNs", "Model Training", "Evaluation", "Metrics"];

const marinaTags = [
  "PHP",
  "MySQL",
  "phpMyAdmin",
  "cPanel",
  "VS Code",
  "Weather API",
  "Auth & Security",
  "Dashboards",
  "Agile Sprints",
];

const Projects: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  /** ---------- Modals ---------- */
  const [catVideoOpen, setCatVideoOpen] = useState(false);
  const [catAppPdfOpen, setCatAppPdfOpen] = useState(false);
  const [catAlgoPdfOpen, setCatAlgoPdfOpen] = useState(false);
  const [marinaPdfOpen, setMarinaPdfOpen] = useState(false);

  return (
    <section className="pb-24" id="projects">
      <motion.h2
        className="my-20 text-center text-4xl font-semibold text-stone-900"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
        whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Projects
      </motion.h2>

      <div className="mx-auto max-w-6xl px-4 space-y-10">
        {/* ===================== CAT scan (Featured) ===================== */}
        <motion.article
          className="rounded-3xl border border-pink-200 bg-white/75 p-8 shadow-sm backdrop-blur-md"
          initial={shouldReduceMotion ? false : { opacity: 0, x: -36 }}
          whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="grid gap-8 md:grid-cols-2">
            {/* LEFT */}
            <div>
              <h3 className="text-3xl font-semibold text-neutral-900">CAT scan</h3>
              <p className="mt-1 text-sm font-medium text-pink-700">
                End-to-end Machine Learning + iOS App (Swift + CoreML)
              </p>

              <p className="mt-5 text-neutral-800 leading-relaxed">
                CAT scan was a full pipeline project where I built a real-world AI system, not
                just a model. I trained and evaluated a convolutional neural network to recognize
                cat breeds from images, then deployed it into an iOS app using CoreML so users can
                upload a photo and get live predictions.
              </p>

              <p className="mt-4 text-neutral-800 leading-relaxed">
                This included dataset handling, model evaluation (accuracy + precision-based
                analysis), and designing an app UI that makes the AI simple and usable. It was one
                of my longest and most technically challenging builds.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  onClick={() => setCatVideoOpen(true)}
                  className="rounded-xl bg-pink-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-pink-800"
                >
                  ▶ Watch Demo
                </button>

                <button
                  onClick={() => setCatAppPdfOpen(true)}
                  className="rounded-xl border border-pink-300 bg-white/80 px-5 py-2.5 text-sm font-semibold text-pink-800 shadow-sm transition hover:bg-white hover:shadow-md"
                >
                  View App Slides
                </button>

                <button
                  onClick={() => setCatAlgoPdfOpen(true)}
                  className="rounded-xl border border-pink-300 bg-white/80 px-5 py-2.5 text-sm font-semibold text-pink-800 shadow-sm transition hover:bg-white hover:shadow-md"
                >
                  View Algorithm Slides
                </button>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex items-center justify-center">
              <div className="w-full max-w-[420px] rounded-2xl border-2 border-pink-200 bg-white/90 p-3 shadow-sm">
                <img
                  src={catScanCoverImg}
                  alt="CAT scan app preview"
                  className="w-full max-h-[320px] object-contain"
                />
              </div>
            </div>
          </div>

          {/* Tech split */}
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-semibold text-pink-800">App Tech</p>
              <div className="flex flex-wrap gap-2">
                {catScanAppTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-pink-200 bg-white/85 px-3 py-1 text-xs font-semibold text-pink-800 shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-3 text-sm font-semibold text-pink-800">ML Tech</p>
              <div className="flex flex-wrap gap-2">
                {catScanMlTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-pink-200 bg-white/85 px-3 py-1 text-xs font-semibold text-pink-800 shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.article>

        {/* ===================== Hawk Island Marina ===================== */}
        <motion.article
          className="rounded-3xl border border-pink-200 bg-white/70 p-8 shadow-sm backdrop-blur-md"
          initial={shouldReduceMotion ? false : { opacity: 0, x: -36 }}
          whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
        >
          <h3 className="text-2xl font-semibold text-neutral-900">Hawk Island Marina</h3>
          <p className="mt-1 text-sm font-medium text-pink-700">
            Software Engineering Project • Web App
          </p>

          <p className="mt-4 text-neutral-800 leading-relaxed">
            Built a web application for a family-owned marina transitioning away from paper-based
            operations and limited online visibility. The goal was to improve customer access and
            make operations easier for staff through a centralized system.
          </p>

          <p className="mt-4 text-neutral-800 leading-relaxed">
            The project was planned and executed in sprints: backend database + authentication,
            staff dashboards (customer records, assignments, incident logging), customer features
            (reservations, viewing available spaces, tide/weather info, notifications), and
            management reporting (revenue + analytics) with a focus on security and role-based access.
          </p>

          <div className="mt-6">
            <button
              onClick={() => setMarinaPdfOpen(true)}
              className="rounded-xl border border-pink-300 bg-white/80 px-5 py-2.5 text-sm font-semibold text-pink-800 shadow-sm transition hover:bg-white hover:shadow-md"
            >
              View Kickoff Slides- Team 2
            </button>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {marinaTags.map((tag) => (
              <span
                key={tag}
                className="rounded-lg border border-pink-200 bg-white/85 px-3 py-1 text-xs font-semibold text-pink-800 shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.article>
      </div>

      {/* ===================== Modals ===================== */}
      <VideoModal
        isOpen={catVideoOpen}
        onClose={() => setCatVideoOpen(false)}
        videoUrl={catScanVideoUrl}
        title="CAT scan — Demo"
      />

      <PdfModal
        isOpen={catAppPdfOpen}
        onClose={() => setCatAppPdfOpen(false)}
        pdfUrl={catScanAppPdfUrl}
        title="CAT scan — App Slides"
      />

      <PdfModal
        isOpen={catAlgoPdfOpen}
        onClose={() => setCatAlgoPdfOpen(false)}
        pdfUrl={catScanAlgoPdfUrl}
        title="CAT scan — Algorithm Slides"
      />

      <PdfModal
        isOpen={marinaPdfOpen}
        onClose={() => setMarinaPdfOpen(false)}
        pdfUrl={marinaKickoffPdfUrl}
        title="Hawk Island Marina — Kickoff Deck"
      />
    </section>
  );
};

export default Projects;
