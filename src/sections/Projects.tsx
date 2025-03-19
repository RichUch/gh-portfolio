import Image from '../components/ui/Image';
import { Globe } from 'lucide-react';
import Button from '../components/ui/Button';
import { useCustomTranslation } from "../hooks/useCustomTranslation";

const projects = () => {
  const { t } = useCustomTranslation();
  const projects = ['project_1']; 

  return (
    <section id="projects" className="py-20 bg-light dark:bg-dark dark:text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">{t("projects.title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((projectKey) => (
            <div key={projectKey} className="bg-white rounded-lg overflow-hidden shadow-lg dark:bg-[#474747]">
              <Image
                src={t(`projects.${projectKey}.src`)}
                alt={`Project ${projectKey}`}
                width={300}
                height={200}
                className="w-full h-80 object-cover rounded-md mb-4"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{t(`projects.${projectKey}.title`)}</h3>
                <p className="mb-4 flex-grow">{t(`projects.${projectKey}.description`)}</p>
                <Button variant="outline" disabled className="w-full flex justify-center items-center mt-auto bg-light hover:bg-gray-200 dark:bg-dark dark:hover:bg-darkdark dark:border-black/40 disabled:opacity-70 disabled:cursor-not-allowed">
                  <Globe className="mr-2 h-4 w-4" /> {t(`projects.${projectKey}.coming_soon`) || t(`projects.${projectKey}.view`)}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default projects;