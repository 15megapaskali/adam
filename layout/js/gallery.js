
import $ from '../node_modules/jquery/dist/jquery';

const $listImage = ()=>{
    for (let index = 1; index <= 17; index++) {
        const $element = $(`

            <div class="img-gal">
                <a href="images/image-${index}.jpg" data-lightbox="portfolio">
                    <img src="images/image-${index}.jpg" alt="${index}" class="thumbnails">
                </a>
            </div>
        `);
        $('.promo-container').append($element)
    }
    
    }
    
$listImage();
    