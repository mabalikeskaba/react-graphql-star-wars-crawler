import React from 'react';
import FilmChoice from '../FilmChoice/FilmChoice';
import FilmCrawl from '../FilmCrawl/FilmCrawl';
import Star from '../Star/Star';

import './App.css';

function App() {
  const [crawlingFilmId, setCrawlingFilmId] = React.useState('');
  const [isCrawling, setIsCrawling] = React.useState(false);

  function handleFilmChoiceSubmit(filmId) {
    setCrawlingFilmId(filmId);
    setIsCrawling(filmId !== '');
  }

  return (
    <div className='App'>
      <Star>asd</Star>
      <FilmChoice onClick={handleFilmChoiceSubmit} />
      {isCrawling && <FilmCrawl id={crawlingFilmId} />}
    </div>
  );
}

export default App;
