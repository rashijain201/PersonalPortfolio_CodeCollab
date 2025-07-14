import { Outlet } from "@tanstack/react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DarkMode from "./DarkMode";

export default function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <header className="p-4 border-b border-gray-300 dark:border-gray-700">
        <div className="flex justify-between items-center w-full">
          <Navbar />
          <DarkMode />
        </div>
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
