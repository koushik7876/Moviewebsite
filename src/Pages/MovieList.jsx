import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Card } from "../Components/Card"
import { UseFetch } from "../Hooks/UseFetch"
export const MovieList = ({title, apiPath}) => {
  const {data:movies}=UseFetch(apiPath);
  useEffect(()=>{
    document.title=title;
  })
  const navigator=useNavigate();
  return (
    <div>
      <main className="container">
      {title=="Your Guide to Great Movies" ?(
          <div className="bg-body-tertiary p-5 border mb-5">
            <h3 className="text-primary">Welcome to MovieHunt</h3>
            <p className="lead">Your gateway to endless entertainment movies, series, and pure cinematic bliss await! 🌟🎥  </p>
            <button className="btn btn-primary" onClick={()=>navigator("/movies/upcoming")} >Explore Now</button>
          </div>
        ):""}
       
        <h5 className="text-danger py-2  border-bottom">{title}</h5>

        <div className="row row-cols-1 row-cols-md-3 rows-cols-lg-3 g-3 py-2">
         {movies.map((movie)=>{
          return <Card key={movie.id} movie={movie}/>
         })}
        </div>
      </main>
    </div>
  )
}

