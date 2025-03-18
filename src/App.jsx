import AboutMe from "./components/AboutMe.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
    return (
        <div className="flex flex-col gap-8 items-center justify-center min-h-screen bg-gray-100">
            <section id="home">
                <Home />
            </section>

            <section id="about">
                <AboutMe />
            </section>

            <section id="projects">
                <Projects />
            </section>

            <section id="contact">
                <Contact />
            </section>

            <Footer />
        </div>
    );
}