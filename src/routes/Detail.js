import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState("");
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setLoading(false);
    setMovie(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      <h1>Detail</h1>
      {loading ? <h2>Loading...</h2> : <div>
        <img src={movie.medium_cover_image} alt="img"/>
        <p>title : {movie.title}</p>
        <p>rating : {movie.rating}</p>
        </div>}
    </div>
  );
}

export default Detail;