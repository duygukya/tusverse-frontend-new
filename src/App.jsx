import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import HomePage from "./pages/HomePage/HomePage";
import EgitmenlerPage from "./pages/EgitmenlerPage/EgitmenlerPage";
import EgitmenDetay from "./pages/EgitmenDetayPage/EgitmenDetay"
import VideoSatis from "./pages/SatisPage/Video/VideoSatisPage";
import KitapSatis from "./pages/SatisPage/Kitaplar/Kitapsatis";
import Denemeler from "./pages/SatisPage/Denemeler/Denemeler"
import VideoIzleme from "./pages/VideoIzleme/Videoizleme"
import DenemeSınavı from "./pages/DenemeSınavı/DenemeSınavı"
import RegisterForm from "./pages/RegisterPage/RegisterForm";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Profilim from "./pages/Profil/Profilim";
import VideoPaketlerim from "./pages/Profil/VideoPaketlerim";
import Kitaplarım from "./pages/Profil/Kitaplarım";
import Denemelerim from "./pages/Profil/Denemelerim";
import FaqSection from "./components/FaqSections";
import Sepetim from "./pages/Profil/Sepetim"
import KitapDetay from "./pages/SatisPage/Kitaplar/KitapDetay";
import VideoDetay from "./pages/SatisPage/Video/Videodetay";
import VideoSection from "./components/VideoSection";
import Sonuclarım from "./pages/Profil/Sonuclarım";
import "./App.css"

const App = () => {


    return (
      <>
      <Header />
      
        <Routes>
          
          <Route path="/giris" element={<LoginPage />} />
          <Route path="/kayit" element={<RegisterPage />} />
          <Route path="/kayitform" element={<RegisterForm />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/profilim" element={<Profilim />} />
          <Route path="/egitmenler" element={<EgitmenlerPage />} />
          <Route path="/egitmendetay" element={<EgitmenDetay />} />
          <Route path="/videosatis" element={<VideoSatis />} />
          <Route path="/kitapsatis" element={<KitapSatis />} />
          <Route path="/denemeler" element={<Denemeler />} />
          <Route path="/videoizleme" element={<VideoIzleme />} />
          <Route path="/denemesınavı" element={<DenemeSınavı />} />
          <Route path="/videopaketlerim" element={<VideoPaketlerim />} />
          <Route path="/kitaplarım" element={<Kitaplarım />} />
          <Route path="/denemelerim" element={<Denemelerim />} />
          <Route path="/sepetim" element={<Sepetim />} />
          <Route path="/kitapdetay" element={<KitapDetay />} />
          <Route path="/videodetay" element={<VideoDetay />} />
          <Route path="/sonuclarım" element={<Sonuclarım />} />
          
  
          
        </Routes>
        <Footer />
        
        
      </>
      
    );
  // const logged = true


  // if(logged){

  //   return (
  //     <>
  //     <Header />
  
      
  //       <Routes>
          
  //         <Route path="/giris" element={<LoginPage />} />
  //         <Route path="/kayit" element={<RegisterPage />} />
  //         <Route path="/kayitform" element={<RegisterForm />} />
  //         <Route path="/" element={<HomePage />} />
          
  //         <Route path="/egitmenler" element={<EgitmenlerPage />} />
  //         <Route path="/egitmendetay" element={<EgitmenDetay />} />
  //         <Route path="/videosatis" element={<VideoSatis />} />
  //         <Route path="/kitapsatis" element={<KitapSatis />} />
  //         <Route path="/denemeler" element={<Denemeler />} />
  //         <Route path="/videoizleme" element={<VideoIzleme />} />
  //         <Route path="/denemesınavı" element={<DenemeSınavı />} />
          
  
          
  //       </Routes>
  //       <Footer />
        
  //     </>
      
  //   );
  // }else{

  //   return (
  //     <>
  //       <Routes>
          
  //         <Route path="/giris" element={<LoginPage />} />
  //         <Route path="/kayit" element={<RegisterPage />} />
  //         <Route path="/kayitform" element={<RegisterForm />} />
  //         <Route path="/*" element={<RegisterPage />} />
          
  
          
  //       </Routes>
  //       <Footer />
        
  //     </>
      
  //   );
  // }
};

export default App;