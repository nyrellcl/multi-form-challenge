import "./index-sass/index.css";
import React, { useState } from "react";
import Personal from "./components/Personal";
import Plan from "./components/Plan";
import AddOn from "./components/AddOn";

export const INITIAL_PERSONAL = {
  name: "",
  email: "",
  phone: ""
}

function App() {
  const [pagination, setPagination] = useState([1, 2, 3, 4]);
  const [personalData, setPersonalData] = useState(INITIAL_PERSONAL);

  function updateFields(fields) {
    setPersonalData(prev => {
      return { ...prev, ...fields }
    })
  }

  return (
    <main className="App">
      <header className="header-container">
        <aside className="pagination-bar">
          {pagination.map((paginations, idx) => (
            <span key={idx}>{paginations}</span>

          ))}
        </aside>
      </header>

      {/*<Personal {...personalData} updateField={updateFields} />*/}
      {/*}Plan/>*/}
      <AddOn/>

      <div className="submit-container">
        <input type="submit" value="Next" className='submit-container__btn' />
      </div>

    </main>
  );
}

export default App;

//TODO: create pagination for numbered steps