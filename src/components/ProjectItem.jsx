import {buttonHover, button, card, cardHover, textDescription2, textTitle, textDescription1} from "./common.js";

export default function ProjectItem({ title, year, img, stack, githubLink, websiteLink, description }) {
    return (
        <div className={card + cardHover + "bg-gradient-to-br from-card/70 to-card/50"}>
            <div className="flex flex-col">
                <img src={img} alt={title} className="w-full h-40 object-cover rounded-t-md border-b border-b-white/20 backdrop-blur-xl "></img>

                <div className="flex flex-col gap-2 p-4">
                    <p className={textTitle}>{title}</p>
                    <p className={textDescription1}>{stack.join(" | ")}</p>

                    <div className="flex gap-4 mt-2">
                        {githubLink && (
                            <a href={githubLink} target="_blank">
                                <button type="button" className={button + buttonHover + "text-sm"}>
                                    Github
                                </button>
                            </a>
                        )}

                        {websiteLink && (
                            <a href={websiteLink} target="_blank">
                                <button type="button" className={button + buttonHover + "text-sm"}>
                                    Website
                                </button>
                            </a>
                        )}

                        {description && (
                            <p className={textDescription2 + "italic"}>{description}</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}