import React, {Component,useState,useEffect} from "react";

import {Link} from "react-scroll";

// import Header from './Header'
// import Main from './MainBanner'
import Gallery from './Gallery'
import Contact from './Contact'
import Banner from './Banner';
import Uslugi from './Uslugi';



const Home = () => {

    const [stan, setStan] = useState('');

    useEffect(()=>{
        // Look for .hamburger
const hamburger = document.querySelector(".hamburger");
// On click
hamburger.addEventListener("click", function() {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    // Do something else, like open/close menu
    const x = document.getElementById("myLinks");
    // if (x.style.display === "none") {
    //     x.style.display = "block";
    // } else {
    //     x.style.display = "none";
    // }
    if (hamburger.classList.contains("is-active")) {
        x.style.display = "flex";
    } else {
        x.style.display = "none";
    }
});
    },[])

    const handleStanHome = (arg) =>{
    setStan(arg)
    }

    return (
        <>

<body>
<header className="header">
    <h1>
        <a href={null} className="logo" onClick={()=>{setStan('')}}>
            Usługi remontowo - budowalne Adam Mech
        </a>
    </h1>
    <nav className="desktop-menu">
        <ul className="desktop-menu-list">
            <li><a href={null} onClick={()=>{setStan('oferta')}}>Oferta</a></li>
            <li><a href={null} onClick={()=>{setStan('galeria')}}>Galeria</a></li>
            <Link to={'kontakt'} onClick={()=>{setStan('')}}>Kontakt</Link>
        </ul>
    </nav>

    <button className="hamburger hamburger--spin" type="button">
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
    </button>
</header>
<div className="main-container">

    <section className="mobile-menu">
        <div id="myLinks" className="">
            <a href={null} onClick={()=>{setStan('oferta')}}>Oferta</a>
            <a href={null} onClick={()=>{setStan('galeria')}}>Galeria</a>
            <Link to={'kontakt'} onClick={()=>{setStan('')}}>Kontakt</Link>
        </div>
    </section>
    {stan === ''  &&  <Banner/>}
    {stan === 'oferta' && <Uslugi/>}
    {stan === 'geleria' && <Gallery/>}
    
    
  
    <section className="contact-section" id="kontakt">
        <div className="div-contact">
            <div className="contact-head">
                <h3 className="contact-title">Masz pytania?</h3>
                <p className="contact-text">Zapraszam do kontaktu</p>
            </div>
            <div className="tele-adress">
                <ul className="email-phone">
                    <li><a href="mailto:info@Shop Online RWD.xyz"><i className="im im-mail"></i>
                        kontakt@remonty-ostrow.pl</a>
                    </li>
                    <li><a href="tel:+48787430515"><i className="im im-phone"></i>787 430 515</a></li>
                </ul>
            </div>
            <p className="contact-text">
                O firmie:<br/>
                Adam Mech <br/>
                NIP 6222766409<br/>
                REGON 380332325<br/>
            </p>
        </div>

        <div className="div-input">
            <div className="input-container">
                <div className="contact-head">
                    
                    
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2475.9775962307335!2d17.82924891566238!3d51.64193537965752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ab5428937acbb%3A0x4349c4a9c4a24d38!2sElewacje%20i%20wyko%C5%84czenia%20wn%C4%99trz!5e0!3m2!1spl!2spl!4v1602102289585!5m2!1spl!2spl" width="400" height="300" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

                </div>
            </div>

        </div>


    </section> 

</div>
<footer className="footer-section">
    <div className="footer-logo">
        <h2>
            <a href={null} className="logo">
                Usługi remontowo - budowalne Adam Mech
            </a>
        </h2>
        <small className="footer-text">
            © 2020 Adam Mech, All Rights Reserved<br/>
           
        </small>
    </div>
    <ul className="footer-menu footer-text">
        <li><a href={null}>Polityka Prywatności</a></li>
        <li>Strona stworzona przez <a href="https://vertago-web.000webhostapp.com/">Vertago</a></li> 
    </ul>
</footer>


</body>

        </>
       );
}




export default Home;