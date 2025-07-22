import { Outlet } from "@tanstack/react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DarkMode from "./components/DarkMode";

export default function RootLayout() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow flex">
                <Outlet className="flex-grow" />
            </main>
            <Footer />
            <DarkMode />
        </div>
    );
}
