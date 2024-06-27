import { renderSearchForm } from '../components/SearchForm.js'

export function renderHome() {
  const app = document.getElementById('app')
  app.innerHTML = `
    <header>
      <h1>Pinterest Clone</h1>
    </header>
    <main>
      <section id="search-container"></section>
      <section id="image-results" class="image-results"></section>
    </main>
  `

  renderSearchForm()
}
