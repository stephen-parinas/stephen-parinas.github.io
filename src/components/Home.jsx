import {buttonHover, button} from "./common.js";

export default function Home() {
    return (
        <div className="flex flex-col gap-2 justify-center text-center">
            <p className="text-sm text-gray-500">Hello, I'm</p>
            <h1 className="text-4xl font-bold">Stephen Parinas</h1>
            <p className="text-sm text-gray-500">Software Engineer at Tidy International</p>

            <div className="flex gap-4 justify-center mt-8">
                <a href="../../public/assets/StephenParinas_CV_2025.pdf" download>
                    <button type="button" className={button + buttonHover}>Download CV</button>
                </a>

                <a href="#contact">
                    <button type="button" className={button + buttonHover}>Contact Me</button>
                </a>
            </div>
        </div>
    );
}