import React from 'react'
import "./footer.css"
import footer_logo from "../Assets/logo_big.png"
import instagram_icon from "../Assets/instagram_icon.png"
import pintester_icon from "../Assets/pintester_icon.png"
import whatsapp_icon from "../Assets/whatsapp_icon.png"

function Footer() {
    return(
        <div className='footer '>
           <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>SHOPPER</p>
           </div>
           <ul className='footer-links'>
            <ul>Company</ul>
            <ul>Products</ul>
            <ul>Offices</ul>
            <ul>Contact</ul>
           </ul>
           <div className="footer-social-icon">
            <div className="footer-icon-container">
                <img src={instagram_icon} alt=""/>
            </div>
            <div className="footer-icon-container">
                <img src={pintester_icon} alt=""/>
            </div>
            <div className="footer-icon-container">
                <img src={whatsapp_icon} alt=""/>
            </div>
           </div>
           <div className="footer_copyrights">
            <hr />
            <p>Copyrights @2024 -All Right Reserved.</p>
           </div>
        </div>
    )
}
export default Footer 