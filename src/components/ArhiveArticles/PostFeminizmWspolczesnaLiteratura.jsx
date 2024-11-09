// src/components/archive_posts/PostFeminizmWLiteraturze.jsx

import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const PostFeminizmWLiteraturze = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [newCommentRating, setNewCommentRating] = useState(0);

  const handleAddComment = () => {
    if (newComment.trim() && newUsername.trim()) {
      const date = new Date().toLocaleDateString('pl-PL', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });

      setComments([...comments, { username: newUsername, text: newComment, stars: newCommentRating, date }]);
      setNewComment('');
      setNewUsername('');
      setNewCommentRating(0);
    }
  };

  return (
    <div className="p-8 bg-[#FAF3E0] min-h-screen">
      <div className="max-w-3xl mx-auto bg-white p-10 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-[#8B5E3C] mb-2">Feminizm w literaturze</h1>
        <p className="text-gray-500 text-center mb-1">Autor: Maria Nowicka</p>
        <p className="text-gray-500 text-center mb-8">Data publikacji: Lipiec 2023</p>

        {/* Treść artykułu */}
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Feminizm w literaturze to temat o bogatej historii, który zmienia się wraz z rozwojem ruchu feministycznego.
          Literatura feministyczna od XIX wieku była platformą do wyrażania głosu kobiet, walczących o prawa polityczne, 
          społeczne i ekonomiczne. Od powieści Mary Wollstonecraft po dzieła Virginii Woolf, pisarki podejmowały tematykę
          emancypacji, edukacji oraz prawa do samostanowienia.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Jednym z ważnych tekstów, który zapoczątkował dyskusje na temat roli kobiet, jest „Pokój własny” Virginii Woolf.
          Woolf, w swoich pracach, w tym w „Pani Dalloway” oraz „Orlando”, eksplorowała wpływ patriarchatu na życie kobiet
          i podkreślała potrzebę niezależności oraz swobody twórczej. Jej analiza warunków społecznych stworzyła podwaliny
          współczesnej literatury feministycznej.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          W latach 60. i 70. XX wieku literatura feministyczna stała się narzędziem do podnoszenia świadomości o przemocy wobec kobiet,
          dyskryminacji oraz stereotypach płciowych. Autorki takie jak Simone de Beauvoir w „Drugiej płci” oraz Betty Friedan 
          w „Mistyce kobiecości” krytykowały istniejące normy i odgrywały ważną rolę w drugiej fali feminizmu.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Współczesna literatura feministyczna, z autorkami takimi jak Margaret Atwood, Chimamanda Ngozi Adichie i Elena Ferrante,
          nadal bada kwestie tożsamości, równości oraz przemocy. Powieści Atwood, takie jak „Opowieść podręcznej”, ostrzegają
          przed utratą praw kobiet i stają się głosem sprzeciwu wobec opresyjnych systemów społecznych.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Feminizm w literaturze to nie tylko historia walki o równość, ale także platforma umożliwiająca kobietom odkrywanie
          i opisywanie własnych doświadczeń oraz tworzenie przestrzeni, gdzie ich głos jest słyszalny i ceniony. Dzięki literaturze
          feministycznej czytelnicy mogą zrozumieć i docenić różnorodność doświadczeń oraz wkład kobiet w kształtowanie kultury.
        </p>

        {/* Sekcja komentarzy */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4 text-[#8B5E3C]">Komentarze</h2>

          {/* Lista komentarzy */}
          <div className="space-y-4 mb-6">
            {comments.map((comment, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-lg shadow">
                <p className="text-gray-800 font-semibold">{comment.username}</p>
                <p className="text-gray-500 text-sm">{comment.date}</p>
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

          {/* Formularz dodawania komentarza */}
          <div className="flex flex-col items-start">
            <input
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
              placeholder="Twoje imię lub pseudonim"
              className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-[#8B5E3C]"
            />
            <div className="flex items-center mb-4">
              <p className="text-gray-700 mr-2">Twoja ocena:</p>
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                  key={star}
                  onClick={() => setNewCommentRating(star)}
                  className={`cursor-pointer text-2xl ${star <= newCommentRating ? 'text-yellow-500' : 'text-gray-300'}`}
                />
              ))}
            </div>
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Dodaj swój komentarz"
              className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-[#8B5E3C]"
              rows="4"
            />
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

export default PostFeminizmWLiteraturze;
