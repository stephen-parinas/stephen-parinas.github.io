export default function ProjectItem({ title, year, img, stack, githubLink, websiteLink, description }) {
    return (
        <div className="p-4 border border-white rounded-md bg-white hover:border-gray-500 hover:bg-gray-200">
            <div className="flex flex-col gap-2">
                <img src={img} alt={title} className="w-full h-36 object-cover rounded-md"></img>

                <div className="flex flex-col gap-2">
                    <p className="font-semibold">{title}</p>
                    <p className="text-xs">{stack.join(" | ")}</p>

                    <div className="flex gap-4 mt-2">
                        {githubLink && (
                            <a href={githubLink} target="_blank">
                                <button type="button" className="px-4 py-2 text-sm border border-black rounded">
                                    Github
                                </button>
                            </a>
                        )}

                        {websiteLink && (
                            <a href={websiteLink} target="_blank">
                                <button type="button" className="px-4 py-2 text-sm border border-black rounded">
                                    Website
                                </button>
                            </a>
                        )}

                        {description && (
                            <p className="text-xs italic text-gray-500">{description}</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}