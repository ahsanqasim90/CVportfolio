"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Java</li>
        <li>React JS</li>
        <li>Next JS</li>
        <li>MongoDB</li>
        <li>JavaScript</li>
        <li>Spring Boot</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Bachelor's of Science in Computer Science</li>
        
      </ul>
    ),
  },
  {
    title: "Certification",
    id: "certification", // Match this with the TabButton id
    content: (
      <ul className="list-disc pl-2">
        <li>Core Python with OOP principle</li>
        <li>React-JS</li>
        <li>Spring Boot</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          alt="About me illustration"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full ">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base md:text-lg">
          Hello! I&apos;m Muhammad Ahsan Qasim, a passionate Full-Stack Developer with expertise in modern web technologies and backend frameworks. With a solid foundation in programming and a commitment to delivering high-quality solutions, I focus on creating user-centric, scalable, and efficient applications. My goal is to transform complex challenges into innovative digital experiences that make a difference.


          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certification")} // Match the id
              active={tab === "certification"}
            >
              Certification
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((item) => item.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
