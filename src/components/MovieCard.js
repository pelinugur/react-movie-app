
import React, { useState } from 'react'
import { Col, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { ImSearch } from "react-icons/im";
import Details from './Details';

const MovieCard = ({ data, favoriteFilms, setFavoriteFilms }) => {
    const onChange = (e) => {
        setSearch(e.target.value)
    }
    const [search, setSearch] = useState("")
    const [favorites, setFavorites] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const [details, setDetails] = useState([])
// Bu kod parçası, handleFavoriteClick fonksiyonunun kalp simgesine tıklanınca ne yapacağını belirler.
// İlk satır, tıklanan filmin id özelliğine göre data dizisinden bulunmasını sağlar ve favoriteMovie değişkenine atar.
// Daha sonra, isFavorite adlı bir değişken, favorites nesnesi içinde tıklanan filmin id özelliğinin olup olmadığını kontrol eder. Eğer isFavorite değeri true ise, o zaman tıklanan filmin id özelliği favorites nesnesinden silinir ve bu film artık favorilerde değildir.
// Eğer isFavorite değeri false ise, o zaman tıklanan film, favorites nesnesine eklenir ve artık favorilerde yer alır. favorites nesnesi, film id özelliği ile birlikte saklanır. Böylece, daha sonra tıklanan film favorilerden çıkarılmak istendiğinde, id özelliği kullanılarak favorites nesnesinden silinebilir.
// setFavoriteFilms(...favoriteFilms, favorites)
    // console.log(details)
    return (
        <div>
            <Container style={{ display: "flex", justifyContent: "center" }}>
                <Col lg={6} >
                    <div className='MovieSearch'>
                        <input value={search} onChange={onChange} type="text" id="box" placeholder="Search movies..." className="search__box" />
                        <ImSearch className="fas fa-search search__icon" />
                    </div>
                </Col>
            </Container>
            <div style={{ display: "flex", flexWrap: "wrap", marginTop: "35px",justifyContent:"center" }}>
                {/* filmleri filtreleme işlemi yapıp sonrasında da map ile return ettim.... */}
                {
                    data.filter((book) => {
                        return search.toLowerCase() === ""
                            ? book
                            : book.Title.toLowerCase().includes(search)
                    }).map((book, index) => {
                       
                        return (
                            <Col key={index} style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "10px" }} lg={3}>
                                <Card onClick={() => (setModalShow(true), setDetails(book)) } className='card' style={{ width: '18rem', display: "flex", padding: "10px", background: "#141515", color: "#D9E1E1", height: "100%" }}  >
                                    <div className='card-image'>
                                        <img src={book.Images[0][0]} alt="" />
                                    </div>
                                    <div className='movie-name'>
                                        <div style={{ color: " #F60C0C" }}>
                                            {book.Title}
                                        </div>
                                        <div>
                                            <small>
                                                {book.Year}
                                            </small>
                                        </div>
                                    </div>
                                    <div className='Plot'>
                                        <small>
                                            {book.Plot}
                                        </small>
                                    </div>
                                    <footer>
                                        <div className='movie-card-footer'>
                                            <div className='favorite-hearth'>
                                              
                                            </div>
                                            <div className="movie-imdb">
                                                <small>IMDB</small>
                                                <small className='imdb'>{book.imdbRating}</small>
                                            </div>
                                        </div>
                                    </footer>
                                </Card>
                            </Col>
                        )
                    })
                }
            </div>
            <Details show={modalShow} onHide={() => setModalShow(false)}  details={details}/>
        </div>
    )
}

export default MovieCard