import {FileCode2, Cpu, Database } from "lucide-react"

const Skills = () => {
  return (
    <div>
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-light p-6 rounded-lg">
              <FileCode2 className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
              <p>React, Vue, Tailwind CSS, JavaScript, TypeScript, HTML5</p>
            </div>
            <div className="bg-light p-6 rounded-lg">
              <Cpu className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
              <p>Node.js, Python, RESTful APIs</p>
            </div>
            <div className="bg-light p-6 rounded-lg">
              <Database className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Database Management</h3>
              <p>MySQL, Firebase</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Skills