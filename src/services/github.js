const GITHUB_USERNAME = 'naveshs2002'
const API_BASE = 'https://api.github.com'

/**
 * Fetch public profile information for the configured GitHub user.
 * Returns null on failure so the UI can gracefully fall back to static data.
 */
export async function fetchGithubProfile() {
  try {
    const res = await fetch(`${API_BASE}/users/${GITHUB_USERNAME}`)
    if (!res.ok) throw new Error('Failed to fetch GitHub profile')
    return await res.json()
  } catch (err) {
    console.error('GitHub profile fetch error:', err)
    return null
  }
}

/**
 * Fetch public repositories, sorted by most recently updated.
 */
export async function fetchGithubRepos(perPage = 6) {
  try {
    const res = await fetch(
      `${API_BASE}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=${perPage}`
    )
    if (!res.ok) throw new Error('Failed to fetch GitHub repos')
    return await res.json()
  } catch (err) {
    console.error('GitHub repos fetch error:', err)
    return []
  }
}

export { GITHUB_USERNAME }
