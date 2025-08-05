import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Meta from "./components/Meta";
import Chatbot from "./components/Chatbot";
import Home from "./pages/home";
import Experience from "./pages/experience";
import Projects from "./pages/projects";
import TechStack from "./pages/techStack";
import Contact from "./pages/contact";

export default function RootLayout() {
    return (
        <div className="flex flex-col min-h-screen">
            <Meta />
            <Navbar />
            <main className="flex-grow flex">
              
                <div className="flex flex-col w-full mx-auto py-8 relative z-10 scroll-smooth">
                    <div className="min-h-screen scroll-mt-10" id="home">
                        <Home />
                    </div>
                    <div
                        className="min-h-screen scroll-mt-10 bg-black/10 py-8"
                        id="experience"
                    >
                        <Experience />
                    </div>
                    <div className="min-h-screen scroll-mt-10" id="projects">
                        <Projects />
                    </div>
                    <div
                        className="scroll-mt-10 bg-black/10 py-8"
                        id="techStack"
                    >
                        <TechStack />
                    </div>
                    <div className="min-h-screen scroll-mt-10" id="contact">
                        <Contact />
                    </div>
                    <Chatbot />
                </div>
            </main>
            <Footer />
        </div>
    );
}
