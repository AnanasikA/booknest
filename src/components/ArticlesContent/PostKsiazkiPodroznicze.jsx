// src/components/ArticlesContent/PostKsiazkiPodroznicze.jsx

import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const PostKsiazkiPodroznicze = () => {
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
        <h1 className="text-4xl font-bold text-center text-[#8B5E3C] mb-2">Książki podróżnicze: poznawanie świata przez literaturę</h1>
        <p className="text-gray-500 text-center mb-8">Data publikacji: 20 stycznia 2025</p>

        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Literatura podróżnicza to wyjątkowy gatunek, który przenosi czytelników do najodleglejszych zakątków świata, 
          pozwalając im doświadczyć kulturowych i przyrodniczych różnorodności, jakie oferuje nasza planeta. Książki te 
          nie tylko opisują miejsca, ale również refleksje autorów na temat podróży, życia i spotkań z ludźmi z różnych kultur.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Jednym z klasyków literatury podróżniczej jest „W drodze” Jacka Kerouaca, książka, która stała się symbolem 
          poszukiwania wolności i eksploracji. Kerouac, opisując podróże po Stanach Zjednoczonych, przenosi czytelnika 
          w świat przygód i spontaniczności, ukazując jednocześnie, jak podróż może stać się metaforą osobistego rozwoju.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Inny ważny autor tego gatunku to Paul Theroux, który w swoich książkach, takich jak „Wielki bazar kolejowy” 
          oraz „Na południe od granicy, na zachód od słońca”, zabiera czytelników w podróż koleją przez kontynenty, 
          przedstawiając lokalne kultury, zwyczaje i codzienne życie. Theroux opisuje swoje doświadczenia w sposób 
          refleksyjny, ukazując zarówno piękno, jak i trudności podróżowania.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Literatura podróżnicza pełni również ważną rolę edukacyjną, pomagając czytelnikom zrozumieć różnorodność świata 
          i wyzwania, przed którymi stoją różne społeczności. Książki podróżnicze umożliwiają bezpośrednie zetknięcie się 
          z odmiennymi kulturami, historią oraz przyrodą, inspirując do refleksji nad tym, jak różne są perspektywy 
          życiowe na całym świecie.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Współcześni autorzy, tacy jak Elizabeth Gilbert, autorka „Jedz, módl się, kochaj”, przedstawiają osobiste 
          historie podróży, które łączą się z poszukiwaniem sensu i szczęścia. Gilbert opowiada o podróżach do Włoch, 
          Indii i Indonezji, gdzie odkrywa różnorodne kultury i doświadczenia, które pomagają jej znaleźć harmonię 
          w życiu. Książki te nie tylko inspirują do podróży, ale również do poszukiwania wewnętrznego spokoju.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Literatura podróżnicza jest w stanie przenieść nas na nieznane kontynenty, w górskie doliny, do tropikalnych lasów 
          i pustynnych krajobrazów, oferując przy tym głęboką refleksję na temat sensu podróży i naszej roli w globalnym 
          społeczeństwie. Dzięki niej możemy poznać nie tylko świat zewnętrzny, ale i naszą wewnętrzną naturę.
        </p>

        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4 text-[#8B5E3C]">Komentarze</h2>

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

export default PostKsiazkiPodroznicze;
