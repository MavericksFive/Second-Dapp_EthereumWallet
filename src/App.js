import {React} from 'react';

import Home from './Components/Home.js'
import Navbar from './Components/Navbar'

import {Routes, Route, BrowserRouter } from 'react-router-dom';

import "./App.css"



function App() {

  return (
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home/>}>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}
export default App;


