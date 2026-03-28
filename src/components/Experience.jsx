import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

const Experience = () => {
  const experienceDetails = [
    "Built and optimized responsive user interfaces for a leading airline client, utilizing React and JavaScript to improve cross-browser compatibility and reduce UI-related bugs by 30%.",
    "Led the migration of legacy WordPress sites to AEM Franklin, reducing page load times by 40% and streamlining the content publishing workflow for the marketing team for a Pharma client.",
    "Engineered modular and reusable Hugo templates to accelerate development velocity, establishing a standardized codebase that reduced future maintenance time by 30%",
    "Integrated frontend applications with RESTful APIs and AI models, ensuring seamless data handling and optimistic UI updates.",
    "Actively participated in various AI-Hackathons, sessions and initiatives conducted by the company, staying up to date with emerging trends and technologies",
  ];

  return (
    <section
      id="experience"
      className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
    >
      <div className="md:col-span-4">
        <h2 className="text-4xl font-headline font-extrabold sticky top-32">
          Experience <span className="text-secondary">Journey</span>
        </h2>
      </div>
      <div className="md:col-span-8 space-y-6">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-8 relative overflow-hidden group"
        >
          <div className="absolute top-0 left-0 w-1 h-full bg-secondary opacity-20 group-hover:opacity-100 transition-opacity"></div>
          <div className="flex justify-between items-start mb-4">
            <div className="space-y-1">
              <h4 className="text-on-surface-variant font-bold text-sm uppercase tracking-widest">
                Tata Consultancy Services
              </h4>
              <h3 className="text-2xl font-headline font-bold">
                Web Developer
              </h3>
            </div>
            <span className="bg-surface-container px-3 py-1 rounded text-xs font-bold text-on-surface-variant">
              2022 — 2026
            </span>
          </div>
          <p className="text-on-surface-variant leading-relaxed mb-6">
            Worked on 40+ websites across modern technologies, building scalable
            and maintainable applications across both frontend and backend
            systems.
          </p>
          <ul className="space-y-3">
            {experienceDetails.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm text-on-surface"
              >
                <CheckCircle2 size={16} className="text-secondary mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
