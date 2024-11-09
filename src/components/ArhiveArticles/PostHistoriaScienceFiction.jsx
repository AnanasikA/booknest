// src/components/archive_posts/PostEwolucjaScienceFiction.jsx

import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const PostEwolucjaScienceFiction = () => {
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
        <h1 className="text-4xl font-bold text-center text-[#8B5E3C] mb-2">Ewolucja science fiction</h1>
        <p className="text-gray-500 text-center mb-1">Autor: Marek Kowalski</p>
        <p className="text-gray-500 text-center mb-8">Data publikacji: Maj 2023</p>

        {/* Treść artykułu */}
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Gatunek science fiction od swoich początków ewoluował w zaskakujący sposób, dostosowując się do zmian
          technologicznych i naukowych. W XIX wieku, dzięki autorom takim jak Jules Verne i H.G. Wells, 
          science fiction zaczęło badać możliwości ludzkiej wyobraźni i prognozować przyszłe wynalazki. 
          Powieści Verne'a, takie jak „Dwadzieścia tysięcy mil podmorskiej żeglugi” i „Podróż do wnętrza Ziemi”,
          inspirowały nie tylko literatów, ale także naukowców, pokazując, że literatura i nauka mogą iść w parze.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          W XX wieku science fiction zyskało mroczniejsze i bardziej realistyczne oblicze. Pisarze, tacy jak George Orwell 
          w „Roku 1984” i Aldous Huxley w „Nowym wspaniałym świecie”, wykorzystywali ten gatunek jako sposób na krytykę 
          systemów politycznych i społecznych. Ich dystopie stały się ostrzeżeniem przed niekontrolowanym rozwojem technologicznym 
          i wzrostem totalitaryzmu, które mogą prowadzić do utraty ludzkiej wolności.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Literatura science fiction szybko zaczęła eksplorować kosmos. Isaac Asimov i Arthur C. Clarke pisali o 
          podróżach międzygwiezdnych i sztucznej inteligencji, analizując przyszłość ludzkiej cywilizacji w obliczu 
          rozwoju technologicznego. Asimov w swojej serii „Fundacja” oraz zbiorach opowiadań o robotach ustanowił 
          zasady etyczne dotyczące robotyki, które inspirują po dziś dzień.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Współczesna literatura science fiction jest zróżnicowana i obejmuje wiele podgatunków, takich jak cyberpunk, 
          postapokaliptyka, biopunk oraz military science fiction. Autorzy tacy jak William Gibson („Neuromancer”) 
          wprowadzili cyberpunk, który eksploruje symbiozę technologii i ludzkiej tożsamości w erze cyfrowej.
          Science fiction staje się coraz bardziej zaangażowane społecznie, poruszając takie kwestie jak wpływ 
          technologii na środowisko, rozwój sztucznej inteligencji i moralne konsekwencje genetyki.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Science fiction nie tylko pozwala czytelnikom wyobrazić sobie przyszłość, ale także skłania do refleksji 
          nad teraźniejszością. Gatunek ten stanowi przestrzeń do badania granic moralności, etyki oraz wpływu 
          nauki i technologii na ludzkość. Dziś science fiction jest zarówno formą rozrywki, jak i ważnym głosem 
          w debacie na temat przyszłości naszego gatunku.
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

export default PostEwolucjaScienceFiction;
