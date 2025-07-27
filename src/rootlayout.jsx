import { Outlet } from "@tanstack/react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Meta from "./components/Meta";
import Chatbot from "./components/Chatbot";
import ParticlesBackground from "./components/ParticlesBackground";

export default function RootLayout() {
    return (
        <div className="flex flex-col min-h-screen">
            <Meta />
            <Navbar />
            <main className="flex-grow flex">
                <ParticlesBackground />
                <Outlet className="flex-grow" />
                <Chatbot />
            </main>
            <Footer />
        </div>
    );
}
