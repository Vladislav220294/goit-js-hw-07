import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
  galleryEl: document.querySelector('.gallery'),
};

const galleryList = galleryItems
  .map(img => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${img.original}">
    <img
      class="gallery__image"
      src="${img.preview}"
      data-source="${img.original}"
      alt="${img.description}"
    />
  </a>
</div>`;
  })
  .join('');

refs.galleryEl.insertAdjacentHTML('afterbegin', galleryList);
refs.galleryEl.addEventListener('click', onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }
  const dataSource = event.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${dataSource}" width="1280">
`);

  instance.show();
}
