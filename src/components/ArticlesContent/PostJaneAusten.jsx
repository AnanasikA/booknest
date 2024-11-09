// src/components/ArticlesContent/PostJaneAusten.jsx

import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const PostJaneAusten = () => {
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
        <h1 className="text-4xl font-bold text-center text-[#8B5E3C] mb-2">Niezwykłe powieści Jane Austen</h1>
        <p className="text-gray-500 text-center mb-8">Data publikacji: 20 października 2024</p>

        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Jane Austen, angielska powieściopisarka z XIX wieku, była prawdziwą pionierką literatury kobiecej. 
          Jej powieści, które koncentrują się na miłości, małżeństwie oraz życiu angielskiej klasy średniej i arystokracji, 
          są dziś uznawane za arcydzieła literatury. Austen miała niezwykłą zdolność do obserwacji i wyśmiewania społecznych 
          absurdów swojej epoki, jednocześnie budując realistyczne i pełne życia portrety swoich bohaterów.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Jej najbardziej znana powieść, „Duma i uprzedzenie”, opowiada historię Elizabeth Bennet i pana Darcy'ego, 
          których początkowa antypatia stopniowo przeradza się w głębokie uczucie. Austen używa tej historii, aby 
          skrytykować system społeczny swojej epoki, w którym kobiety były często traktowane jako towar, a małżeństwo było 
          jedyną drogą do zabezpieczenia przyszłości. W swoich książkach Austen często pokazuje, jak kobiety, 
          choć ograniczone przez konwenanse, potrafią znaleźć własne drogi i wyrazić swoją niezależność.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          „Rozważna i romantyczna” oraz „Emma” to inne znaczące powieści Austen. Pierwsza z nich to historia dwóch sióstr, 
          Elinor i Marianne Dashwood, które różnią się w podejściu do życia i miłości, reprezentując odpowiednio rozważność 
          i romantyczność. Druga powieść opowiada o młodej, inteligentnej kobiecie, Emmie Woodhouse, która próbuje bawić się 
          w swatkę, często z komicznymi i niefortunnymi rezultatami.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Austen jest także doceniana za swoje unikalne spojrzenie na temat roli kobiety w społeczeństwie oraz 
          za subtelne, ironiczne podejście do opisu konwenansów i obyczajów swojej epoki. W jej twórczości nie znajdziemy 
          wielkich dramatów czy epickich wydarzeń – cała akcja skupia się na psychologii postaci i ich interakcjach, co czyni 
          jej powieści uniwersalnymi i wciąż aktualnymi. Dla czytelników na całym świecie powieści Jane Austen są źródłem 
          zarówno głębokiej refleksji, jak i rozrywki.
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

export default PostJaneAusten;
