import { Link } from "react-router";

export default function NavBar() {
    return <>
      <script src="./bootstrap/js/bootstrap.bundle.min.js"></script>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top bg-opacity-75" style={{paddingTop: "0", paddingBottom: "0"}}>
          <div className="container-fluid">
              <Link className="navbar-brand" to="#" style={{paddingTop: "0", paddingBottom: "0"}}><img src="assets/logo.jpeg" height="40"/></Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav ms-auto">
                      <li className="nav-item">
                          <Link className="nav-link" to="#home"><strong>Home</strong></Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link" to="#contact"><strong>Contact</strong></Link>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
      </>;
    }