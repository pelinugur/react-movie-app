import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import FilmList from './components/FilmList';
import Details from './components/Details';
import books from "./data.json"
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';

import 'swiper/css';
// import netflix from "./netflix-logo-png-2562.png"
// import { Container } from 'react-bootstrap';

function App() {
  const [data, setData] = useState(books)
  const [favoriteFilms, setFavoriteFilms] = useState([])
  const [open, setOpen] = useState(false)
  const [mail, setMail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <>
      {
        open ? 
        <div>
          <div className="App">
            <nav style={{ display: "flex", justifyContent: "center" }}>
              <ul style={{ display: "flex", justifyContent: "center", padding: "10px" }}>
                <li style={{ padding: "10px", listStyle: "none" }}><Link to="/">Films</Link></li>
                <li onClick={() => setOpen(!open)} style={{ padding: "10px", listStyle: "none", color:"beige", cursor:"pointer" }}>Logout</li>
              </ul>
            </nav>
            <Routes>
              <Route path="/" element={<FilmList data={data} favoriteFilms={favoriteFilms} setFavoriteFilms={setFavoriteFilms} />} />
              <Route path="/favorite-films" element={<Details favoriteFilms={favoriteFilms} setFavoriteFilms={setFavoriteFilms} />} />
            </Routes>
          </div>
        </div>  
        : 
        <Routes>
        <Route path="/" element={<Login mail={mail} setMail={setMail} password={password} setPassword={setPassword} open={open} setOpen={setOpen} />} />
        </Routes>
    }

    </>
  );
}
export default App;
