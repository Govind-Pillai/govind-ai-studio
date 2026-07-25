import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skillCategories = [
  {
    title: "Languages & DBs",
    icon: "{ }",
    color: "primary",
    skills: [
      { name: "Python & C++", level: 92 },
      { name: "SQL (Postgres/MySQL)", level: 88 },
      { name: "SQLite & MongoDB", level: 80 },
    ],
  },
  {
    title: "AI / ML & RAG",
    icon: "🧠",
    color: "secondary",
    skills: [
      { name: "LangChain & LlamaIndex", level: 88 },
      { name: "RAG & LLMs", level: 86 },
      { name: "PyTorch & TensorFlow", level: 78 },
      { name: "scikit-learn & OpenCV", level: 85 },
      { name: "ChromaDB & Qdrant", level: 82 },
    ],
  },
  {
    title: "Frameworks & Tools",
    icon: "⚙️",
    color: "primary",
    skills: [
      { name: "Django & FastAPI", level: 85 },
      { name: "Flask & HTMX", level: 80 },
      { name: "React", level: 75 },
      { name: "Docker & Git", level: 82 },
      { name: "GCP Cloud & Linux", level: 72 },
    ],
  },
  {
    title: "PM & Practices",
    icon: "📋",
    color: "secondary",
    skills: [
      { name: "Agile / Scrum", level: 90 },
      { name: "Jira Boards", level: 88 },
      { name: "BRD / PRD / FSD", level: 85 },
      { name: "Gap Analysis", level: 88 },
    ],
  },
];

const techBadges = [
  "Python", "C++", "SQL", "Django", "FastAPI", "Flask", "HTMX", "React", "Docker", "Git", "GCP", 
  "PyTorch", "TensorFlow", "scikit-learn", "RAG", "LLMs", "ChromaDB", "Qdrant", "pgvector", 
  "Ollama", "Hugging Face", "Power BI", "DAX", "Power Query M", "Excel (advanced)", "Pandas", 
  "NumPy", "Matplotlib", "Seaborn", "PostgreSQL", "MySQL", "MongoDB", "SQLite", "Agile/Scrum", 
  "Jira", "Risk Assessment", "Stakeholder Comm", "KPI Monitoring", "BRD/PRD/FSD", "Gap Analysis"
];

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-16 section-bg-skills w-[90%] mx-auto" ref={ref}>
      {/* Ambient blue glow left */}
      <div
        className="absolute left-0 bottom-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">
            // skills & tools
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Tech <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            The tools, technologies, and management methodologies I leverage to build solutions.
          </p>
        </motion.div>

        {/* Skill category cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: ci * 0.15 }}
              className="glass-card rounded-2xl p-6 border border-border/60"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="font-bold text-foreground">{cat.title}</h3>
              </div>

              <div className="space-y-4">
                {cat.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm font-mono text-muted-foreground">
                        {skill.name}
                      </span>
                      <span
                        className={`text-xs font-mono font-semibold ${
                          cat.color === "primary" ? "text-primary" : "text-secondary"
                        }`}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-bar-fill"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{
                          duration: 1.2,
                          delay: ci * 0.15 + si * 0.1 + 0.3,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech badges floating grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="glass-card rounded-2xl p-6 border border-border/60"
        >
          <p className="text-center text-muted-foreground text-sm font-mono mb-5 tracking-widest uppercase">
            Full Tech Stack
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {techBadges.map((badge, i) => (
              <motion.span
                key={badge}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.5 + i * 0.04 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-3 py-1.5 text-xs font-mono rounded-lg border transition-all duration-200 cursor-default"
                style={{
                  borderColor: i % 2 === 0 ? "rgba(59,130,246,0.35)" : "rgba(168,85,247,0.35)",
                  color: i % 2 === 0 ? "hsl(210, 100%, 70%)" : "hsl(270, 100%, 75%)",
                  background: i % 2 === 0 ? "rgba(59,130,246,0.08)" : "rgba(168,85,247,0.08)",
                }}
              >
                {badge}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* ML Pipeline Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-8 glass-card rounded-2xl p-6 border border-border/60"
        >
          <p className="text-center text-muted-foreground text-sm font-mono mb-6 tracking-widest uppercase">
            ML Pipeline
          </p>
          <div className="flex items-center justify-center gap-2 flex-wrap">
            {[
              { label: "Data Collection", icon: "📊" },
              { label: "EDA & Preprocessing", icon: "🔍" },
              { label: "Feature Engineering", icon: "⚙️" },
              { label: "Model Training", icon: "🧠" },
              { label: "Evaluation", icon: "📈" },
              { label: "Deployment", icon: "🚀" },
            ].map((step, i) => (
              <div key={step.label} className="flex items-center gap-2">
                <motion.div
                  whileHover={{ scale: 1.08, y: -3 }}
                  className="glass-card border border-primary/20 rounded-xl px-3 py-2.5 text-center min-w-[90px]"
                >
                  <div className="text-lg mb-1">{step.icon}</div>
                  <p className="text-xs text-muted-foreground leading-tight">{step.label}</p>
                </motion.div>
                {i < 5 && (
                  <div className="text-primary/50 font-mono text-lg hidden sm:block">→</div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
