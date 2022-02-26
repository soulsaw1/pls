import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Container} from "react-bootstrap"

function Head(){
    return(
        <div>
           <>
           <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="/Filim.jpg"
          width="60"
          height="50"
          className="d-inline-block align-top"
        />{' '}
        <h1 className="sin">SINA MOVIE SEARCH</h1>
      </Navbar.Brand>
    </Container>
  </Navbar>
           </>
        </div>
    )
}

export default Head 
