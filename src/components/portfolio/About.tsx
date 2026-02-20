import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Code, Brain, Cloud, Database, BarChart3 } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

const highlights = [
  {
    icon: GraduationCap,
    title: "B.Tech Graduate",
    desc: "Electronics & Computer Engineering, 2024",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Brain,
    title: "ML Engineer",
    desc: "Model building, EDA, NLP, Computer Vision",
    color: "text-secondary",
    bg: "bg-secondary/10",
  },
  {
    icon: Code,
    title: "Python Expert",
    desc: "Python, SQL, ML pipelines & automation",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Cloud,
    title: "Cloud Technologies",
    desc: "GCP, Docker, Kubernetes deployments",
    color: "text-secondary",
    bg: "bg-secondary/10",
  },
  {
    icon: Database,
    title: "Data Analytics",
    desc: "Power BI, DAX, data-driven insights",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: BarChart3,
    title: "Project Management",
    desc: "Currently: Project Management Trainee",
    color: "text-secondary",
    bg: "bg-secondary/10",
  },
];

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-28" ref={ref}>
      {/* Ambient glow */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="section-container">
        {/* Section header */}
        <motion.div
          custom={0}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">
            // about me
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            The Mind Behind{" "}
            <span className="gradient-text">the Machine</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Bridging the gap between raw data and intelligent systems.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text side */}
          <motion.div
            custom={1}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="space-y-6"
          >
            <div className="glass-card p-6 rounded-2xl border border-primary/20">
              <p className="text-foreground/90 leading-relaxed text-base">
                I'm a <span className="text-primary font-semibold">Data Scientist & ML Engineer</span> with a
                B.Tech in Electronics & Computer Engineering (2024). My passion lies in
                building scalable AI-driven solutions that solve real-world problems.
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-secondary/20">
              <p className="text-foreground/90 leading-relaxed text-base">
                With strong foundations in <span className="text-secondary font-semibold">Python, SQL, and Machine Learning</span>,
                I specialize in ML model building, Exploratory Data Analysis, NLP, and Computer Vision.
                Currently working as a <span className="text-primary font-semibold">Project Management Trainee</span>,
                I'm focused on bringing AI innovation to enterprise scale.
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl">
              <p className="font-mono text-xs text-muted-foreground mb-3 uppercase tracking-widest">
                Core focus areas
              </p>
              <div className="flex flex-wrap gap-2">
                {["Machine Learning", "Computer Vision", "NLP", "EDA", "Cloud AI", "Data Analytics", "Deep Learning"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full border border-primary/30 text-primary bg-primary/5 font-mono"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </motion.div>

          {/* Cards grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i + 2}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeInUp}
                whileHover={{ scale: 1.03, y: -4 }}
                className="glass-card p-5 rounded-xl border border-border/60 group cursor-default"
              >
                <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  <item.icon size={20} className={item.color} />
                </div>
                <p className={`font-semibold text-sm mb-1 ${item.color}`}>{item.title}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
