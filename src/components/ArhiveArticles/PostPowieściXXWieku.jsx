// src/components/archive_posts/PostPowieściXXWieku.jsx

import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const PostPowieściXXWieku = () => {
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
        <h1 className="text-4xl font-bold text-center text-[#8B5E3C] mb-2">Najlepsze powieści z XX wieku</h1>
        <p className="text-gray-500 text-center mb-1">Autor: Piotr Nowak</p>
        <p className="text-gray-500 text-center mb-8">Data publikacji: Marzec 2023</p>

        {/* Treść artykułu */}
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          XX wiek to czas intensywnych przemian społecznych, kulturowych i technologicznych, które znalazły odbicie w literaturze.
          To właśnie wtedy autorzy zaczęli łamać konwencje literackie, wprowadzając nowe formy narracji i bardziej eksperymentalne
          style pisania. Przez wiele dekad literatura stanowiła narzędzie do analizowania współczesnych konfliktów,
          lęków i aspiracji, a powieści z tego okresu często mają ponadczasowy wydźwięk.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Jednym z najwybitniejszych przedstawicieli realizmu magicznego był Gabriel Garcia Marquez. Jego powieść „Sto lat samotności”
          nie tylko wprowadziła czytelników w mistyczny świat Macondo, ale także odzwierciedliła skomplikowaną historię
          oraz tożsamość Ameryki Łacińskiej. Kolejnym przykładem jest F. Scott Fitzgerald, który w „Wielkim Gatsby’m” 
          stworzył literacką krytykę amerykańskiego snu, badając rozpad moralności i materializm tamtych czasów.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          W literaturze XX wieku rozwijały się także nurty egzystencjalistyczne. Albert Camus w „Obcym” i Franz Kafka w „Procesie” 
          eksplorowali alienację jednostki, absurdalność życia i pytania o sens ludzkiego istnienia. Ta głęboka introspekcja 
          i kwestionowanie rzeczywistości stały się fundamentem dla literatury psychologicznej.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          W późniejszym okresie, literatura postmodernistyczna, reprezentowana przez autorów takich jak Kurt Vonnegut czy Thomas Pynchon,
          zaczęła badać fragmentaryczność rzeczywistości i rozpad tradycyjnych wartości. Powieści takie jak „Rzeźnia numer pięć”
          oraz „Tęcza grawitacji” nie tylko wprowadziły czytelników w świat postmodernizmu, ale także przekształciły sposób,
          w jaki odbieramy literaturę.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Literatura XX wieku była świadkiem narodzin nowych gatunków, takich jak science fiction i literatura dystopijna,
          które były odpowiedzią na obawy związane z przyszłością i technologicznymi postępami. George Orwell w „Roku 1984” 
          i Aldous Huxley w „Nowym wspaniałym świecie” przedstawili ponurą wizję przyszłości, która do dziś jest ostrzeżeniem przed 
          konsekwencjami totalitaryzmu i nadużycia technologii.
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

export default PostPowieściXXWieku;

