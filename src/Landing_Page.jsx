import { motion } from "motion/react";
import Snowfall from "react-snowfall";
import { Link } from "react-router-dom";

function LandingPage() {
    return (
        <section className="bg-slate-900 min-h-screen flex flex-col items-center justify-center px-10 py-12 relative overflow-hidden">
            <Snowfall
                color="white"
                snowflakeCount={200}
                speed={[0.5, 3.0]}
                wind={[-0.5, 2.0]}

            />
            {/* Background decorative blobs */}
            <motion.div
                className="absolute -top-20 -left-20 w-72 h-72 bg-sky-500 opacity-10 rounded-full blur-3xl pointer-events-none"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            />
            <motion.div
                className="absolute -bottom-15 -right-15 w-60 h-60 bg-indigo-500 opacity-10 rounded-full blur-3xl pointer-events-none"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.1 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            />

            {/* Card */}
            <motion.div
                className="flex flex-col md:flex-row items-center gap-12 bg-white/5 border border-white/10 rounded-3xl px-10 py-12 max-w-3xl w-full backdrop-blur-2xl shadow-2xl"
                initial={{ opacity: 0, x: -40, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            >
                <motion.div
                    className="shrink-0 flex flex-col items-center"
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
                >
                    <div className="w-55 h-55 rounded-2xl border-4 border-slate-400 shadow-xl overflow-hidden bg-slate-700">
                        <img
                            src="Kenneth.jpg"
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </motion.div>

                <div className="flex-1 text-center md:text-left">
                    <motion.p
                        className="text-sky-400 text-xs uppercase tracking-widest font-mono mb-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        Hello, I'm
                    </motion.p>

                    <motion.h1
                        className="text-slate-100 text-4xl font-bold leading-tight tracking-tight mb-1"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.55 }}
                    >
                        Kenneth Tating Roxas
                    </motion.h1>

                    <motion.p
                        className="text-indigo-400 font-mono text-sm tracking-tight mb-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                    >
                        Full Stack Web Developer & Data Analytics
                    </motion.p>

                    <motion.div
                        className="w-20 h-0.5 bg-linear-to-r from-sky-400 to-indigo-500 rounded-full mb-4 mx-auto md:mx-0"
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={{ scaleX: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.85 }}
                        style={{ originX: 0 }}
                    />

                    <motion.p
                        className="text-slate-400 text-sm leading-relaxed max-w-sm mx-auto md:mx-0"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1 }}
                    >
                        Welcome! Thank you for visiting my web portfolio. I'm currently a student at{" "}
                        <span className="text-sky-400 font-medium">Catanduanes State University (CSU)</span>,
                        expecting to graduate this{" "}
                        <span className="text-indigo-400 font-medium">June 2026</span>.
                        This is my web portfolio and feel free to look around, explore, and know my projects. <br />
                    </motion.p>
                </div>
            </motion.div>

            {/* Bottom Visit Button */}
            <motion.div
                className="mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.15 }}
            >
                <motion.Link
                    to="/web-portfolio"
                    className="px-8 py-3 bg-[#6A5ACD] text-white font-semibold rounded-full shadow-lg shadow-[#2D4F7C] tracking-wide"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 18 }}
                >
                    Visit
                </motion.Link>
            </motion.div>

        </section>
    );
}

export default LandingPage;