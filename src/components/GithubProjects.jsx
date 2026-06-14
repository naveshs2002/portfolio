import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiStar, FiGitBranch } from 'react-icons/fi'
import { projects } from '../data/projects'
import { fetchGithubRepos } from '../services/github'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: 'easeOut' },
  }),
}

const otherProjects = projects.filter((p) => !p.featured)

const GithubProjects = () => {
  const [repoStats, setRepoStats] = useState({})

  useEffect(() => {
    let mounted = true
    fetchGithubRepos(30).then((repos) => {
      if (!mounted || !Array.isArray(repos)) return
      const map = {}
      repos.forEach((repo) => {
        map[repo.name?.toLowerCase()] = {
          stars: repo.stargazers_count,
          forks: repo.forks_count,
        }
      })
      setRepoStats(map)
    })
    return () => {
      mounted = false
    }
  }, [])

  return (
    <div className="mt-10">
      <motion.h3
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0}
        className="mb-6 text-center font-display text-xl font-semibold text-slate-200"
      >
        More on{' '}
        <a
          href="https://github.com/naveshs2002"
          target="_blank"
          rel="noreferrer"
          className="gradient-text underline-offset-4 hover:underline"
        >
          GitHub
        </a>
      </motion.h3>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {otherProjects.map((project, idx) => {
          const repoName = project.github.split('/').pop()?.toLowerCase()
          const stats = repoStats[repoName]
          return (
            <motion.div
              key={project.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={idx + 1}
              whileHover={{ y: -6 }}
              className="glass hover-glow flex flex-col rounded-2xl p-6"
            >
              <div className="flex items-start justify-between">
                <h4 className="font-display text-base font-semibold text-white">
                  {project.title}
                </h4>
                <FiGithub className="mt-1 text-slate-400" />
              </div>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                {project.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-4 text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <FiStar /> {stats?.stars ?? 0}
                  </span>
                  <span className="flex items-center gap-1">
                    <FiGitBranch /> {stats?.forks ?? 0}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="hover-glow glass flex h-8 w-8 items-center justify-center rounded-full text-xs"
                  >
                    <FiGithub />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="hover-glow glass flex h-8 w-8 items-center justify-center rounded-full text-xs"
                  >
                    <FiExternalLink />
                  </a>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default GithubProjects
