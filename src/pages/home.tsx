import About from "../sections/About";
import Skills from "../sections/Skills"
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";
const Home = () => {
  return (
    <div>
      <main className="flex-grow">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default Home;
