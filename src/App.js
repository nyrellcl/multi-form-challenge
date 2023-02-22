import "./index-sass/index.css";
import React, { useState } from "react";
import Personal from "./components/Personal";


function App() {
  const [pagination] = useState([1, 2, 3, 4]);

  return (
    <main className="App">
      <header className="header-container">
        <aside className="pagination-bar">
          {pagination.map((paginations, idx) => (
            <span key={idx}>{paginations}</span>

          ))}
        </aside>
      </header>

      <Personal />
      <div className="submit-container">
        <input type="submit" value="Next" className='submit-container__btn'/>
      </div>

    </main>
  );
}

export default App;

//TODO: create pagination for numbered steps