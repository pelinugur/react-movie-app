
import MovieCard from './MovieCard';


const BookList = ({ data,favoriteFilms,setFavoriteFilms }) => {
      
    return (
        <>
        <MovieCard data= {data} favoriteFilms={favoriteFilms} setFavoriteFilms={setFavoriteFilms}   />
        </>
    )
}

export default BookList