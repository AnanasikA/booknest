// src/components/ArticlesContent/PostHistoriaKryminalu.jsx

import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const PostHistoriaKryminalu = () => {
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
        <h1 className="text-4xl font-bold text-center text-[#8B5E3C] mb-2">Historia kryminału: od Agathy Christie po współczesnych autorów</h1>
        <p className="text-gray-500 text-center mb-8">Data publikacji: 18 listopada 2024</p>

        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Literatura kryminalna zyskała ogromną popularność dzięki fascynującym historiom o zbrodniach, tajemnicach i próbach
          odkrycia prawdy. Jej korzenie sięgają XIX wieku, kiedy Edgar Allan Poe stworzył postać detektywa C. Auguste'a Dupina 
          w opowiadaniu „Zabójstwo przy Rue Morgue”. Ta historia, uznawana za pierwsze opowiadanie kryminalne, wyznaczyła 
          fundamenty dla gatunku, który rozwijał się przez kolejne dekady.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Jednym z najważniejszych momentów w historii kryminału było pojawienie się Sherlocka Holmesa – niezwykle 
          bystrego detektywa, stworzonego przez Sir Arthura Conana Doyle'a. Holmes, wraz z jego wiernym przyjacielem 
          doktorem Watsonem, stał się symbolem dedukcji i intelektu, a jego przygody przyciągnęły rzesze czytelników, 
          inspirując wielu kolejnych autorów. Jego metoda dedukcyjna i charakterystyczna sylwetka w płaszczu i czapce 
          z daszkiem uczyniły go ikoną kultury popularnej.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          W XX wieku królowa kryminału, Agatha Christie, wniosła gatunek na wyższy poziom dzięki postaciom takim jak 
          Herkules Poirot i panna Marple. Christie zasłynęła z budowania skomplikowanych fabuł i niezwykłych zwrotów 
          akcji, które zaskakiwały nawet najbardziej doświadczonych czytelników kryminałów. Powieści takie jak „Morderstwo 
          w Orient Expressie” oraz „Dziesięciu małych Murzynków” (obecnie publikowana pod tytułem „I nie było już nikogo”) 
          stały się klasykami, które do dziś stanowią wzór dla twórców literatury kryminalnej.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Współczesna literatura kryminalna jest znacznie bardziej różnorodna i wielowymiarowa. Autorzy tacy jak Raymond 
          Chandler czy Dashiell Hammett wprowadzili tzw. kryminał noir – mroczne, pełne brutalności i cynizmu historie, 
          w których detektywi mierzą się nie tylko z przestępcami, ale i z korupcją oraz zepsuciem świata. Chandler w swoich 
          powieściach, takich jak „Głęboki sen” z Philipem Marlowem w roli głównej, stworzył świat przepełniony moralnym 
          upadkiem i złożonymi relacjami międzyludzkimi.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          W XXI wieku kryminał ewoluował, by objąć nowe tematy i formy narracji. Skandynawscy pisarze, tacy jak 
          Stieg Larsson i Jo Nesbø, zasłynęli dzięki thrillerom psychologicznym, które ukazują mroczne strony ludzkiej 
          natury i kompleksowe relacje społeczne. Ich bohaterowie, tacy jak Mikael Blomkvist czy Harry Hole, to postacie 
          pełne skaz, które starają się rozwikłać tajemnice, jednocześnie walcząc ze swoimi osobistymi demonami.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Kryminał dziś to nie tylko opowieść o zbrodni, ale również analiza społeczna i psychologiczna, często ukazująca 
          skomplikowaną naturę człowieka. Współczesne kryminały dotykają tematów takich jak korupcja, przemoc domowa, 
          handel ludźmi oraz wpływ technologii na społeczeństwo. W ten sposób gatunek nieustannie ewoluuje, przystosowując 
          się do współczesnych problemów i wciąż fascynując kolejne pokolenia czytelników.
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

export default PostHistoriaKryminalu;
