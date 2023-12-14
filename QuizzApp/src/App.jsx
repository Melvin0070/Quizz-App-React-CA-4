import React from "react";
import "./App.css";
import questions from "./questions";
import Questions from "./components/Questions";
import Navbar from "./components/Navbar.jsx";
import { useState } from "react";



function App() {
  const [theme, setTheme] = useState(false);

  const handleThemeChange = () => {
    setTheme(!theme);
    updateBackgroundColor();
  }
  const updateBackgroundColor = () => {
    const body = document.body;
    body.style.backgroundColor = theme ? '#242424' : 'whitesmoke';
  };
  return (
    <div>
      <div>
      <svg className="ssvg first" width="50" height="50" viewBox="0 0 158 149" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_23_36)">
<path d="M77 0L94.9611 55.2786H153.085L106.062 89.4427L124.023 144.721L77 110.557L29.9772 144.721L47.9383 89.4427L0.915481 55.2786H59.0389L77 0Z" fill="#FFF59F"/>
<path d="M77 6.47214L93.059 55.8967L93.508 57.2786H94.9611H146.929L104.886 87.8247L103.711 88.6788L104.16 90.0607L120.219 139.485L78.1756 108.939L77 108.085L75.8244 108.939L33.7814 139.485L49.8404 90.0607L50.2894 88.6788L49.1139 87.8247L7.07085 57.2786H59.0389H60.492L60.941 55.8967L77 6.47214Z" stroke="black" stroke-width="4"/>
</g>
<defs>
<filter id="filter0_d_23_36" x="0.915466" y="0" width="156.169" height="148.721" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="4" dy="4"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_23_36"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_23_36" result="shape"/>
</filter>
</defs>
</svg> 
<svg className="ssvg second" width="70" height="70" viewBox="0 0 158 149" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_23_36)">
<path d="M77 0L94.9611 55.2786H153.085L106.062 89.4427L124.023 144.721L77 110.557L29.9772 144.721L47.9383 89.4427L0.915481 55.2786H59.0389L77 0Z" fill="#FFF59F"/>
<path d="M77 6.47214L93.059 55.8967L93.508 57.2786H94.9611H146.929L104.886 87.8247L103.711 88.6788L104.16 90.0607L120.219 139.485L78.1756 108.939L77 108.085L75.8244 108.939L33.7814 139.485L49.8404 90.0607L50.2894 88.6788L49.1139 87.8247L7.07085 57.2786H59.0389H60.492L60.941 55.8967L77 6.47214Z" stroke="black" stroke-width="4"/>
</g>
<defs>
<filter id="filter0_d_23_36" x="0.915466" y="0" width="156.169" height="148.721" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="4" dy="4"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_23_36"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_23_36" result="shape"/>
</filter>
</defs>
</svg> 
<svg className="ssvg third" width="50" height="50" viewBox="0 0 158 149" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_23_36)">
<path d="M77 0L94.9611 55.2786H153.085L106.062 89.4427L124.023 144.721L77 110.557L29.9772 144.721L47.9383 89.4427L0.915481 55.2786H59.0389L77 0Z" fill="#FFF59F"/>
<path d="M77 6.47214L93.059 55.8967L93.508 57.2786H94.9611H146.929L104.886 87.8247L103.711 88.6788L104.16 90.0607L120.219 139.485L78.1756 108.939L77 108.085L75.8244 108.939L33.7814 139.485L49.8404 90.0607L50.2894 88.6788L49.1139 87.8247L7.07085 57.2786H59.0389H60.492L60.941 55.8967L77 6.47214Z" stroke="black" stroke-width="4"/>
</g>
<defs>
<filter id="filter0_d_23_36" x="0.915466" y="0" width="156.169" height="148.721" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="4" dy="4"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_23_36"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_23_36" result="shape"/>
</filter>
</defs>
</svg> 
<svg className="ssvg fourth" width="70" height="70" viewBox="0 0 158 149" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_23_36)">
<path d="M77 0L94.9611 55.2786H153.085L106.062 89.4427L124.023 144.721L77 110.557L29.9772 144.721L47.9383 89.4427L0.915481 55.2786H59.0389L77 0Z" fill="#FFF59F"/>
<path d="M77 6.47214L93.059 55.8967L93.508 57.2786H94.9611H146.929L104.886 87.8247L103.711 88.6788L104.16 90.0607L120.219 139.485L78.1756 108.939L77 108.085L75.8244 108.939L33.7814 139.485L49.8404 90.0607L50.2894 88.6788L49.1139 87.8247L7.07085 57.2786H59.0389H60.492L60.941 55.8967L77 6.47214Z" stroke="black" stroke-width="4"/>
</g>
<defs>
<filter id="filter0_d_23_36" x="0.915466" y="0" width="156.169" height="148.721" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="4" dy="4"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_23_36"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_23_36" result="shape"/>
</filter>
</defs>
</svg> 
<svg className="ssvg sone" width="80" height="80" viewBox="0 0 321 321" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g filter="url(#filter0_d_23_21)">
    <circle cx="84" cy="84" r="84" transform="matrix(0.93358 -0.358368 -0.358368 -0.93358 111.95 268.792)" fill="#A8A6FF"/>
    <circle cx="84" cy="84" r="82" transform="matrix(0.93358 -0.358368 -0.358368 -0.93358 111.95 268.792)" stroke="black" stroke-width="4"/>
  </g>
  <circle cx="140.408" cy="131.587" r="8" transform="rotate(28 140.408 131.587)" fill="#1E1E1E"/>
  <circle cx="194.268" cy="160.225" r="8" transform="rotate(28 194.268 160.225)" fill="#1E1E1E"/>
  <mask id="path-5-inside-1_23_21" fill="white">
    <path d="M195.462 200.367C192.378 206.166 188.183 211.302 183.114 215.479C178.046 219.657 172.204 222.796 165.923 224.717C159.642 226.637 153.044 227.301 146.506 226.672C139.967 226.042 133.617 224.131 127.818 221.048C122.018 217.964 116.883 213.768 112.705 208.7C108.527 203.632 105.388 197.79 103.468 191.509C101.548 185.227 100.883 178.629 101.513 172.091C102.142 165.553 104.053 159.203 107.137 153.403L151.3 176.885L195.462 200.367Z"/>
  </mask>
  <path d="M195.462 200.367C192.378 206.166 188.183 211.302 183.114 215.479C178.046 219.657 172.204 222.796 165.923 224.717C159.642 226.637 153.044 227.301 146.506 226.672C139.967 226.042 133.617 224.131 127.818 221.048C122.018 217.964 116.883 213.768 112.705 208.7C108.527 203.632 105.388 197.79 103.468 191.509C101.548 185.227 100.883 178.629 101.513 172.091C102.142 165.553 104.053 159.203 107.137 153.403L151.3 176.885L195.462 200.367Z" fill="white" stroke="black" stroke-width="10" mask="url(#path-5-inside-1_23_21)"/>
  <defs>
    <filter id="filter0_d_23_21" x="76.2452" y="76.2452" width="172.045" height="172.045" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dx="4" dy="4"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_23_21"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_23_21" result="shape"/>
    </filter>
  </defs>
