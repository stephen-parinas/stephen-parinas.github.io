import ProjectItem from "./ProjectItem.jsx";
import {projects} from "../data/projects.js";
import {section, textSectionHeader} from "./common.js";

export default function Projects() {
    return (
        <div className={section}>
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