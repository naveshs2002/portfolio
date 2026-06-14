import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiClock } from 'react-icons/fi'
import { blogs } from '../data/blogs'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: 'easeOut' },
  }),
}

const Blog = () => {
  return (
    <section id="blog" className="section relative">
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0}
        className="eyebrow mb-3 text-center"
      >
        Writing &amp; notes
      </motion.p>
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={1}
        className="text-center font-display text-3xl font-bold sm:text-4xl"
      >
        From the <span className="gradient-text">Blog</span>
      </motion.h2>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {blogs.map((post, idx) => (
          <motion.article
            key={post.id}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={idx + 2}
            whileHover={{ y: -6 }}
            className="glass hover-glow flex flex-col overflow-hidden rounded-2xl"
          >
            <div className="h-40 w-full overflow-hidden">
              <img
                src={post.cover}
                alt={post.title}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="mb-2 flex items-center gap-3 text-xs text-slate-400">
                <span>{post.date}</span>
                <span className="flex items-center gap-1">
                  <FiClock size={12} /> {post.readTime}
                </span>
              </div>
              <h3 className="font-display text-lg font-semibold leading-snug text-white">
                {post.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                {post.excerpt}
              </p>
              <Link
                to={`/blog/${post.id}`}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
              >
                Read article <FiArrowRight size={14} />
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default Blog
