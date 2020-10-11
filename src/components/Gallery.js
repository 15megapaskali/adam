import React, {Component,useState,useEffect} from "react";
    
import $ from 'jquery';

import "lightbox2";


const Gallery = () => {

useEffect(()=>{
    const $listImage = ()=>{
        for (let index = 1; index <= 17; index++) {
            const $element = $(`
            <li className="li-gal">
                <div className="img-gal">
                    <a href="/images/image-${index}.jpg" data-lightbox="portfolio">
                        <img src="/images/image-${index}.jpg" alt="${index}" className="thumbnails">
                    </a>
                </div>
            </li>
            `);
            $('.lista-uslug').append($element)
        }
        
    }
    $listImage()
    
},[])


    
    return (
        
    <section className="promo-section" id="oferta">
        <div className="promo-head">
            <h2>Realizacje:</h2>
        </div>
        <div className="promo-container">

            <ul className="lista-uslug">
                
            
            </ul>
        </div>
    </section>
       );
}

export default Gallery;