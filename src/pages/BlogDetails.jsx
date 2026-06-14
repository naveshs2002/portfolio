import { Link, useParams, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowLeft, FiClock, FiCalendar } from 'react-icons/fi'
import { blogs } from '../data/blogs'

const BlogDetails = () => {
  const { id } = useParams()
  const post = blogs.find((b) => b.id === id)

  if (!post) return <Navigate to="/" replace />

  return (
    <article className="section relative pt-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mx-auto max-w-3xl"
      >
        <Link
          to="/#blog"
          className="hover-glow glass mb-8 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-slate-200"
        >
          <FiArrowLeft /> Back to blog
        </Link>

        <div className="mb-6 flex flex-wrap items-center gap-3 text-xs text-slate-400">
          <span className="flex items-center gap-1">
            <FiCalendar size={12} /> {post.date}
          </span>
          <span className="flex items-center gap-1">
            <FiClock size={12} /> {post.readTime}
          </span>
        </div>

        <h1 className="font-display text-3xl font-bold leading-tight sm:text-4xl">
          {post.title}
        </h1>

        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-primary"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl">
          <img src={post.cover} alt={post.title} className="h-64 w-full object-cover sm:h-96" />
        </div>

        <div className="glass mt-8 rounded-2xl p-6 sm:p-10">
          {post.content.split('\n\n').map((para, idx) => (
            <p key={idx} className="mb-4 text-sm leading-relaxed text-slate-300 sm:text-base">
              {para}
            </p>
          ))}
        </div>
      </motion.div>
    </article>
  )
}

export default BlogDetails
