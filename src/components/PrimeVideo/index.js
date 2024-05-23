// Write your code here
import MovieSlider from '../MoviesSlider/index'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMovies = moviesList.filter(movie => movie.categoryId === 'ACTION')
  const comedyMovies = moviesList.filter(movie => movie.categoryId === 'COMEDY')
  console.log(comedyMovies)
  return (
    <div className="prime-video-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-video-image"
      />
      <div className="movies-sliders-container">
        <div className="category-movies-container">
          <h1 className="category-heading">Action Movies</h1>
          <MovieSlider movieList={actionMovies} />
        </div>
        <div className="category-movies-container">
          <h1 className="category-heading">Comedy Movies</h1>
          <MovieSlider movieList={comedyMovies} />
        </div>
      </div>
    </div>
  )
}
export default PrimeVideo
