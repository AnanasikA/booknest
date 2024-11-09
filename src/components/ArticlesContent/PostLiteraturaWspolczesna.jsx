// src/components/ArticlesContent/PostLiteraturaWspolczesna.jsx

import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const PostLiteraturaWspolczesna = () => {
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
        <h1 className="text-4xl font-bold text-center text-[#8B5E3C] mb-2">Literatura współczesna: nowe perspektywy</h1>
        <p className="text-gray-500 text-center mb-8">Data publikacji: 5 stycznia 2025</p>

        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Literatura współczesna to niezwykle różnorodny i dynamiczny gatunek, który obejmuje szeroką gamę tematów, stylów 
          oraz technik literackich. Współczesni pisarze często podejmują tematy związane z globalizacją, technologią, 
          tożsamością oraz społecznymi i politycznymi wyzwaniami współczesnego świata. Literatura ta stanowi refleksję nad 
          naszymi czasami, jednocześnie poszukując nowych sposobów wyrażenia skomplikowanej rzeczywistości.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Jednym z głównych nurtów literatury współczesnej jest literatura postmodernistyczna, która charakteryzuje się 
          eksperymentowaniem z formą, grą intertekstualną oraz kwestionowaniem tradycyjnych zasad narracji. Autorzy tacy 
          jak Thomas Pynchon, Umberto Eco i Don DeLillo eksplorują złożoność ludzkiego doświadczenia w sposób, który wykracza 
          poza konwencjonalne formy opowiadania historii, często wprowadzając elementy ironii i pastiszu.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Kolejnym istotnym kierunkiem jest literatura migracyjna, która ukazuje doświadczenia osób zmieniających miejsca 
          zamieszkania i kultury. Pisarze, tacy jak Chimamanda Ngozi Adichie i Jhumpa Lahiri, przedstawiają wyzwania związane 
          z adaptacją, tożsamością i różnicami kulturowymi, tworząc portrety bohaterów próbujących odnaleźć swoje miejsce 
          w nowym świecie.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Współczesna literatura podejmuje również tematy związane z nowymi technologiami i ich wpływem na życie człowieka. 
          Powieści takie jak „Neuromancer” Williama Gibsona i „Koniec człowieczeństwa” Kazuo Ishiguro ukazują świat, w którym 
          granice między człowiekiem a technologią stają się coraz bardziej zatarte. Literatura ta zmusza do refleksji nad 
          etyką postępu technologicznego oraz konsekwencjami społecznymi i moralnymi, które wynikają z integracji technologii 
          z naszym życiem.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Inne znaczące tematy współczesnej literatury to kryzys klimatyczny i ekologia, które stanowią odpowiedź na zmiany 
          środowiskowe, zagrażające przyszłości planety. Artyści tacy jak Margaret Atwood i Richard Powers poruszają wątki 
          ekologiczne, wskazując na pilność problemu ochrony środowiska oraz wpływ człowieka na naturę. Dzieła te często 
          niosą przesłanie o odpowiedzialności i potrzebie zmiany sposobu, w jaki żyjemy.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Literatura współczesna nieustannie się rozwija, włączając w swoje ramy nowe tematy i eksperymentując z formą. 
          Współcześni autorzy starają się odzwierciedlać rzeczywistość w sposób wierny, ale jednocześnie krytyczny, oferując 
          czytelnikom nie tylko rozrywkę, ale i refleksję nad ich własnym życiem oraz światem, w którym żyjemy. Dzięki temu 
          literatura współczesna pozostaje niezwykle aktualna i inspirująca.
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

export default PostLiteraturaWspolczesna;
