import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');
   
const markup = galleryItems.map(({ description, original, preview }) => 
`<div class="gallery__item"><a class="gallery__link" href='${original}'>
   <img class="gallery__image" src='${preview}' data-source='${original}'
   alt='${description}'/></a></div>`)
   .join('');
gallery.insertAdjacentHTML("afterbegin", markup);

gallery.addEventListener(`click`, onClick);

function onClick(event) {
  event.preventDefault();
      const instance = basicLightbox.create(` 
        <img src=${event.target.dataset.source} width="800" height="600">
    `);
    instance.show(); 
}
