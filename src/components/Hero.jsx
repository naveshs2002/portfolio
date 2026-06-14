import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FiDownload, FiArrowRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import FloatingShapes from './FloatingShapes'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: 'easeOut' },
  }),
}

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      <FloatingShapes />

      <div className="section relative grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Text content */}
        <div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="eyebrow mb-4"
          >
            Welcome to my portfolio
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="font-display text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl"
          >
            Hi, I&apos;m{' '}
            <span className="gradient-text">Navesh S</span>
          </motion.h1>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="mt-4 h-10 font-display text-xl font-semibold text-slate-200 sm:text-2xl lg:text-3xl"
          >
            <TypeAnimation
              sequence={[
                'Software Engineer',
                2000,
                'AI Developer',
                2000,
                'Full Stack Developer',
                2000,
                'MCA Graduate',
                2000,
              ]}
              wrapper="span"
              speed={50}
              className="text-primary"
              repeat={Infinity}
            />
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg"
          >
            Software Professional at <span className="text-slate-200">TCS</span>, building
            enterprise applications, automation tools and AI/ML driven solutions.
            Passionate about Artificial Intelligence, Machine Learning, Cloud Computing,
            DevOps and Full Stack Development — based in Chennai, India.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="/resume-navesh-s.pdf"
              download
              className="hover-glow glass-strong inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 px-6 py-3 text-sm font-semibold text-white"
            >
              <FiDownload /> Download Resume
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="hover-glow glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-slate-200"
            >
              View Projects <FiArrowRight />
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={5}
            className="mt-8 flex items-center gap-4"
          >
            <span className="text-sm text-slate-500">Find me on</span>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/naveshs2002"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="hover-glow glass flex h-11 w-11 items-center justify-center rounded-full text-lg text-slate-200"
              >
                <FiGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/naveshs2002"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="hover-glow glass flex h-11 w-11 items-center justify-center rounded-full text-lg text-slate-200"
              >
                <FiLinkedin />
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                aria-label="Contact"
                className="hover-glow glass flex h-11 w-11 items-center justify-center rounded-full text-lg text-slate-200"
              >
                <FiMail />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Profile visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative mx-auto flex h-72 w-72 items-center justify-center sm:h-96 sm:w-96"
        >
          <div className="absolute h-full w-full rounded-full bg-gradient-to-tr from-primary via-secondary to-accent opacity-30 blur-2xl animate-glowPulse" />
          <div className="glass-strong relative flex h-64 w-64 items-center justify-center rounded-full sm:h-80 sm:w-80">
            <div className="absolute inset-3 rounded-full border border-dashed border-primary/30 animate-[spin_30s_linear_infinite]" />
            <div className="flex h-52 w-52 items-center justify-center rounded-full bg-gradient-to-br from-primary/30 via-secondary/30 to-accent/30 font-display text-6xl font-bold text-white sm:h-64 sm:w-64">
              NS
            </div>
          </div>
          <div className="glass absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full px-5 py-2 text-xs font-medium tracking-wide text-slate-200 sm:text-sm">
            Chennai, Tamil Nadu · IN
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
