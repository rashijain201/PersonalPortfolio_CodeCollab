import { Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { useWindowScroll } from "react-use";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [showDesktopNavbar, setShowDesktopNavbar] = useState(true);

	const { x, y } = useWindowScroll();
	const lastScrollY = useRef(0);

	useEffect(() => {
		// Navbar only hides on scroll down and the scroll position is greater than 50px
		if (y > lastScrollY.current && y > 50) {
			setShowDesktopNavbar(false);
		} else {
			setShowDesktopNavbar(true);
		}
		lastScrollY.current = y;
	}, [y]);

	return (
		<>
			{/* Mobile sidebar */}
			<div
				className={`fixed top-0 left-0 h-full w-3/4 max-w-[250px] bg-gray-900 shadow-lg transform transition-transform duration-300 z-50 md:hidden ${
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
							className="text-white"
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

			{/* Top nav */}
			<nav
				className={`bg-gray-800 text-white px-6 py-4 transition-transform duration-300 fixed w-full z-40 ${
					showDesktopNavbar ? "translate-y-0" : "-translate-y-full"
				}`}
			>
				<div className="flex items-center justify-between md:hidden">
					<h1 className="text-xl font-semibold">My Site</h1>
					<button onClick={() => setIsOpen(!isOpen)}>
						{isOpen ? <X size={28} /> : <Menu size={28} />}
					</button>
				</div>

				<div className="hidden md:flex gap-12 justify-left items-center">
					<Link to="/">Home</Link>
					<Link to="/about">About</Link>
					<Link to="/projects">Projects</Link>
					<Link to="/contact">Contact</Link>
				</div>
			</nav>

			{/* Spacer to prevent content from being hidden behind the navbar */}
			<div className="h-[60px] md:h-[56px]" />
		</>
	);
}
