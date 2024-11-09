// src/components/ArticlesContent/PostLiteraturaSredniowiecza.jsx

import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const PostLiteraturaSredniowiecza = () => {
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
        <h1 className="text-4xl font-bold text-center text-[#8B5E3C] mb-2">Literatura średniowiecza i jej tajemnice</h1>
        <p className="text-gray-500 text-center mb-8">Data publikacji: 15 grudnia 2024</p>

        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Literatura średniowiecza, choć często niedoceniana, jest skarbnicą wiedzy o kulturze, wierzeniach i wartościach ludzi 
          tamtych czasów. Średniowieczne teksty pełne są symboliki, moralnych przypowieści i alegorii, które miały na celu 
          edukowanie i inspirowanie odbiorców. Twórcy tego okresu często skupiali się na tematach religijnych, rycerskich 
          oraz filozoficznych, ukazując człowieka jako istotę zależną od Boga i zmuszoną do życia w zgodzie z określonymi 
          zasadami moralnymi.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Jednym z najbardziej znanych utworów średniowiecznej literatury jest „Boska Komedia” Dantego Alighieri. To epicka 
          wizja zaświatów, która prowadzi czytelnika przez Piekło, Czyściec i Raj. Dzieło to nie tylko ukazuje wierzenia 
          religijne tamtego okresu, ale także jest alegorią moralności i duchowego rozwoju człowieka. Dante, poprzez podróż 
          bohatera, ukazuje konsekwencje moralnych wyborów i znaczenie pokuty.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Kolejnym kluczowym dziełem jest „Pieśń o Rolandzie”, francuski epos rycerski, który ukazuje ideały rycerskie, takie 
          jak honor, lojalność i odwaga. Roland, rycerz Karola Wielkiego, staje w obliczu ogromnej bitwy, a jego walka staje 
          się symbolem lojalności wobec króla i Boga. Epos ten miał inspirować rycerzy do przestrzegania kodeksu rycerskiego, 
          podkreślając, że honor i wiara są wartościami najwyższymi.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Średniowiecze przyniosło również rozwój literatury mistycznej, w której autorzy dzielili się swoimi doświadczeniami 
          duchowymi i refleksjami nad wiarą. Przykładem może być twórczość Hildegardy z Bingen, niemieckiej mistyczki, która 
          w swoich wizjach i pismach ukazywała głęboką duchowość oraz wiedzę z zakresu teologii, filozofii i medycyny. Jej 
          pisma inspirowały wiernych i były uznawane za autorytatywne w sprawach religijnych.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Literatura średniowieczna pozostawiła po sobie nie tylko opowieści o wierzeniach i moralności, ale także pokazała, 
          jak ważne były symbole i alegorie. Współczesna literatura nadal czerpie z tradycji średniowiecznych, zwłaszcza w 
          literaturze fantasy, gdzie często pojawiają się motywy rycerskie, duchowe poszukiwania i alegoryczne przedstawienia 
          dobra i zła. Literatura średniowieczna jest nie tylko obrazem epoki, ale również bogatym źródłem inspiracji dla 
          współczesnych twórców.
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

export default PostLiteraturaSredniowiecza;
