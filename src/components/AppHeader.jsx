/* Importing Bootstrap package for style, icons and JS */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function AppHeader() {


  return (
    <header>
      <nav className="navbar">
        <div className="container-fluid justify-content-center">
          <span className="navbar-brand mb-0 h1">MyActorList <i className="bi bi-film"></i></span>
        </div>
      </nav>
    </header>
  )
}