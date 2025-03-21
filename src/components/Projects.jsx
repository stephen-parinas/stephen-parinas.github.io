import ProjectItem from "./ProjectItem.jsx";
import {projects} from "../data/projects.js";
import {section, textSectionHeader} from "./common.js";
import {useState} from "react";

export default function Projects() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const pageSize = 2;
    const totalPages = projects.length + 1 - pageSize;

    const handleNextPage = () => {
        setCurrentIndex((index) => (index + 1) % totalPages);
    };

    const handlePrevPage = () => {
        setCurrentIndex((index) => (index - 1 + totalPages) % totalPages);
    };

    const currentProjects = projects.slice(currentIndex, currentIndex + pageSize);
    const pages = projects.slice(0, totalPages);

    return (
        <div className={section}>
            <h2 className={textSectionHeader}>Projects</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {
                    currentProjects.map(project => (
                        <ProjectItem
                            key={project.key}
                            title={project.title}
                            year={project.year}
                            img={project.img}
                            stack={project.stack}
                            githubLink={project.githubLink}
                            websiteLink={project.websiteLink}
                            description={project.description}
                        />
                    ))
                }
            </div>

            <div className="flex justify-center items-center gap-2 ">
                <button onClick={handlePrevPage} className="text-button mx-2"> ◀ </button>

                {pages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full ${index === currentIndex ? "bg-button" : "bg-gray-400"}`}
                    ></button>
                ))}

                <button onClick={handleNextPage} className="text-button mx-2"> ▶ </button>
            </div>
        </div>
    );
}