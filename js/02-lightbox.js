import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

let images = galleryItems;

const imgCard = ({preview, original, description}) => 
    `<a class="gallery__item" href="${original}">
        <img 
            class="gallery__image" 
            src="${preview}" 
            alt="${description}"
        />
    </a>`;

const gallery = document.querySelector('ul.gallery');

const render = () => {
    const list = images.map((item) => imgCard(item)).join('');
    
    gallery.insertAdjacentHTML('beforeend', list);
};

render();

new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
});
