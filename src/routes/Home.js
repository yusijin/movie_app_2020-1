import React from 'react';
import Axios from 'axios';
import Movie from '../components/movie';
import './Home.css';


class Home extends React.Component {
  state = { 
    movies: [],
    isLoading : true
  };
  
  getMovies = async () => {
    const {data : { data : {movies}}}= await Axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating")
    console.log(movies);
    this.setState({isLoading : false,
  movies : movies})
  }
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const {isLoading, movies} = this.state; 
    return (
    <div>
      <h1> {isLoading ?(
        <div className="loader">
          <span className="loader__text">
          Loading...
          </span>
        </div>
      ):  (
        <div className="movies">
          {movies.map(movie => (
            <Movie 
            key = {movie.id}
            id = {movie.id}
            genres = {movie.genres}
            poster = {movie.medium_cover_image}
            summary = {movie.summary}
            title = {movie.title}
            year = {movie.year}
            />
          ) ) }
        </div>
      )}</h1>
    </div>


    )
  } 
}

export default Home;
