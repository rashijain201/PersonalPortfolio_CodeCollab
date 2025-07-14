import { Outlet } from "@tanstack/react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DarkMode from "./DarkMode"; 

export default function RootLayout() {
	return (
		<div className="flex flex-col min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors">
			<header className="flex justify-between items-center p-4">
				<Navbar />
				<DarkMode />
			</header>

			<main className="flex-grow flex">
				<Outlet className="flex-grow" />
			</main>

			<Footer />
		</div>
	);
}

