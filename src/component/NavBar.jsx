import { useEffect, useState } from "react";

export default function Navbar() {
    const [highlight, IsHightlight] = useState(false);
    const [active, IsActive] = useState("1");

    useEffect(() => {
        const handleScroll = () => {
            const modelSection = document.getElementById("2");

            if (modelSection) {
                const rect = modelSection.getBoundingClientRect();
                IsHightlight(rect.top <= 80 && rect.bottom >= 80);
            }

            const sections = ["1", "2", "3", "4"];
            const scroll_pos = window.scrollY + 100;
            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                if (section && scroll_pos >= section.offsetTop) {
                    IsActive(sections[i]);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const Nav = [
        { label: "Home", href: "1" },
        { label: "About", href: "2" },
        { label: "Portfolio", href: "3" },
        { label: "Contact", href: "4" },
    ]


    return (
        <>
            <header className="fixed w-full z-30 backdrop-blur-lg bg-white/30 border-white/10 shadow-gray-500 shadow-md p-1 rounded-b-xs">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-white text-xl font-bold">
                        <h1 className="bg-sky-700 px-2 py-2 rounded-full text-base font-extrabold">KR</h1>
                    </div>
                    <nav className="text-white hidden md:block space-x-6 text-base font-semibold">
                        {Nav.map(({ label, href }) => (
                            <a href={`#${href}`} className={`px-3 py-2 rounded-2xl transition-all duration-200 ease-out
                                ${active === href
                                    ? highlight
                                        ? "border-b-2 border-white font-bold"
                                        : "border-b-2 border-white font-bold"
                                    : highlight
                                        ? "text-white hover:text-gray-400"
                                        : "text-white hover:text-gray-400"
                                }`}>{label}</a>
                        ))}
                    </nav>
                </div>
            </header>
        </>
    );
}