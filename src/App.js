
import './App.css';
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

import SearchBox from "./components/searchbox";
import TableDisplay from "./components/tabledisplay";
import BasicTable from './components/BasicTable';
import TableShow from './components/TableShow';

function App() {
  return (
    <Container>
      <h1>Hello World</h1>
      <SearchBox />
      <TableDisplay /> 
       {/* <TableShow/> */}
    </Container>
  
  );

}

export default App;
