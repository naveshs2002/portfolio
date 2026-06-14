import { motion } from 'framer-motion'
import { FiAward, FiExternalLink } from 'react-icons/fi'
import { certifications } from '../data/certifications'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: 'easeOut' },
  }),
}

const Certifications = () => {
  return (
    <section id="certifications" className="section relative">
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0}
        className="eyebrow mb-3 text-center"
      >
        Continuous learning
      </motion.p>
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={1}
        className="text-center font-display text-3xl font-bold sm:text-4xl"
      >
        Certifications &amp; <span className="gradient-text">Achievements</span>
      </motion.h2>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, idx) => (
          <motion.div
            key={cert.id}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={idx + 2}
            whileHover={{ y: -6, scale: 1.02 }}
            className="glass hover-glow group overflow-hidden rounded-2xl"
          >
            <div className="relative h-32 w-full overflow-hidden">
              <img
                src={cert.image}
                alt={cert.title}
                className="h-full w-full object-cover opacity-60 transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute bottom-3 left-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/40 to-secondary/40 text-lg text-white">
                <FiAward />
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-display text-base font-semibold leading-snug text-white">
                {cert.title}
              </h3>
              <div className="mt-2 flex items-center justify-between text-sm text-slate-400">
                <span>{cert.issuer}</span>
                <span className="font-mono text-xs">{cert.date}</span>
              </div>
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
              >
                View credential <FiExternalLink size={14} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Certifications
