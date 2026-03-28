import { motion } from "motion/react";
import { Code, Cpu, Database, Layers, Layout, Terminal } from "lucide-react";

const About = () => {
  return (
    <section id="tech" className="grid grid-cols-1 md:grid-cols-12 gap-6">
      <motion.div
        whileHover={{ y: -5 }}
        className="md:col-span-8 glass-card rounded-2xl p-8 flex flex-col justify-between hover:bg-surface-bright transition-all duration-300"
      >
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-secondary">
            <Layout size={20} />
            <span className="font-bold text-sm uppercase tracking-widest">
              Background
            </span>
          </div>
          <h3 className="text-3xl font-headline font-bold">
            Fullstack Developer
          </h3>
          <p className="text-on-surface-variant leading-relaxed text-lg">
            With 3+ years of experience, I build modular and scalable web
            applications. I’m passionate about integrating AI to solve
            real-world problems and create impactful user experiences.
          </p>
        </div>
        <div className="mt-8 flex gap-4">
          <div className="p-3 bg-surface-container-highest rounded-xl">
            <span className="text-primary font-headline font-bold block">
              40+
            </span>
            <span className="text-on-surface-variant text-xs font-bold ">
              Sites Delivered
            </span>
          </div>
          <div className="p-3 bg-surface-container-highest rounded-xl">
            <span className="text-secondary font-headline font-bold block">
              5
            </span>
            <span className="text-on-surface-variant text-xs font-bold ">
              Best Performance Awards
            </span>
          </div>
        </div>
      </motion.div>

      <div className="md:col-span-4 grid grid-cols-2 gap-4">
        {[
          { icon: <Terminal />, label: "ReactJS", color: "text-primary" },
          { icon: <Layers />, label: "AEM ", color: "text-secondary" },
          { icon: <Cpu />, label: "Node JS", color: "text-primary" },
          { icon: <Code />, label: "Hugo", color: "text-secondary" },
        ].map((tech, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1 }}
            className="glass-card rounded-2xl p-4 flex flex-col items-center justify-center gap-2 hover:bg-surface-bright transition-all"
          >
            <div className={`${tech.color} scale-125`}>{tech.icon}</div>
            <span className={"text-xs  font-bold uppercase"}>{tech.label}</span>
          </motion.div>
        ))}
      </div>
      <div className="md:col-span-12 flex flex-wrap gap-4 py-2">
        {[
          { icon: <Terminal />, label: "Tailwind" },
          { icon: <Layers />, label: "HTML5" },
          { icon: <Cpu />, label: "Langchain" },
          { icon: <Database />, label: "Postgres" },
        ].map((skill, i) => (
          <div
            key={i}
            className="bg-surface-container-highest rounded-full px-5 py-2 flex items-center gap-2 border border-outline-variant/10"
          >
            <div className="text-secondary scale-75">{skill.icon}</div>
            <span className="text-xs font-bold uppercase text-on-surface">
              {skill.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
