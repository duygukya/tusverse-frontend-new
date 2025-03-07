import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="container-fluid footer text-white mb-0 ">
      <div className=" py-4">
        <div className="row">
          {/* Sol Bölüm */}
          <div className="col-md-3 d-flex flex-column justify-content-between">
            <ul className="list-unstyled">
              <li>Gizlilik Sözleşmesi</li>
              <li>Kullanım Şartları</li>
              <li>Çerez Politikası</li>
              <li>Aydınlatma Metni</li>
            </ul>
            {/* Sosyal Medya İkonları */}
            <div className="social-icons mt-3">
              <img
                src="src/assets/images/Facebook.png"
                alt="Facebook"
                className="social-icon me-3"
              />
              <img
                src="src/assets/images/Instagram.png"
                alt="Instagram"
                className="social-icon me-3"
              />
              <img
                src="src/assets/images/Youtube.png"
                alt="YouTube"
                className="social-icon"
              />
            </div>
          </div>

          {/* Orta Bölüm */}
          <div className="col-md-5 text-center">
            <h5>İletişim Bilgilerimiz</h5>
            <div className="contact-item d-flex align-items-center justify-content-center mb-2">
              <img
                src="src/assets/images/mail.png"
                alt="Email Icon"
                className="contact-icon me-2"
              />
              <p className="mb-0">tusverse.dershane@gmail.com</p>
            </div>
            <div className="contact-item d-flex align-items-center justify-content-center">
              <img
                src="src/assets/images/telefon.png"
                alt="Phone Icon"
                className="contact-icon me-2"
              />
              <p className="mb-0">0552 845 24 55</p>
            </div>
          </div>

          {/* Sağ Bölüm */}
          <div className="col-md-4 text-center d-flex flex-column align-items-center">
            {/* Logo */}
            <div className="footer-logo-container">
              <img
                src="src/assets/images/beyazlogo.png"
                alt="Logo"
                className="footer-logo"
              />
            </div>
            <div className="footer-right-content">
              <h5>Hemen İndirin</h5>
              {/* Uygulama Mağazası İkonları */}
              <div className="d-flex justify-content-center mb-3">
                <img
                  src="src/assets/images/appstore.png"
                  alt="App Store"
                  className="store-icon me-2"
                />
                <img
                  src="src/assets/images/googleplay.png"
                  alt="Google Play"
                  className="store-icon"
                />
              </div>
              {/* Ödeme Yöntemleri */}
              <div className="payment-methods">
                <img
                  src="src/assets/images/payments.png"
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
