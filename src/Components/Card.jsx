import { Link } from "react-router-dom"
export const Card = ({movie}) => {
  const {id,overview,title,vote_average,vote_count,poster_path}=movie;
  return (
    <div className="col" >
      <div className="card shadow-sm" title={title} >
        <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt="" className="card-img-top" />
        <div className="card-body" >
          <h5 className="card-title text-primary text-overflow-1">{title}</h5>
          <p className="card-text text-overflow-2">{overview}</p>
          <div className="d-flex justify-content-between algin-items-center">
            <Link to={`/movie/${id}`} className="btn btn-sm btn-outline-primary stretched-link">Read More</Link>
            <small>
              <i className="bi bi-star-fill text-warning"></i>
              {vote_average} | {vote_count} review
            </small>
          </div>
        </div>
      </div>
    </div>
  )
}

