// src/components/Home.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import Book from './icons/books.png';
import Star from './icons/star.png';
import Rocket from './icons/rocket.png';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#F5E0C4] to-[#D8B384] text-center px-6">

    {/* Dlaczego warto? */}
    <section className="py-16 bg-[#FAF3E0] w-full">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-16 flex justify-center items-center space-x-4" style={{ fontFamily: 'Georgia, serif' }}>
        <span className="w-16 h-[2px] bg-gray-400"></span>
        <span>Dlaczego warto wybrać BookNest?</span>
        <span className="w-16 h-[2px] bg-gray-400"></span>
      </h2>
      <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
    
        {/* Pasja do literatury */}
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md w-64">
          <img src={Book} alt="Ikona książki" className="w-12 h-12 mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-center" style={{ fontFamily: 'Georgia, serif' }}>Pasja do literatury</h3>
          <p className="text-gray-700 text-left">Tworzymy treści z pasją i zaangażowaniem, aby dzielić się literackimi odkryciami.</p>
        </div>

        {/* Wysoka jakość */}
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md w-64">
          <img src={Star} alt="Ikona gwiazdy" className="w-12 h-12 mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-center" style={{ fontFamily: 'Georgia, serif' }}>Wysoka jakość</h3>
          <p className="text-gray-700 text-left">Nasze artykuły są starannie opracowane i pełne wartościowej wiedzy.</p>
        </div>

        {/* Inspiracja i rozwój */}
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md w-64">
          <img src={Rocket} alt="Ikona rakiety" className="w-12 h-12 mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-center" style={{ fontFamily: 'Georgia, serif' }}>Inspiracja i rozwój</h3>
          <p className="text-gray-700 text-left">Znajdź motywację do czytania i rozwijania swojej literackiej pasji.</p>
        </div>
    
      </div>
    </section>

    {/* Wyróżnione artykuły */}
    <section className="py-16 bg-[#F5E0C4] w-full">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-16 flex justify-center items-center space-x-4" style={{ fontFamily: 'Georgia, serif' }}>
        <span className="w-16 h-[2px] bg-gray-400"></span>
        <span>Wyróżnione artykuły</span>
        <span className="w-16 h-[2px] bg-gray-400"></span>
      </h2>
      <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
    
        {/* Karta artykułu */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-72 flex flex-col justify-between transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-center text-[#8B5E3C]" style={{ fontFamily: 'Georgia, serif' }}>Magia realizmu</h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-left">
              Odkryj niesamowity świat realizmu magicznego, gdzie fantazja przenika się z codziennością. Poznaj twórczość autorów, którzy w wyjątkowy sposób potrafią łączyć magię z rzeczywistością.
            </p>
          </div>
          <Link to="/articles/1" className="bg-[#8B5E3C] text-white py-2 px-6 rounded-full font-semibold inline-block transition-all duration-300 hover:bg-[#CDAA7D] hover:shadow-md mt-4">
            Czytaj więcej
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg w-72 flex flex-col justify-between transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-center text-[#8B5E3C]" style={{ fontFamily: 'Georgia, serif' }}>Powieści współczesne</h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-left">
              Poznaj fascynujący świat współczesnej literatury, która porusza aktualne problemy i wyzwania. Te powieści oddają ducha naszych czasów.
            </p>
          </div>
          <Link to="/articles/2" className="bg-[#8B5E3C] text-white py-2 px-6 rounded-full font-semibold inline-block transition-all duration-300 hover:bg-[#CDAA7D] hover:shadow-md mt-4">
            Czytaj więcej
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg w-72 flex flex-col justify-between transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-center text-[#8B5E3C]" style={{ fontFamily: 'Georgia, serif' }}>Klasyczne dzieła</h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-left">
              Przegląd literatury klasycznej, która przetrwała próbę czasu. Zapoznaj się z arcydziełami, które ukształtowały nasze rozumienie świata, kultury i ludzkiej natury. Te dzieła, pomimo upływu lat, wciąż inspirują.
            </p>
          </div>
          <Link to="/articles/3" className="bg-[#8B5E3C] text-white py-2 px-6 rounded-full font-semibold inline-block transition-all duration-300 hover:bg-[#CDAA7D] hover:shadow-md mt-4">
            Czytaj więcej
          </Link>
        </div>

      </div>
    </section>

      {/* Sekcja CTA na końcu */}
      <section className="py-16 bg-[#FAF3E0] w-full text-center">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-16 flex justify-center items-center space-x-4" style={{ fontFamily: 'Georgia, serif' }}>
          <span className="w-16 h-[2px] bg-gray-400"></span>
          <span>Dołącz do społeczności BookNest</span>
          <span className="w-16 h-[2px] bg-gray-400"></span>
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Zapisz się do newslettera i bądź na bieżąco z najnowszymi artykułami i recenzjami!
        </p>
        <Link to="/newsletter" className="bg-gradient-to-r from-[#CDAA7D] to-[#8B5E3C] text-white py-3 px-8 rounded-full text-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300">
          Zapisz się teraz
        </Link>
      </section>
    </div>
  );
};

export default Home;




