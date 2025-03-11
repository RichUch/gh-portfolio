import Image from '../components/ui/Image';
import { Globe } from 'lucide-react';
import Button from '../components/ui/Button';
import { useCustomTranslation } from "../hooks/useCustomTranslation";

const projects = () => {
  const { t } = useCustomTranslation();
  const projects = ['project_1', 'project_2', 'project_3']; 

  return (
    <section id="projects" className="py-20 bg-light dark:bg-dark dark:text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">{t("projects.title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((projectKey) => (
            <div key={projectKey} className="bg-background p-6 rounded-lg shadow-md flex flex-col">
              <Image
                src={t(`projects.${projectKey}.src`)}
                alt={`Project ${projectKey}`}
                width={300}
                height={200}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{t(`projects.${projectKey}.title`)}</h3>
              <p className="mb-4 flex-grow">{t(`projects.${projectKey}.description`)}</p>
              <Button variant="outline" className="w-full flex justify-center items-center mt-auto dark:bg-[#474747] dark:hover:bg-[#474747]/70 dark:border-black/40">
                <Globe className="mr-2 h-4 w-4" /> {t("projects.view")}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default projects;