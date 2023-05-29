import React from "react";
import {Link} from "react-router-dom";
import logo from '../Components/LogoIndia.png';
import artificialintelligence from '../icons/artificial-intelligence.png';
import chemistry from '../icons/chemistry.png';
import cooperation from '../icons/cooperation.png';
import cricket from '../icons/cricket.png';
import health from '../icons/heart-beat.png';
import newspaper from '../icons/newspaper.png';
import video from '../icons/video.png';

const Navbar =()=> {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="#">
              <img src={logo} width="30" height="30" className="d-inline-block align-top mx-3" alt=""/>
              The New India
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    About
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Category
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/business">
                        Business <img className="mx-3" src={cooperation}/>
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/entertainment">
                        Entertainment<img className="mx-3" src={video}/>
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/general">
                        General<img className="mx-3" src={newspaper}/>
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/health">
                        Health<img className="mx-3" src={health}/>
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/sports">
                        Sports<img className="mx-3" src={cricket}/>
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/technology">
                        Technology<img className="mx-3" src={artificialintelligence}/>
                      </Link>  
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/science">
                        Science<img className="mx-3" src={chemistry }/>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
}

export default Navbar;
