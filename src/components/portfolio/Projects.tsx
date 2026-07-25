import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, Bot, FileText, Languages, BarChart3, Utensils } from "lucide-react";

const projects = [
  {
    id: 1,
    icon: Bot,
    title: "PM AI Agent — Multi-Agent Project Management Assistant",
    category: "AI / Multi-Agent",
    description:
      "A local-first multi-agent AI assistant using LangChain to orchestrate four specialized agents (Planner, Scheduler, Reporter, and Comms) handling distinct PM workflows.",
    tech: ["LangChain", "Llama.cpp", "ChromaDB", "RAG", "SQLite", "Streamlit"],
    highlights: ["4 Specialized PM Agents", "Local-first RAG Pipeline", "Offline Conversation Storage"],
    accentColor: "primary",
    gradientFrom: "rgba(59,130,246,0.15)",
    gradientTo: "rgba(59,130,246,0.03)",
    borderColor: "border-primary/30",
    tagColor: "text-primary bg-primary/10 border-primary/30",
    github: "https://github.com/Govind-Pillai",
  },
  {
    id: 2,
    icon: FileText,
    title: "Financial Document Management System with RAG",
    category: "AI / RAG",
    description:
      "Secure document management platform featuring FastAPI JWT-based authentication, role-based access control, and a RAG pipeline utilizing Qdrant vector store and BGE embeddings.",
    tech: ["FastAPI", "Qdrant", "BGE Embeddings", "JWT", "RBAC", "Streamlit"],
    highlights: ["Role-Based Access Control", "Semantic Document Search", "FastAPI Secure Endpoints"],
    accentColor: "secondary",
    gradientFrom: "rgba(168,85,247,0.15)",
    gradientTo: "rgba(168,85,247,0.03)",
    borderColor: "border-secondary/30",
    tagColor: "text-secondary bg-secondary/10 border-secondary/30",
    github: "https://github.com/Govind-Pillai",
  },
  {
    id: 3,
    icon: Languages,
    title: "Language Identification & Emotion Detection Web App",
    category: "Deep Learning / Web App",
    description:
      "Full-stack Django and HTMX web application for real-time multilingual text classification and emotion detection powered by a fine-tuned XLM-RoBERTa transformer model.",
    tech: ["Django", "HTMX", "XLM-RoBERTa", "Python", "Transformers"],
    highlights: ["92% Accuracy", "100+ Languages Supported", "Real-time No-Reload UI"],
    accentColor: "primary",
    gradientFrom: "rgba(59,130,246,0.15)",
    gradientTo: "rgba(59,130,246,0.03)",
    borderColor: "border-primary/30",
    tagColor: "text-primary bg-primary/10 border-primary/30",
    github: "https://github.com/Govind-Pillai",
  },
  {
    id: 4,
    icon: BarChart3,
    title: "IPL Data Analysis Platform",
    category: "Data Science / EDA",
    description:
      "In-depth exploratory data analysis on 16 seasons of IPL data, revealing patterns in team performance, toss impact, venue advantages, and generating features for auction strategy.",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    highlights: ["16 Seasons Analyzed", "20+ Visualizations & Heatmaps", "Auction Recommendation Engine"],
    accentColor: "secondary",
    gradientFrom: "rgba(168,85,247,0.15)",
    gradientTo: "rgba(168,85,247,0.03)",
    borderColor: "border-secondary/30",
    tagColor: "text-secondary bg-secondary/10 border-secondary/30",
    github: "https://github.com/Govind-Pillai/IPL-Data_Analysis",
  },
  {
    id: 5,
    icon: Utensils,
    title: "Food Image Recognition with Recipe Generation",
    category: "Computer Vision / NLP",
    description:
      "An end-to-end deep learning system combining an EfficientNet-B1 image classifier with a T5 transformer model to dynamically generate custom recipes from uploaded food photos.",
    tech: ["TensorFlow", "EfficientNet-B1", "T5 Transformer", "Flask", "REST API"],
    highlights: ["85% Classification Accuracy", "T5 Recipe Generation", "Drag-and-Drop Web Interface"],
    accentColor: "primary",
    gradientFrom: "rgba(59,130,246,0.15)",
    gradientTo: "rgba(59,130,246,0.03)",
    borderColor: "border-primary/30",
    tagColor: "text-primary bg-primary/10 border-primary/30",
    github: "https://github.com/Govind-Pillai",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative py-16 section-bg-projects w-[90%] mx-auto" ref={ref}>
      {/* Ambient purple glow */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-secondary font-mono text-sm tracking-widest uppercase mb-3">
            // projects
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Featured{" "}
            <span className="gradient-text">Work</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Real-world AI/ML solutions built with cutting-edge technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ scale: 1.02, y: -8 }}
              className={`glass-card rounded-2xl border ${project.borderColor} overflow-hidden group cursor-default flex flex-col`}
              style={{
                background: `linear-gradient(135deg, ${project.gradientFrom} 0%, ${project.gradientTo} 100%), rgba(12, 18, 45, 0.6)`,
              }}
            >
              {/* Card header */}
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform ${project.accentColor === "primary"
                      ? "bg-primary/15 border border-primary/30"
                      : "bg-secondary/15 border border-secondary/30"
                      }`}
                  >
                    <project.icon
                      size={22}
                      className={
                        project.accentColor === "primary"
                          ? "text-primary"
                          : "text-secondary"
                      }
                    />
                  </div>
                  <span
                    className={`text-xs font-mono px-2.5 py-1 rounded-full border ${project.tagColor}`}
                  >
                    {project.category}
                  </span>
                </div>

                <h3 className="font-bold text-lg text-foreground mb-3 leading-snug">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="px-6 pb-4">
                <div className="flex flex-col gap-1.5">
                  {project.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2">
                      <div
                        className={`w-1.5 h-1.5 rounded-full ${project.accentColor === "primary"
                          ? "bg-primary"
                          : "bg-secondary"
                          }`}
                      />
                      <span className="text-xs text-muted-foreground">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech stack */}
              <div className="px-6 pb-4 flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-0.5 rounded font-mono bg-muted/50 text-muted-foreground border border-border/50"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="mt-auto px-6 pb-6">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold border transition-all duration-300 ${project.accentColor === "primary"
                    ? "border-primary/50 text-primary hover:bg-primary/15 hover:border-primary"
                    : "border-secondary/50 text-secondary hover:bg-secondary/15 hover:border-secondary"
                    }`}
                >
                  <Github size={16} />
                  View on GitHub
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
