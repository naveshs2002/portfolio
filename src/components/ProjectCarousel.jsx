import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { projects } from '../data/projects'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
}

const featured = projects.filter((p) => p.featured)

const ProjectCarousel = () => {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={2}
      className="mt-12"
    >
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={24}
        slidesPerView={1}
        loop
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="!pb-12"
      >
        {featured.map((project) => (
          <SwiperSlide key={project.id}>
            <div className="glass hover-glow flex h-full flex-col overflow-hidden rounded-2xl">
              <div className="relative h-44 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="hover-glow glass flex h-9 w-9 items-center justify-center rounded-full text-sm"
                    aria-label={`${project.title} GitHub repository`}
                  >
                    <FiGithub />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="hover-glow glass flex h-9 w-9 items-center justify-center rounded-full text-sm"
                    aria-label={`${project.title} live demo`}
                  >
                    <FiExternalLink />
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  )
}

export default ProjectCarousel
