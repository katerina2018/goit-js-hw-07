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
                <div class="gallery__item">
                    <a class="gallery__link" href="${original}">
                        <img loading="lazy"
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"/>
                    </a>
                </div> `;
        })
        .join(' ');
}

function itemIvent(e) {
    const imgSrc = e.target.dataset.source;
    const modalWindow = basicLightbox.create(
        `<img width="1400" height="900" src="${imgSrc}">`,
    );

    return modalWindow;
}

function onItemGalleryClick(e) {
    if (e.target.closest('.gallery__link')) {
        e.preventDefault();
    }

    let modal = itemIvent(e);
    console.log('message3');
    modal.show();

    const elDiv = document.querySelector('div.basicLightbox ');

    window.addEventListener('keydown', onEscKeyPress);

    function onEscKeyPress(e) {
        const ESC_KEY_CODE = 'Escape';
        const isEscKey = e.code === ESC_KEY_CODE;

        if (isEscKey) {
            console.log('вызов по условию onEscKeyPress');

            modal.close();
        }
        console.log('вызов  onEscKeyPress');
    }
}