// src/components/ArticlesContent/PostRenesansLiteratura.jsx

import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const PostRenesansLiteratura = () => {
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
        <h1 className="text-4xl font-bold text-center text-[#8B5E3C] mb-2">Najważniejsze dzieła epoki renesansu</h1>
        <p className="text-gray-500 text-center mb-8">Data publikacji: 25 października 2024</p>

        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Renesans, czyli odrodzenie, był okresem wielkiego rozwoju intelektualnego, artystycznego i kulturowego, który 
          zdominował Europę w XV i XVI wieku. Inspirowany ideami starożytnej Grecji i Rzymu, renesans przyniósł nowe podejście 
          do człowieka, jego roli w świecie oraz znaczenia indywidualności i wolności. Dzieła literackie tego okresu odzwierciedlają 
          fascynację nauką, filozofią i przyrodą oraz wiarę w nieograniczone możliwości ludzkiego umysłu.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Jednym z najważniejszych dzieł epoki renesansu jest „Boska Komedia” Dantego Alighieri. Choć napisana nieco przed 
          renesansem, miała ogromny wpływ na myśl renesansową i pozostaje symbolem literackiego odrodzenia. Dzieło to ukazuje 
          podróż Dantego przez Piekło, Czyściec i Raj, będąc alegorią ludzkiej duszy dążącej do zbawienia. Dzięki precyzyjnej 
          analizie ludzkich wad i cnót oraz głębokim refleksjom teologicznym i filozoficznym, „Boska Komedia” uznawana jest 
          za jedno z największych osiągnięć literatury światowej.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Inne kluczowe dzieło renesansu to „Dekameron” Giovanniego Boccaccia. Składa się z setki nowel opowiadanych przez grupę 
          młodych ludzi, którzy uciekają przed plagą w XIV-wiecznej Florencji. „Dekameron” jest przepełniony różnorodnością 
          tematów – od miłości i przygód po moralność i społeczne normy. Boccaccio przedstawił życie i ludzkie pragnienia 
          w sposób naturalny i bezpośredni, co w tamtym czasie było rewolucyjnym podejściem.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          William Szekspir, wybitny dramaturg angielski, był również kluczowym przedstawicielem renesansowego myślenia. Jego 
          dramaty, takie jak „Hamlet”, „Romeo i Julia” oraz „Makbet”, badają tematy władzy, miłości, zdrady i ambicji, ukazując 
          głębokie konflikty wewnętrzne postaci. Szekspir często korzystał z klasycznych wzorców, ale wzbogacał je o analizę 
          psychologiczną postaci, co uczyniło jego dzieła ponadczasowymi i uniwersalnymi.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          „Książę” Niccolò Machiavelliego to jedno z najbardziej kontrowersyjnych dzieł renesansu. Choć traktowane jako 
          poradnik dla władców, w rzeczywistości przedstawia brutalną analizę ludzkiej natury i polityki. Machiavelli twierdził, 
          że skuteczny władca powinien być gotów na wszystko, aby utrzymać władzę. „Książę” do dziś budzi kontrowersje, ale 
          także inspiruje do rozważań nad etyką, polityką i moralnością.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Epoka renesansu to także czas rozwoju literatury naukowej i filozoficznej. Pisma takich myślicieli jak Erazm z Rotterdamu 
          czy Tomasz Morus miały ogromny wpływ na późniejsze wieki. Dzieła renesansowe zainspirowały pokolenia artystów i 
          uczonych, kładąc fundamenty pod współczesną naukę i filozofię. Dzięki renesansowym myślicielom i ich dziełom, literatura 
          stała się nie tylko rozrywką, ale także narzędziem do zgłębiania tajemnic świata.
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

export default PostRenesansLiteratura;
