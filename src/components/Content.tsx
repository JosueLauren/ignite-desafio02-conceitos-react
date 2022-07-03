import { MovieCard } from './MovieCard';

import {MovieProps} from '../App'

import '../styles/content.scss';

interface ContentProps {
  movies: MovieProps[],
  titleGenre: string
}

export function Content({movies, titleGenre}:ContentProps) {
  // Complete aqui

  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {titleGenre}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}