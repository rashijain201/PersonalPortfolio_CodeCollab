import { useEffect, useCallback } from "react";
import '@fontsource/montserrat'; 
import "./animation.css"; // Make sure the path is correct

const ProjectComponent = ({ Image, Number, Title, ImageLink, Text1, Text2 }) => {
  useEffect(() => {
    const scrollElements = document.querySelectorAll("[data-animate-on-scroll]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    scrollElements.forEach((el) => observer.observe(el));
    return () => scrollElements.forEach((el) => observer.unobserve(el));
  }, []);

  const handleClick = useCallback(() => {
    window.open(ImageLink, "_blank");
  }, [ImageLink]);

  return (
   <div className="flex flex-col md:flex-row items-center justify-start gap-10 w-full">
  {/* Main Image */}
  <img
      className="w-60 h-60 object-cover rounded-xl shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105 hover:brightness-110"
    src="src/Project_Image/code_collab.png"
    alt={Title}
    onClick={handleClick}
    data-animate-on-scroll
  />

  {/* Text Content */}
  <div
    className="flex-1 flex flex-col items-start justify-center min-w-[300px] max-w-full"
    data-animate-on-scroll
  >
    <div className="flex flex-col items-start justify-start gap-6">
      {/* Number */}
      <div className="text-5xl font-extrabold tracking-tight leading-tight text-purple-700 dark:text-white">
        {Number}
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold tracking-tight leading-snug text-purple-700 dark:text-white">
        {Title}
      </h1>

      {/* Description */}
      <div className="text-base tracking-wide leading-6 text-gray-600 dark:text-gray-300">
        <p className="m-0">{Text1}</p>
        <p className="m-0">{Text2}</p>
      </div>

      {/* CTA Button with Arrow */}
      <button
        onClick={handleClick}
        className="mt-4 flex items-center gap-2 px-4 py-1 text-white opacity-100 rounded-md shadow-md hover:bg-purple-700 transition"
      >
        <span></span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
      </button>
    </div>
  </div>
</div>

  );
};

export default ProjectComponent;
