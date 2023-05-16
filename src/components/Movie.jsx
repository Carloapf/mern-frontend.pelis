import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


function Movie(props) {
  const { imdbid, title, year, image, handleReviewClick } = props.movie;
  const [rating, setRating] = useState(0);

  /*const [additionalRating, setAdditionalRating] = useState(0);
  useEffect(() => {
    axios.get(`https://moviesapp-api.onrender.com/api/movies/rating/${imdbid}`)
      .then(response => {
        const { finalRating } = response.data;
        setAdditionalRating(finalRating);
      })
      .catch(error => console.log(error));
  }, [imdbid]);*/


  /*const handleRatingUpdate = () => {
    axios.put(`http://localhost:4000/api/movies/${imdbid}/rating`)
      .then(response => {
        const newRating = (response.data.rating + additionalRating) /2;
        setRating(additionalRating);
        console.log(response.data.rating + additionalRating);
    })
      .catch(error => console.log(error));
  }*/

  /*const handleRatingUpdate = () => {
    axios.put(`http://localhost:4000/api/movies/${imdbid}/rating`)
      .then(response1 => {
        axios.get(`https://moviesapp-api.onrender.com/api/movies/rating/${imdbid}`)
          .then(response2 => {
            axios.get(`https://distributed-systems-movies.sanchezcarlosjr.repl.co/movies/${imdbid}`)
              .then(response3 => {
                axios.get(`https://movies-backend-1nuf.onrender.com/api/movies/${imdbid}`)
                  .then(response4 => {
                    axios.get(`https://practica8sdbackend.onrender.com/api/films/${imdbid}`)
                      .then(response5 => {
                        axios.get(`https://pelisapi-production.up.railway.app/api/reviews/movie/${imdbid}`)
                          .then(response6 => {
                            const newRating = (parseFloat(response1.data.rating) + (parseInt(response2.data.finalRating) * 2) + (parseInt(response3.data.local_rating) * 2) + (parseInt(response4.data.rate) * 2) + (parseFloat( response5.data.ratingAverage.$numberDecimal)) + (parseInt(response6.data.avgScore) *2)) / 6;
                            setRating(newRating);
                            console.log(response1.data.rating + " Carlo")
                            console.log(response2.data.finalRating + " Jorge")
                            console.log(response3.data.local_rating + " Carlos")
                            console.log(response4.data.rate + " Frank")
                            console.log(parseFloat( response5.data.ratingAverage.$numberDecimal ) + " Cesar")
                            console.log(response6.data.avgScore + " Edgar")
                          })
                            .catch(error => console.log(error));
                        
                      })
                      .catch(error => console.log(error));
                  })
                  .catch(error => console.log(error));
              })
              .catch(error => console.log(error));
          })
          .catch(error => console.log(error));
      })
      .catch(error => console.log(error));
  }*/

  const handleRatingUpdate = () => {
    axios.put(`https://carlo-backend-pelis.onrender.com/api/movies/${imdbid}/rating`)
      .then(response1 => {
        axios.get(`https://moviesapp-api.onrender.com/api/movies/rating/${imdbid}`)
          .then(response2 => {
            axios.get(`https://distributed-systems-movies.sanchezcarlosjr.repl.co/movies/${imdbid}`)
              .then(response3 => {
                axios.get(`https://movies-backend-1nuf.onrender.com/api/movies/${imdbid}`)
                  .then(response4 => {
                    axios.get(`https://practica8sdbackend.onrender.com/api/films/${imdbid}`)
                      .then(response5 => {
                        try {
                          axios.get(`https://pelisapi-production.up.railway.app/api/reviews/movie/${imdbid}`)
                            .then(response6 => {
                              const newRating = (parseFloat(response1.data.rating) + (parseInt(response2.data.finalRating) * 2) + (parseInt(response3.data.local_rating) * 2) + (parseInt(response4.data.rate) * 2) + (parseFloat(response5.data.ratingAverage.$numberDecimal)) + (parseInt(response6.data.avgScore) * 2)) / 6;
                              setRating(newRating);
                              console.log(response1.data.rating + " Carlo")
                              console.log(response2.data.finalRating + " Jorge")
                              console.log(response3.data.local_rating + " Carlos")
                              console.log(response4.data.rate + " Frank")
                              console.log(parseFloat(response5.data.ratingAverage.$numberDecimal) + " Cesar")
                              console.log(response6.data.avgScore + " Edgar")
                            })
                            .catch(error => {
                              console.log(error);
                              const newRating = (parseFloat(response1.data.rating) + (parseInt(response2.data.finalRating) * 2) + (parseInt(response3.data.local_rating) * 2) + (parseInt(response4.data.rate) * 2) + (parseFloat(response5.data.ratingAverage.$numberDecimal))) / 5;
                              setRating(newRating);
                            });
                        } catch (error) {
                          console.log(error);
                          const newRating = (parseFloat(response1.data.rating) + (parseInt(response2.data.finalRating) * 2) + (parseInt(response3.data.local_rating) * 2) + (parseInt(response4.data.rate) * 2) + (parseFloat(response5.data.ratingAverage.$numberDecimal))) / 5;
                          setRating(newRating);
                        }
                      })
                      .catch(error => console.log(error));
                  })
                  .catch(error => console.log(error));
              })
              .catch(error => console.log(error));
          })
          .catch(error => console.log(error));
      })
      .catch(error => console.log(error));
  }
  

  


  return (
    <div>
      <h2>{title} ({year})</h2>
      <img src={image} alt={title} />
      <p>Rating: {rating}</p>
      <button onClick={handleRatingUpdate}>Update Rating</button>
      <button onClick={() => handleReviewClick(imdbid)}>Add Review</button>
    </div>
  );
}

export default Movie;
