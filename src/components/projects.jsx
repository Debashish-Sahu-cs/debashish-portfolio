import React, { useRef, useState } from 'react';
import SectionHeading from "./heading";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { EffectCoverflow, Navigation, Pagination, Autoplay } from 'swiper/modules';

export default function Project({projectTitle}) {
  return (
    <section className="projects" id="projects">
      <SectionHeading sectionHeader={projectTitle} />
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <article className="proj-card" id="tattoo-website">
            <div className="proj-screenshot">
              <img src={import.meta.env.BASE_URL + "images/tattoo-website-pc.webp"}  loading="lazy" decoding="async" alt="Tattoo Website" className="proj-img" />
            </div>
            <div className="article-heading">
              <h2>
                Tattoo Website
              </h2>
            </div>
            <p className="article-decsription">
                - Developed a website for a tattoo workshop and institution, featuring an integrated dynamic feedback section and a functional 
                contact form for direct interaction with the owner. Gained real-world experience in application deployment, maintenance, 
                and the practical use of web technologies.
                <br />
                <span className="highlighted">Tech used:</span> HTML, CSS, JS, Firebase.
            </p>
            <div className="article-link">
              Live on: 
              <a href="https://newdreamtattooz.netlify.app/" aria-label="tattoo website link" target="_blank" className="highlighted" rel="noopener noreferrer"> newdreamtattooz.netlify.app</a>
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className="proj-card" id="weather-app" >
            <div className="proj-screenshot">
              <img src={import.meta.env.BASE_URL + "images/weather-pc.webp"}    loading="lazy" decoding="async" alt="Weather App" className="proj-img" />
            </div>
            <div className="article-heading">
              <h2>
                Weather App
              </h2>
            </div>
            <p className="article-decsription">
                - Weather app where you can get weather info with your city name. 
                Used Open-Weather API for real time weather forcasting. Learned API handling with JavaScript.

                <br />
                <span className="highlighted">Tech used:</span> HTML, CSS, JS, Open-Weather API.
            </p>
            <div className="article-link">
              Live on: 
              <a href="https://weather-app-by-deba.netlify.app/" aria-label="weather app link" target="_blank" className="highlighted" rel="noopener noreferrer"> weather-app-by-deba.netlify.app</a>
            </div>

          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className="proj-card" id="expense-tracker" >
            <div className="proj-screenshot">
              <img src={import.meta.env.BASE_URL + "images/expense-tracker.webp"}    loading="lazy" decoding="async" alt="Weather App" className="proj-img" />
            </div>
            <div className="article-heading">
              <h2>
                Expense Tracker 
              </h2>
            </div>
            <p className="article-decsription">
                - Expense tracker where you can add, view, delete your daily expenses. Also you can see the summary 
                of you expenses category vise. Used <span className="highlighted">JSON</span> to store data so the data will be as it is even after you refresh the page.

                <br />
                <span className="highlighted">Tech used:</span> HTML, CSS, JS.
            </p>
            <div className="article-link">
              Live on: 
              <a href="https://expense-tracker-by-deba.netlify.app/" aria-label="weather app link" target="_blank" className="highlighted" rel="noopener noreferrer"> expense-tracker-by-deba.netlify.app</a>
            </div>

          </article>
        </SwiperSlide>

        <SwiperSlide>
          <article className="proj-card" id="samaro-clone">
            <div className="proj-screenshot">
              <img src={import.meta.env.BASE_URL + "images/Samaro-clone.webp"}  loading="lazy" decoding="async" alt="Samaro Clone" className="proj-img" />
            </div>
            <div className="article-heading">
              <h2>
                Samaro Website Clone
              </h2>
            </div>
            <p className="article-decsription">
                - Clone website of <a href="https://samaro.ai/" className="highlighted" target="_blank" >samaro.ai</a>, where I learned Bootstrap basics and designing with a
                CSS library. It is not fully responsive but give me a good experience of bootstrap for my future projects.

                <br />
                <span className="highlighted">Tech used:</span> HTML, CSS, JS, Open-Weather API.
            </p>
            <div className="article-link">
              Live on: 
              <a href="https://samaro-bootstrap.netlify.app/" aria-label="samaro bootstrap clone link" target="_blank" className="highlighted" rel="noopener noreferrer" > samaro-bootstrap.netlify.app</a>
            </div>

          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className="proj-card" id="product-management" >
            <div className="proj-screenshot">
              <img src={import.meta.env.BASE_URL + "images/Presentation2.webp"}    loading="lazy" decoding="async" alt="Product Management" className="proj-img" />
            </div>
            <div className="article-heading">
              <h2>
                Product Management
              </h2>
            </div>
            <p className="article-decsription">
                - A product management system where users can register and log in as admin, add new products, and place orders.
                Learned user data validation and MySQL integration for backend operations. The project is not deployed and currently runs on a local server.
                <br />
                <span className="highlighted">Tech used:</span> HTML, CSS, PHP & MySQL.
            </p>
            <div className="article-link">
              GitHub repo: 
              <a href="https://github.com/Debashish-Sahu-cs/PHP-product-management-system" aria-label="php product management github repo" target="_blank" className="highlighted" rel="noopener noreferrer" > Product Management System</a>
            </div>

          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className="proj-card" id="tic-tac-toe" >
            <div className="proj-screenshot">
              <img src={import.meta.env.BASE_URL + "images/tic-tac-toe.webp"}    loading="lazy" decoding="async" alt="Tic-Tac-Toe Game" className="proj-img" />
            </div>
            <div className="article-heading">
              <h2>
                Tic-Tac-Toe Game
              </h2>
            </div>
            <p className="article-decsription">
                - A JAVA console based tic-tac-toe game. Two players game with winning/loosing and draw features. Use numbers from 1-9 in 
                in sequance to play. Learned JAVA core concepts and problem solving for real world situations.
                <br />
                <span className="highlighted">Tech used:</span> Core JAVA
            </p>
            <div className="article-link">
              GitHub repo: 
              <a href="https://github.com/Debashish-Sahu-cs/Java-console-based-Tic-Tac-Toe-game" aria-label="java tic-tac-toe game github repo" target="_blank" className="highlighted" rel="noopener noreferrer" > Tic-Tac-Toe game</a>
            </div>

          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className="proj-card" id="banking-system">
            <div className="proj-screenshot">
              <img src={import.meta.env.BASE_URL + "images/bankingsystem.webp"}    loading="lazy" decoding="async" alt="Banking System" className="proj-img" />
            </div>
            <div className="article-heading">
              <h2>
                Banking Management System
              </h2>
            </div>
            <p className="article-decsription">
                - A Java console-based banking system with CRUD operations and transaction history tracking. 
                Implemented core OOP concepts — inheritance, polymorphism, abstraction, and encapsulation
                — along with exception handling.
                <br />
                <span className="highlighted">Tech used:</span> Core JAVA
            </p>
            <div className="article-link">
              GitHub repo: 
              <a href="https://github.com/Debashish-Sahu-cs/banking-system-in-java" aria-label="java banking system github repo" target="_blank" className="highlighted" rel="noopener noreferrer"> Banking management System</a>
            </div>

          </article>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
