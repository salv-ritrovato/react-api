/* Importing Axios for my API calls */
import axios from 'axios';
/* Importing Bootstrap package for style, icons and JS */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
/* Importing React Hooks */
import { useState, useEffect } from 'react';

export default function AppMain() {
  /* Declaring an useState variable where my API "array" of actors will go */
  const [actors, setActors] = useState([])
  /* Declaring an useState variable where my API "array" of actresses will go */
  const [actresses, setActresses] = useState([])

  /*   ------------------------------------------------------------- */
  /* "fetching" with Axios to print my array of actors */
  function getActors() {
    axios.get("https://lanciweb.github.io/demo/api/actors/")
      .then((res) => {
        /* Logging to check if it works */
        console.log(res.data);
        /* Assigning my data to my state variable */
        setActors(res.data);
      })
      .catch((err) => {
        console.error("Error fetching actors:", err);
      });
  }

  /* "fetching" with Axios to print my array of actresses */
  function getActresses() {
    axios.get("https://lanciweb.github.io/demo/api/actresses/")
      .then((res) => {
        /* Logging to check if it works */
        console.log(res.data);
        /* Assigning my data to my state variable */
        setActresses(res.data);
      })
      .catch((err) => {
        console.error("Error fetching actreses:", err);
      });
  }
  /*   ------------------------------------------------------------- */

  /*   ------------------------------------------------------------- */
  /* Fetching actors on component mount phase */
  useEffect(() => {
    getActors(actors)
  }, [])

  /* Fetching actors on component mount phase */
  useEffect(() => {
    getActresses(actresses)
  }, [])
  /*   ------------------------------------------------------------- */

  return (
    <>
      <main>
        <section>
          <div className="container mt-3">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-2">
              {/* Rendering my actor cards through the map method */}
              {actors.map((actor) =>
                <div className="col" key={actor.id}>
                  <div className="card h-100">
                    <img className="card-img-top p-3" src={actor.image} alt={actor.name} />
                    <div className="card-body">
                      <h3 className="card-title mb-2">{actor.name}</h3>
                      <p className='mb-0'><strong>Anno di Nascita:</strong> {actor.birth_year}</p>
                      <p className='mb-0'><strong>Nazionalità:</strong> {actor.nationality}</p>
                      <p><strong>Biografia:</strong> {actor.biography}</p>
                      {/* Using join method to add a "," inbetween words (they were not split!) */}
                      <p className='mb-0'><strong>Riconoscimenti:</strong> {actor.awards.join(', ')}</p>
                      <p className='mb-0'><strong>Conosciuto per:</strong> {actor.known_for.join(', ')}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-2 mt-5">
              {/* Rendering my actresses cards through the map method */}
              {actresses.map((actress) =>
                <div className="col" key={actress.id}>
                  <div className="card h-100">
                    <img className="card-img-top p-3" src={actress.image} alt={actress.name} />
                    <div className="card-body">
                      <h3 className="card-title mb-2">{actress.name}</h3>
                      <p className='mb-0'><strong>Anno di Nascita:</strong> {actress.birth_year}</p>
                      <p className='mb-0'><strong>Nazionalità:</strong> {actress.nationality}</p>
                      <p><strong>Biografia:</strong> {actress.biography}</p>
                      {/* Using join method to add a "," inbetween words (they were not split!) */}
                      <p className='mb-0'><strong>Riconoscimenti:</strong> {actress.awards.join(', ')}</p>
                      <p className='mb-0'><strong>Conosciuto per:</strong> {actress.most_famous_movies.join(', ')}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}