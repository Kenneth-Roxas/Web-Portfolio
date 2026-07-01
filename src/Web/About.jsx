import { motion } from "framer-motion";
import { useState } from "react";

import { FileCode, ChartColumnStacked, BrainCircuit } from 'lucide-react';

export default function About() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const roles = [
        {
            title: "Full Stack Web Developer",
            icon: <FileCode />,
            accent: "from-sky-400 to-blue-500",
            border: "border-sky-500/40",
            shadowColor: "rgba(56,189,248,0.25)",
            tagHover: "bg-sky-500/20 text-sky-300",
            tags: ["Html", "CSS", "JavaScript", "TailwindCSS", "React", "Laravel", "Node.js", "REST APIs", "Django", "Flask"],
            description:
                "I design and build full-stack web applications from the ground up crafting responsive UIs and seamless database integrations that are both functional and polished.",
            highlights: [
                "Responsive & accessible UI",
                "RESTful API development",
                "Database design & optimization",
                "Authentication & deployment",
            ],
        },
        {
            title: "Data Analyst",
            icon: <ChartColumnStacked />,
            accent: "from-violet-400 to-purple-500",
            border: "border-violet-500/40",
            shadowColor: "rgba(167,139,250,0.25)",
            tagHover: "bg-violet-500/20 text-violet-300",
            tags: ["Python", "Pandas", "Power BI", "R"],
            description:
                "I turn raw, messy data into meaningful stories. Through exploratory analysis, statistical methods, and compelling visualizations, I uncover the patterns that drives user to create a better decisions.",
            highlights: [
                "Exploratory data analysis",
                "Interactive dashboards",
                "Statistical modeling",
                "Data cleaning & pipelines",
            ],
        },
        {
            title: "ML Engineer",
            icon: <BrainCircuit />,
            accent: "from-emerald-400 to-teal-500",
            border: "border-emerald-500/40",
            shadowColor: "rgba(52,211,153,0.25)",
            tagHover: "bg-emerald-500/20 text-emerald-300",
            tags: ["scikit-learn", "TensorFlow", "PyTorch", "NLP", "Computer Vision", "Roboflow"],
            description:
                "I build and train machine learning models that enable computers to learn from data such as Numerical, Categorical, and Image Datasets and make intelligent predictions covering the full ML lifecycle from preprocessing to deployment, and integrating it in web application.",
            highlights: [
                "Supervised & Unsupervised Learning",
                "Deep Learning",
                "Model Training & Evaluation",
                "Feature Engineering",
                "ML Model Deployment",
            ],
        },
    ];

    return (
        <section id="2" className="min-h-[90vh] bg-slate-800/90 max-w-full overflow-x-hidden py-14 px-4 md:px-16">
            <motion.div
                className="text-center mb-14"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-2">
                    What I Do
                </h2>
                <div className="mx-auto w-24 h-0.5 bg-linear-to-r from-sky-400 to-violet-500 rounded-full mb-4" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-full mx-auto -mt-8">
                {roles.map((role, i) => {
                    const isHovered = hoveredIndex === i;
                    const isSibling = hoveredIndex !== null && !isHovered;

                    return (
                        <motion.div
                            key={role.title}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
                            viewport={{ once: true }}
                            animate={{
                                filter: isSibling ? "blur(4px)" : "blur(0px)",
                                opacity: isSibling ? 0.45 : 1,
                                scale: isHovered ? 1.04 : isSibling ? 0.97 : 1,
                                boxShadow: isHovered
                                    ? `0 25px 50px -12px ${role.shadowColor}`
                                    : "0 0 0px transparent",
                            }}
                            transition={{ duration: 0.35, ease: "easeOut" }}
                            onHoverStart={() => setHoveredIndex(i)}
                            onHoverEnd={() => setHoveredIndex(null)}
                            className={`group relative rounded-2xl border ${role.border} bg-slate-900/60 backdrop-blur-sm p-7 cursor-default`}
                        >
                            {/* Top accent line */}
                            <div className={`absolute top-0 left-0 right-0 h-0.5 rounded-b-full bg-linear-to-r ${role.accent} transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`} />

                            {/* Icon + Title */}
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-3xl text-sky-400">{role.icon}</span>
                                <h3 className="text-white font-bold text-lg leading-tight">{role.title}</h3>
                            </div>

                            {/* Description */}
                            <p className={`text-sm leading-relaxed mb-5 transition-colors duration-300 ${isHovered ? "text-slate-200" : "text-slate-400"}`}>
                                {role.description}
                            </p>

                            {/* Highlights */}
                            <ul className="space-y-2 mb-6">
                                {role.highlights.map((h) => (
                                    <li key={h} className={`flex items-center gap-2 text-sm transition-colors duration-300 ${isHovered ? "text-slate-200" : "text-slate-400"}`}>
                                        <span className={`w-1.5 h-1.5 rounded-full bg-linear-to-br ${role.accent} shrink-0`} />
                                        {h}
                                    </li>
                                ))}
                            </ul>

                            {/* Tech Tags */}
                            <div className="flex flex-wrap gap-2">
                                {role.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className={`text-xs px-2.5 py-1 rounded-full border border-slate-600 transition-all duration-300 ${isHovered ? role.tagHover : "text-slate-500"}`}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}