import React, {Component,useState,useEffect,} from "react";
import {Link} from 'react-router-dom';

const Uslugi = ({props}) => {


    return (
    <section className="promo-section" id="oferta">
        <div className="promo-head">
            <h2>Oferuję:</h2>
        </div>
        <div className="promo-container">
            <ul className="lista-uslug">
                <li>ocieplenia budynków</li>
                <li>zabudowy gipsowo-kartonowe</li>
                <li>adaptacje pomieszczeń</li>
                <li>szpachlowanie</li>
                <li>malowanie</li>
                <li>płytkowanie</li>
                <li>inne prace remontowo-budowalne</li>
            </ul>
        </div>
        <p>Zaprszam do obejrzenia wykonanych zleceń w zakładce <strong id="link-galeria" onClick={()=>props('galeria')}>GALERIA</strong></p>
    </section>
       );
}

export default Uslugi;