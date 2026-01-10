import { motion, useReducedMotion } from "framer-motion";
import profilePic from "../assets/raviKumarProfile.webp";

const HERO_CONTENT =
  "I am an early-career technologist with experience in project coordination, application development, and computer vision. I have worked with Python, Java, and modern web tools, and I enjoy learning quickly, adapting to new challenges, and contributing wherever I can add value. I’m actively seeking an opportunity to grow within a supportive, impact-driven team.";

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <motion.img
              src={profilePic}
              alt="Alexandra Mallqui"
              className="border-8 border-stone-800 rounded-xl"
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96, y: 12 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <motion.div
            className="flex flex-col items-center lg:items-start mt-10"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <h2 className="pb-2 text-4xl tracking-tighter lg:text-8xl text-stone-900">
              Alexandra Mallqui
            </h2>

            <span className="bg-gradient-to-r from-rose-700 to-stone-700 bg-clip-text text-3xl tracking-tight text-transparent">
              Technical Project Manager & Software Developer
            </span>

            <p className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter text-stone-700">
              {HERO_CONTENT}
            </p>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="bg-stone-900 hover:bg-stone-800 transition-colors rounded-full px-6 py-3 text-sm text-stone-100 mb-10"
            >
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
