import { motion } from "framer-motion";

export default function Home() {
    return (
        <>
            <section id="1" className="relative h-[100dvh] md:h-[95vh] w-full bg-slate-800">
                <div className="absolute inset-0 pointer-events-none z-10">
                    <div className="absolute top-3 left-2 -translate-x-1/2 w-125 h-125 bg-blue-500/20 blur-3xl rounded-full"></div>
                    <div className="absolute bottom-2 right-4 translate-x-1/12 w-125 h-125 bg-blue-500/20 blur-3xl rounded-full"></div>
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
                                src="Grad_Pic.jpg"
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
                            <p className="text-gray-300 text-xs md:text-base p-2 pb-0 md:p-0 font-bold">Full Stack Web Developer · Data Analyst · ML Developer</p>
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
                            className="mt-4 md:w-100 mx-auto md:mx-0"
                        >
                            {/* Mobile: Row 1 — Contact Me + Download CV */}
                            <div className="flex gap-2 md:hidden px-12">
                                <button className="relative overflow-hidden border border-sky-400 text-sky-400 shadow-sky-400 shadow px-4 py-2 font-semibold rounded-2xl group flex-1">
                                    <span className="absolute inset-0 bg-sky-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                                    <span className="relative z-10 group-hover:text-white transition-colors duration-300">Contact Me</span>
                                </button>
                                <button className="relative overflow-hidden border border-yellow-400 text-yellow-400 shadow-yellow-400 shadow px-4 py-2 font-semibold rounded-2xl group flex-1">
                                    <span className="absolute inset-0 bg-yellow-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                                    <span className="relative z-10 group-hover:text-white transition-colors duration-300">Download CV</span>
                                </button>
                            </div>

                            {/* Mobile: Row 2 — Resume (centered, half width) */}
                            <div className="flex mt-2 md:hidden justify-center px-12">
                                <button className="relative overflow-hidden border border-red-400 text-red-400 shadow-red-400 shadow px-4 py-2 font-semibold rounded-2xl group w-1/2">
                                    <span className="absolute inset-0 bg-red-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                                    <span className="relative z-10 group-hover:text-white transition-colors duration-300">Resume</span>
                                </button>
                            </div>

                            {/* Desktop: All 3 in one row */}
                            <div className="hidden md:flex gap-2 ">
                                <button className="relative overflow-hidden border border-sky-400 text-sky-400 shadow-sky-400 shadow px-4 py-2 font-semibold rounded-2xl group flex-1">
                                    <span className="absolute inset-0 bg-sky-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                                    <span className="relative z-10 group-hover:text-white transition-colors duration-300">Contact Me</span>
                                </button>
                                <button className="relative overflow-hidden border border-yellow-400 text-yellow-400 shadow-yellow-400 shadow px-4 py-2 font-semibold rounded-2xl group flex-1">
                                    <span className="absolute inset-0 bg-yellow-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                                    <span className="relative z-10 group-hover:text-white transition-colors duration-300">Download CV</span>
                                </button>
                                <button className="relative overflow-hidden border border-red-400 text-red-400 shadow-red-400 shadow px-4 py-2 font-semibold rounded-2xl group flex-1">
                                    <span className="absolute inset-0 bg-red-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                                    <span className="relative z-10 group-hover:text-white transition-colors duration-300">Resume</span>
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

        </>
    )
}