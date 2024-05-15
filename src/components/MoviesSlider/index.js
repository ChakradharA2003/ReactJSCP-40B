// Write your code here
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem/index'

const MoviesSlider = props => {
  const {movieList} = props
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: false,
  }
  console.log(movieList)
  return (
    <div>
      <Slider {...settings}>
        {movieList.map(movie => (
          <MovieItem
            key={movie.id}
            id={movie.id}
            thumbnailUrl={movie.thumbnailUrl}
            videoUrl={movie.videoUrl}
          />
        ))}
      </Slider>
    </div>
  )
}
export default MoviesSlider
