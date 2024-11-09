// src/components/ArticlesContent/PostKlasykaLiteratury.jsx

import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const PostKlasykaLiteratury = () => {
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
        <h1 className="text-4xl font-bold text-center text-[#8B5E3C] mb-2">Dlaczego warto czytać klasyków</h1>
        <p className="text-gray-500 text-center mb-8">Data publikacji: 5 września 2024</p>

        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Klasyka literatury to termin, który przywołuje na myśl dzieła, które przetrwały próbę czasu i zdobyły uznanie
          wielu pokoleń. Klasyczne powieści, poezja oraz dramaty odzwierciedlają wartości i problemy swoich epok, a jednocześnie
          podejmują uniwersalne tematy, które są aktualne do dziś. Dzieła takie jak „Iliada” Homera, „Boska Komedia” Dantego,
          „Hamlet” Szekspira oraz „Duma i uprzedzenie” Jane Austen pozostają wzorami literatury, które inspirują, uczą i bawią 
          kolejne pokolenia czytelników.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Wiele klasycznych dzieł skupia się na badaniu ludzkiej natury i emocji, od miłości i przyjaźni po zazdrość, 
          gniew i rozpacz. Książki te poruszają kwestie moralne i filozoficzne, zmuszając czytelnika do refleksji nad sensem 
          życia, śmiercią, dobrem i złem. Dzieła Szekspira, na przykład, mimo że zostały napisane ponad cztery wieki temu, 
          nadal rezonują z czytelnikami na całym świecie dzięki głębokiej analizie ludzkich emocji i wewnętrznych konfliktów.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Literatura klasyczna jest także oknem na minione epoki i kultury. Przedstawia sposób myślenia i życie ludzi w czasach, 
          które często różnią się od współczesności, ale mimo to zawierają elementy, które są zrozumiałe i bliskie dzisiejszym 
          czytelnikom. Na przykład powieści Charlesa Dickensa, takie jak „Oliver Twist” czy „Opowieść o dwóch miastach”, 
          przedstawiają realia XIX-wiecznej Anglii, zwracając uwagę na problemy społeczne, takie jak ubóstwo, nierówność oraz 
          niesprawiedliwość.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Czytając klasyków, zyskujemy perspektywę, która pozwala zrozumieć, jak wiele zmieniło się w ciągu stuleci, 
          a zarazem jak wiele problemów pozostaje niezmiennych. Dostojewski w „Zbrodni i karze” analizuje moralne dylematy 
          i naturę winy oraz kary, co jest aktualne i dziś. Tolstoj w „Wojnie i pokoju” ukazuje złożoność życia jednostki na 
          tle historycznych wydarzeń, pytając o wolność, odpowiedzialność oraz sens życia.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Literatura klasyczna nie tylko wzbogaca naszą wiedzę o historii i kulturze, ale także rozwija naszą wrażliwość 
          emocjonalną i wyobraźnię. Czytanie klasyki to podróż, która pozwala nam doświadczyć innego świata i wejść w skórę 
          postaci, które, choć żyły w odległych czasach, stają się nam bliskie. Warto sięgnąć po dzieła takie jak „Anna Karenina” 
          czy „Mistrz i Małgorzata”, aby zanurzyć się w narracjach pełnych głębi, odkrywając przy tym piękno języka i 
          mistrzostwo stylu.
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

export default PostKlasykaLiteratury;


