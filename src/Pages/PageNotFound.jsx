import Errorimg from '../assets/Errorimg.jpg'
import {Link} from "react-router-dom"
export const PageNotFound = () => {
  return (
    <div className="container">
      <img src={Errorimg} alt="" className='img-fluid'id='imagepic'/>
      <p className='text-center'>
        <Link to="/" className="btn btn-danger">
        Go to Home page
        </Link>
      </p>
    </div>
  )
}

