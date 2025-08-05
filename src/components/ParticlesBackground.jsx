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
        <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
            {/* Gradient Spheres */}
            <div className="absolute w-[40vw] h-[40vw] bg-gradient-to-br from-pink-500/80 to-orange-500/40 rounded-full blur-[60px] top-[-10%] left-[-10%] animate-float1"></div>
            <div className="absolute w-[45vw] h-[45vw] bg-gradient-to-bl from-indigo-600/80 to-sky-400/40 rounded-full blur-[60px] bottom-[-20%] right-[-10%] animate-float2"></div>
            <div className="absolute w-[30vw] h-[30vw] bg-gradient-to-tr from-purple-500/50 to-cyan-300/30 rounded-full blur-[60px] top-[60%] left-[20%] animate-float3"></div>

            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[40px_40px] z-10"></div>

            {/* Glow Effect */}
            <div className="absolute w-[40vw] h-[40vh] bg-[radial-gradient(circle,rgba(72,0,255,0.15),transparent_70%)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-[30px] animate-pulse z-20"></div>
        </div>
    );
};

export default ParticlesBackground;
