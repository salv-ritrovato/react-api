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


  return (
    <main>
      <button onClick={getActors}>Attori</button>
    </main>
  )


}