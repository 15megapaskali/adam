import React, {Component,useState,useEffect,} from "react";

const Uslugi = () => {
    return (
    <section className="promo-section" id="oferta">
        <div className="promo-head">
            <h2>Oferuję:</h2>
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

export default Uslugi;