import React from 'react';
import Spinner from '../Spinner/Spinner';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import './FilmChoice.css';

const getAllFilms = gql`
  query GetAllFilms {
    allFilms(orderBy: episodeId_ASC) {
      title
      id
    }
  }
`;

const FilmChoice = ({ onClick }) => {
  const { data: filmData, loading: filmLoading, error: filmError } = useQuery(
    getAllFilms
  );

  const [selectedFilm, setSelectedFilm] = React.useState(null);
  function onFilmChoiceChange(event) {
    setSelectedFilm(event.target.value);
  }

  React.useEffect(() => {
    setSelectedFilm(filmData?.allFilms[0].id);
  }, [filmData]);

  if (filmLoading) return <Spinner />;
  if (filmError) return <span>Error!...</span>;
  return (
    <div className='filmChoice'>
      <select value={selectedFilm} onChange={onFilmChoiceChange}>
        {filmData.allFilms.map((film, index) => {
          return (
            <option key={index} value={film.id}>
              {film.title}
            </option>
          );
        })}
      </select>
      <button onClick={() => onClick(selectedFilm)}>Start!</button>
    </div>
  );
};

export default FilmChoice;
