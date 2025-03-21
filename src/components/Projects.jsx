import ProjectItem from "./ProjectItem.jsx";
import {projects} from "../data/projects.js";
import {section, textSectionHeader} from "./common.js";
import {useEffect, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";

export default function Projects() {
    // Set the initial page size based on the screen width
    const getPageSize = () => {
        if (window.innerWidth < 640) return 1;
        else return 2;
    };

    const handleNextPage = () => {
        setDirection(1);
        setTimeout(() => setCurrentPage((page) => (page + 1) % totalPages), 1);
    };

    const handlePrevPage = () => {
        setDirection(-1);
        setTimeout(() => setCurrentPage((page) => (page - 1 + totalPages) % totalPages), 1);
    };

    const goToPage = (index) => {
        setDirection(index - currentPage);
        setTimeout(() => setCurrentPage(index), 1);
    }

    const [currentPage, setCurrentPage] = useState(0);
    const [direction, setDirection] = useState(0);
    const [pageSize, setPageSize] = useState(getPageSize());

    // Update the page size if the window is resized
    useEffect(() => {
        const handleResize = () => {
            setPageSize(getPageSize());
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);

    // If the page size changes, reset the current page to 0
    useEffect(() => {
        setCurrentPage(0);
    }, [pageSize]);

    const totalPages = Math.ceil(projects.length / pageSize);

    const currentProjects = projects.slice(currentPage * pageSize, (currentPage + 1) * pageSize);
    const pages = projects.slice(0, totalPages);

    return (
        <div className={section}>
            <h2 className={textSectionHeader}>Projects</h2>

            <div className="overflow-hidden relative">
                <AnimatePresence custom={direction} mode="popLayout">
                    <motion.div
                        key={currentPage}
                        custom={direction}
                        initial={{x: (direction * 100) + "%", opacity: 0}}
                        animate={{x: "0%", opacity: 1}}
                        exit={{x: (direction * -100) + "%", opacity: 0}}
                        transition={{type: "spring", stiffness: 150, damping: 25, duration: 0.7}}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-5"
                    >
                        {currentProjects.map(project => (
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
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="flex justify-center items-center gap-2 ">
                <button onClick={handlePrevPage} className="text-button mx-2"> ◀</button>

                {pages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToPage(index)}
                        className={`w-2 h-2 rounded-full ${index === currentPage ? "bg-button" : "bg-gray-400"}`}
                    ></button>
                ))}

                <button onClick={handleNextPage} className="text-button mx-2"> ▶</button>
            </div>
        </div>
    );
}