"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Co-Working Space Website",
    description:
      "Developed a sleek, high-performance website for a co-working space, emphasizing intuitive navigation, responsive layouts, and an engaging user experience. Built with React to ensure scalability, speed, and seamless functionality across all devices.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "PPC Fly – Marketing Agency",
    description:
      "Created a fully responsive and modern digital marketing agency website showcasing services, client testimonials, and conversion-driven design. Built using React.js, Bootstrap, HTML, and CSS with smooth animations powered by Framer Motion to deliver a clean, professional user experience.",
    video: "/videos/ppc-fly-demo.mp4",
    imgUrl: "/images/projects/ppc-fly-thumbnail.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ahsanqasim90/ppc-fly",
    previewUrl: "https://ppcfly.agency",
  },
  {
    id: 3,
    title: "Trendy Hub – E-commerce Store",
    description: "Designed and developed a modern, fully responsive e-commerce store using React and Bootstrap. Features included dynamic product listings, smooth UI/UX, and a clean, scalable codebase.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  // {
  //   id: 4,
  //   title: "Food Ordering Application",
  //   description: "Project 4 description",
  //   image: "/images/projects/4.png",
  //   tag: ["All", "Mobile"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  {
    id: 5,
    title: "React Template",
    description: "Built a responsive React project demonstrating clean, modular, and reusable code with a focus on scalability and maintainability. Follows industry-standard best practices.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "IRIS – FBR Web Interface Clone",
    description:  "Created a responsive and user-friendly front-end clone of the IRIS FBR web portal using HTML, CSS, Bootstrap, and React. Focused on clean layout, accurate design replication, and accessibility.",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.imgUrl || project.image} // ✅ fallback to image if imgUrl not given
              videoUrl={project.video}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
