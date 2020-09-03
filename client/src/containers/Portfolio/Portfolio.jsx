import React, { Component } from "react";
import freezer from "../../assets/images/freezer.png";
import creativemeet from "../../assets/images/creativemeet.png";
import playdate from "../../assets/images/playdate.png";
import "../../styles/style.css";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <main>
          <div className="jumbotron">
            <h1>Portfolio</h1>
            <hr />
            <div className="row">
              <div className="col-sm-6">
                <p className="projects">Project One (freezER)</p>
                <img src={freezer} alt="" style={{ width: "100%" }} />
                <a
                  className="dark-grey-text"
                  href="https://pakmk.github.io/gt-freezER/"
                >
                  freezER Website
                </a>
                <br />
                <a
                  className="dark-grey-text"
                  href="https://github.com/pakmk/gt-freezER"
                >
                  freezER Github Repo
                </a>
              </div>
              <div className="col-sm-6">
                <p className="projects">Project Two (Creative Meet)</p>
                <img src={creativemeet} alt="" style={{ width: "100%" }} />
                <a
                  className="dark-grey-text"
                  href="https://gt-creative-meet-project02.herokuapp.com/"
                >
                  Creative Meet Website
                </a>
                <br />
                <a
                  className="dark-grey-text"
                  href="https://github.com/pakmk/gt-project2"
                >
                  Creative Meet Github Repo
                </a>
              </div>
              <div className="col-sm-6">
                <p className="projects">Project Three (PlayDate)</p>
                <img src={playdate} alt="" style={{ width: "100%" }} />
                <a
                  className="dark-grey-text"
                  href="https://gt-play-date.herokuapp.com/"
                >
                  PlayDate Website
                </a>
                <br />
                <a
                  className="dark-grey-text"
                  href="https://github.com/pakmk/PlayDate"
                >
                  PlayDate Github Repo
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Home;
