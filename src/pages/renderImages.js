export function renderImages(images) {
  const imageResults = document.getElementById('image-results')
  imageResults.innerHTML = ''

  if (!images.length) {
    imageResults.innerHTML = `<p>No images found.</p>`
    return
  }

  images.forEach((image) => {
    const imgCard = document.createElement('div')
    imgCard.className = 'image-card'
    imgCard.innerHTML = `
      <img src="${image.urls.small}" alt="${image.alt_description || 'Image'}">
    `
    imageResults.appendChild(imgCard)
  })
}
