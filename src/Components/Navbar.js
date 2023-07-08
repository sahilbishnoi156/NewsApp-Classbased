import React, { Component } from "react";
// import PropTypes from "prop-types";
import {Link} from "react-router-dom";


export default class Navbar extends Component {
//   static propTypes = { second: third };
  render() {
    return (
        <nav className="navbar bg-secondary fixed-top px-2" style={{
          height:"62px"
        }}>
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to="/News-Monkey">
            News Monkey
          </Link>
          <button
            className="navbar-toggler border-2 border-white"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header bg-dark text-white">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                News Monkey
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body bg-secondary ">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link className="nav-link active text-white" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/">
                    About us
                  </Link>
                </li>
                <li className="nav-item dropdown text-white">
                  <Link
                    className="nav-link dropdown-toggle text-white"
                    to="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Categories
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/business">
                        Business
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/sports">
                        Sports
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/health">
                        Health
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/science">
                        Science
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/technology">
                        Technology
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex mt-3" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-light" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
