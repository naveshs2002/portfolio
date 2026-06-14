import { FaGraduationCap, FaBriefcase, FaLaptopCode, FaUniversity } from 'react-icons/fa'

export const educationTimeline = [
  {
    id: 'edu-1',
    date: '2020 — 2023',
    title: 'B.Sc Computer Science',
    subtitle: 'VET Institute of Arts and Science',
    description:
      'Built a strong foundation in programming, data structures, databases and computer fundamentals while developing an early interest in software development.',
    icon: FaUniversity,
    category: 'education',
  },
  {
    id: 'edu-2',
    date: '2023 — 2025',
    title: 'MCA — Master of Computer Applications',
    subtitle: 'Anna University',
    description:
      'Specialised in advanced software engineering, AI/ML fundamentals, full-stack development and database systems, graduating with a focus on applied, production-ready development.',
    icon: FaGraduationCap,
    category: 'education',
  },
]

export const experienceTimeline = [
  {
    id: 'exp-1',
    date: '2025',
    title: 'AI / ML Research Projects',
    subtitle: 'Independent & Academic Research',
    description:
      'Designed and built machine learning and computer vision projects using Python, TensorFlow and OpenCV — covering model training, evaluation pipelines and real-time inference experiments.',
    icon: FaLaptopCode,
    category: 'experience',
  },
  {
    id: 'exp-2',
    date: '2025 — Present',
    title: 'Software Professional',
    subtitle: 'Tata Consultancy Services (TCS)',
    description:
      'Working on enterprise applications, SQL Server database management, production support and automation. Driving process improvements through Python-based automation and contributing to full-stack feature development.',
    icon: FaBriefcase,
    category: 'experience',
  },
]

export const fullTimeline = [...educationTimeline, ...experienceTimeline].sort(
  (a, b) => parseInt(a.date) - parseInt(b.date)
)
