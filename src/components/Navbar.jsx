import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import ThemeToggle from './ThemeToggle'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="section flex items-center justify-between !py-0">
        <div
          className={`flex w-full items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 ${
            scrolled ? 'glass shadow-glow' : 'bg-transparent'
          }`}
        >
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="font-display text-xl font-bold tracking-tight"
          >
            <span className="gradient-text">Navesh</span>
            <span className="text-slate-200 dark:text-slate-200">.</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <ThemeToggle />
            </div>
            <button
              onClick={() => setOpen((o) => !o)}
              className="glass flex h-10 w-10 items-center justify-center rounded-full text-lg lg:hidden"
              aria-label="Toggle menu"
            >
              {open ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="section !py-0 lg:hidden"
          >
            <div className="glass-strong mt-3 flex flex-col gap-1 rounded-2xl p-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-slate-200 transition-colors hover:bg-white/5 hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-2 flex justify-end px-3 sm:hidden">
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
