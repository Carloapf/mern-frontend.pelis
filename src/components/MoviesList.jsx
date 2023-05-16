import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from './Movie';
import AddReview from './AddReview';

function MoviesList() {
  const [movies, setMovies] = useState([]);
  const [newRating, setNewRating] = useState(0);
  const [showAddReview, setShowAddReview] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState('');



  const handleReviewClick = (imdbid) => {
    setSelectedMovie(imdbid);
    setShowAddReview(true);
  };

  /*const handleAddReview = (review) => {
    axios.post('http://localhost:4000/api/reviews/', review)
      .then(response => {
        console.log(response.data);
        setShowAddReview(false);
      })
      .catch(error => console.log(error));
  };*/

  const handleCancel = () => {
    setShowAddReview(false);
    setSelectedMovie('');
  };

  useEffect(() => {
    axios.get('https://carlo-backend-pelis.onrender.com/api/movies/')
      .then(response => setMovies(response.data))
      .catch(error => console.log(error));
  }, []);


  return (
    <div>
      <h1>Movies List</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.imdbid} {...movie} handleReviewClick={handleReviewClick}>
            <Movie movie={movie} />
            </li>
        ))}
        {// showAddReview && <AddReview imdbid={selectedMovie} handleAddReview={handleAddReview} handleCancel={handleCancel} />}
}
      </ul>
    </div>
  );
}

export default MoviesList;