</svg>
<svg className="ssvg stwo" width="80" height="80" viewBox="0 0 321 321" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g filter="url(#filter0_d_23_21)">
    <circle cx="84" cy="84" r="84" transform="matrix(0.93358 -0.358368 -0.358368 -0.93358 111.95 268.792)" fill="#A8A6FF"/>
    <circle cx="84" cy="84" r="82" transform="matrix(0.93358 -0.358368 -0.358368 -0.93358 111.95 268.792)" stroke="black" stroke-width="4"/>
  </g>
  <circle cx="140.408" cy="131.587" r="8" transform="rotate(28 140.408 131.587)" fill="#1E1E1E"/>
  <circle cx="194.268" cy="160.225" r="8" transform="rotate(28 194.268 160.225)" fill="#1E1E1E"/>

  <path d="M195.462 200.367C192.378 206.166 188.183 211.302 183.114 215.479C178.046 219.657 172.204 222.796 165.923 224.717C159.642 226.637 153.044 227.301 146.506 226.672C139.967 226.042 133.617 224.131 127.818 221.048C122.018 217.964 116.883 213.768 112.705 208.7C108.527 203.632 105.388 197.79 103.468 191.509C101.548 185.227 100.883 178.629 101.513 172.091C102.142 165.553 104.053 159.203 107.137 153.403L151.3 176.885L195.462 200.367Z" fill="white" stroke="black" stroke-width="10" mask="url(#path-5-inside-1_23_21)"/>
  <defs>
    <filter id="filter0_d_23_21" x="76.2452" y="76.2452" width="172.045" height="172.045" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dx="4" dy="4"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_23_21"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_23_21" result="shape"/>
    </filter>
  </defs>
