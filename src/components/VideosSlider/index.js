import {Link} from 'react-router-dom'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './index.css'

const VideosSlider = props => {
  const settings = {
    dots: false,
    slidesToScroll: 1,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 998,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 565,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  }
  const {videoData} = props

  return (
    <>
      <Slider {...settings}>
        {videoData.map(eachVideo => (
          <Link
            className="link"
            to={`/movies/${eachVideo.id}`}
            key={eachVideo.id}
          >
            <div className="img-container">
              <img
                className="thumbnail"
                src={eachVideo.posterPath}
                alt={eachVideo.title}
              />
            </div>
          </Link>
        ))}
      </Slider>
    </>
  )
}

export default VideosSlider
