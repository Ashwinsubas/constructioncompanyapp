import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";


const Header = (insideDashboard) => {
  return (
    <>
      <Navbar style={{zIndex:5}} className="bg-body-tertiary shadow position-sticky top-0 ">
        <Container className="d-flex justify-content-between">
          <div>
            <Navbar.Brand href="#home">
              {" "}
              <i class="fa-solid fa-house-chimney"></i> <span className="fw-bold text-red">Prism Buliders</span> 
            </Navbar.Brand>
          </div>
          {insideDashboard ? (
            <button className="btn btn-link fw-bold fs-5 text-dark">
              Log Out <i className="fa-solid fa-right-from-bracket"></i>
            </button>
          ) : (
            ""
          )}
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
