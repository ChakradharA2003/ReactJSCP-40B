// Write your code here
import ReactPlayer from 'react-player'
import Popup from 'reactjs-popup'

import {IoMdClose} from 'react-icons/io'

import './index.css'

const MovieItem = props => {
  const {thumbnailUrl, videoUrl} = props
  return (
    <div className="movie-item-container">
      <Popup
        trigger={
          <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-image" />
        }
        className="popup-content"
      >
        {close => (
          <div className="popup-view">
            {/* eslint-disable-next-line */}
            <button
              data-testid="closeButton"
              type="button"
              className="close-btn"
              onClick={() => close()}
            >
              <IoMdClose className="close-icon" />
            </button>
            <ReactPlayer url={videoUrl} />
          </div>
        )}
      </Popup>
    </div>
  )
}
export default MovieItem
