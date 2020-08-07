import React, { Component } from "react";
import profile from "../../assets/images/profile.png";
import "../../styles/style.css";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <main>
          <div className="jumbotron">
            <h1>About Me</h1>
            <hr />
            <div className="row">
              <div>
                <img
                  src={profile}
                  alt="Min"
                  className="img-fluid float-left p-3"
                />
                <p>
                  Hello! I'm Min and I am from Columbus, GA. I currently live in
                  Atlanta, GA. I like to travel and to play basketball during my
                  free time. Im also a fan of all Georgia sports teams!
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Home;
