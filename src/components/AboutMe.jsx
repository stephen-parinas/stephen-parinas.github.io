import {card, cardHover, textDescription1, textDescription2, textSectionHeader, textTitle} from "./common.js";
import SpotifyWidget from "./SpotifyWidget.jsx";

export default function AboutMe() {
    return (
        <div className="flex flex-col gap-4 items-center text-center">
            <h2 className={textSectionHeader}>About Me</h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-[100%] max-w-[900px]">
                <div className={aboutCard}>
                    <img
                        src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_laptop_mac_48px-512.png"
                        alt="current-role"
                        width="25"
                    ></img>

                    <p className={textTitle + "my-2"}>Current Role</p>
                    <p className={textDescription1}>Graduate Software Engineer</p>
                    <p className={textDescription2}>Tidy International</p>
                </div>

                <div className={aboutCard}>
                    <img src="https://cdn3.iconfinder.com/data/icons/font-awesome-solid/640/graduation-cap-512.png"
                         alt="education"
                         width="25"
                    ></img>

                    <p className={textTitle + "my-2"}>Education</p>
                    <p className={textDescription1}>BE(Hons) in Biomedical Engineering</p>
                    <p className={textDescription1}>BSc in Pharmacology</p>
                    <p className={textDescription2}>The University of Auckland</p>
                </div>

                <div className={aboutCard}>
                    <img src="https://cdn3.iconfinder.com/data/icons/font-awesome-brands/512/spotify-512.png"
                         alt="spotify"
                         width="25"
                    ></img>
                    <p className={textTitle + "my-2"}>Spotify Activity</p>
                    <SpotifyWidget />
                </div>
            </div>

            {/*<div className="flex flex-col gap-2 max-w-[900px] text-justify">*/}
            {/*    <p className="text-sm">*/}
            {/*        I am currently working full-time as a Software Engineer at Tidy International,*/}
            {/*        developing cloud-based management software using Angular/TS and ASP.Net Core/C#.*/}
            {/*        Feel free to check out some of my projects on this page, and reach out if you*/}
            {/*        have any questions or just want to connect :)*/}
            {/*    </p>*/}
            {/*</div>*/}
        </div>
    );
}

const aboutCard = card + cardHover + "items-center cursor-default ";