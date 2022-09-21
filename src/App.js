import React from "react";
import './app.css'
import Wallet from "./Wallet";
import NFTList from "./NftList";
import ErrorPage from "./errorPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Wallet />} />
        <Route path='/nftlist' element={<NFTList />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
