import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const ulGallery = document.querySelector('.gallery')
galleryItems.forEach(({preview,original,description}) => {
    ulGallery.insertAdjacentHTML('beforeend',`<div class="gallery__item"><a href=${original} class="gallery__link"><img class="gallery__image" src=${preview} data-caption=${description} data-source=${original} alt=${description}></a></div>`)
});

let lightbox = new SimpleLightbox('.gallery a', {captions: true,
    captionSelector: 'img',captionsType:'text',captionsData:'alt',captionDelay:250});
