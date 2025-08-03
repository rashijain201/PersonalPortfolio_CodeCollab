import React from "react";
import config from "../config";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import '@fontsource/montserrat'; 

const experiences = [
  {
    title: "Software Development Intern",
    company_name: "Google",
    icon: "/icons/google.png",
    iconBg: "#383E56",
    date: "May 2025 – Present",
    points: [
      "Contributed to frontend development for internal tools using React and TypeScript.",
      "Participated in daily stand-ups and collaborated with engineers across multiple time zones.",
      "Improved performance of a core dashboard by optimizing API usage and UI rendering.",
    ],
  },
  {
    title: "Research Assistant",
    company_name: "University of Massachusetts Amherst",
    icon: "/icons/umass.jpg",
    iconBg: "#E6DEDD",
    date: "Jan 2025- April 2025",
    points: [
      "Assisted in designing and running experiments focused on human-computer interaction.",
      "Collected and pre-processed data for analysis using Python and Jupyter Notebooks.",
      "Presented research findings in weekly lab meetings and contributed to paper drafting.",
    ],
  },
  {
    title: "Software Development Intern",
    company_name: "Amazon",
    icon: "/icons/amazon.png",
    iconBg: "#383E56",
    date: "May 2024- September 2024",
    points: [
      "Developed microservice features as part of a distributed cloud infrastructure team.",
      "Built automated testing pipelines to improve deployment safety and reliability.",
      "Documented APIs and conducted peer code reviews for quality assurance.",
    ],
  },
  {
    title: "Software Development Intern",
    company_name: "Meta",
    icon: "/icons/meta.png",
    iconBg: "#E6DEDD",
    date: "Jan 2024- May 2024",
    points: [
      "Worked on prototype features for a mobile social media product using React Native.",
      "Implemented UI changes based on UX research and A/B testing results.",
      "Learned about large-scale engineering practices and design systems in production apps.",
    ],
  },
];

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "#1d1836",
      color: "#fff",
      borderRadius: "12px",
      padding: "20px 32px",
      boxShadow: "0 6px 20px rgba(0, 0, 0, 0.2)",
      textAlign: "left",
      maxWidth: "750px",
      minHeight: "unset",
      height: "auto",
    }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div className="text-left">
      <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
      <p className="text-secondary text-[16px] font-semibold mb-3">
        {experience.company_name}
      </p>
      <ul className="list-disc list-inside space-y-1">
        {experience.points.map((point, i) => (
          <li key={i} className="text-white text-[14px] tracking-wider">
            {point}
          </li>
        ))}
      </ul>
    </div>
  </VerticalTimelineElement>
);

function About() {
  return (
    <div className="relative flex-grow flex flex-col items-center justify-center text-center px-6">
      <div className="w-full flex flex-row items-center justify-center gap-4 flex-wrap mt-6 mb-10">
        <h1 className="text-5xl md:text-6xl font-extrabold font-[Montserrat] tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-700 dark:from-purple-300 dark:to-indigo-500">
          Work
        </h1>
        <h1 className="text-5xl md:text-6xl font-extrabold font-[Montserrat] tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-700 dark:from-purple-300 dark:to-indigo-500">
          Experience
        </h1>
      </div>

      <div className="w-full max-w-4xl">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default About;
