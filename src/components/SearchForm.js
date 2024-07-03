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
  let response = await fetch(
    `https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}`
  )
  let data = await response.json()

  if (data.results.length === 0 && query !== 'gatos') {
    response = await fetch(
      `https://api.unsplash.com/search/photos?query=gatos&client_id=${accessKey}`
    )
    data = await response.json()
    alert(
      'No se encontraron imágenes con la palabra introducida. Se muestran imágenes de gatos como alternativa.'
    )
  }

  return data.results
}
