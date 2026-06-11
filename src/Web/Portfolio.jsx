import { motion } from "framer-motion";
import Navbar from "../component/NavBar";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FileCode, ChartColumnStacked, BrainCircuit } from 'lucide-react';

function Head() {
    return (
        <>
            <section id="1" className="h-screen md:h-[95vh] max-w-full bg-slate-800">
                <div className="absolute inset-0 pointer-events-none z-10">
                    <div className="abosulte top-3 left-2 -translate-x-1/2 w-125 h-125 bg-blue-500/20 blur-3xl rounded=full"></div>
                    <div className="abosulte bottom-2 right-4 translate-x-1/12 w-125 h-125 bg-blue-500/20 blur-3xl rounded=full"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-0 pt-18 z-50">
                    <motion.div
                        className="order-1 md:order-2 mt-15 flex items-center justify-center"
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <div className="w-50 h-50 md:w-[60vh] md:h-[60vh] rounded-full border-2 border-slate-400 shadow-xl overflow-hidden md:ml-10">
                            <img
                                src="Kenneth.jpg"
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>

                    <div className="order-1 md:order-2 text-center mt-8 md:mt-14 md:text-left md:-ml-8">
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            {/* <h1 className="text-4xl">Hello, I'm </h1> */}
                            <h1 className="text-2xl md:text-4xl text-white font-extrabold">Hello, I'm <span className="text-sky-600">Kenneth T. Roxas</span></h1>
                            <p className="text-gray-300 text-xs md:text-base p-2 pb-0 md:p-0 font-bold">Full Stack Web Developer · Data Analytics · ML Developer</p>
                        </motion.div>
                        <motion.div
                            className="w-78 md:w-60 h-0.5 bg-linear-to-r from-indigo-400 to-sky-500 rounded-full mb-4 mx-auto md:mx-0"
                            initial={{ scaleX: 0, opacity: 0 }}
                            animate={{ scaleX: 1, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.85 }}
                            viewport={{ once: true }}
                            style={{ originX: 0 }}
                        />

                        <motion.p
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            <p className="text-slate-300 texr-xs md:text-base mt-2 ml-2 mr-2 md:mr-0 md:ml-0 md:max-w-xl text-center md:text-left">
                                I build responsive and functional web applications, analyze and visualize data to reveal valuable insights using graphs and tools, and make Machine Learning (ML) models that helps computer to learn using data.
                            </p>
                        </motion.p>


                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="flex gap-2 md:w-100 mx-auto md:mx-0 mt-4">

                            {/* Contact Me - slide up fill */}
                            <button className="relative overflow-hidden border border-sky-400 text-sky-400 shadow-sky-400 shadow px-4 py-2 font-semibold rounded-2xl group flex-1">
                                <span className="absolute inset-0 bg-sky-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                                    Contact Me
                                </span>
                            </button>

                            {/* Download CV */}
                            <button className="relative overflow-hidden border border-yellow-400 text-yellow-400 shadow-yellow-400 shadow px-4 py-2 font-semibold rounded-2xl group flex-1">
                                <span className="absolute inset-0 bg-yellow-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                                    Download CV
                                </span>
                            </button>

                            <button className="relative overflow-hidden border border-red-400 text-red-400 shadow-red-400 shadow px-4 py-2 font-semibold rounded-2xl group flex-1">
                                <span className="absolute inset-0 bg-red-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                                    Resume
                                </span>
                            </button>

                        </motion.div>
                    </div>
                </div>
            </section>

        </>
    )
}

function About() {
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
            title: "Data Analytics",
            icon: <ChartColumnStacked />,
            accent: "from-violet-400 to-purple-500",
            border: "border-violet-500/40",
            shadowColor: "rgba(167,139,250,0.25)",
            tagHover: "bg-violet-500/20 text-violet-300",
            tags: ["Python", "Pandas", "Power BI", "Ruby(R)"],
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
                "Supervised & unsupervised learning",
                "Model training & evaluation",
                "Feature engineering",
                "ML model deployment",
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
                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-2">
                    What I <span className="text-sky-400">Do</span>
                </h2>
                <div className="mx-auto w-24 h-0.5 bg-linear-to-r from-sky-400 to-violet-500 rounded-full mb-4" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto -mt-10">
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
                            <div className={`absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl bg-linear-to-r ${role.accent} transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`} />

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


export default function Portfolio() {
    return (
        <div className="w-full min-h-screen overflow-x-hidden">
            <Navbar />
            <main className="w-full overflow-x-hidden">
                <Head />
                <About />
            </main>
        </div>
    )
}