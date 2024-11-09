// src/components/ArticlesContent/PostRomantyzmLiteratura.jsx

import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const PostRomantyzmLiteratura = () => {
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
        <h1 className="text-4xl font-bold text-center text-[#8B5E3C] mb-2">Epoka romantyzmu w literaturze</h1>
        <p className="text-gray-500 text-center mb-8">Data publikacji: 30 grudnia 2024</p>

        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Romantyzm to jedna z najbardziej przełomowych epok w literaturze, która zmieniła sposób myślenia o człowieku, 
          naturze i sztuce. Powstały w XIX wieku, romantyzm odrzucił racjonalizm oświecenia, koncentrując się na emocjach, 
          indywidualizmie oraz naturze jako źródle inspiracji i duchowej refleksji. Twórcy romantyzmu uważali, że prawdziwa 
          sztuka powinna odzwierciedlać wewnętrzny świat artysty, jego marzenia, lęki i aspiracje.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          W literaturze romantycznej pojawiły się nowe motywy, takie jak samotność, miłość nieszczęśliwa, podróż w poszukiwaniu 
          sensu życia oraz bunt wobec konwenansów społecznych. Romantyzm dał początek literackim bohaterom, którzy są pełni 
          sprzeczności – silni, ale wrażliwi, pełni pasji, ale skłonni do introspekcji i zadumy. Bohaterowie romantyczni, 
          jak Konrad z „Dziadów” Adama Mickiewicza, stali się symbolami nie tylko epoki, ale również niezależności i buntu.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Adam Mickiewicz, Juliusz Słowacki i Zygmunt Krasiński to czołowi przedstawiciele polskiego romantyzmu. Ich dzieła, 
          pełne patriotyzmu i miłości do ojczyzny, nawiązywały do sytuacji politycznej Polski, będącej pod zaborami. 
          Mickiewicz, tworząc „Pana Tadeusza” i „Dziady”, nadał polskiej literaturze romantycznej charakter narodowy, 
          podkreślając znaczenie tradycji i kultury dla przetrwania tożsamości narodowej.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          W literaturze światowej romantyzm wydał takich twórców jak Johann Wolfgang von Goethe, George Gordon Byron oraz 
          Victor Hugo. Ich dzieła, pełne intensywnych emocji i dramatycznych historii, odzwierciedlały nie tylko wewnętrzne 
          zmagania bohaterów, ale także problemy społeczne i polityczne ich czasów. Byronowscy bohaterowie, charakteryzujący się 
          niepokornym duchem i buntem wobec świata, stali się ikonami romantycznego indywidualizmu.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Motyw natury był kluczowy dla romantyzmu. Twórcy romantyczni wierzyli, że natura jest odzwierciedleniem boskości 
          i wewnętrznego świata człowieka. Opisy przyrody, pełne mistycyzmu i symboliki, często służyły jako metafory 
          stanów duchowych bohaterów. To w naturze bohaterowie znajdowali ukojenie, inspirację oraz odpowiedzi na nurtujące ich 
          pytania. Romantyzm przywrócił naturze jej pierwotne, duchowe znaczenie.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Epoka romantyzmu miała ogromny wpływ na późniejsze ruchy literackie i artystyczne. Idee romantyczne, takie jak 
          indywidualizm, bunt i afirmacja emocji, były kontynuowane w literaturze modernistycznej oraz współczesnej. 
          Romantyzm otworzył drzwi do literatury opartej na wewnętrznych przeżyciach i refleksji, tworząc fundamenty, na 
          których opiera się wiele dzisiejszych gatunków literackich.
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

export default PostRomantyzmLiteratura;
