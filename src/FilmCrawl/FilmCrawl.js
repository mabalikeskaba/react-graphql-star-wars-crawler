import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
// import './FilmCrawl.css';

const getFilmById = gql`
  query GetFirstFilm($id: ID!) {
    Film(id: $id) {
      title
      openingCrawl
      id
    }
  }
`;

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
    <div className='filmCrawl'>
      <div className='title'>{filmData.Film.title}</div>
      <div className='crawlerText'>{filmData.Film.openingCrawl}</div>
    </div>
  );
};

export default FilmCrawl;
