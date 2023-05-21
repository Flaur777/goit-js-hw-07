import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery')

const galleryList = galleryItems.map( ({original, preview, description}) => 
 ` <li class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</li>`).join('')

gallery.innerHTML = galleryList

gallery.addEventListener('click', element => {
    element.preventDefault();
    if (element.target.nodeName !== 'IMG') {
		return
	}

    const selectedImage = element.target.getAttribute('data-source')

    const instance = basicLightbox.create(`
    <img src="${selectedImage}" width="800" height="600">`)
    instance.show()
    
    gallery.addEventListener('keydown', element => {
		if (element.key === 'Escape') {
			instance.close()
		}
	})
})