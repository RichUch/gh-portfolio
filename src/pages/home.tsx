import About from "../sections/about";
import Skills from "../sections/skills"

const Home = () => {
  return (
    <div>
      <main className="flex-grow">
        <About></About>
        <Skills></Skills>
      </main>
    </div>
  );
};

export default Home;
