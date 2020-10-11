import React, {Component,useState,useEffect,} from "react";

const Banner = () => {
    return (
    <section className="banner-section">
        <div className="banner-head">
            <h2 className="banner-title">
                Usługi remontowo-budowalne<br/>
                Adam Mech
            </h2>

            <a href="tel:+48787430515">
                <button className="button-title">
                    <i className="im im-phone"></i> 787 430 515
                </button>
            </a>
        </div>
 
    </section>
    );
}

export default Banner;