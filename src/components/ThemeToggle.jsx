import { FiSun, FiMoon } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle color theme"
      className="glass hover-glow flex h-10 w-10 items-center justify-center rounded-full text-lg text-primary"
    >
      {theme === 'dark' ? <FiSun /> : <FiMoon />}
    </motion.button>
  )
}

export default ThemeToggle
