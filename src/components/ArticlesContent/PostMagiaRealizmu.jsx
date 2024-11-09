// src/components/ArticlesContent/PostMagiaRealizmu.jsx

import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const PostMagiaRealizmu = () => {
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
        <h1 className="text-4xl font-bold text-center text-[#8B5E3C] mb-2">Magia realizmu w literaturze latynoamerykańskiej</h1>
        <p className="text-gray-500 text-center mb-8">Data publikacji: 12 listopada 2024</p>

        {/* Treść artykułu */}
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Realizm magiczny to gatunek literacki, który łączy w sobie elementy codziennego życia i fantazji. 
          W jego ramach, niezwykłe zjawiska są traktowane jako naturalne i normalne aspekty rzeczywistości. 
          Gatunek ten wywodzi się z literatury latynoamerykańskiej i zyskał ogromną popularność na całym świecie, 
          zwłaszcza dzięki takim autorom jak Gabriel García Márquez, Isabel Allende i Julio Cortázar.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Gabriel García Márquez, znany ze swojej powieści "Sto lat samotności", uznawany jest za jednego 
          z ojców realizmu magicznego. W tej powieści opowiada historię rodziny Buendía, której losy przeplatają się 
          z surrealistycznymi i magicznymi wydarzeniami. Niezwykłe zdarzenia, takie jak pojawienie się duchów, 
          niezwykła pogoda, czy prorocze sny, są wplecione w fabułę w sposób, który nie tylko fascynuje, 
          ale również głęboko oddziałuje na emocje czytelnika.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Isabel Allende, autorka "Domu duchów", również wpisała się w nurt realizmu magicznego, tworząc opowieść o 
          rodzinie Trueba, której członkowie mają niezwykłe zdolności i zmagają się z przemianami społecznymi 
          w Chile. Allende wykorzystuje realizm magiczny, aby pokazać skomplikowane relacje międzyludzkie, 
          wpływ historii na jednostki oraz znaczenie korzeni i dziedzictwa.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Realizm magiczny nie ogranicza się tylko do literatury latynoamerykańskiej. Inne przykłady można znaleźć 
          w literaturze z całego świata, od Europy po Azję. Murakami Haruki, japoński pisarz, również korzysta z 
          elementów tego gatunku, tworząc fabuły pełne snów, metafizycznych przeżyć oraz subtelnych zjawisk, które 
          wymykają się racjonalnemu wyjaśnieniu. Jego powieść "Kronika ptaka nakręcacza" to doskonały przykład 
          połączenia rzeczywistości z mistycyzmem.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Współcześnie realizm magiczny jest wykorzystywany do przedstawiania zarówno tematów uniwersalnych, 
          jak i problemów społecznych. W literaturze tej magię traktuje się jako integralną część ludzkiego 
          doświadczenia. Ten wyjątkowy gatunek pozwala autorom eksplorować tematy związane z tożsamością, 
          dziedzictwem, historią i relacjami międzyludzkimi, nadając im głębię i emocjonalną intensywność.
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

export default PostMagiaRealizmu;

