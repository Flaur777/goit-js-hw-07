import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery')

const galleryList = galleryItems.map( ({original, preview, description }) => {
 
 return ` <li class="gallery__item">
   <a class="gallery__link" href=${original}>
      <img class="gallery__image" src=${preview} alt=${description} title=${description} />
   </a>
</li>`
}).join('')

const galleryImage = document.querySelector('.gallery__image')
gallery.innerHTML = galleryList

new SimpleLightbox('.gallery a', {captionDelay: 250,})