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
  galleryItems.map((item) => {
    if (item.original === event.target.dataset.source) {
      const instance = basicLightbox.create(` 
        <img src=${item.original} width="800" height="600">
    `);
    instance.show();
    }
   }
  )   
}
