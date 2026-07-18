import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact() {

    const iconColor = {
        "blue": "text-blue-700 border-blue-600/10 shadow-blue-400",
        "sky": "text-sky-800 border-sky-700/10 shadow-sky-500",
        "purple": "text-purple-800 border-purple-700/10 shadow-purple-500",
        "red": "text-red-500 border-red-400/10 shadow-red-400",
        "white": "text-white border-white/10 shadow-white",
        "green": "text-green-600 border-green-500/10 shadow-green-500",
    };

    const contacts = [
        { icon: <FaFacebook />, label: "Facebook", href: "https://www.facebook.com/Kenneth.Roxas0806", title: "Kenneth T. Roxas", heading: "Facebook", color: "blue" },
        { icon: <FaInstagram />, label: "Instagram", href: "https://www.instagram.com/kenn.py", title: "kenn.py", heading: "Instagram", color: "purple" },
        { icon: <FaLinkedin />, label: "LinkedIn", href: "https://www.linkedin.com/in/kenneth-roxas-6a372b329/", title: "Kenneth Roxas", heading: "LinkedIn", color: "sky" },
        { icon: <FaEnvelope />, label: "Gmail", href: "mailto:roxaskenneth508@gmail.com", title: "roxaskenneth508@gmail.com", heading: "Email", color: "red" },
        { icon: <FaGithub />, label: "GitHub", href: "https://github.com/Kenneth-Roxas", title: "Kenneth Roxas", heading: "Github", color: "white" },
        { icon: <FaPhone />, label: "Phone", href: "tel:+639109309397", title: "+63 910 930 9397", heading: "Phone No.", color: "green" },
    ];

    return (
        <section id="4" className="min-h-[85vh] bg-linear-to-b from-slate-700/90 to-slate-900/90 px-4 pt-6">
            <div className="flex items-center justify-center gap-4 mx-auto">
                <div className="bg-slate-900/70 text-white text-center p-6 border border-white/20 rounded-xl w-full max-w-3xl">
                    <h1 className="text-2xl font-bold -mt-1 uppercase">Contact Me!</h1>
                    <div className="mx-auto w-35 h-1 bg-linear-to-r from-sky-400 to-violet-500 rounded-full mb-6" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {contacts.map((contact) => (
                            <a
                                key={contact.label}
                                href={contact.href}
                                target={contact.href.startsWith("http") ? "_blank" : undefined}
                                rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                className={`flex items-center gap-4 py-4 px-5 rounded-2xl border ${iconColor[contact.color]} shadow-sm hover:bg-white/5 transition-colors`}
                            >
                                <p className={`text-4xl ${iconColor[contact.color]}`}>{contact.icon}</p>
                                <div className="text-left">
                                    <p className="font-semibold">{contact.heading}</p>
                                    <p className="text-white text-sm">{contact.title}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section >
    )
}