// src/components/About.jsx

import React from 'react';

const About = () => {
  return (
    <section
      className="w-full py-16 px-8 flex flex-col items-center text-center"
      style={{
        background: "linear-gradient(135deg, #faf3e0 0%, #f5e0c4 100%)", // Gradient tła
        backgroundSize: "cover",
      }}
    >
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-16 flex justify-center items-center space-x-4" style={{ fontFamily: 'Georgia, serif' }}>
        <span className="w-16 h-[2px] bg-gray-400"></span>
        <span> O nas</span>
        <span className="w-16 h-[2px] bg-gray-400"></span>
      </h2>
      <p className="text-gray-700 max-w-2xl mb-8 text-lg leading-relaxed">
        Jesteśmy zespołem pasjonatów literatury, którzy z przyjemnością dzielą się najnowszymi artykułami, recenzjami i inspiracjami ze świata książek. Naszą misją jest tworzenie przestrzeni, gdzie każdy miłośnik literatury znajdzie coś dla siebie, niezależnie od gatunku i epoki, którą preferuje.
      </p>

      <p className="text-gray-700 max-w-3xl mb-8 text-lg leading-relaxed">
        W naszym zespole mamy specjalistów od literatury współczesnej, klasycznej, a także entuzjastów pisania, którzy stale poszerzają swoje horyzonty. Nasza strona powstała z potrzeby dzielenia się wiedzą, inspiracjami i ciekawymi spostrzeżeniami. Mamy nadzieję, że nasze artykuły i rekomendacje przyczynią się do wzbogacenia Waszych literackich doświadczeń.
      </p>

      {/* Sekcja z ikonami */}
      <div className="flex justify-center space-x-6 mt-8 mb-12">
        <div className="p-4 bg-[#F3E5AB] rounded-full shadow-md">
          <img src="https://img.icons8.com/ios-filled/50/000000/open-book.png" alt="Książka" />
        </div>
        <div className="p-4 bg-[#E5C8A8] rounded-full shadow-md">
          <img src="https://img.icons8.com/ios-filled/50/000000/typewriter-with-paper.png" alt="Maszyna do pisania" />
        </div>
        <div className="p-4 bg-[#D3A589] rounded-full shadow-md">
          <img src="https://img.icons8.com/ios-filled/50/000000/literature.png" alt="Literatura" />
        </div>
      </div>
     

      {/* Sekcja z kontaktami i social media */}
      <div className="flex flex-col items-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
          Skontaktuj się z nami
        </h3>
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600 transition duration-300">
            <img src="https://img.icons8.com/ios-filled/50/000000/facebook-new.png" alt="Facebook" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600 transition duration-300">
            <img src="https://img.icons8.com/ios-filled/50/000000/twitter.png" alt="Twitter" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600 transition duration-300">
            <img src="https://img.icons8.com/ios-filled/50/000000/instagram-new.png" alt="Instagram" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

