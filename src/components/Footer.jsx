import {links} from "../data/links.js";
import {buttonHover, button} from "./common.js";

export default function Footer() {
    return (
        <div className="flex flex-col gap-2 w-full p-8 justify-center items-center bg-footer">
            <div className="flex gap-2">
                {
                    links.map(link => (
                        <a href={link.link} key={link.key} target="_blank">
                            <button className={"p-1 shadow-purple-400/40 hover:scale-105 transition-all duration-300 "}>
                                <img src={link.img} alt={link.key} width="30"></img>
                            </button>
                        </a>
                    ))
                }
            </div>

            <p className="text-sm text-secondary-text">© { new Date().getFullYear() } Stephen Parinas. All rights reserved.</p>
        </div>
    );
}