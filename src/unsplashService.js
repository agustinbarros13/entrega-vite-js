export async function fetchImages(query = '') {
  const apiKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY
  const endpoint = query
    ? `https://api.unsplash.com/search/photos?query=${query}&client_id=${apiKey}`
    : `https://api.unsplash.com/photos/random?count=10&client_id=${apiKey}`

  const response = await fetch(endpoint)
  const data = await response.json()

  return query ? data.results : data
}
