import ProjectItem from "./ProjectItem.jsx";
import {projects} from "../data/projects.js";
import {textSectionHeader} from "./common.js";

export default function Projects() {
    return (
        <div className="flex flex-col gap-4 items-center">
            <h2 className={textSectionHeader}>Projects</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {
                    projects.map(project => (
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
        </div>
    );
}