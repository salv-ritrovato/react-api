/* Importing Bootstrap package for style, icons and JS */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
/* Importing React Hooks */
import { useState, useEffect } from "react"
/* Importing Axios for my API calls */
import axios from "axios";

export default function JoinedFetch() {
    /* Declaring an useState variable where my API "array" of actors will go */
    const [myActors, setMyActors] = useState([]);

    /* Helped myself with AI overview and docu, didn't know about Promise.all and how it worked */
    useEffect(() => {
        Promise.all([
            axios.get("https://lanciweb.github.io/demo/api/actors/"),
            axios.get("https://lanciweb.github.io/demo/api/actresses/")
        ]).then(([actorsRes, actressesRes]) => {
            /* Using spread operator to merge the array */
            setMyActors([...actorsRes.data, ...actressesRes.data]);
        });
    }, [])

    return (
        <main>
            <section>
                <div className="container mt-3">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-2">
                        {/* Rendering my actor cards through the map method */}
                        {/* Sorting them alphabetically wiit sort() method that I found on w3schools as suggested by my tutor Luigi */}
                        {myActors.sort((a, b) => a.name.localeCompare(b.name)).map((myActor, index) =>
                            <div className="col" key={index}>
                                <div className="card h-100">
                                    <img className="card-img-top p-3" src={myActor.image} alt={myActor.name} />
                                    <div className="card-body">
                                        <h3 className="card-title mb-2">{myActor.name}</h3>
                                        <p className='mb-0'><strong>Anno di Nascita:</strong> {myActor.birth_year}</p>
                                        <p className='mb-0'><strong>Nazionalità:</strong> {myActor.nationality}</p>
                                        <p><strong>Biografia:</strong> {myActor.biography}</p>
                                        {/* Using join method to add a "," inbetween words (they were not split!) */}
                                        <p className='mb-0'><strong>Riconoscimenti:</strong> {myActor.awards.join(', ')}</p>
                                        <p className='mb-0'><strong>Conosciuto per:</strong> {myActor.known_for ? myActor.known_for.join(', ') : myActor.most_famous_movies.join(', ')}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </main>
    )
}