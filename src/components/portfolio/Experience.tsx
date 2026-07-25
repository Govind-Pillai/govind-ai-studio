import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

interface ExperienceItem {
  id: number;
  company: string;
  role: string;
  location?: string;
  period: string;
  bullets: string[];
  accentColor: "primary" | "secondary";
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    company: "Techstalwarts",
    role: "Project Management Trainee",
    location: "Mumbai, India",
    period: "Jan 2025 – Present",
    bullets: [
      "Plan, track, and report on the delivery of digital solution projects spanning web, mobile, CRM, ERP, and AI-driven products for multiple concurrent clients, acting as the central point of coordination.",
      "Serve as the primary liaison between cross-functional technical teams (development, QA, design) and business stakeholders, ensuring on-time delivery and alignment with scope.",
      "Author and maintain comprehensive project documentation, including timelines, resource allocation charts, risk registers, and weekly status reports circulated to leadership.",
      "Monitor KPIs and delivery metrics across active projects, identifying bottlenecks early and proposing process improvements that increased overall delivery efficiency by 15%.",
      "Facilitate sprint planning, daily stand-ups, backlog refinement, sprint reviews, and retrospectives to steadily improve team velocity and delivery predictability."
    ],
    accentColor: "primary",
  },
  {
    id: 2,
    company: "GetKredit",
    role: "Project Management & Business Analysis",
    location: "Consultant, Client Engagement",
    period: "Jan 2025 – Present (Ongoing)",
    bullets: [
      "Drive end-to-end project management for GetKredit, a real estate CRM and financing platform, coordinating closely across product, engineering, and client stakeholders.",
      "Author and iterate on BRDs, PRDs, and FSDs covering core modules including Approved Project Finance (APF), Dashboard, CIBIL profiling, and Accounts & Billing.",
      "Maintain Jira boards for sprint tracking, backlog grooming, and progress visibility across roughly 10 sprints and 85+ submodules, tracked via a structured seven-sheet project tracker.",
      "Conduct structured gap analysis to align product requirements with implementation, incorporating iterative feedback from multiple client-side reviewers.",
      "Lead requirement definition for telesales/tele-calling feature, including lead assignment workflows, Mcube telephony integration, in-platform notification rules, and escalation workflows."
    ],
    accentColor: "secondary",
  },
  {
    id: 3,
    company: "Cstore ERP",
    role: "Project Management Trainee",
    period: "Apr 2025 – Jan 2026",
    bullets: [
      "Managed the Cstore ERP project overseeing the full project lifecycle from initial planning and requirement finalization through completion and go-live.",
      "Set up and maintained Jira boards for task tracking, sprint planning, and progress visibility, ensuring transparency for internal delivery teams and client stakeholders.",
      "Performed structured gap analysis to surface mismatches between business expectations and system capabilities, informing corrective action plans.",
      "Coordinated closely with development and QA teams to prioritize defect resolution and feature enhancements ahead of key delivery milestones."
    ],
    accentColor: "primary",
  },
  {
    id: 4,
    company: "Centrum Capital",
    role: "Project Management Trainee",
    period: "Mar 2025 – Sep 2025",
    bullets: [
      "Led end-to-end project management from initiation to completion, driving delivery of the Centrum Fixed Deposit & Recurring Deposit digital platform.",
      "Created and maintained Jira boards to track sprints, backlog items, and task progress across the full project lifecycle, from discovery through launch.",
      "Conducted gap analysis to identify process and requirement mismatches, aligning final deliverables with stakeholder expectations.",
      "Collaborated with cross-functional engineering and design teams to ensure timely resolution of open issues ahead of platform launch."
    ],
    accentColor: "secondary",
  },
];

const Experience = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative py-16 section-bg-experience w-[90%] mx-auto" ref={ref}>
      {/* Ambient glow */}
      <div
        className="absolute left-1/2 -translate-x-1/2 top-1/3 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(168,85,247,0.05) 0%, transparent 70%)",
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
            // experience
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A history of managing delivery, analyzing requirements, and coordinating cross-functional teams.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical timeline line */}
          <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary/50 via-secondary/50 to-border/30 -translate-x-1/2 hidden md:block" />
          <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-border/40 md:hidden" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={exp.id}
                  className={`flex flex-col md:flex-row relative items-stretch ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline point */}
                  <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 z-10 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: idx * 0.15 }}
                      className={`w-6 h-6 rounded-full border-4 bg-background flex items-center justify-center ${
                        exp.accentColor === "primary" ? "border-primary" : "border-secondary"
                      }`}
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-full ${
                          exp.accentColor === "primary" ? "bg-primary animate-pulse" : "bg-secondary animate-pulse"
                        }`}
                      />
                    </motion.div>
                  </div>

                  {/* Left spacer for md screens */}
                  <div className="w-full md:w-1/2 hidden md:block" />

                  {/* Experience Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: idx * 0.15 }}
                    whileHover={{ y: -4 }}
                    className={`w-full md:w-[calc(50%-2rem)] ml-8 md:ml-0 glass-card rounded-2xl p-6 border ${
                      exp.accentColor === "primary"
                        ? "border-primary/20 hover:border-primary/40"
                        : "border-secondary/20 hover:border-secondary/40"
                    } relative`}
                    style={{
                      background:
                        exp.accentColor === "primary"
                          ? "linear-gradient(135deg, rgba(59,130,246,0.08) 0%, rgba(59,130,246,0.01) 100%), rgba(12, 18, 45, 0.6)"
                          : "linear-gradient(135deg, rgba(168,85,247,0.08) 0%, rgba(168,85,247,0.01) 100%), rgba(12, 18, 45, 0.6)",
                    }}
                  >
                    {/* Header info */}
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-4">
                      <div>
                        <h3 className="font-bold text-lg text-foreground flex items-center gap-2">
                          <Briefcase
                            size={16}
                            className={exp.accentColor === "primary" ? "text-primary" : "text-secondary"}
                          />
                          {exp.role}
                        </h3>
                        <p
                          className={`font-semibold text-sm ${
                            exp.accentColor === "primary" ? "text-primary" : "text-secondary"
                          }`}
                        >
                          {exp.company}
                        </p>
                      </div>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted/50 border border-border/50 text-xs font-mono text-muted-foreground">
                        <Calendar size={12} />
                        {exp.period}
                      </span>
                    </div>

                    {exp.location && (
                      <div className="flex items-center gap-1 text-xs text-muted-foreground mb-4">
                        <MapPin size={12} />
                        <span>{exp.location}</span>
                      </div>
                    )}

                    {/* Bullet points */}
                    <ul className="space-y-2.5">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                          <CheckCircle2
                            size={14}
                            className={`mt-1 shrink-0 ${
                              exp.accentColor === "primary" ? "text-primary/70" : "text-secondary/70"
                            }`}
                          />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
