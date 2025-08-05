import { useEffect, useState } from "react";
import config from "../config";
import "./ParticlesBackground.css";

const ParticlesBackground = () => {
    const [themeMode, setThemeMode] = useState(
        document.documentElement.classList.contains("dark") ? "dark" : "light"
    );

    // Detect theme changes dynamically
    useEffect(() => {
        const observer = new MutationObserver(() => {
            setThemeMode(document.documentElement.classList.contains("dark") ? "dark" : "light");
        });
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
        return () => observer.disconnect();
    }, []);

    const colors = config.backgroundTheme[themeMode];

    useEffect(() => {
        const particlesContainer = document.getElementById("particles-container");
        particlesContainer.innerHTML = ""; // clear old particles
        const particleCount = 80;

        for (let i = 0; i < particleCount; i++) {
            createParticle();
        }

        function createParticle() {
            const particle = document.createElement("div");
            particle.className = "particle";
            particle.style.background = colors.particleColor;

            const size = Math.random() * 3 + 1;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;

            resetParticle(particle);
            particlesContainer.appendChild(particle);
            animateParticle(particle);
        }

        function resetParticle(particle) {
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            particle.style.left = `${posX}%`;
            particle.style.top = `${posY}%`;
            particle.style.opacity = "0";
            return { x: posX, y: posY };
        }

        function animateParticle(particle) {
            const pos = resetParticle(particle);
            const duration = Math.random() * 10 + 10;
            const delay = Math.random() * 5;

            setTimeout(() => {
                particle.style.transition = `all ${duration}s linear`;
                particle.style.opacity = Math.random() * 0.3 + 0.1;
                const moveX = pos.x + (Math.random() * 20 - 10);
                const moveY = pos.y - Math.random() * 30;
                particle.style.left = `${moveX}%`;
                particle.style.top = `${moveY}%`;

                setTimeout(() => animateParticle(particle), duration * 1000);
            }, delay * 1000);
        }
    }, [themeMode, colors]);

    return (
        <div className="gradient-background">
            <div className="gradient-sphere sphere-1" style={{ background: colors.sphere1 }}></div>
            <div className="gradient-sphere sphere-2" style={{ background: colors.sphere2 }}></div>
            <div className="gradient-sphere sphere-3" style={{ background: colors.sphere3 }}></div>
            <div className="glow" style={{ background: colors.glow }}></div>
            <div className="grid-overlay"></div>
            <div className="noise-overlay"></div>
            <div className="particles-container" id="particles-container"></div>
        </div>
    );
};

export default ParticlesBackground;
