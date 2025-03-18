import {links} from "../data/links.js";

export default function Footer() {
    return (
        <div className="flex flex-col gap-4 w-full p-8 justify-center items-center bg-gray-200">
            <div className="flex gap-3">
                {
                    links.map(link => (
                        <a href={link.link} target="_blank">
                            <img src={link.img} alt={link.key} width="30"></img>
                        </a>
                    ))
                }
            </div>

            <p className="text-xs">© { new Date().getFullYear() } Stephen Parinas. All rights reserved.</p>
        </div>
    );
}