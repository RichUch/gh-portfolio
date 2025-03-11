import { ReactSVG, VueSVG, TailwindSVG, DaisyUISVG, JavascriptSVG, TypescriptSVG, HTMLSVG, NodeJSSVG, PythonSVG, RestfulAPI, FirebaseSVG, MySQLSVG, } from '../assets/SVGs'

const Skills = () => {
  return (
      <section id="skills" className="px-4 dark:bg-dark/90 dark:text-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "ReactJS", icon: <ReactSVG /> },
              { name: "Vue", icon: <VueSVG /> },
              { name: "TailwindCSS", icon: <TailwindSVG /> },
              { name: "DaisyUI", icon: <DaisyUISVG /> },
              { name: "JavaScript", icon: <JavascriptSVG /> },
              { name: "TypeScript", icon: <TypescriptSVG /> },
              { name: "HTML5", icon: <HTMLSVG /> },
              { name: "Node.js", icon: <NodeJSSVG /> },
              { name: "Python", icon: <PythonSVG /> },
              { name: "RESTful APIs", icon: <RestfulAPI /> },
              { name: "Firebase", icon: <FirebaseSVG /> },
              { name: "MySQL", icon: <MySQLSVG /> },
            ].map((skill) => (
              <div
                key={skill.name}
                className="relative bg-gray-200 dark:bg-dark/90 rounded-lg p-4 my-2 flex flex-col items-center justify-center hover:bg-gray-300 dark:hover:bg-dark  transition-colors duration-300"
              >
                {skill.icon}
                <p className="font-semibold">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Skills