</svg>
<svg className="ssvg sthree" width="120" height="120" viewBox="0 0 321 321" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g filter="url(#filter0_d_23_21)">
    <circle cx="84" cy="84" r="84" transform="matrix(0.93358 -0.358368 -0.358368 -0.93358 111.95 268.792)" fill="#A8A6FF"/>
    <circle cx="84" cy="84" r="82" transform="matrix(0.93358 -0.358368 -0.358368 -0.93358 111.95 268.792)" stroke="black" stroke-width="4"/>
  </g>
  <circle cx="140.408" cy="131.587" r="8" transform="rotate(28 140.408 131.587)" fill="#1E1E1E"/>
  <circle cx="194.268" cy="160.225" r="8" transform="rotate(28 194.268 160.225)" fill="#1E1E1E"/>

  <path d="M195.462 200.367C192.378 206.166 188.183 211.302 183.114 215.479C178.046 219.657 172.204 222.796 165.923 224.717C159.642 226.637 153.044 227.301 146.506 226.672C139.967 226.042 133.617 224.131 127.818 221.048C122.018 217.964 116.883 213.768 112.705 208.7C108.527 203.632 105.388 197.79 103.468 191.509C101.548 185.227 100.883 178.629 101.513 172.091C102.142 165.553 104.053 159.203 107.137 153.403L151.3 176.885L195.462 200.367Z" fill="white" stroke="black" stroke-width="10" mask="url(#path-5-inside-1_23_21)"/>
  <defs>
    <filter id="filter0_d_23_21" x="76.2452" y="76.2452" width="172.045" height="172.045" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dx="4" dy="4"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_23_21"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_23_21" result="shape"/>
    </filter>
  </defs>
</svg>
<svg className="ssvg sfour" width="120" height="120" viewBox="0 0 321 321" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g filter="url(#filter0_d_23_21)">
    <circle cx="84" cy="84" r="84" transform="matrix(0.93358 -0.358368 -0.358368 -0.93358 111.95 268.792)" fill="#A8A6FF"/>
    <circle cx="84" cy="84" r="82" transform="matrix(0.93358 -0.358368 -0.358368 -0.93358 111.95 268.792)" stroke="black" stroke-width="4"/>
  </g>
  <circle cx="140.408" cy="131.587" r="8" transform="rotate(28 140.408 131.587)" fill="#1E1E1E"/>
  <circle cx="194.268" cy="160.225" r="8" transform="rotate(28 194.268 160.225)" fill="#1E1E1E"/>

  <path d="M195.462 200.367C192.378 206.166 188.183 211.302 183.114 215.479C178.046 219.657 172.204 222.796 165.923 224.717C159.642 226.637 153.044 227.301 146.506 226.672C139.967 226.042 133.617 224.131 127.818 221.048C122.018 217.964 116.883 213.768 112.705 208.7C108.527 203.632 105.388 197.79 103.468 191.509C101.548 185.227 100.883 178.629 101.513 172.091C102.142 165.553 104.053 159.203 107.137 153.403L151.3 176.885L195.462 200.367Z" fill="white" stroke="black" stroke-width="10" mask="url(#path-5-inside-1_23_21)"/>
  <defs>
    <filter id="filter0_d_23_21" x="76.2452" y="76.2452" width="172.045" height="172.045" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dx="4" dy="4"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_23_21"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_23_21" result="shape"/>
    </filter>
  </defs>
</svg>
<svg className="ssvg sfive" width="120" height="120" viewBox="0 0 321 321" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g filter="url(#filter0_d_23_21)">
    <circle cx="84" cy="84" r="84" transform="matrix(0.93358 -0.358368 -0.358368 -0.93358 111.95 268.792)" fill="#A8A6FF"/>
    <circle cx="84" cy="84" r="82" transform="matrix(0.93358 -0.358368 -0.358368 -0.93358 111.95 268.792)" stroke="black" stroke-width="4"/>
  </g>
  <circle cx="140.408" cy="131.587" r="8" transform="rotate(28 140.408 131.587)" fill="#1E1E1E"/>
  <circle cx="194.268" cy="160.225" r="8" transform="rotate(28 194.268 160.225)" fill="#1E1E1E"/>

  <path d="M195.462 200.367C192.378 206.166 188.183 211.302 183.114 215.479C178.046 219.657 172.204 222.796 165.923 224.717C159.642 226.637 153.044 227.301 146.506 226.672C139.967 226.042 133.617 224.131 127.818 221.048C122.018 217.964 116.883 213.768 112.705 208.7C108.527 203.632 105.388 197.79 103.468 191.509C101.548 185.227 100.883 178.629 101.513 172.091C102.142 165.553 104.053 159.203 107.137 153.403L151.3 176.885L195.462 200.367Z" fill="white" stroke="black" stroke-width="10" mask="url(#path-5-inside-1_23_21)"/>
  <defs>
    <filter id="filter0_d_23_21" x="76.2452" y="76.2452" width="172.045" height="172.045" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dx="4" dy="4"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_23_21"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_23_21" result="shape"/>
    </filter>
  </defs>
</svg>
      </div>

      <Navbar
        theme={theme}
        onThemeChange={handleThemeChange}  
      />

      <Questions
      data={questions}
      theme={theme}
      />

    </div>
  );
}

export default App;