import { galleryItems } from './gallery-items.js';
// Change code below this line
let images = galleryItems;

const imgCard = ({preview, original, description}) => 
    `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </div>`;

const gallery = document.querySelector('div.gallery');

const render = () => {
    const list = images.map((item) => imgCard(item)).join('');
    
    gallery.insertAdjacentHTML('beforeend', list);
};

gallery.addEventListener('click', (e) => {
    e.preventDefault();

    if(e.target === e.currentTarget) return;

    const img = e.target.closest('img');
    const currentImg = img.dataset.source;
    console.log(img.dataset.source);
    viewItem();
});

const viewItem = (currentImg) => {
    const instance = basicLightbox.create(`
    <div class="modal">
        ${currentImg}
    </div>
    `)

    instance.show()


    console.log(currentImg)
};

render();



