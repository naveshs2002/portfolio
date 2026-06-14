import { motion } from 'framer-motion'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { fullTimeline } from '../data/experience'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
}

const categoryStyles = {
  education: {
    background: 'linear-gradient(135deg, rgba(56,189,248,0.18), rgba(255,255,255,0.06))',
    iconBg: 'linear-gradient(135deg, #38bdf8, #0ea5e9)',
  },
  experience: {
    background: 'linear-gradient(135deg, rgba(139,92,246,0.18), rgba(255,255,255,0.06))',
    iconBg: 'linear-gradient(135deg, #8b5cf6, #6d28d9)',
  },
}

const Timeline = () => {
  return (
    <section id="experience" className="section relative">
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0}
        className="eyebrow mb-3 text-center"
      >
        My journey
      </motion.p>
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={1}
        className="text-center font-display text-3xl font-bold sm:text-4xl"
      >
        Education &amp; <span className="gradient-text">Experience</span>
      </motion.h2>

      <div className="mt-10">
        <VerticalTimeline lineColor="rgba(255,255,255,0.12)">
          {fullTimeline.map((item, idx) => {
            const Icon = item.icon
            const style = categoryStyles[item.category]
            return (
              <VerticalTimelineElement
                key={item.id}
                date={item.date}
                dateClassName="!text-primary !font-mono !text-sm"
                iconStyle={{
                  background: style.iconBg,
                  color: '#0f172a',
                  boxShadow: '0 0 0 4px rgba(15,23,42,0.6), 0 0 25px rgba(56,189,248,0.35)',
                }}
                icon={<Icon />}
                contentStyle={{
                  background: style.background,
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: '1rem',
                  boxShadow: 'none',
                  color: '#e2e8f0',
                }}
                contentArrowStyle={{ borderRight: '7px solid rgba(255,255,255,0.12)' }}
              >
                <span className="eyebrow !text-[0.65rem] opacity-80">
                  {item.category === 'education' ? 'Education' : 'Experience'}
                </span>
                <h3 className="mt-2 font-display text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <h4 className="text-sm font-medium text-slate-400">{item.subtitle}</h4>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {item.description}
                </p>
              </VerticalTimelineElement>
            )
          })}
        </VerticalTimeline>
      </div>
    </section>
  )
}

export default Timeline
