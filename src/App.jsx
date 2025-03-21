import AboutMe from "./components/AboutMe.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
    return (
        <div className="relative flex flex-col bg-page min-w-[360px]">
            <div className="min-h-screen">
                <div className="absolute inset-0 bg-[url('assets/overlay.png')] opacity-100 z-0"></div>

                <div className="relative flex flex-col gap-12 items-center justify-center py-20 px-8 z-[1]">
                    <section id="home">
                        <Home/>
                    </section>

                    <section id="about">
                        <AboutMe/>
                    </section>

                    <section id="projects">
                        <Projects/>
                    </section>

                    <section id="contact">
                        <Contact/>
                    </section>
                </div>
            </div>

            <Footer/>
        </div>
    );
}