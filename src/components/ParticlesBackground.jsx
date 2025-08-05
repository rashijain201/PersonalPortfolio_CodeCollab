import { useEffect, useState } from "react";

const ParticlesBackground = () => {
    const [themeMode, setThemeMode] = useState(() =>
        document.documentElement.classList.contains("dark") ? "dark" : "light"
    );

    useEffect(() => {
        const observer = new MutationObserver(() => {
            const isDark = document.documentElement.classList.contains("dark");
            const mode = isDark ? "dark" : "light";
            if (mode !== themeMode) {
                setThemeMode(mode);
            }
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });

        return () => observer.disconnect();
    }, [themeMode]);

    return (
        <div className={`gradient-background ${themeMode}`}>
            <div className="gradient-sphere sphere-1"></div>
            <div className="gradient-sphere sphere-2"></div>
            <div className="gradient-sphere sphere-3"></div>
            <div className="glow"></div>
            <div className="grid-overlay"></div>
            <div className="noise-overlay"></div>
        </div>
    );
};

export default ParticlesBackground;

