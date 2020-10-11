import React, {Component,useState,useEffect,} from "react";
    
import $ from 'jquery';

const Gallery = () => {



const $listImage = ()=>{
    for (let index = 1; index <= 17; index++) {
        const $element = $(`

            <div className="img-gal">
                <a href="images/image-${index}.jpg" data-lightbox="portfolio">
                    <img src="images/image-${index}.jpg" alt="${index}" className="thumbnails">
                </a>
            </div>
        `);
        $('.promo-container').append($element)
    }
    
    }
    
$listImage();
    
    return (
    <section className="promo-section" id="oferta">
        <div className="promo-head">
            <h2>Realizacje:</h2>
        </div>
        <div className="promo-container">

            <ul className="lista-uslug">
                <li>ocieplenia budynków</li>
                <li>zabudowy gipsowo-kartonowe</li>
                <li>adaptacja pomieszczeń</li>
                <li>szpachlowanie</li>
                <li>malowanie</li>
                <li>płytkowanie</li>
                <li>inne prace remontowo-budowalne </li>
            </ul>
        </div>
    </section>
       );
}

export default Gallery;