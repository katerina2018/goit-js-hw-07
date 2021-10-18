import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

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

let gallery = new SimpleLightbox('.gallery a');
console.log('🚀 ~ gallery', gallery);

gallery.on('change.simplelightbox', function() {
    // do something…
});

gallery.defaultOptions.captionsData = 'alt';
gallery.defaultOptions.showCounter = false;
gallery.defaultOptions.captionPosition = 'top'; //не работает??
gallery.defaultOptions.captionDelay = 250;
// gallery.defaultOptions.scrollZoom = false;
gallery.defaultOptions.scrollZoomFactor = 0;
console.log('🚀 ~ gallery.overlay', gallery.defaultOptions.scrollZoom);

// console.log('🚀 ~ gallery.overlay', gallery.defaultOptions.captionPosition);
// gallery.overlay ;

// let gallery = new SimpleLightbox('.gallery a', {
//   captionsData: 'alt',
//   captionPosition: 'bottom',
//   captionDelay: 250,
// });