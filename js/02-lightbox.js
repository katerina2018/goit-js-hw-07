import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryItemWrapper = document.querySelector('.gallery');

galleryItemWrapper.insertAdjacentHTML(
    'beforeend',
    createGalleryItems(galleryItems),
);

galleryItemWrapper.addEventListener('click', onItemGalleryClick);

function createGalleryItems(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return ` 
                <a class="gallery__item" href="${original}">
                    <img class="gallery__image" src="${preview}" alt="${description}" title="${description}" />
                </a>
             `;
        })
        .join(' ');
}

function onItemGalleryClick(e) {
    if (e.target.closest('.gallery__item')) {
        e.preventDefault();
    }
}

let gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
    showCounter: false,
    scrollZoom: false,
});