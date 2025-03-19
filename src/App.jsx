import AboutMe from "./components/AboutMe.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-200 min-w-[300px]">
            <div className="flex flex-col gap-12 items-center justify-center py-20 px-8">
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

            <Footer/>
        </div>
    );
}