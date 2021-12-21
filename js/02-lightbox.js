import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const refs = {
  galleryEl: document.querySelector('.gallery'),
};

const galleryList = galleryItems
  .map(img => {
    return `<a class="gallery__item" href="${img.original}">
  <img class="gallery__image" src="${img.preview}" alt="${img.description}" />
</a>`;
  })
  .join('');

refs.galleryEl.insertAdjacentHTML('afterbegin', galleryList);
refs.galleryEl.addEventListener('click', onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }
}
var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: '250',
  captionPosition: 'bottom',
});
