import { BrowserRouter as Router, NavLink, Routes, Route, Navigate  } from 'react-router-dom';
import { SzallasAdd } from './SzallasAdd';
import { SzallasDelete } from './SzallasDelete';
import { SzallasLista } from './SzallasLista';
import { SzallasMod } from './SzallasMod';
import { SzallasSingle } from './SzallasSingle';
import { Bejelentkezes } from './Bejelentkezes';
import React from 'react';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
           <NavLink to={`/`} className="nav-link">
              <span className="nav-link">Szállások</span>
            </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/post`} className="nav-link">
                <span className="nav-link">Új szállás</span>
              </NavLink>
            </li>
            <li className="nav-item">
            <NavLink to={`/bejelentkezes`} className="nav-link">
              <span className="nav-link">Bejelentkezés</span>
            </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/get-all" element={<SzallasLista />} />
        <Route path="/post" element={<SzallasAdd />} />
        <Route path="/bejelentkezes" element={<Bejelentkezes/>} />
        <Route path="/get/:szallasId" element={<SzallasSingle />} />
        <Route path="/put/:szallasId" element={<SzallasMod />} />
        <Route path="/delete/:szallasId" element={<SzallasDelete />} />
        <Route path="*" element={<SzallasLista />} />
      </Routes>
     </Router>
     
  );
}

export default App;
