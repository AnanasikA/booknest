// src/components/ArticlesPage.jsx
import React, { useState } from 'react';
import { FaBookOpen } from 'react-icons/fa';
import PostMagiaRealizmu from './ArticlesContent/PostMagiaRealizmu';
import PostJaneAusten from './ArticlesContent/PostJaneAusten';
import PostKlasykaLiteratury from './ArticlesContent/PostKlasykaLiteratury';
import PostHistoriaKryminalu from './ArticlesContent/PostHistoriaKryminalu';
import PostRenesansLiteratura from './ArticlesContent/PostRenesansLiteratura';
import PostLiteraturalFilozofia from './ArticlesContent/PostLiteraturaIFilozofia';
import PostFantastykaXXWieku from './ArticlesContent/PostFantastykaXXWieku';
import PostPoeciRomantyzmu from './ArticlesContent/PostPoeciRomantyzmu';
import PostLiteraturaSredniowiecza from './ArticlesContent/PostLiteraturaSredniowiecza';
import PostEwolucjaScienceFiction from './ArticlesContent/PostEwolucjaScienceFiction';
import PostPsychologiaWLiteraturze from './ArticlesContent/PostPsychologiaWLiteraturze';
import PostRomantyzmLiteratura from './ArticlesContent/PostRomantyzmLiteratura';
import PostLiteraturaWspolczesna from './ArticlesContent/PostLiteraturaWspolczesna';
import PostKsiazkiPodroznicze from './ArticlesContent/PostKsiazkiPodroznicze';
import PostFeminizmLiteratura from './ArticlesContent/PostFeminizmLiteratura';

const ArticlesPage = () => {

  const [selectedPost, setSelectedPost] = useState(null);

  const articles = [
    { title: "Magia realizmu w literaturze latynoamerykańskiej", description: "Odkryj, jak Gabriel García Márquez i inni autorzy kształtowali literacki realizm magiczny." , component: <PostMagiaRealizmu />},
    { title: "Niezwykłe powieści Jane Austen", description: "Zanurz się w świecie angielskiej arystokracji i miłości z klasycznymi powieściami Jane Austen.", component: <PostJaneAusten />  },
    { title: "Dlaczego warto czytać klasyków", description: "Analiza ponadczasowych wartości literatury klasycznej i jej wpływu na współczesne dzieła.", component: <PostKlasykaLiteratury /> },
    { title: "Historia kryminału: od Agathy Christie po współczesnych autorów", description: "Prześledź rozwój literatury kryminalnej na przestrzeni lat.", component: <PostHistoriaKryminalu /> },
    { title: "Najważniejsze dzieła epoki renesansu", description: "Renesans to czas odrodzenia – poznaj jego najważniejsze dzieła.", component: <PostRenesansLiteratura /> },
    { title: "Literatura i filozofia: kiedy książki stają się refleksją", description: "Jak literatura oddziałuje na filozofię i vice versa.", component: <PostLiteraturalFilozofia /> },
    { title: "Najlepsze powieści fantastyczne XX wieku", description: "Podróż przez najbardziej wpływowe książki fantasy, które zainspirowały pokolenia.", component: <PostFantastykaXXWieku /> },
    { title: "Poeci romantyzmu i ich dziedzictwo", description: "Od Mickiewicza po Byrona – poeci, którzy zmienili świat literatury.", component: <PostPoeciRomantyzmu /> },
    { title: "Literatura średniowiecza i jej tajemnice", description: "Zanurz się w średniowiecznych opowieściach pełnych symboliki i mistycyzmu.", component: <PostLiteraturaSredniowiecza /> },
    { title: "Ewolucja science fiction", description: "Jak literatura science fiction ewoluowała na przestrzeni lat.",component: <PostEwolucjaScienceFiction /> },
    { title: "Psychologia w literaturze", description: "Wpływ psychologii na rozwój postaci literackich.", component: <PostPsychologiaWLiteraturze /> },
    { title: "Epoka romantyzmu w literaturze", description: "Poznaj charakterystyczne cechy romantyzmu i jego wpływ na literaturę.", component: <PostRomantyzmLiteratura /> },
    { title: "Literatura współczesna: nowe perspektywy", description: "Jak współczesne wydarzenia i problemy wpływają na literaturę.", component: <PostLiteraturaWspolczesna /> },
    { title: "Książki podróżnicze: poznawanie świata przez literaturę", description: "Odkryj inspirujące opowieści podróżników i ich wpływ na literaturę.", component: <PostKsiazkiPodroznicze /> },
    { title: "Feminizm w literaturze", description: "Analiza literatury feministycznej i jej rola w zmianach społecznych.", component: <PostFeminizmLiteratura /> }
  ];

  const colors = [
    "bg-[#F3E5AB]", // Jasny beż
    "bg-[#E5C8A8]", // Piaskowy
    "bg-[#D3A589]", // Ciepły różowy
    "bg-[#CDAA7D]", // Kolor spłowiałego złota
  ];

  if (selectedPost) {
    return (
      <div className="p-8 bg-[#FAF3E0] min-h-screen">
        <button
          onClick={() => setSelectedPost(null)}
          className="bg-[#8B5E3C] text-white px-4 py-2 rounded-full font-semibold shadow-lg transition-transform transform hover:scale-105 hover:bg-[#CDAA7D] mb-6"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          ← Powrót do artykułów
        </button>
        {selectedPost}
      </div>
    );
  }

  return (
    <section
      className="py-16 px-8 min-h-screen"
      style={{
        background: "linear-gradient(135deg, #faf3e0 0%, #f5e0c4 100%)",
        backgroundSize: "cover",
      }}
    >
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-16 flex justify-center items-center space-x-4" style={{ fontFamily: 'Georgia, serif' }}>
        <span className="w-16 h-[2px] bg-gray-400"></span>
        <span>Artykuły</span>
        <span className="w-16 h-[2px] bg-gray-400"></span>
      </h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
        {articles.map((article, index) => (
          <div
            key={index}
            className={`relative p-8 ${colors[index % colors.length]} rounded-lg shadow-md border border-gray-200 transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl`}
            style={{
              height: "300px",
              margin: "auto",
              backgroundImage: "url('https://images.unsplash.com/photo-1637325258040-d2f09636ecf6?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
              backgroundSize: "cover",
              backgroundBlendMode: "multiply",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <FaBookOpen className="absolute top-4 right-4 text-gray-400 text-xl" />

            <div className="text-left text-gray-800 flex flex-col h-full justify-between">
              <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                {article.title}
              </h2>
              <p className="text-gray-700 mb-4 text-md leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                {article.description}
              </p>
              <div className="mt-4">
                <button
                  onClick={() => setSelectedPost(article.component)}
                  className="bg-gradient-to-r from-brown-600 to-brown-700 text-white py-2 px-6 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-brown-800 shadow-lg"
                  style={{ fontFamily: 'Georgia, serif', transform: "perspective(500px) rotateY(0deg)", transition: "transform 0.4s" }}
                >
                  Czytaj więcej
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArticlesPage;