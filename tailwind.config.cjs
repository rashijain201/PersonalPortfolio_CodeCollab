export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        float1: {
          "0%": { transform: "translate(0, 0) scale(1)" },
          "100%": { transform: "translate(10%, 10%) scale(1.1)" },
        },
        float2: {
          "0%": { transform: "translate(0, 0) scale(1)" },
          "100%": { transform: "translate(-10%, -5%) scale(1.15)" },
        },
        float3: {
          "0%": { transform: "translate(0, 0) scale(1)", opacity: "0.3" },
          "100%": { transform: "translate(-5%, 10%) scale(1.05)", opacity: "0.6" },
        },
        pulseGlow: {
          "0%": { opacity: "0.3", transform: "translate(-50%, -50%) scale(0.9)" },
          "100%": { opacity: "0.7", transform: "translate(-50%, -50%) scale(1.1)" },
        },
      },
      animation: {
        "float-1": "float1 15s ease-in-out infinite alternate",
        "float-2": "float2 18s ease-in-out infinite alternate",
        "float-3": "float3 20s ease-in-out infinite alternate",
        pulse: "pulseGlow 8s infinite alternate",
      },
    },
  },
  plugins: [],
};
