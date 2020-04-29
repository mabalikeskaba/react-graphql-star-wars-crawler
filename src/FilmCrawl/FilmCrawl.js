import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import './FilmCrawl.css';

const getFilmById = gql`
  query GetFirstFilm($id: ID!) {
    Film(id: $id) {
      title
      openingCrawl
      id
      episodeId
    }
  }
`;

function getEpisodeString(episodeId) {
  switch (episodeId) {
    case 1:
      return 'I';
    case 2:
      return 'II';
    case 3:
      return 'III';
    case 4:
      return 'IV';
    case 5:
      return 'V';
    case 6:
      return 'VI';
    case 7:
      return 'VII';
    case 8:
      return 'VIII';
    case 9:
      return 'IX';
    default:
      return episodeId;
  }
}

const FilmCrawl = ({ id }) => {
  console.log('ID: ' + id);
  const { data: filmData, loading: filmLoading, error: filmError } = useQuery(
    getFilmById,
    {
      variables: { id: id },
    }
  );
  console.log(filmData);
  if (filmLoading) return <span>Loading...</span>;
  if (filmError) return <span>Error!...</span>;
  return (
    <>
      <div className='crawlContainer'>
        <div className='leftBorder'></div>
        <div className='filmCrawl'>
          <div className='filmCrawlContent'>
            <div className='filmCrawlTitle'>
              <p>Episode {getEpisodeString(filmData.Film.episodeId)}</p>
              <p>{filmData.Film.title}</p>
            </div>
            <div className='filmCrawlText'>{filmData.Film.openingCrawl}</div>
          </div>
        </div>
        <div className='rightBorder'></div>
      </div>
    </>
  );
};

export default FilmCrawl;
