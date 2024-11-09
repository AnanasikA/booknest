// src/components/ArticlesContent/PostFeminizmLiteratura.jsx

import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const PostFeminizmLiteratura = () => {
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
        <p className="text-gray-500 text-center mb-8">Data publikacji: 10 stycznia 2025</p>

        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Literatura feministyczna to niezwykle ważny nurt literacki, który skupia się na doświadczeniach, wyzwaniach 
          i refleksjach kobiet oraz na analizie struktury społecznej przez pryzmat płci. Powstała jako odpowiedź na 
          dominację męskiego punktu widzenia w literaturze, literatura feministyczna stanowi głos dla kobiet, który 
          przedstawia ich historie, dylematy i osiągnięcia, dążąc do równouprawnienia i zrozumienia dla różnorodności płci.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Pionierkami literatury feministycznej były takie autorki jak Mary Wollstonecraft, której „Wołanie o prawa kobiet” 
          stało się manifestem dla emancypacji kobiet, oraz Virginia Woolf, która w esejach, takich jak „Własny pokój”, 
          badała zależność między wolnością twórczą a dostępem kobiet do zasobów ekonomicznych i edukacyjnych. 
          Woolf podkreślała, jak ważne jest, aby kobiety miały własną przestrzeń do tworzenia i wyrażania siebie.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          W XX wieku literatura feministyczna rozwijała się dynamicznie, obejmując szeroki zakres tematów, od ról płciowych, 
          przez seksualność, po prawa reprodukcyjne. Simone de Beauvoir w swojej książce „Druga płeć” podjęła się analizy 
          historii patriarchatu i jego wpływu na społeczne postrzeganie kobiet, zadając pytanie, czym jest kobiecość oraz jak 
          konstruowana jest przez społeczeństwo.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          W literaturze współczesnej pisarki, takie jak Margaret Atwood i Toni Morrison, podejmują się analizy nie tylko 
          sytuacji kobiet, ale także skomplikowanych relacji między płcią, rasą i klasą społeczną. W „Opowieści podręcznej” 
          Atwood ukazuje dystopijną wizję świata, w którym prawa kobiet zostały drastycznie ograniczone, co stanowi komentarz 
          do współczesnych zagrożeń dla praw kobiet. Z kolei Morrison, laureatka Nagrody Nobla, w swoich dziełach takich jak 
          „Umiłowana”, eksploruje wpływ rasizmu i traumy na tożsamość i życie kobiet afroamerykańskich.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Literatura feministyczna nie tylko daje głos kobietom, ale również umożliwia krytyczne spojrzenie na struktury władzy 
          i normy społeczne, które ograniczają swobodę jednostki. Twórczość feministyczna inspiruje do refleksji nad tym, jak 
          społeczeństwo kształtuje nasze tożsamości i jakie konsekwencje niesie ze sobą brak równości płciowej. Dzisiejsze 
          pisarki feministyczne często łączą w swoich dziełach tematy związane z ekologią, migracją i technologią, podkreślając, 
          że prawa kobiet są nierozerwalnie związane z innymi wyzwaniami globalnymi.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Współczesna literatura feministyczna jest niezwykle zróżnicowana, od beletrystyki po eseje, biografie i poezję. 
          Autorki, takie jak Roxane Gay, Chimamanda Ngozi Adichie i Rebecca Solnit, w swoich dziełach poruszają kwestie związane 
          z różnorodnością i inkluzywnością, dostarczając narzędzi do lepszego zrozumienia oraz zmiany społecznej. Dzięki ich 
          głosom literatura feministyczna nadal inspiruje do działań na rzecz równości.
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

export default PostFeminizmLiteratura;
