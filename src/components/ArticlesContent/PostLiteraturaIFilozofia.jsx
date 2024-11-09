// src/components/ArticlesContent/PostLiteraturaIFilozofia.jsx

import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const PostLiteraturaIFilozofia = () => {
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
        <h1 className="text-4xl font-bold text-center text-[#8B5E3C] mb-2">Literatura i filozofia: kiedy książki stają się refleksją</h1>
        <p className="text-gray-500 text-center mb-8">Data publikacji: 10 listopada 2024</p>

        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Literatura i filozofia od wieków pozostają nierozłączne, wzajemnie się przenikając i inspirując. Wielu autorów, 
          takich jak Fiodor Dostojewski, Albert Camus czy Franz Kafka, korzystało z literatury jako środka do przekazywania 
          głębokich refleksji na temat ludzkiego życia, moralności i cierpienia. Dzieła te, choć fikcyjne, służą jako platforma 
          do badań nad kondycją człowieka oraz sensem życia.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Fiodor Dostojewski, rosyjski powieściopisarz, w „Zbrodni i karze” ukazuje dramat człowieka, który stawia siebie 
          ponad moralność, próbując usprawiedliwić zbrodnię ideą wyższych celów. Postać Raskolnikowa, młodego studenta, 
          który zabija lichwiarkę, jest symbolem moralnego upadku i rozdarcia wewnętrznego. Dostojewski analizuje 
          psychologiczne skutki zbrodni i stawia pytania o naturę dobra i zła, ukazując, jak filozoficzne idee mogą wpływać 
          na życie jednostki.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Albert Camus, pisarz i filozof egzystencjalizmu, w „Obcym” bada absurdalność istnienia i brak sensu życia, które 
          staje się głównym problemem egzystencjalnym. Główny bohater, Meursault, staje wobec świata, który jest dla niego 
          obcy, pozbawiony wartości i znaczenia. Camus, przez pryzmat tej postaci, ukazuje koncepcję „absurdu” oraz konieczność 
          nadania własnego sensu życiu, mimo że świat pozostaje obojętny.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Literatura filozoficzna często dotyka też tematów wolności, odpowiedzialności i moralnych dylematów. Franz Kafka, 
          autor takich dzieł jak „Proces” czy „Zamek”, przedstawia świat biurokratyczny, w którym jednostka jest zdominowana 
          przez bezosobowe siły. Bohaterowie Kafki, którzy zmagają się z poczuciem winy i alienacji, są odzwierciedleniem 
          samotności człowieka we współczesnym, złożonym świecie. Kafka ukazuje, jak świat zewnętrzny może wpłynąć na życie 
          wewnętrzne jednostki, zmuszając ją do refleksji nad sensem istnienia.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Literatura filozoficzna jest nie tylko sposobem na wyrażenie idei, ale także wyzwaniem intelektualnym dla czytelnika. 
          Dzieła takich myślicieli jak Jean-Paul Sartre, Simone de Beauvoir czy Tomasz Mann stawiają pytania, które często 
          nie mają prostych odpowiedzi, zmuszając czytelnika do samodzielnego poszukiwania prawdy. Literatura ta staje się 
          narzędziem refleksji nad samym sobą, pomagając zrozumieć siebie i świat.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Dzięki literaturze i filozofii, nasze rozważania nad życiem, śmiercią, miłością i moralnością stają się 
          bardziej intensywne i złożone. Te dwa obszary wiedzy i sztuki wspólnie tworzą przestrzeń, w której możemy 
          nie tylko odkrywać świat zewnętrzny, ale także eksplorować głębiny ludzkiej duszy. Literatura staje się 
          wówczas czymś więcej niż opowieścią – jest zaproszeniem do refleksji nad najistotniejszymi aspektami ludzkiej egzystencji.
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

export default PostLiteraturaIFilozofia;
