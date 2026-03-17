/* Importing Axios for my API calls */
import axios from 'axios';
/* Importing Bootstrap package for style, icons and JS */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
/* Importing React Hooks */
import { useState, useEffect } from 'react';

export default function AppMain() {
  /* Declaring an useState variable where my API "array" will go */
  const [actors, setActors] = useState([])

  /* "fetching" with Axios to print my array */
  function getActors() {
    axios.get("https://lanciweb.github.io/demo/api/actors/")
      .then((res) => {
        /* Logging to check if it works */
        console.log(res.data);
        /* Assigning my data to my state variable */
        setActors(res.data);
      })
  }

  useEffect(() => {
    getActors(actors)
  }, [])


  return (
    <>
      <main>
        <section>
          <div className="container">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
              {/* Rendering my cards through the map method */}
              {actors.map((actor) =>
                <div className="col" key={actor.id}>
                  <div className="card">
                    <img className="card-img-top" src={actor.image} alt={actor.name} />
                    <div className="card-body">
                      <p><strong>Nome:</strong> {actor.name}</p>
                      <p><strong>Anno di Nascita:</strong> {actor.birth_year}</p>
                      <p><strong>Nazionalità:</strong> {actor.nationality}</p>
                      <p><strong>Biografia:</strong> {actor.biography}</p>
                      <p><strong>Riconoscimenti:</strong> {actor.awards}</p>
                      <p><strong>Conosciuto per:</strong> {actor.known_for}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main >
    </>
  )
}