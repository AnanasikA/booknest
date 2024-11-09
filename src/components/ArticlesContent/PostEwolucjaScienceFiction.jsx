// src/components/ArticlesContent/PostEwolucjaScienceFiction.jsx

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
        <p className="text-gray-500 text-center mb-8">Data publikacji: 20 grudnia 2024</p>

        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Science fiction to gatunek literacki, który od wieków fascynuje czytelników wizjami przyszłości, zaawansowaną 
          technologią oraz zagadkami kosmosu. Rozpoczynając swoją drogę od opowieści pełnych wynalazków i podróży w nieznane, 
          science fiction przekształcił się w pełnoprawny gatunek, który bada lęki i marzenia społeczeństwa na różnych etapach 
          jego rozwoju. Twórcy science fiction często korzystają z literackich narzędzi, by przedstawiać refleksje nad 
          konsekwencjami rozwoju technologicznego i naukowego.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Jednym z prekursorów science fiction był Juliusz Verne, którego powieści takie jak „Podróż do wnętrza Ziemi” i „Dwadzieścia 
          tysięcy mil podmorskiej żeglugi” przyniosły mu światową sławę. Verne przenosił czytelników w miejsca, które nie były jeszcze 
          dostępne dla człowieka, rozbudzając ciekawość i inspirując kolejne pokolenia wynalazców oraz odkrywców.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          H.G. Wells, inny pionier gatunku, wniósł do science fiction elementy spekulacji społecznej i filozoficznej. Jego dzieła, 
          takie jak „Wehikuł czasu” i „Wojna światów”, nie tylko ukazują zaawansowane technologie, ale także rozważają moralne i 
          etyczne konsekwencje ich wykorzystania. Wells często stawiał pytania o to, jak ludzkość poradzi sobie z wynalazkami 
          przewyższającymi jej własne możliwości.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          W XX wieku science fiction zaczęło eksplorować nowe obszary, takie jak podróże kosmiczne, sztuczna inteligencja i 
          cybernetyka. Isaac Asimov, jeden z najważniejszych autorów gatunku, stworzył „Fundację” oraz serię o robotach, w których 
          badał relacje między ludźmi a maszynami. Jego „Trzy prawa robotyki” stały się podstawą dla rozważań nad etyką sztucznej 
          inteligencji i miały wpływ na wielu późniejszych twórców.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Lata 60. przyniosły narodziny subgatunku określanego jako „new wave”, który eksperymentował z formą i tematyką. 
          Autorzy tacy jak Philip K. Dick i Ursula K. Le Guin zaczęli wprowadzać do science fiction elementy psychologiczne 
          i filozoficzne. Dick w swoich dziełach, takich jak „Czy androidy marzą o elektrycznych owcach?”, eksplorował temat 
          tożsamości i rzeczywistości, zadając pytania o to, co to znaczy być człowiekiem. Le Guin, z kolei, wprowadziła do 
          gatunku społeczne i kulturowe refleksje, ukazując przyszłość w kontekście problemów społecznych i relacji między 
          jednostką a społeczeństwem.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Dziś science fiction to niezwykle różnorodny gatunek, który obejmuje zarówno wizje utopijne, jak i dystopijne. Od 
          literatury cyberpunkowej, która bada mroczne strony zaawansowanej technologii, po science fiction ekologiczne, 
          zwracające uwagę na przyszłość planety – science fiction pozostaje miejscem, gdzie możemy badać nie tylko przyszłość, 
          ale również aktualne lęki i nadzieje społeczeństwa. Ewolucja gatunku pokazuje, jak science fiction reaguje na zmieniający 
          się świat i otwiera nowe horyzonty dla czytelników oraz twórców.
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

export default PostEwolucjaScienceFiction;
