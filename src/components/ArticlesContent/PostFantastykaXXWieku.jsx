// src/components/ArticlesContent/PostFantastykaXXWieku.jsx

import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const PostFantastykaXXWieku = () => {
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
        <h1 className="text-4xl font-bold text-center text-[#8B5E3C] mb-2">Najlepsze powieści fantastyczne XX wieku</h1>
        <p className="text-gray-500 text-center mb-8">Data publikacji: 30 listopada 2024</p>

        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          XX wiek przyniósł literaturze fantastycznej nowe spojrzenie i niesamowitą różnorodność. Autorzy nie tylko eksplorowali 
          światy pełne magii i nadprzyrodzonych istot, ale również używali fantastyki jako sposobu na refleksję nad rzeczywistością, 
          człowieczeństwem i przyszłością. Powieści takie jak „Władca Pierścieni” J.R.R. Tolkiena, „Diuna” Franka Herberta oraz 
          „Fahrenheit 451” Raya Bradbury’ego stały się ikonami gatunku, inspirując pokolenia czytelników i twórców.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          „Władca Pierścieni” J.R.R. Tolkiena to bezsprzecznie jeden z najważniejszych i najbardziej wpływowych utworów 
          literatury fantastycznej. Epicka opowieść o walce dobra ze złem, rozgrywająca się w fikcyjnym Śródziemiu, stała się 
          fundamentem współczesnej literatury fantasy. Tolkien stworzył kompleksowy świat, zamieszkiwany przez różne rasy, 
          kultury i języki, co stanowi wzór dla późniejszych pisarzy.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Frank Herbert w „Diunie” przeniósł czytelników do dalekiej przyszłości, na pustynną planetę Arrakis, gdzie toczy się 
          walka o przetrwanie i kontrolę nad najcenniejszym zasobem wszechświata – melanżem, czyli „przyprawą”. „Diuna” 
          łączy elementy przygody, polityki i ekologii, tworząc unikalny świat i intrygującą fabułę, która stawia pytania o naturę 
          władzy, religii i przyszłość ludzkości. To dzieło wciąż pozostaje jednym z najważniejszych tekstów science fiction.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Ray Bradbury w „Fahrenheit 451” przedstawia dystopijną przyszłość, w której książki są zakazane, a strażacy zajmują się 
          ich paleniem. Bohater, Montag, strażak, który zaczyna kwestionować sens swojego zawodu i rzeczywistość, w której żyje, 
          odkrywa siłę słowa pisanego. „Fahrenheit 451” jest nie tylko opowieścią o przyszłości, ale także komentarzem na temat 
          cenzury, konsumpcjonizmu i potrzeby poszukiwania prawdy.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Ursula K. Le Guin, autorka takich dzieł jak „Ziemiomorze” i „Lewa ręka ciemności”, wprowadziła nowe idee do literatury 
          fantastycznej, koncentrując się na kwestiach społecznych, kulturowych i psychologicznych. Jej opowieści łączą elementy 
          magii i refleksji nad tożsamością, płcią oraz relacjami międzyludzkimi. Le Guin stała się jedną z pionierów feministycznej 
          fantastyki, zadając pytania, które były rzadko poruszane w literaturze fantastycznej.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Współczesna literatura fantastyczna nadal czerpie inspirację z dzieł XX wieku, które kształtowały gatunek i poszerzały 
          jego granice. Te powieści nie tylko zabierają nas w podróż do niezwykłych światów, ale również zmuszają do refleksji 
          nad naszym własnym światem i rolą, jaką w nim odgrywamy. Fantastyka XX wieku to skarbnica inspiracji, która pokazuje, 
          jak bogaty i wszechstronny jest ten gatunek.
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

export default PostFantastykaXXWieku;
