import "./App.css";
import { useState, useEffect } from "react";

import { getCharacters } from "./api";
import Character from "./components/character";

import { Route, Routes, Link } from "react-router-dom"

const Home = () => <div className="container">

  <div className="tittle"><h1>Welcome to Api Marvel</h1>
  </div>

  <div><nav><Link to="Characters">Characters</Link></nav>
  </div>

</div>

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [{ currentPage, pages, limit }, setPagination] = useState({ currentPage: 1, pages: 0, limit: 18 });

  const [query, setQuery] = useState("");

  useEffect(() => {
    const offset = limit * (currentPage - 1);
    getCharacters(limit, offset, query).then((data) => {
      setCharacters(data.results);
      const pages = data.total / limit;
      setPagination({ currentPage, pages, limit });
    });
  }, [currentPage, limit, query]);

  function goToPage(currentPage: number) {
    setPagination({ currentPage, pages, limit });
  }
  return (
    <div className="App">
      <h1>MARVEL CHARACTERS</h1>
      <input value={query} type="search" onChange={(e) => setQuery(e.target.value)} className="input" placeholder="Search character" />

      <div className="all-cards">
        {characters.map((per: Character) => (
          <Character key={per.id} character={per} />
        ))}
      </div>
      <div className="pagination">
        <span className="previous" onClick={() => goToPage(currentPage - 1)}>
          &laquo; Previous
        </span>
        {new Array(5).fill(0).map((_, index) => {
          const page = currentPage + 1 + index;
          return (
            <span key={page} onClick={() => goToPage(page)}>
              {page}
            </span>
          );
        })}
        <span className="next" onClick={() => goToPage(currentPage + 1)}>
          Next &raquo;
        </span>
      </div>
    </div>
  )
}

function App() {


  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="Characters" element={<Characters />}></Route>
      </Routes>
    </div>
  );
}

export default App;
