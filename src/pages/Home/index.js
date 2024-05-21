import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from '../../services/api'
import './home.css';

// URL da API: /movie/now_playing?api_key=28a20961c584e2ce2ad03be12c00c1b2&language=pt-BR

function Home() {
  
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {

    async function loadFilmes() {
      const response = await api.get("movie/now_playing", {
        params:{
          api_key: "28a20961c584e2ce2ad03be12c00c1b2",
          language: "pt-BR",
          page: 1
        }
      })

      setFilmes(response.data.results.slice(0, 10));
    }

    loadFilmes();

  }, []);

  return(
    <div className="container">
      <div className="lista-filmes">
        {filmes.map((filme) => {
          return(
            <article key={filme.id}>
              <strong>{filme.title}</strong>
              <img src={`https://image.tmdb.org/t/p/original${filme.poster_path}`} alt={filme.title} />
              <Link to={`/filme/${filme.id}`}>Acessar</Link>
            </article>
          )
        })}
      </div>
    </div>
  );
}

export default Home;