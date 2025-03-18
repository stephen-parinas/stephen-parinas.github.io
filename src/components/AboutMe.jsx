import {card, cardHover} from "./common.js";

export default function AboutMe() {
    return (
        <div className="flex flex-col gap-4 items-center text-center">
            <h2 className="text-xl font-semibold">About Me</h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-[100%] max-w-[750px]">
                <div className={aboutCard}>
                    <img
                        src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_laptop_mac_48px-512.png"
                        alt="current-role"
                        width="25"
                    ></img>

                    <p className="font-semibold my-2">Current Role</p>
                    <p className="text-xs">Graduate Software Engineer</p>
                    <p className="text-xs italic text-gray-500 mt-1">Tidy International</p>
                </div>

                <div className={aboutCard}>
                    <img src="https://cdn3.iconfinder.com/data/icons/font-awesome-solid/640/graduation-cap-512.png"
                         alt="education"
                         width="25"
                    ></img>

                    <p className="font-semibold my-2">Education</p>
                    <p className="text-xs">BE(Hons) in Biomedical Engineering</p>
                    <p className="text-xs">BSc in Pharmacology</p>
                    <p className="text-xs italic text-gray-500 mt-1">The University of Auckland</p>
                </div>

                <div className={aboutCard + "col-span-2 md:col-span-1"}>
                    <img src="https://cdn3.iconfinder.com/data/icons/font-awesome-brands/512/spotify-512.png"
                         alt="spotify"
                         width="25"
                    ></img>
                </div>
            </div>

            <div className="flex flex-col gap-2 max-w-[750px] text-justify">
                <p className="text-sm">
                    I am currently working as a Graduate Software Engineer at Tidy International,
                    where I develop cloud-based management software using Angular/TS and ASP.Net Core/C#.
                    Feel free to check out some of my projects on this page, and reach out if you
                    have any questions or just want to connect :)
                </p>
            </div>
        </div>
    );
}

const aboutCard = card + cardHover + "items-center ";