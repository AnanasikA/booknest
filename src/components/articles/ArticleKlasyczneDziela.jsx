// src/components/ArticleKlasyczneDziela.jsx

import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import paperTexture from '../icons/papier-texture.avif';

const ArticleKlasyczneDziela = () => {
  const [rating, setRating] = useState(0);
  const [comments, setComments] = useState([
    {
      text: "Klasyczna literatura zawsze dostarcza nowych wrażeń. Te książki to prawdziwa skarbnica wiedzy.",
      stars: 5,
      date: "15 listopada 2024, 12:00",
      username: "BookLover"
    }
  ]);
  const [comment, setComment] = useState('');
  const [commentRating, setCommentRating] = useState(0);
  const [username, setUsername] = useState('');

  const handleAddComment = () => {
    if (comment.trim() && username.trim()) {
      const currentDate = new Date();
      const formattedDate = currentDate.toLocaleDateString('pl-PL', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
      const formattedTime = currentDate.toLocaleTimeString('pl-PL', {
        hour: '2-digit',
        minute: '2-digit',
      });

      const newComment = {
        text: comment,
        stars: commentRating,
        date: `${formattedDate}, ${formattedTime}`,
        username: username,
      };

      setComments([...comments, newComment]);
      setComment('');
      setCommentRating(0);
      setUsername('');
    }
  };

  return (
    <div className="p-8 bg-[#FAF3E0] min-h-screen">
      <div
        className="max-w-3xl mx-auto bg-white p-10 rounded-lg shadow-lg"
        style={{
          backgroundImage: `url(${paperTexture})`,
          backgroundSize: 'cover',
          backgroundBlendMode: 'multiply',
          backgroundColor: '#fafafa'
        }}
      >
        <h1 className="text-4xl font-bold mb-2 text-[#8B5E3C] text-center" style={{ fontFamily: 'Georgia, serif' }}>
          Klasyczne dzieła
        </h1>
        <p className="text-gray-500 text-center mb-1">Autor: Jan Nowak</p>
        <p className="text-gray-500 text-center mb-8">Data publikacji: 15 listopada 2024</p>

        {/* Sekcja oceny */}
        <div className="flex justify-center items-center mb-8">
          <p className="text-lg mr-4 text-gray-700">Oceń artykuł:</p>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                onClick={() => setRating(star)}
                className={`cursor-pointer text-3xl ${star <= rating ? 'text-yellow-500' : 'text-gray-600'}`}
              />
            ))}
          </div>
        </div>

        {/* Treść artykułu */}
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Klasyczna literatura to ponadczasowe arcydzieła, które ukształtowały nasze rozumienie kultury, społeczeństwa i ludzkiej natury. Dzieła takie jak „Duma i uprzedzenie” Jane Austen, „Zbrodnia i kara” Fiodora Dostojewskiego czy „Iliada” Homera pozostają aktualne, niezależnie od mijającego czasu.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Te dzieła literackie wciąż skłaniają do refleksji, oferując ponadczasowe przemyślenia na temat miłości, moralności, wolności i ludzkiego losu. Klasyczne dzieła to skarbnica wiedzy o człowieku i jego świecie, której nie da się zastąpić żadnym współczesnym dziełem.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Dzieła klasyczne przetrwały próbę czasu i stanowią fundamenty literatury. Inspirują pisarzy oraz czytelników do zgłębiania tajemnic ludzkiego ducha i przybliżają nas do zrozumienia samych siebie.
        </p>

        {/* Sekcja komentarzy */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4 text-[#8B5E3C]">Komentarze</h2>

          {/* Lista komentarzy */}
          <div className="space-y-4 mb-6">
            {comments.map((comment, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-lg shadow">
                <p className="text-gray-800 font-semibold">{comment.username}</p>
                <p className="text-gray-500 text-sm mb-2">{comment.date}</p>
                <div className="flex items-center mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                      key={star}
                      className={`text-lg ${star <= comment.stars ? 'text-yellow-500' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <p className="text-gray-800">{comment.text}</p>
              </div>
            ))}
          </div>

          {/* Formularz dodawania komentarzy */}
          <div className="flex flex-col items-start">
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Twój pseudonim"
              className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-[#8B5E3C]"
            />
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Dodaj swój komentarz"
              className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-[#8B5E3C]"
              rows="4"
            />
            <div className="flex items-center mb-4">
              <p className="text-gray-700 mr-2">Twoja ocena:</p>
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                  key={star}
                  onClick={() => setCommentRating(star)}
                  className={`cursor-pointer text-2xl ${star <= commentRating ? 'text-yellow-500' : 'text-gray-300'}`}
                />
              ))}
            </div>
            <button
              onClick={handleAddComment}
              className="bg-[#8B5E3C] text-white py-2 px-6 rounded-full font-semibold transition-all duration-300 hover:bg-[#CDAA7D]"
            >
              Dodaj komentarz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleKlasyczneDziela;


