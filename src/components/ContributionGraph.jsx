import { motion } from 'framer-motion'
import GitHubCalendar from 'react-github-calendar'
import { GITHUB_USERNAME } from '../services/github'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
}

const ContributionGraph = () => {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={1}
      className="glass hover-glow mt-12 rounded-2xl p-6 sm:p-8"
    >
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <h3 className="font-display text-lg font-semibold text-white">
          GitHub Contribution Activity
        </h3>
        <a
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noreferrer"
          className="text-sm font-medium text-primary hover:underline"
        >
          @{GITHUB_USERNAME}
        </a>
      </div>
      <div className="overflow-x-auto">
        <GitHubCalendar
          username={GITHUB_USERNAME}
          colorScheme="dark"
          fontSize={12}
          blockSize={11}
          blockMargin={4}
          theme={{
            dark: ['rgba(255,255,255,0.06)', '#38bdf8', '#8b5cf6', '#14b8a6', '#0ea5e9'],
          }}
        />
      </div>
    </motion.div>
  )
}

export default ContributionGraph
