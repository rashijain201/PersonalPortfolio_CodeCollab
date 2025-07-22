import { Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { useWindowScroll } from "react-use";
import DarkMode from "./DarkMode";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [showDesktopNavbar, setShowDesktopNavbar] = useState(true);
    const { y } = useWindowScroll();
    const lastScrollY = useRef(0);

    useEffect(() => {
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
                className={`fixed top-0 left-0 h-full w-3/4 max-w-[250px] bg-gray-900 dark:bg-gray-950 shadow-lg transform transition-transform duration-300 z-50 md:hidden ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div className="p-4 flex flex-col gap-4">
                    <button
                        className="self-end text-white"
                        onClick={() => setIsOpen(false)}
                    >
                        <X size={24} />
                    </button>
                    {["/", "/about", "/projects", "/contact"].map((path, i) => (
                        <Link
                            key={i}
                            to={path}
                            onClick={() => setIsOpen(false)}
                            className="text-white hover:text-purple-400 transition"
                        >
                            {path === "/"
                                ? "Home"
                                : path
                                      .replace("/", "")
                                      .charAt(0)
                                      .toUpperCase() + path.slice(2)}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Top Navbar */}
            <nav
                className={`bg-gray-800 dark:bg-gray-900 text-white px-6 py-4 transition-transform duration-300 fixed w-full z-40 ${
                    showDesktopNavbar ? "translate-y-0" : "-translate-y-full"
                }`}
            >
                <div className="flex items-center justify-between md:hidden">
                    <h1 className="text-xl font-semibold">Portfolio</h1>
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex justify-between items-center">
                    <div className="flex gap-8 items-center">
                        <Link
                            className="hover:text-purple-400 transition"
                            to="/"
                        >
                            Home
                        </Link>
                        <Link
                            className="hover:text-purple-400 transition"
                            to="/about"
                        >
                            About
                        </Link>
                        <Link
                            className="hover:text-purple-400 transition"
                            to="/projects"
                        >
                            Projects
                        </Link>
                        <Link
                            className="hover:text-purple-400 transition"
                            to="/contact"
                        >
                            Contact
                        </Link>
                    </div>
                    <DarkMode />
                </div>
            </nav>

            {/* Spacer to prevent content from being hidden behind the navbar */}
            <div className="h-[60px] md:h-[56px]" />
        </>
    );
}
