import {
  RiReactjsLine,
  RiJavascriptLine,
  RiHtml5Line,
  RiCss3Line,
  RiGithubFill,
  RiNodejsLine,
} from "react-icons/ri";
import {
  SiTailwindcss,
  SiPython,
  SiTensorflow,
  SiPytorch,
  SiAmazon,
  SiMysql,
  SiExpo,
  SiApple,
  SiMongodb,
} from "react-icons/si";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const Technologies = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="pb-24">
      <motion.h2
        className="my-20 text-center text-4xl font-semibold text-stone-900"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
        whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Technologies
      </motion.h2>

      <div className="space-y-16">

        {/* Frontend */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h3 className="tech-heading">Frontend</h3>
          <div className="tech-grid">
            <Tech icon={<RiReactjsLine />} name="React" />
            <Tech icon={<SiExpo />} name="Expo" />
            <Tech icon={<RiHtml5Line />} name="HTML" />
            <Tech icon={<RiCss3Line />} name="CSS" />
            <Tech icon={<SiTailwindcss />} name="Tailwind" />
            <Tech icon={<RiJavascriptLine />} name="JavaScript" />
          </div>
        </motion.div>

        {/* Backend */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.04 }}
        >
          <h3 className="tech-heading">Backend</h3>
          <div className="tech-grid">
            <Tech icon={<RiNodejsLine />} name="Node.js" />
            <Tech icon={<SiMongodb />} name="MongoDB" />
            <Tech icon={<SiMysql />} name="MySQL" />
          </div>
        </motion.div>

        {/* AI / Machine Learning */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.06 }}
        >
          <h3 className="tech-heading">AI & Machine Learning</h3>
          <div className="tech-grid">
            <Tech icon={<SiPython />} name="Python" />
            <Tech icon={<SiTensorflow />} name="TensorFlow" />
            <Tech icon={<SiPytorch />} name="PyTorch" />
          </div>
        </motion.div>

        {/* Cloud & Dev Tools */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.08 }}
        >
          <h3 className="tech-heading">Cloud & Dev Tools</h3>
          <div className="tech-grid">
            <Tech icon={<SiAmazon />} name="AWS" />
            <Tech icon={<RiGithubFill />} name="GitHub" />
          </div>
        </motion.div>

        {/* Mobile */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        >
          <h3 className="tech-heading">Mobile</h3>
          <div className="tech-grid">
            <Tech icon={<SiApple />} name="iOS / CoreML" />
          </div>
        </motion.div>

      </div>
    </div>
  );
};

type TechProps = {
  icon: ReactNode;
  name: string;
};

const Tech = ({ icon, name }: TechProps) => {
  return (
    <div className="tech-card">
      <div className="text-5xl">{icon}</div>
      <p className="mt-2 text-sm font-medium">{name}</p>
    </div>
  );
};

export default Technologies;
