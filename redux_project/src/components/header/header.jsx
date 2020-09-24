import React from 'react';
import { NavLink } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import './header.scss'

Header.propTypes = {};

function Header() { 
  return (
    <header className="header">
      <Container>
        <Row className="justify-content-between">
          <Col xs="auto">
            <a
              className="header__link header__title"
              href="https://google.com"
              target="blank"
              rel="noopener noreferrer"
            >
              Hai Duong
            </a>
          </Col>
          <Col xs="auto">
            <NavLink
              exact
              className="header__link"
              to="/photo"
              //when url match, the link will be added active class (header.scss) automatically
              activeClassName="header__link--active"
            >
              Redux Project
            </NavLink>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;