// src/components/Newsletter.jsx

import React from 'react';

const Newsletter = () => {
  return (
    <section
      className="w-full py-16 px-8 flex flex-col items-center justify-center"
      style={{
        background: "linear-gradient(135deg, #faf3e0 0%, #f5e0c4 100%)", // Gradient na pełną szerokość
        minHeight: "50vh", // Ustawienie minimalnej wysokości na 50% wysokości okna
      }}
    >
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-16 flex justify-center items-center space-x-4" style={{ fontFamily: 'Georgia, serif' }}>
        <span className="w-16 h-[2px] bg-gray-400"></span>
        <span>Zapisz się do naszego newslettera</span>
        <span className="w-16 h-[2px] bg-gray-400"></span>
      </h2>
      <p className="text-gray-700 mb-8 text-lg text-center">
        Bądź na bieżąco z naszymi najnowszymi artykułami
      </p>
      
      <form className="flex flex-col items-center space-y-4">
        <input
          type="email"
          placeholder="Wpisz swój e-mail"
          className="px-4 py-2 border border-gray-300 rounded-lg w-80 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
          style={{ fontFamily: 'Georgia, serif' }}
        />
        <button
          className="bg-gradient-to-r from-brown-600 to-brown-700 text-white py-3 px-8 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-brown-800 shadow-lg"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          Zapisz się
        </button>
      </form>
    </section>
  );
};

export default Newsletter;


