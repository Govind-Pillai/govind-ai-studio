import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Send, MapPin } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "pillaigovind02@gmail.com",
    href: "mailto:pillaigovind02@gmail.com",
    color: "primary",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7506120883",
    href: "tel:+917506120883",
    color: "secondary",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "govind-shaji-pillai",
    href: "https://linkedin.com/in/govind-shaji-pillai",
    color: "primary",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "govindshaji",
    href: "https://github.com/govindshaji",
    color: "secondary",
  },
];

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate send
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-28" ref={ref}>
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(168,85,247,0.08) 0%, transparent 60%)",
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
            // contact
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Ready to collaborate on AI/ML projects or discuss opportunities? Reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            <div className="glass-card rounded-2xl p-6 border border-border/60 mb-6">
              <div className="flex items-center gap-3 mb-3">
                <MapPin size={16} className="text-primary" />
                <span className="text-muted-foreground text-sm">Location</span>
              </div>
              <p className="text-foreground font-medium">India 🇮🇳</p>
              <p className="text-muted-foreground text-sm mt-1">Open to remote & hybrid roles worldwide</p>
            </div>

            {contactLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                whileHover={{ scale: 1.02, x: 4 }}
                className={`glass-card flex items-center gap-4 p-5 rounded-xl border transition-all duration-300 group ${
                  link.color === "primary"
                    ? "border-primary/20 hover:border-primary/50"
                    : "border-secondary/20 hover:border-secondary/50"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform ${
                    link.color === "primary"
                      ? "bg-primary/15 border border-primary/30"
                      : "bg-secondary/15 border border-secondary/30"
                  }`}
                >
                  <link.icon
                    size={18}
                    className={link.color === "primary" ? "text-primary" : "text-secondary"}
                  />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-mono mb-0.5 uppercase tracking-widest">
                    {link.label}
                  </p>
                  <p
                    className={`font-medium text-sm ${
                      link.color === "primary" ? "text-primary" : "text-secondary"
                    }`}
                  >
                    {link.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card rounded-2xl p-7 border border-border/60"
          >
            <h3 className="font-bold text-foreground mb-6 text-lg">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-mono text-muted-foreground mb-2 uppercase tracking-widest">
                  Name
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  required
                  className="w-full bg-muted/40 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-muted-foreground mb-2 uppercase tracking-widest">
                  Email
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com"
                  required
                  className="w-full bg-muted/40 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-muted-foreground mb-2 uppercase tracking-widest">
                  Message
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project or opportunity..."
                  required
                  rows={5}
                  className="w-full bg-muted/40 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-all resize-none"
                />
              </div>

              {sent && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="px-4 py-3 rounded-xl bg-primary/15 border border-primary/30 text-primary text-sm text-center"
                >
                  ✅ Message sent! I'll get back to you soon.
                </motion.div>
              )}

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="btn-glow w-full py-3.5 rounded-xl text-primary-foreground font-semibold flex items-center justify-center gap-2"
              >
                <Send size={17} />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-20 pt-10 border-t border-border/40"
        >
          <p className="text-muted-foreground text-sm">
            Designed & Built by{" "}
            <span className="gradient-text font-semibold">Govind Shaji Pillai</span>
          </p>
          <p className="text-muted-foreground/50 text-xs mt-1 font-mono">
            Data Scientist · ML Engineer · AI Enthusiast
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
