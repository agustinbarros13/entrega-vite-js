import { renderSearchForm } from '../components/SearchForm.js'
import { fetchImages } from '../unsplashService.js'
import { renderImages } from './renderImages.js' // Asegúrate de que esta ruta sea correcta y el archivo exista

export const printHome = async () => {
  try {
    const result = await fetchImages()
    renderImages(result)
  } catch (error) {
    console.error('Error fetching images:', error)
  }
}

export function renderHome() {
  const app = document.getElementById('app')
  app.innerHTML = `
    <header>
      <h1>Pinterest Clone</h1>
      <button id="reload-button">Reload Images</button>
    </header>
    <main>
      <section id="search-container"></section>
      <section id="image-results" class="image-results"></section>
    </main>
  `

  renderSearchForm()
  printHome()

  // Agregar evento al botón para recargar la página
  document.getElementById('reload-button').addEventListener('click', printHome)
}
