export function renderImages(images) {
  const imageResults = document.getElementById('image-results')
  imageResults.innerHTML = images
    .map(
      (image) => `
    <div class="image-card">
      <img src="${image.urls.small}" alt="${image.alt_description}" />
    </div>
  `
    )
    .join('')
}
