import {Link} from 'react-router-dom'

import './index.css'

const NotFound = () => (
  <div className="not-found-route">
    <img
      className="not-found-image"
      alt="not found"
      src="https://res.cloudinary.com/dvmkmx7o3/image/upload/v1693317618/snow-removal-machine-working-high-ski-slope-snowstorm_454047-2149_1_sn4xld.png"
    />
    <div className="not-found-content">
      <h1>Lost Your Way ?</h1>
      <p>
        we are sorry, the page you requested could not be found Please go back
        to the homepage.
      </p>
      <Link to="/">
        <button type="button">Go to Home</button>
      </Link>
    </div>
  </div>
)
export default NotFound
