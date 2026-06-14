import { motion } from 'framer-motion'
import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaNodeJs,
  FaDatabase,
  FaAws,
  FaCloud,
  FaGitAlt,
  FaGithub,
  FaJenkins,
  FaCogs,
} from 'react-icons/fa'
import {
  SiTailwindcss,
  SiDjango,
  SiFlask,
  SiMysql,
  SiPostgresql,
  SiTensorflow,
  SiOpencv,
} from 'react-icons/si'
import { TbBrain } from 'react-icons/tb'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: 'easeOut' },
  }),
}

const skillCategories = [
  {
    title: 'Frontend',
    accent: 'from-primary/30 to-primary/5',
    skills: [
      { name: 'React', level: 85, icon: FaReact },
      { name: 'JavaScript', level: 85, icon: FaJsSquare },
      { name: 'HTML', level: 90, icon: FaHtml5 },
      { name: 'CSS', level: 85, icon: FaCss3Alt },
      { name: 'Tailwind CSS', level: 85, icon: SiTailwindcss },
    ],
  },
  {
    title: 'Backend',
    accent: 'from-secondary/30 to-secondary/5',
    skills: [
      { name: 'Python', level: 88, icon: FaPython },
      { name: 'Django', level: 70, icon: SiDjango },
      { name: 'Flask', level: 75, icon: SiFlask },
      { name: 'Node.js', level: 65, icon: FaNodeJs },
    ],
  },
  {
    title: 'Database',
    accent: 'from-accent/30 to-accent/5',
    skills: [
      { name: 'SQL Server', level: 85, icon: FaDatabase },
      { name: 'MySQL', level: 78, icon: SiMysql },
      { name: 'PostgreSQL', level: 70, icon: SiPostgresql },
    ],
  },
  {
    title: 'AI / ML',
    accent: 'from-primary/30 to-secondary/10',
    skills: [
      { name: 'Machine Learning', level: 75, icon: TbBrain },
      { name: 'Deep Learning', level: 65, icon: TbBrain },
      { name: 'TensorFlow', level: 65, icon: SiTensorflow },
      { name: 'OpenCV', level: 70, icon: SiOpencv },
    ],
  },
  {
    title: 'Cloud',
    accent: 'from-secondary/30 to-accent/10',
    skills: [
      { name: 'Azure', level: 65, icon: FaCloud },
      { name: 'AWS Basics', level: 55, icon: FaAws },
      { name: 'IBM Cloud', level: 50, icon: FaCloud },
    ],
  },
  {
    title: 'DevOps',
    accent: 'from-accent/30 to-primary/10',
    skills: [
      { name: 'Git', level: 85, icon: FaGitAlt },
      { name: 'GitHub', level: 88, icon: FaGithub },
      { name: 'Jenkins', level: 55, icon: FaJenkins },
      { name: 'CI/CD', level: 60, icon: FaCogs },
    ],
  },
]

const ProgressBar = ({ level, delay = 0 }) => (
  <div className="progress-track">
    <motion.div
      className="progress-fill"
      initial={{ width: 0 }}
      whileInView={{ width: `${level}%` }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay, ease: 'easeOut' }}
    />
  </div>
)

const Skills = () => {
  return (
    <section id="skills" className="section relative">
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0}
        className="eyebrow mb-3 text-center"
      >
        What I work with
      </motion.p>
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={1}
        className="text-center font-display text-3xl font-bold sm:text-4xl"
      >
        Skills &amp; <span className="gradient-text">Technologies</span>
      </motion.h2>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={idx + 2}
            whileHover={{ y: -6 }}
            className="glass hover-glow rounded-2xl p-6"
          >
            <div className={`mb-5 inline-flex rounded-xl bg-gradient-to-br ${category.accent} px-4 py-1.5`}>
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
                {category.title}
              </h3>
            </div>

            <div className="flex flex-col gap-4">
              {category.skills.map((skill, sIdx) => {
                const Icon = skill.icon
                return (
                  <div key={skill.name}>
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2 font-medium text-slate-200">
                        <Icon className="text-primary" /> {skill.name}
                      </span>
                      <span className="font-mono text-xs text-slate-400">{skill.level}%</span>
                    </div>
                    <ProgressBar level={skill.level} delay={sIdx * 0.08} />
                  </div>
                )
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Skills
