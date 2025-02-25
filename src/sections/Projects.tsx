import Image from '../components/ui/Image';
import { Globe } from 'lucide-react';
import Button from '../components/ui/Button';

const projects = () => {
  return (
    <section id="projects" className="py-20 bg-light">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((project) => (
                <div key={project} className="bg-background p-6 rounded-lg shadow-md">
                  <Image
                    src={process.env.PUBLIC_URL + '/Renaaak.jpg'}
                    alt={`Project ${project}`}
                    width={300}
                    height={200}
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">Project {project}</h3>
                  <p className="mb-4">A brief description of the project and the technologies used.</p>
                  <Button variant="outline" className="w-full flex justify-center items-center">
                    <Globe className="mr-2 h-4 w-4" /> View Project
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
  )
}

export default projects;