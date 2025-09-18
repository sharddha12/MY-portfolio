import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Briefcase } from "lucide-react";
import { educationdata } from "../Data/educationData";

// Icon Selector
const getEducationIcon = (detail) => {
  if (detail.includes("internship") || detail.includes("Intern")) {
    return Briefcase;
  } else if (detail.includes("Bachelor") || detail.includes("Master") || detail.includes("+2")) {
    return GraduationCap;
  } else {
    return BookOpen;
  }
};

// Timeline Dot
const TimelineDot = ({ index, isVisible }) => {
  const dotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: index * 0.8,
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      variants={dotVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      className="absolute left-1/2 top-8 transform -translate-x-1/2 z-20"
    >
      <div className="w-4 h-4 rounded-full shadow-lg border-2 border-blue-600">
        <div className="w-full h-full bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full"></div>
      </div>
    </motion.div>
  );
};

// Education Card
const EducationCard = ({ education, index, isLeft, isVisible }) => {
  const IconComponent = getEducationIcon(education.detail);

  return (
    <div className={`relative ${isLeft ? "mr-4" : "ml-4"}`}>
      {/* Year */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: index * 0.8, duration: 0.2 }}
        className={`${isLeft ? "text-right" : "text-left"} mb-2`}
      >
        <span className="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg shadow">
          {education.year}
        </span>
      </motion.div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: index * 0.8 + 0.1, duration: 0.2 }}
        className="relative"
      >
        {/* Icon */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isVisible ? { scale: 1, opacity: 1 } : {}}
          transition={{ delay: index * 0.8 + 0.2, duration: 0.2 }}
          className={`absolute ${isLeft ? "-right-4 top-4" : "-left-4 top-4"} z-10`}
        >
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center shadow border-white">
            <IconComponent className="w-4 h-4 text-white" />
          </div>
        </motion.div>

        <div className={`bg-white dark:bg-slate-800 rounded-lg p-4 shadow border ${isLeft ? "text-right" : "text-left"}`}>
          <p className="text-gray-700 dark:text-gray-200 text-sm font-medium">
            {education.detail}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

// Timeline Line
const TimelineLine = ({ isVisible }) => (
  <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full">
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={isVisible ? { height: "100%", opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
      className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-600 to-indigo-600"
    />
  </div>
);

// Main Timeline
const EducationSection = ({ educationList = educationdata }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const sectionRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2, rootMargin: "-50px" }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="relative w-full">
      <TimelineLine isVisible={isVisible} />
      <div className="space-y-12">
        {educationList.map((edu, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div
              key={edu.id}
              className={`relative flex items-start ${isLeft ? "justify-start" : "justify-end"}`}
            >
              <TimelineDot index={index} isVisible={isVisible} />
              <div className="w-full md:w-11/12">
                <EducationCard
                  education={edu}
                  index={index}
                  isLeft={isLeft}
                  isVisible={isVisible}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EducationSection;
