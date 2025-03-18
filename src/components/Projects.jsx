import ProjectItem from "./ProjectItem.jsx";
import {projects} from "../data/projects.js";

export default function Projects() {
    return (
        <div className="flex flex-col gap-4 items-center">
            <h2 className="text-xl font-semibold">Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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