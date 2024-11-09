// src/components/ArticlesContent/PostPsychologiaWLiteraturze.jsx

import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const PostPsychologiaWLiteraturze = () => {
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
        <h1 className="text-4xl font-bold text-center text-[#8B5E3C] mb-2">Psychologia w literaturze</h1>
        <p className="text-gray-500 text-center mb-8">Data publikacji: 25 grudnia 2024</p>

        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Psychologia odgrywa w literaturze niezwykle istotną rolę, pozwalając autorom na głębsze zgłębianie motywacji, 
          uczuć i złożoności ludzkiej natury. Literatura, w której psychologiczne aspekty postaci odgrywają centralną rolę, 
          pomaga czytelnikom lepiej zrozumieć siebie i innych, odkrywając, jak emocje, konflikty wewnętrzne oraz przeszłe 
          doświadczenia wpływają na nasze decyzje i zachowania.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Fiodor Dostojewski, jeden z najbardziej znanych autorów literatury psychologicznej, w swoich powieściach, takich jak 
          „Zbrodnia i kara” oraz „Bracia Karamazow”, analizował moralne dylematy, poczucie winy i konflikt wewnętrzny. 
          Główny bohater „Zbrodni i kary”, Rodion Raskolnikow, decyduje się na zbrodnię, którą uzasadnia własną teorią o 
          wyższości jednostek. Dostojewski bada psychologiczne skutki tego czynu, ukazując, jak poczucie winy i moralne rozterki 
          wpływają na kondycję psychiczną bohatera.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Innym przykładem literatury psychologicznej jest twórczość Virginie Woolf, która w swoich powieściach, takich jak 
          „Pani Dalloway” i „Do latarni morskiej”, eksplorowała świadomość swoich postaci. Woolf stosowała technikę strumienia 
          świadomości, pozwalając czytelnikom na bezpośredni wgląd w myśli i emocje bohaterów. Tego rodzaju narracja umożliwia 
          głębsze zrozumienie skomplikowanych procesów myślowych, które determinują ludzkie doświadczenie.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Franz Kafka, autor „Procesu” i „Przemiany”, ukazuje w swoich utworach nie tylko alienację jednostki, ale także 
          wewnętrzne zmagania bohaterów, którzy często są zagubieni i nie rozumieją otaczającego ich świata. Kafkowscy bohaterowie 
          reprezentują ludzkie zmagania z poczuciem winy, lękiem i bezsilnością wobec nieznanych sił, co czyni jego dzieła 
          wyjątkowo psychologicznymi.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Literatura współczesna również sięga po psychologiczne wątki, ukazując złożoność postaci oraz dynamikę ich relacji. 
          Autorzy tacy jak Ian McEwan czy Haruki Murakami przedstawiają bohaterów z pełnym wachlarzem emocji i dylematów, 
          pozwalając czytelnikom wniknąć w ich wewnętrzne konflikty. Ich dzieła często poruszają tematy takie jak samotność, 
          poszukiwanie sensu i tożsamości, co sprawia, że literatura psychologiczna pozostaje niezwykle aktualna i inspirująca.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Psychologia w literaturze daje nam nie tylko wgląd w ludzką naturę, ale również umożliwia zrozumienie uniwersalnych 
          doświadczeń. Dzięki literaturze psychologicznej możemy lepiej pojąć siebie i innych, co sprawia, że ten gatunek 
          pozostaje ważnym elementem światowego dziedzictwa literackiego.
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

export default PostPsychologiaWLiteraturze;
