import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section
      className="py-20 px-8 text-center text-yellow-100"
      style={{
        background: "linear-gradient(to right, #4B2E2A, #B68D40, #D1A054)",
      }}
    >
      <h1 className="text-5xl font-bold mb-6" style={{ fontFamily: 'Georgia, serif' }}>
        Witamy w BookNest
      </h1>
      <p className="text-lg mb-8 max-w-xl mx-auto" style={{ fontFamily: 'Georgia, serif' }}>
        Twoje miejsce na inspirujące artykuły i nowinki ze świata literatury. Znajdź swoją kolejną ulubioną książkę i zanurz się w literackim świecie.
      </p>
      <Link
        to="/articles"
        className="bg-yellow-100 py-3 px-8 rounded-full text-lg font-semibold shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-yellow-200"
        style={{ fontFamily: 'Georgia, serif', color: "#8B0000" }} // Ciemny bordowy kolor tekstu
      >
        Zobacz najnowsze artykuły
      </Link>
    </section>
  );
};

export default Hero;

