import { motion } from 'framer-motion'
import ProjectCarousel from './ProjectCarousel'
import GithubProjects from './GithubProjects'
import ContributionGraph from './ContributionGraph'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
}

const Projects = () => {
  return (
    <section id="projects" className="section relative">
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0}
        className="eyebrow mb-3 text-center"
      >
        Selected work
      </motion.p>
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={1}
        className="text-center font-display text-3xl font-bold sm:text-4xl"
      >
        Featured <span className="gradient-text">Projects</span>
      </motion.h2>
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={1.5}
        className="mx-auto mt-4 max-w-2xl text-center text-sm text-slate-400 sm:text-base"
      >
        A mix of AI/ML experiments, automation tools and full-stack applications —
        built to solve real problems and explore new technologies.
      </motion.p>

      <ProjectCarousel />
      <GithubProjects />
      <ContributionGraph />
    </section>
  )
}

export default Projects
