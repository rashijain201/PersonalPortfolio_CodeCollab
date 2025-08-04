import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { useWindowScroll } from "react-use";
import DarkMode from "./DarkMode";
import config from "../config";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [showDesktopNavbar, setShowDesktopNavbar] = useState(true);
    const { y } = useWindowScroll();
    const lastScrollY = useRef(0);
    const ignoreScroll = useRef(false);

    useEffect(() => {
        if (ignoreScroll.current) {
            lastScrollY.current = y;
            return;
        }

        if (y > lastScrollY.current && y > 50) {
            setShowDesktopNavbar(false);
        } else {
            setShowDesktopNavbar(true);
        }
        lastScrollY.current = y;
    }, [y]);

    return (
        <>
            {/* Mobile Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full w-3/4 max-w-[250px] bg-gray-900 dark:bg-gray-950 shadow-lg transform transition-transform duration-300 z-50 md:hidden ${
                    isOpen ? "translate-x-0" : "-translate-x-[-100%]"
                }`}
            >
                <div className="p-4 flex flex-col gap-4">
                    <button
                        className="self-end text-white"
                        onClick={() => setIsOpen(false)}
                    >
                        <X size={24} />
                    </button>
                    {["#home", "#experience", "#projects", "#contact"].map(
                        (path, i) => (
                            <a
                                key={i}
                                href={path}
                                onClick={() => {
                                    setIsOpen(false);
                                    ignoreScroll.current = true;
                                    setTimeout(() => {
                                        lastScrollY.current = y;
                                        ignoreScroll.current = false;
                                    }, 700);
                                }}
                                className="text-white hover:text-purple-400 transition"
                            >
                                {path === "#home"
                                    ? "Home"
                                    : path
                                          .replace("#", "")
                                          .charAt(0)
                                          .toUpperCase() + path.slice(2)}
                            </a>
                        )
                    )}
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-purple-400 transition mt-2 border-t border-gray-700 pt-4"
                    >
                        Resume
                    </a>

                </div>
            </div>

            {/* Top Navbar */}
            <nav
                className={`text-white px-6 py-4 transition-transform duration-300 fixed w-full z-40 ${
                    showDesktopNavbar ? "translate-y-0" : "-translate-y-full"
                }`}
            >
                <div className="flex items-center justify-between md:hidden">
                    <h1 className="text-xl font-semibold">Portfolio</h1>
                    <DarkMode />
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex justify-between items-center dark:text-white">
                    <div className="text-black dark:text-white">
                        {config.social.abbreviatedName}
                    </div>
                    <div className="flex gap-8 items-center text-black dark:text-white">
                        <a
                            className="hover:text-purple-400 transition"
                            href="#home"
                            onClick={() => {
                                ignoreScroll.current = true;
                                setTimeout(() => {
                                    ignoreScroll.current = false;
                                    lastScrollY.current = y;
                                }, 700);
                            }}
                        >
                            Home
                        </a>
                        <a
                            className="hover:text-purple-400 transition"
                            href="#experience"
                            onClick={() => {
                                ignoreScroll.current = true;
                                setTimeout(() => {
                                    ignoreScroll.current = false;
                                    lastScrollY.current = y;
                                }, 700);
                            }}
                        >
                        Experience
                        </a>
                        <a
                            className="hover:text-purple-400 transition"
                            href="#projects"
                            onClick={() => {
                                ignoreScroll.current = true;
                                setTimeout(() => {
                                    ignoreScroll.current = false;
                                    lastScrollY.current = y;
                                }, 700);
                            }}   
                        >
                        Projects
                        </a>
                        <a
                            className="hover:text-purple-400 transition"
                            href="#contact"
                            onClick={() => {
                                ignoreScroll.current = true;
                                setTimeout(() => {
                                    ignoreScroll.current = false;
                                    lastScrollY.current = y;
                                }, 700);
                            }}
                            
                        >
                            Contact
                        </a>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 rounded bg-purple-600 text-white hover:bg-purple-700 transition text-sm"
                        >
                            Resume
                        </a>

                    </div>
                    <DarkMode />
                </div>
            </nav>

            {/* Spacer to prevent content from being hidden behind the navbar */}
            <div className="h-[60px] md:h-[56px]" />
        </>
    );
}
