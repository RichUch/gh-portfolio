import { GithubSVG, LinkedInSVG } from "../assets/SVGs";
import Image from "../components/ui/Image";
import { useCustomTranslation } from "../hooks/useCustomTranslation";

const About = () => {
  const { t } = useCustomTranslation();
  return (
    <section id="about" className="py-20 bg-light dark:bg-dark dark:text-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <Image
            src={'./profile_picture.png'}
            alt="Profile picture"
            width={150}
            height={150}
            className="w-[300px] rounded-full scale-x-[-1]"
            
          />
        </div>

        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">{t("about.title")}</h1>
          <p className="text-xl mb-6">
            {t("about.description")}
          </p>
          <div className="flex space-x-4">
            <button className="bg-primary/80 hover:bg-primary text-dark px-4 py-2 rounded flex items-center dark:bg-light/80 dark:hover:bg-light dark:text-black dark:border-primary">
              <GithubSVG />
              <a href="https://github.com/RichUch" target="_blank" rel="noopener noreferrer">GitHub</a>
            </button>
            <button className="bg-dark/90 hover:bg-dark text-white px-4 py-2 rounded flex items-center dark:bg-primary/80 dark:hover:bg-primary dark:text-dark dark:border-primary">
              <LinkedInSVG />
              <a href="https://www.linkedin.com/in/richardnakuch" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;