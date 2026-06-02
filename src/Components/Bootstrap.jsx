import React,{createContext,useContext} from "react";
import {UserContext,UserContext1} from "./UserContext";

function Bootstrap() {
  const user = React.useContext(UserContext1);
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <span className="navbar-brand mb-0 h1">Welcome, {user.name}!</span>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="card shadow">
              <div className="card-body text-center">
                <h3 className="card-title">Welcome</h3>
                <p className="card-text">
                  This is a simple React page using Bootstrap.
                </p>
                <button className="btn btn-primary">Click Me</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="alert alert-primary" role="alert">
        A simple primary alert—check it out!
      </div> */}
      {/* Footer */}
      <footer className="bg-light text-center p-3 mt-4">© 2026 My App</footer>
    </div>
  );
}

export default Bootstrap;