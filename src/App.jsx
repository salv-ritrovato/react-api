/* Importing my custom components */
import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';
import AppMain from './components/AppMain';
import JoinedFetch from './components/JoinedFetch';
/* Importing Bootstrap package for style, icons and JS */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
/* Importing Axios for my API calls */
import axios from 'axios'; 
/* Importing custom CSS */
import './App.css'

function App() {


  return (
    <>
      <AppHeader />
      {/* <AppMain /> */}
      <JoinedFetch/>
      <AppFooter />
    </>
  )
}

export default App
