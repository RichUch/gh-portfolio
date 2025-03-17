import { ReactSVG, VueSVG, TailwindSVG, DaisyUISVG, JavascriptSVG, TypescriptSVG, HTMLSVG, NodeJSSVG, PythonSVG, RestfulAPI, FirebaseSVG, MySQLSVG, } from '../assets/SVGs'
import { Modal } from "../components/ui/Modal"
import { useState } from "react"
import { useCustomTranslation } from "../hooks/useCustomTranslation";

const Skills = () => {
  const { t } = useCustomTranslation();
  const [selectedSkillIndex, setSelectedSkillIndex] = useState<number | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [transitionDirection, setTransitionDirection] = useState<"left" | "right" | null>(null)

  const skills = [
    { name: "ReactJS", icon: <ReactSVG />,
      description: t("skills.skill.react_desc"),
      experience: t("skills.skill.react_exp"),
      projects: ["Portfolio site"],
      resources: [
        { name: "ReactJS", url: "https://react.dev/" },
      ]
    },
    {
      name: "Vue",
      icon: <VueSVG />,
      description:
        t("skills.skill.vue_desc"),
      experience: t("skills.skill.vue_exp"),
      projects: ["KeepNEye (Sphere48)", "Hypepoint"],
      resources: [
        { name: "Vue.js", url: "https://vuejs.org/" },
      ],
    },
    {
      name: "JavaScript",
      icon: <JavascriptSVG/>,
      description:
        t("skills.skill.javascript_desc"),
      experience: t("skills.skill.javascript_exp"),
      projects: ["KeepNEye (Sphere 48)", "Hypepoint", "Discord Bot", "Portfolio site"],
      resources: [
        { name: "MDN Web Docs - JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      ],
    },
    {
      name: "TypeScript",
      icon: <TypescriptSVG/>,
      description:
        t("skills.skill.typescript_desc"),
      experience: t("skills.skill.typescript_exp"),
      projects: ["Portfolio site"],
      resources: [
        { name: "TypeScript", url: "https://www.typescriptlang.org/" },
      ],
    },
    {
      name: "TailwindCSS",
      icon: <TailwindSVG />,
      description:
        t("skills.skill.tailwind_desc"),
      experience: t("skills.skill.tailwind_exp"),
      projects: ["Portfolio site"],
      resources: [
        { name: "Tailwind CSS", url: "https://tailwindcss.com/" },
      ],
    },
    {
      name: "DaisyUI",
      icon: <DaisyUISVG/>,
      description:
        t("skills.skill.daisy_desc"),
      experience: t("skills.skill.daisy_exp"),
      projects: ["Portfolio site"],
      resources: [
        { name: "DaisyUI", url: "https://daisyui.com/" },
      ],
    },
    {
      name: "HTML5",
      icon: <HTMLSVG/>,
      description:
        t("skills.skill.HTML_desc"),
      experience: t("skills.skill.HTML_exp"),
      projects: ["KeepNEye (Sphere 48)", "Hypepoint", "Portfolio site"],
      resources: [
        { name: "MDN Web Docs - HTML", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
      ],
    },
    {
      name: "Node.js",
      icon: <NodeJSSVG/>,
      description:
        t("skills.skill.node_desc"),
      experience: t("skills.skill.node_exp"),
      projects: ["KeepNEye (Sphere 48)", "Hypepoint", ],
      resources: [
        { name: "Node.js", url: "https://nodejs.org/en" },
      ],
    },
    // {
    //   name: "Python",
    //   icon: <PythonSVG/>,
    //   description:
    //     "Python is an interpreted, high-level, general-purpose programming language. Its design philosophy emphasizes code readability with its use of significant indentation. Python is dynamically typed and garbage-collected. It supports multiple programming paradigms, including structured, object-oriented, and functional programming.",
    //   experience: "",
    //   projects: [],
    //   resources: [
    //     { name: "Python Documentation", url: "https://www.python.org/" },
    //   ],
    // },
    {
      name: "RESTful API",
      icon: <RestfulAPI/>,
      description:
        t("skills.skill.API_desc"),
      experience: t("skills.skill.API_exp"),
      projects: ["KeepNEye (Sphere 48)", "Hypepoint", "Discord Bot"],
      resources: [
        { name: "RESTful API Design", url: "https://restfulapi.net/" },
      ],
    },
    {
      name: "Firebase",
      icon: <FirebaseSVG/>,
      description:
        t("skills.skill.firebase_desc"),
      experience: t("skills.skill.firebase_exp"),
      projects: ["KeepNEye (Sphere 48)"],
      resources: [
        { name: "Firebase", url: "https://firebase.google.com/" },
      ],
    },
    // {
    //   name: "MySQL",
    //   icon: <MySQLSVG/>,
    //   description:
    //     'MySQL is an open-source relational database management system (RDBMS). Its name is a combination of "My", the name of co-founder Michael Widenius\'s daughter, and "SQL", the abbreviation for Structured Query Language. MySQL is a central component of the LAMP open-source web application software stack.',
    //   experience: "",
    //   projects: [],
    //   resources: [
    //     { name: "MySQL Documentation", url: "https://www.mysql.com/" },
    //   ],
    // },
  ]

  const openModal = (index: number) => {
    setSelectedSkillIndex(index)
    setIsModalOpen(true)
    setTransitionDirection(null)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setTimeout(() => {
      setSelectedSkillIndex(null)
    }, 300)
  }

  const goToNextSkill = () => {
    if (selectedSkillIndex !== null) {
      setTransitionDirection("right")

      setTimeout(() => {
        setSelectedSkillIndex((selectedSkillIndex + 1) % skills.length)
        setTransitionDirection(null)
      }, 300)
    }
  }

  const goToPreviousSkill = () => {
    if (selectedSkillIndex !== null) {
      setTransitionDirection("left")

      setTimeout(() => {
        setSelectedSkillIndex((selectedSkillIndex - 1 + skills.length) % skills.length)
        setTransitionDirection(null)
      }, 300)
    }
  }

  return (
  <section id="skills" className="px-4 dark:bg-dark/90 dark:text-white py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">{t("skills.title")}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <button
            key={skill.name}
            className="relative bg-gray-200 rounded-lg p-4 my-2 flex flex-col items-center justify-center hover:bg-gray-300 dark:bg-dark/90 dark:hover:bg-dark  transition-colors duration-300"
            onClick={() => openModal(index)}
          >
            {skill.icon}
            <p className="font-semibold">{skill.name}</p>
          </button>
        ))}
      </div>
    </div>

    {selectedSkillIndex !== null && (
      <Modal
        skill={skills[selectedSkillIndex]}
        isOpen={isModalOpen}
        onClose={closeModal}
        onNext={goToNextSkill}
        onPrevious={goToPreviousSkill}
        direction={transitionDirection}
      />
    )}
    </section>
  )
}

export default Skills