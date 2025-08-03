import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Meta from "./components/Meta";
import Chatbot from "./components/Chatbot";
import ParticlesBackground from "./components/ParticlesBackground";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Skills from "./components/Skills";

export default function RootLayout() {
    return (
        <div className="flex flex-col min-h-screen">
            <Meta />
            <Navbar />
            <main className="flex-grow flex">
                <ParticlesBackground />
                <div className="flex flex-col w-full max-w-6xl mx-auto px-4 py-8 relative z-10 scroll-smooth">
                    <div className="min-h-screen scroll-mt-20" id="home">
                        <Home />
                    </div>
                    <div className="min-h-screen scroll-mt-20" id="projects">
                        <Projects />
                    </div>
                     <div className="min-h-screen scroll-mt-20" id="about">
                        <Skills />
                    </div>
                    <div className="min-h-screen scroll-mt-20" id="about">
                        <About />
                    </div>
                    <div className="min-h-screen scroll-mt-20" id="contact">
                        <Contact />
                    </div>
                    <Chatbot />
                </div>
            </main>
            <Footer />
        </div>
    );
}
