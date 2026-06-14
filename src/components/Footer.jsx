import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi'

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

const Footer = () => {
  const handleNavClick = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative mt-10 border-t border-white/5">
      <div className="section grid gap-10 !py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="font-display text-2xl font-bold">
            <span className="gradient-text">Navesh</span>
            <span className="text-slate-200">.</span>
          </a>
          <p className="mt-3 max-w-xs text-sm text-slate-400">
            Software Professional at TCS, building thoughtful, performant applications
            across web, AI/ML and automation.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href="https://github.com/naveshs2002"
              target="_blank"
              rel="noreferrer"
              className="hover-glow glass flex h-10 w-10 items-center justify-center rounded-full"
              aria-label="GitHub"
            >
              <FiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/naveshs2002"
              target="_blank"
              rel="noreferrer"
              className="hover-glow glass flex h-10 w-10 items-center justify-center rounded-full"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>
            <a
              href="mailto:hello@navesh.in"
              className="hover-glow glass flex h-10 w-10 items-center justify-center rounded-full"
              aria-label="Email"
            >
              <FiMail />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-slate-200">
            Navigation
          </h4>
          <ul className="mt-4 flex flex-col gap-2">
            {NAV_LINKS.slice(0, 4).map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm text-slate-400 transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-slate-200">
            More
          </h4>
          <ul className="mt-4 flex flex-col gap-2">
            {NAV_LINKS.slice(4).map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm text-slate-400 transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-slate-200">
            Based in
          </h4>
          <p className="mt-4 text-sm text-slate-400">Chennai, Tamil Nadu, India</p>
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="hover-glow glass mt-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-slate-200"
          >
            Back to top <FiArrowUp size={14} />
          </a>
        </div>
      </div>

      <div className="border-t border-white/5 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Navesh S. Built with React, Vite &amp; Tailwind CSS. Hosted at{' '}
        <a href="https://navesh.in" target="_blank" rel="noreferrer" className="text-primary hover:underline">
          navesh.in
        </a>
      </div>
    </footer>
  )
}

export default Footer
