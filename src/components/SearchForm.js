import { renderImages } from './ImageCard.js'

export function renderSearchForm() {
  const searchContainer = document.getElementById('search-container')

  searchContainer.innerHTML = `
    <form id="search-form" class="search-form">
      <input type="text" id="search-input" placeholder="Search for images" required />
      <button type="submit">Search</button>
    </form>
  `

  const searchForm = document.getElementById('search-form')
  searchForm.addEventListener('submit', async (event) => {
    event.preventDefault()
    const query = document.getElementById('search-input').value
    const images = await fetchImages(query)
    renderImages(images)
  })
}

async function fetchImages(query) {
  const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY
  const response = await fetch(
    `https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}`
  )
  const data = await response.json()
  return data.results
}
