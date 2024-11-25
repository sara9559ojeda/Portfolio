import React, { useState } from "react";

const Page = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Lista de proyectos
  const projects = [
    {
      image: "/img/img.png",
      title: "Zen Tasks",
      description: "Manage tasks efficiently.",
      link: "https://vercel.com/sara-3s-projects/zen-tasks",
      logo: "/img/descarga.svg",
      logo2: "/img/Vercel.svg",
    },
    {
      image: "/img/img2.png",
      title: "Card",
      description: "A card using Tailwind CSS.",
      link: "https://github.com/sara9559ojeda/card",
      logo: "/img/descarga.svg",
    
    },

  ];

  // Funciones para navegar
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <main className="flex flex-col items-center  justify-center min-h-screen py-8 bg-gradient-to-b from-[#000414] to-sm-D-blue-950 dark:bg-orange-200 dark:bg-none dark:border-orange-950 h-screen">
      <h1 className="text-3xl font-bold mb-6 text-start md:pl-10 md:mr-auto">MY PROJECTS</h1>
      <div className="relative w-full max-w-3xl overflow-hidden">
        {/* Carrusel */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="min-w-full flex flex-col items-center mb-4 rounded-lg "
            >
              <img src={project.image}
                alt={project.title}
                className="rounded-lg mb-7 mt-14  "/>
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="text-sm-D-blue-200 text-center">{project.description}</p>
              <dl className="flex space-x-6">
              <img src={project.logo} alt="" className="size-10 bg-sm-D-blue-300 rounded-full mt-2" />
              </dl>
           
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-blue-500 underline"
              >
                View Project
              </a>
            </div>
          ))}
        </div>

        {/* Botón anterior */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2  text-sm-bunker-300 p-2  hover:animate-pulse "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className=" size-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Botón siguiente */}
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-sm-bunker-300 p-2  hover:animate-pulse"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="size-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </main>
  );
};

export default Page;
