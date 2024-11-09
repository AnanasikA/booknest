import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Home from './components/Home';
import ArticlesPage from './components/ArticlesPage';
import Newsletter from './components/Newsletter';
import Archive from './components/Archive';
import About from './components/About';
import Footer from './components/Footer';
import ArticleMagiaRealizmu from './components/articles/ArticleMagiaRealizmu';
import ArticlePowiesciWspolczesne from './components/articles/ArticlePowiesciWspolczesne';
import ArticleKlasyczneDziela from './components/articles/ArticleKlasyczneDziela';
import PostMagiaRealizmu from './components/ArticlesContent/PostMagiaRealizmu';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/about" element={<About />} />
        <Route path="/articles/1" element={<ArticleMagiaRealizmu />} />
        <Route path="/articles/2" element={<ArticlePowiesciWspolczesne />} />
        <Route path="/articles/3" element={<ArticleKlasyczneDziela />} />
        <Route path="/articles/magia-realizmu" element={<PostMagiaRealizmu />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;


