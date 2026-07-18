import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Projects_Certs() {
    const [cert, setCert] = useState(false);
    const swiperRef = useRef(null);

    const project = [
        {
            title: "LanMar Bakeshoppe",
            subtitle: "E-Commerce Web Application",
            description:
                "A full-featured online storefront for a local bakeshop, handling product catalogs, orders, and real-time inventory updates.",
            tech: ["Laravel 11", "Livewire 3", "TailwindCSS", "MySQL"],
            border_color: "border-[#9D6638]",
            shadow_color: "shadow-[#9D6638]",
            sub_color: "text-[#E4D6A9]"
        },
        {
            title: "Sangguniang Kabataan Profiling and Management System",
            subtitle: "Web Application",
            description:
                "Helps Sangguniang Kabataan (SK) officials conduct youth profiling in their barangay with far less manual effort.",
            tech: ["Laravel 11", "Livewire 3", "MySQL"],
            border_color: "border-[#618764]",
            shadow_color: "shadow-[#618764]",
            sub_color: "text-[#A1BC98]"
        },
        {
            title: "Tropical Cyclone Forecasting Evacuee System (TCFES)",
            subtitle: "Web Application & Machine Learning",
            description:
                "Built to support MSWDO, MDRRMO, and PAGASA in disaster preparedness, forecasting evacuee counts using Random Forest Regression.",
            tech: ["Scikit-Learn", "ReactJS", "Django", "Jupyter Notebook", "TailwindCSS", "MySQL", "REST APIs"],
            pic: "thesis.png",
            border_color: "border-sky-700",
            shadow_color: "shadow-sky-400",
            sub_color: "text-sky-400"
        },
        {
            title: "LOLCODE",
            subtitle: "Interpreter Inspired by Memes",
            description:
                "A LOLCODE interpreter written in Python that reads and executes code line by line.",
            tech: ["Python", "Tkinter"],
            pic: "LOLCODE.png",
            border_color: "border-slate-400",
            shadow_color: "shadow-slate-300",
            sub_color: "text-slate-400"
        },
        {
            title: "Manila Traffic Incident Dashboard",
            subtitle: "Data Visualization",
            description: "A interactive dashboard that use Metro Manila Traffic Incidents from Kaggle. The dashboad contains multiple graphs that give insight of causes, weather, type of vehicle and accident, where accidents happen, frequency of accident in City.",
            tech: ["Plotly", "Streamlit"],
            pic: "incident.png",
            border_color: "border-cyan-400",
            shadow_color: "shadow-cyan-300",
            sub_color: "text-cyan-400"
        },
        {
            title: "Student Productivity & Behavior Dashboard",
            subtitle: "Data Visualization",
            description: "A interactive dashboard that use 20,000 Students Productivity & Behavior in School, the datasets used is from Kaggle. It contains student spending time in studying and gadgets, student performance, demographic, age, and attendance",
            tech: ["TailwindCSS", "Dash", "Plotly"],
            pic: "1.png",
            border_color: "border-[#FFEED6]",
            shadow_color: "shadow-[#FFEED6]",
            sub_color: "text-[#FFEED6]"
        },
        {
            title: "Federated Learning",
            subtitle: "Machine Learning",
            description: "A federated learning system for water potability prediction, using 2 client nodes and 1 central server to collaboratively train a model without sharing raw data.",
            tech: ["React", "TailwindCSS", "Python", "Jupyter Notebook", "Rest APIs"],
            border_color: "border-[#558467]",
            shadow_color: "shadow-[#558467]",
            sub_color: "text-[#558467]",
        }
    ];

    return (
        <section
            id="3"
            className="relative min-h-[70vh] overflow-hidden bg-linear-to-b from-slate-800/90 to-slate-700/90 pt-2 pb-5 flex flex-col items-center"
        >
            {/* Ambient glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-lg h-lg bg-sky-500/10 blur-3xl rounded-full" />
                <div className="absolute bottom-0 right-0 w-72 h-72 bg-emerald-400/10 blur-3xl rounded-full" />
            </div>

            {/* Toggle */}
            <div
                role="tablist"
                className="relative z-10 w-64 h-12 bg-slate-800/80 backdrop-blur border border-slate-700 rounded-full p-1 flex items-center cursor-pointer select-none"
            >
                <div
                    className={`absolute top-1 bottom-1 w-[calc(50%-0.25rem)] bg-sky-500 rounded-full shadow-md shadow-sky-500/30 transition-all duration-300 ease-out ${cert ? "left-[calc(50%+0.25rem)]" : "left-1"
                        }`}
                />

                <button
                    type="button"
                    role="tab"
                    aria-selected={!cert}
                    onClick={() => setCert(false)}
                    className={`relative z-10 w-1/2 h-full text-sm ${!cert ? "text-white" : "text-slate-400 hover:text-slate-200"
                        }`}
                >
                    Projects
                </button>
                <button
                    type="button"
                    role="tab"
                    aria-selected={cert}
                    onClick={() => setCert(true)}
                    className={`relative z-10 w-1/2 h-full text-sm ${cert ? "text-white" : "text-slate-400 hover:text-slate-200"
                        }`}
                >
                    Certificates
                </button>
            </div>

            {/* Content */}
            <div className="relative z-10 w-7xl pt-6 sm:px-8">
                {!cert ? (
                    <div className="relative max-w-screen mx-auto">
                        <button
                            type="button"
                            aria-label="Previous project"
                            onClick={() => swiperRef.current?.slidePrev()}
                            className="absolute left-6 md:-left-8 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 w-10 h-10 rounded-full bg-slate-800/90 border border-slate-600 text-slate-300 flex items-center justify-center hover:bg-sky-500 hover:text-white hover:border-sky-500 transition-colors"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="15 18 9 12 15 6" />
                            </svg>
                        </button>
                        <button
                            type="button"
                            aria-label="Next project"
                            onClick={() => swiperRef.current?.slideNext()}
                            className="absolute right-6 md:-right-8 top-1/2 -translate-y-1/2 translate-x-1/2 z-20 w-10 h-10 rounded-full bg-slate-800/90 border border-slate-600 text-slate-300 flex items-center justify-center hover:bg-sky-500 hover:text-white hover:border-sky-500 transition-colors"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="9 18 15 12 9 6" />
                            </svg>
                        </button>

                        <Swiper
                            modules={[Navigation]}
                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                            spaceBetween={30}
                            slidesPerView={1}
                            breakpoints={{
                                768: { slidesPerView: 2 },
                            }}
                            loop={true}
                            className="w-xs md:w-full [--swiper-pagination-color:#38bdf8]"
                        >
                            {project.map((proj) => (
                                <SwiperSlide key={proj.title}>
                                    <article className="bg-slate-800/60 backdrop-blur-lg h-4xl rounded-2xl border border-slate-700 shadow-xl shadow-black/30 p-4 sm:p-8 flex flex-col gap-5 transition-transform duration-300 hover:-translate-y-1">
                                        {/* Image / fallback */}
                                        <div className={`w-full h-50 rounded-xl overflow-hidden bg-slate-900/60 border ${proj.border_color} shadow ${proj.shadow_color} shadow-base flex items-center justify-center`}>
                                            {proj.pic ? (
                                                <img
                                                    src={proj.pic}
                                                    alt={proj.title}
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <span className={`${proj.sub_color} text-sm`}>
                                                    Preview coming soon
                                                </span>
                                            )}
                                        </div>

                                        <div className="flex flex-col gap-2">
                                            <h3 className="text-white text-xl sm:text-xl">
                                                {proj.title}
                                            </h3>
                                            <p className={`${proj.sub_color} text-xs uppercase`}>
                                                {proj.subtitle}
                                            </p>
                                            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                                                {proj.description}
                                            </p>
                                        </div>

                                        <div className="mt-auto flex flex-wrap gap-2 pt-3">
                                            {proj.tech.map((t) => (
                                                <span
                                                    key={t}
                                                    className={`text-xs text-white ${proj.bg_color} border ${proj.border_color} shadow shadow-md ${proj.shadow_color} rounded-full px-3 py-1`}>
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </article>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                ) : (
                    <div className="max-w-4xl mx-auto text-center text-slate-400 py-16">
                        <p className="text-sm">Certificates coming soon.</p>
                    </div>
                )}
            </div>
        </section>
    );
}