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
                <div class="gallery__item">
                    <a class="gallery__link" href="${original}">
                        <img
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"/>
                    </a>
                </div> `;
        })
        .join(' ');
}

function onItemGalleryClick(e) {
    if (e.target.closest('.gallery__link')) {
        e.preventDefault();
    }
}