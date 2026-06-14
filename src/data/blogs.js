export const blogs = [
  {
    id: 'building-ai-resume-screener',
    title: 'Building an AI-Powered Resume Screener with Python',
    excerpt:
      'A walkthrough of how I used NLP techniques to extract skills from resumes and match them against job descriptions for smarter shortlisting.',
    date: 'March 2026',
    readTime: '6 min read',
    tags: ['AI', 'Python', 'NLP'],
    cover:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    content: `Hiring teams sift through hundreds of resumes for every open role, and most of that effort is repetitive pattern matching — the kind of task that's perfect for automation.

In this project, I built a lightweight resume screener that extracts structured information (skills, education, experience) from unstructured resume text using NLP, then scores each candidate against a target job description using cosine similarity on TF-IDF vectors.

The pipeline has three stages: text extraction from PDF/DOCX files, entity and skill extraction using spaCy's named entity recognition combined with a custom skills dictionary, and finally a scoring engine that ranks candidates.

What I learned: the biggest gains didn't come from a fancier model — they came from a well-curated skills taxonomy and careful text cleaning. Garbage in, garbage out applies twice as hard in NLP.

Next steps for this project include experimenting with transformer-based embeddings for semantic matching and adding a simple Flask dashboard for recruiters to review ranked candidates.`,
  },
  {
    id: 'sql-server-automation-tips',
    title: '5 Python Automation Scripts That Saved My Team Hours',
    excerpt:
      'Practical automation patterns for SQL Server reporting, data validation, and routine support tasks using Python and scheduled jobs.',
    date: 'January 2026',
    readTime: '5 min read',
    tags: ['Automation', 'SQL Server', 'Python'],
    cover:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
    content: `Working in enterprise support, a lot of time goes into recurring tasks — exporting reports, validating data integrity, and checking job statuses. Automating even a handful of these can free up hours every week.

Here are five scripts that made the biggest difference for my team:

1. A scheduled report exporter that connects to SQL Server, runs a parameterised query, and emails the result as a formatted Excel file every morning.

2. A data validation script that compares row counts and checksums across environments to catch sync issues early.

3. A log-scanner that tails application logs, flags error patterns, and posts a summary to a shared channel.

4. A job-health checker that queries SQL Agent job history and alerts if any job has failed or run longer than expected.

5. A cleanup utility that archives old log files and database backups based on retention policy.

None of these required exotic tooling — just Python, pyodbc, pandas, and the Windows Task Scheduler. The lesson: automation ROI often comes from small, boring tasks done consistently, not from big flashy systems.`,
  },
  {
    id: 'glassmorphism-react-portfolio',
    title: 'Designing a Glassmorphism Portfolio with React & Tailwind',
    excerpt:
      'Notes on building this very site — layered glass cards, animated gradients, and motion design using Framer Motion and Tailwind CSS.',
    date: 'June 2026',
    readTime: '4 min read',
    tags: ['React', 'Tailwind CSS', 'UI/UX'],
    cover:
      'https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1200&auto=format&fit=crop',
    content: `Glassmorphism works best when it's restrained — translucent panels need a vibrant, layered background to feel premium rather than muddy.

For this site, the background uses a slow animated gradient combined with soft floating shapes in blue, violet and teal to echo the brand palette. Every card uses a shared ".glass" utility class built around backdrop-filter blur, a subtle border, and low-opacity white fill.

For motion, I leaned on Framer Motion's whileInView for scroll-triggered fade-up reveals, and kept hover interactions to subtle glow and lift effects so the interface feels responsive without being noisy.

The biggest technical challenge was making the glass effect look good in both dark and light themes — the solution was to adjust the base opacity and border colour per theme rather than trying to use one set of values everywhere.`,
  },
]
