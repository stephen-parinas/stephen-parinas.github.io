export default function Home() {
    return (
        <div className="flex flex-col gap-2 justify-center text-center">
            <p className="text-sm text-gray-700">Hello, I'm</p>
            <h1 className="text-4xl font-bold">Stephen Parinas</h1>
            <p className="text-sm text-gray-700">Software Engineer at Tidy International</p>

            <div className="flex gap-8 justify-center mt-4">
                <a href="../../public/assets/StephenParinas_CV_2025.pdf" download>
                    <button type="button">Download CV</button>
                </a>

                <a href="#contact">
                    <button type="button">Contact Me</button>
                </a>
            </div>
        </div>
    );
}