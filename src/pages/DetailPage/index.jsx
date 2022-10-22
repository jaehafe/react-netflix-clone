import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../api/axios';

const DetailPage = () => {
  const [movies, setMovies] = useState({});
  const { movieId } = useParams();
  console.log('movieId', movieId);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(`/movie/${movieId}`);
      setMovies(request.data);
    };
    fetchData();
  }, [movieId]);

  if (!movies) return <div>...loading</div>;

  return (
    <section className="modal__poster-img">
      <img
        src={`http://image.tmdb.org/t/p/original/${movies.backdrop_path}`}
        alt="modal__poster-img"
      />
    </section>
  );
};

export default DetailPage;
