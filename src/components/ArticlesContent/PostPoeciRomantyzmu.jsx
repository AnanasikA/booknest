// src/components/ArticlesContent/PostPoeciRomantyzmu.jsx

import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const PostPoeciRomantyzmu = () => {
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
        <h1 className="text-4xl font-bold text-center text-[#8B5E3C] mb-2">Poeci romantyzmu i ich dziedzictwo</h1>
        <p className="text-gray-500 text-center mb-8">Data publikacji: 5 grudnia 2024</p>

        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Romantyzm to epoka, która odcisnęła trwałe piętno na literaturze i sztuce. Poeci romantyzmu, tacy jak Adam 
          Mickiewicz, Johann Wolfgang von Goethe, George Gordon Byron oraz William Wordsworth, stworzyli dzieła, które 
          do dziś fascynują i inspirują. Romantyzm przywrócił naturze, emocjom i indywidualności centralne miejsce, 
          ukazując bogactwo ludzkiego doświadczenia w całej jego głębi i złożoności.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Adam Mickiewicz, jeden z najwybitniejszych poetów polskiego romantyzmu, stworzył utwory, które wpisały się 
          na stałe w historię literatury polskiej. Jego „Pan Tadeusz” to nie tylko epopeja narodowa, ale także piękny obraz 
          polskiej wsi i tradycji, pełen nostalgii i patriotycznych uczuć. Mickiewicz w swoich dziełach łączył elementy 
          baśniowe z realizmem, ukazując, jak ważne są korzenie kulturowe i narodowe.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Johann Wolfgang von Goethe, niemiecki poeta, dramatopisarz i filozof, stworzył dzieła, które zyskały światowy 
          rozgłos, takie jak „Cierpienia młodego Wertera” i „Faust”. Werter stał się symbolem młodzieńczej rozpaczy, 
          niemożliwej miłości i konfliktu między pragnieniami a rzeczywistością. „Faust” natomiast jest wielowarstwową 
          opowieścią o dążeniu do wiedzy i pełni życia, a także o moralnych dylematach, które wynikają z tego pragnienia.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          George Gordon Byron, angielski poeta romantyczny, znany był ze swojego buntowniczego ducha i pełnych pasji utworów. 
          Jego bohaterowie, często naznaczeni mrokiem i sprzeciwem wobec norm społecznych, stali się ikonami romantycznego 
          indywidualizmu. Poemat „Giaur” oraz inne jego dzieła poruszają tematy samotności, miłości i wolności, które do dziś 
          rezonują z czytelnikami na całym świecie.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          William Wordsworth, jeden z pionierów angielskiego romantyzmu, głosił idee powrotu do natury oraz głębokiego 
          związku człowieka ze światem przyrody. W swoich wierszach, takich jak „Prelude” czy „Tintern Abbey”, Wordsworth 
          ukazuje piękno natury i jej duchowe znaczenie, wierząc, że kontakt z naturą pozwala odkryć sens życia i głębię 
          ludzkiej duszy.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Dziedzictwo poetów romantyzmu jest widoczne nie tylko w literaturze, ale także w sztuce, muzyce i filozofii. 
          Romantyzm podkreślał znaczenie indywidualizmu, wolności i emocji, wartości, które przetrwały do dziś. Epoka ta 
          inspirowała późniejszych twórców do wyrażania swoich uczuć w sposób szczery i intensywny, otwierając drzwi do 
          eksploracji nowych tematów i form w sztuce.
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

export default PostPoeciRomantyzmu;
