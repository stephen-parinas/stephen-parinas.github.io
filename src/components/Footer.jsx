import {links} from "../data/links.js";
import {buttonHover, button} from "./common.js";

export default function Footer() {
    return (
        <div className="flex flex-col gap-2 w-full p-8 justify-center items-center bg-gray-300">
            <div className="flex gap-2">
                {
                    links.map(link => (
                        <a href={link.link} key={link.key} target="_blank">
                            <button className={"p-1 border border-gray-300 rounded " + buttonHover}>
                                <img src={link.img} alt={link.key} width="25" className="opacity-50"></img>
                            </button>
                        </a>
                    ))
                }
            </div>

            <p className="text-xs text-gray-500">© { new Date().getFullYear() } Stephen Parinas. All rights reserved.</p>
        </div>
    );
}