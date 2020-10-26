import React, {Component,useState,useEffect} from "react";
    
import $ from 'jquery';

import "lightbox2";

import img1 from '../images/image-1.jpg';
import img2 from '../images/image-2.jpg';
import img3 from '../images/image-3.jpg';
import img4 from '../images/image-4.jpg';
import img5 from '../images/image-5.jpg';
import img6 from '../images/image-6.jpg';
import img7 from '../images/image-7.jpg';
import img8 from '../images/image-8.jpg';
import img9 from '../images/image-9.jpg';
import img10 from '../images/image-10.jpg';
import img11 from '../images/image-11.jpg';
import img12 from '../images/image-12.jpg';
import img13 from '../images/image-13.jpg';
import img14 from '../images/image-14.jpg';
import img15 from '../images/image-15.jpg';
import img16 from '../images/image-16.jpg';
import img17 from '../images/image-17.jpg';



const Gallery = () => {

// useEffect(()=>{
//     const $listImage = ()=>{
//         for (let index = 1; index <= 17; index++) {
//             const $element = $(`
//             <li class="li-gal">
//                 <div class="img-gal">
//                     <a href="/images/image-${index}.jpg" data-lightbox="portfolio">
//                         <img src="/images/image-${index}.jpg" alt="${index}" class="thumbnails">
//                     </a>
//                 </div>
//             </li>
//             `);
//             $('.lista-uslug').append($element)
//         }
        
//     }
//     $listImage()
    
// },[])


    
    return (
        
    <section className="promo-section" id="oferta">
        <div className="promo-head">
            <h2>Realizacje:</h2>
        </div>
        <div className="promo-container">

            <ul className="lista-img">
                <li><a href={img1} data-lightbox="portfolio"><img src={img1} alt="Elewacja domu Adam Mech"></img></a></li>
                <li><a href={img2} data-lightbox="portfolio"><img src={img2} alt="Elewacja domu Adam Mech"></img></a></li>
                <li><a href={img3} data-lightbox="portfolio"><img src={img3} alt="Elewacja domu Adam Mech"></img></a></li>
                <li><a href={img4} data-lightbox="portfolio"><img src={img4} alt="Elewacja domu Adam Mech"></img></a></li>
                <li><a href={img5} data-lightbox="portfolio"><img src={img5} alt="Elewacja domu Adam Mech"></img></a></li>
                <li><a href={img6} data-lightbox="portfolio"><img src={img6} alt="Wykończenia wnętrz remonty ostrów"></img></a></li>
                <li><a href={img7} data-lightbox="portfolio"><img src={img7} alt="Wykończenie łazienki remonty ostrów"></img></a></li>
                <li><a href={img8} data-lightbox="portfolio"><img src={img8} alt="Wykończenie łazienki remonty ostrów"></img></a></li>
                <li><a href={img9} data-lightbox="portfolio"><img src={img9} alt="Wykończenie łazienki remonty ostrów"></img></a></li>
                <li><a href={img10} data-lightbox="portfolio"><img src={img10} alt="Wykończenie łazienki remonty ostrów"></img></a></li>
                <li><a href={img11} data-lightbox="portfolio"><img src={img11} alt="Elewacja tynk"></img></a></li>
                <li><a href={img12} data-lightbox="portfolio"><img src={img12} alt="Wykończenie łazienki remonty ostrów"></img></a></li>
                <li><a href={img13} data-lightbox="portfolio"><img src={img13} alt="Wykończenie łazienki remonty ostrów"></img></a></li>
                <li><a href={img14} data-lightbox="portfolio"><img src={img14} alt="Elewacja domu"></img></a></li>
                <li><a href={img15} data-lightbox="portfolio"><img src={img15} alt="Wykończenie łazienki remonty ostrów"></img></a></li>
                <li><a href={img16} data-lightbox="portfolio"><img src={img16} alt="Wykończenie łazienki remonty ostrów"></img></a></li>
                <li><a href={img17} data-lightbox="portfolio"><img src={img17} alt="Wykończenie łazienki remonty ostrów"></img></a></li>
                
            
            </ul>
        </div>
    </section>
       );
}

export default Gallery;