import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, FileText, Download, Mail, ExternalLink } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import RadarRings from "./RadarRings";
import heroNeuralBg from "@/assets/hero-neural-bg.jpg";

const ROLES = ["Data Scientist", "ML Engineer", "AI Developer", "Computer Vision Engineer"];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (typing) {
      if (displayed.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayed(currentRole.slice(0, displayed.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, 40);
      } else {
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  const scrollToNext = () => {
    const el = document.getElementById("about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* BG image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroNeuralBg}
          alt="Neural network background"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      {/* Radar rings */}
      <RadarRings />

      {/* Content */}
      <div className="relative z-10 section-container text-center pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-primary/30 text-xs font-mono text-primary tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            Available for opportunities
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-5xl sm:text-7xl font-bold mb-4 leading-tight tracking-tight"
        >
          Govind{" "}
          <span className="gradient-text block sm:inline">Shaji Pillai</span>
        </motion.h1>

        {/* Typing role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl sm:text-2xl font-mono mb-6 h-10 flex items-center justify-center gap-1"
        >
          <span className="text-primary">&gt;</span>
          <span className="gradient-text font-semibold">{displayed}</span>
          <span className="w-0.5 h-7 bg-primary animate-blink ml-0.5" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Transforming data into intelligent solutions through{" "}
          <span className="text-primary font-medium">Machine Learning</span>,{" "}
          <span className="text-secondary font-medium">Computer Vision</span>, and{" "}
          <span className="text-primary font-medium">Cloud Technologies</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
          className="flex flex-wrap gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const el = document.getElementById("projects");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-glow px-7 py-3.5 rounded-xl text-primary-foreground font-semibold text-base flex items-center gap-2"
          >
            <ExternalLink size={18} />
            View Projects
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setResumeOpen(true)}
            className="btn-outline-glow px-7 py-3.5 rounded-xl font-semibold text-base flex items-center gap-2"
          >
            <FileText size={18} />
            View Resume
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-7 py-3.5 rounded-xl font-semibold text-base flex items-center gap-2 text-muted-foreground hover:text-foreground border border-border hover:border-secondary/50 hover:bg-secondary/10 transition-all duration-300"
          >
            <Mail size={18} />
            Contact Me
          </motion.button>
        </motion.div>

        {/* Floating stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-20 flex flex-wrap justify-center gap-8"
        >
          {[
            { value: "3+", label: "AI Projects" },
            { value: "85%", label: "Model Accuracy" },
            { value: "16", label: "IPL Seasons Analyzed" },
            { value: "B.Tech", label: "ECE Graduate" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -4 }}
              className="glass-card px-6 py-4 rounded-xl text-center min-w-[120px]"
            >
              <p className="text-2xl font-bold gradient-text">{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          onClick={scrollToNext}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="mt-16 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors mx-auto"
        >
          <span className="text-xs tracking-widest uppercase font-mono">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={18} />
          </motion.div>
        </motion.button>
      </div>
      {/* Resume Viewer Dialog */}
      <Dialog open={resumeOpen} onOpenChange={setResumeOpen}>
        <DialogContent className="max-w-4xl w-[95vw] h-[90vh] p-0 gap-0 glass-card border-primary/20">
          <DialogHeader className="p-4 pb-2 flex flex-row items-center justify-between">
            <DialogTitle className="gradient-text text-lg">Resume — Govind Shaji Pillai</DialogTitle>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-primary/20 text-primary hover:bg-primary/30 transition-colors mr-8"
            >
              <Download size={14} />
              Download
            </a>
          </DialogHeader>
          <div className="flex-1 overflow-hidden px-4 pb-4">
            <iframe
              src="/resume.pdf"
              className="w-full h-full rounded-lg border border-border/50"
              title="Resume"
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Hero;
