import React from "react";
import "./Footer.css";
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import youtube from '../assets/youtube.png';
import mail from '../assets/mail.png';
import telefon from '../assets/telefon.png';
import beyazlogo from '../assets/beyazlogo.png';
import appstore from '../assets/appstore.png';
import googleplay from '../assets/googleplay.png';
import payments from '../assets/payments.png'
const Footer = () => {
  return (
    <footer className="container-fluid footer text-white mb-0 ">
      <div className=" py-4">
        <div className="row">
          
          <div className="col-md-3  d-flex flex-column justify-content-between ">
            <ul className="list-unstyled">
              <li>Gizlilik Sözleşmesi</li>
              <li>Kullanım Şartları</li>
              <li>Çerez Politikası</li>
              <li>Aydınlatma Metni</li>
            </ul>
           
            <div className="social-icons mt-3">
              <img
                src={facebook}
                alt="Facebook"
                className="social-icon me-3"
              />
              <img
                src={instagram}
                alt="Instagram"
                className="social-icon me-3"
              />
              <img
                src={youtube}
                alt="YouTube"
                className="social-icon"
              />
            </div>
          </div>

         
          <div className="col-md-5 text-center">
            <h5>İletişim Bilgilerimiz</h5>
            <div className="contact-item d-flex align-items-center justify-content-center mb-2">
              <img
                src={mail}
                alt="Email Icon"
                className="contact-icon me-2"
              />
              <p className="mb-0">tusverse.dershane@gmail.com</p>
            </div>
            <div className="contact-item d-flex align-items-center justify-content-center">
              <img
                src={telefon}
                alt="Phone Icon"
                className="contact-icon me-2"
              />
              <p className="mb-0">0552 845 24 55</p>
            </div>
          </div>

          
          <div className="col-md-4 text-center d-flex flex-column align-items-center">
            
            <div className="footer-logo-container">
              <img
                src={beyazlogo}
                alt="Logo"
                className="footer-logo"
              />
            </div>
            <div className="footer-right-content">
              <h5>Hemen İndirin</h5>
              
              <div className="d-flex justify-content-center mb-3">
                <img
                  src={appstore}
                  alt="App Store"
                  className="store-icon me-2"
                />
                <img
                  src={googleplay}
                  alt="Google Play"
                  className="store-icon"
                />
              </div>
            
              <div className="payment-methods">
                <img
                  src={payments}
                  alt="Ödeme Yöntemleri"
                  className="payment-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
