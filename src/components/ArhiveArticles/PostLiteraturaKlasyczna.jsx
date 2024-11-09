// src/components/archive_posts/PostLiteraturaKlasyczna.jsx

import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const PostLiteraturaKlasyczna = () => {
  const [comments, setComments] = useState([
    { username: "Czytelnik1", text: "Bardzo ciekawy artykuł o literaturze klasycznej!", stars: 5, date: "10 stycznia 2023" }
  ]);
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
        <h1 className="text-4xl font-bold text-center text-[#8B5E3C] mb-2">Wprowadzenie do literatury klasycznej</h1>
        <p className="text-gray-500 text-center mb-1">Autor: Jan Kowalski</p> {/* Dodano imię i nazwisko autora */}
        <p className="text-gray-500 text-center mb-8">Data publikacji: Styczeń 2023</p>

        {/* Treść artykułu */}
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Literatura klasyczna to zbiór dzieł, które przetrwały próbę czasu i wciąż fascynują współczesnych czytelników. 
          Dzieła takie jak „Iliada” Homera, „Boska Komedia” Dantego czy „Duma i uprzedzenie” Jane Austen, 
          są nie tylko wybitnymi osiągnięciami literackimi, ale także skarbnicą wartości kulturowych, estetycznych 
          i filozoficznych. Czytanie klasyków pozwala nam zrozumieć, jak ewoluowała kultura i społeczeństwo, 
          a także jakie uniwersalne prawdy pozostają niezmienne.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          W literaturze klasycznej możemy znaleźć nie tylko piękne opisy i wyrafinowany język, ale także głęboką analizę 
          ludzkiej natury. Klasycy podejmują tematy miłości, ambicji, moralności, zdrady, a także walki dobra ze złem. 
          Ich dzieła są pełne postaci, które, pomimo upływu wieków, wciąż są nam bliskie i inspirujące. 
          Dla wielu czytelników lektura klasyków to nie tylko rozrywka, ale także forma rozwoju osobistego.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Czytanie literatury klasycznej daje nam szerszą perspektywę na historię oraz wartości, które ukształtowały 
          współczesne społeczeństwo. Wielu autorów inspirowało się klasycznymi dziełami, tworząc teksty pełne 
          humanizmu i piękna. W świecie literatury klasycznej możemy znaleźć korzenie wielu współczesnych gatunków literackich, 
          od powieści romantycznej po kryminał.
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

export default PostLiteraturaKlasyczna;



