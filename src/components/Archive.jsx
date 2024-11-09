// src/components/Archive.jsx

import React, { useState } from 'react';
import PostLiteraturaKlasyczna from './ArhiveArticles/PostLiteraturaKlasyczna';
import PostKsiazkiPodroznicze from './ArhiveArticles/PostKsiazkiPodroznicze';
import PostPowieściXXWieku from './ArhiveArticles/PostPowieściXXWieku';
import PostPsychologiaWLiteraturze from './ArhiveArticles/PostPsychologiaWLiteraturze';
import PostHistoriaScienceFiction from './ArhiveArticles/PostHistoriaScienceFiction';
import PostRenesansLiteratura from './ArhiveArticles/PostRenesansLiteratura';
import PostFeminizmWspolczesnaLiteratura from './ArhiveArticles/PostFeminizmWspolczesnaLiteratura';

const Archive = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const archivePosts = [
    { title: "Wprowadzenie do literatury klasycznej", date: "Styczeń 2023", component: <PostLiteraturaKlasyczna /> },
    { title: "Książki podróżnicze i ich wpływ na literaturę", date: "Luty 2023", component: <PostKsiazkiPodroznicze /> },
    { title: "Najlepsze powieści z XX wieku", date: "Marzec 2023", component: <PostPowieściXXWieku /> },
    { title: "Psychologia w literaturze", date: "Kwiecień 2023", component: <PostPsychologiaWLiteraturze /> },
    { title: "Historia science fiction", date: "Maj 2023", component: <PostHistoriaScienceFiction /> },
    { title: "Wpływ renesansu na literaturę", date: "Czerwiec 2023", component: <PostRenesansLiteratura /> },
    { title: "Feministyczna literatura współczesna", date: "Lipiec 2023", component: <PostFeminizmWspolczesnaLiteratura /> },
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
          ← Powrót do archiwum
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
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-16 flex justify-center items-center space-x-4" style={{ fontFamily: 'Georgia, serif' }}>
        <span className="w-16 h-[2px] bg-gray-400"></span>
        <span>Archiwum</span>
        <span className="w-16 h-[2px] bg-gray-400"></span>
      </h2>
      <p className="text-center text-gray-700 text-lg mb-8">
        Tutaj znajdziesz starsze posty posegregowane według daty lub kategorii.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
        {archivePosts.map((post, index) => (
          <div
            key={index}
            className={`relative flex flex-col justify-between p-6 ${colors[index % colors.length]} rounded-lg shadow-md border border-gray-200 transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl`}
            style={{
              width: "100%",
              height: "300px",
              backgroundImage: "url('https://images.unsplash.com/photo-1637325258040-d2f09636ecf6?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
              backgroundSize: "cover",
              backgroundBlendMode: "multiply",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div>
              <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                {post.title}
              </h3>
              <p className="text-gray-700">{post.date}</p>
            </div>
            <div className="flex justify-center mt-4">
              <button
                onClick={() => setSelectedPost(post.component)}
                className="bg-gradient-to-r from-brown-600 to-brown-700 text-white py-2 px-4 rounded-full text-md font-semibold transition-all duration-300 hover:bg-brown-800 shadow-lg"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                Zobacz post
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Archive;
