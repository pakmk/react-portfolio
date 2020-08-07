import React, { Component } from "react";
import freezer from "../../assets/images/freezer.png";
import creativemeet from "../../assets/images/creativemeet.png";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <main>
          <div class="jumbotron">
            <h1>Portfolio</h1>
            <hr />
            <div class="row">
              <div class="col-sm-6">
                <p class="projects">Project One (freezER)</p>
                <img src={freezer} alt="" style={{ width: "100%" }} />
                <a
                  class="dark-grey-text"
                  href="https://pakmk.github.io/gt-freezER/"
                >
                  freezER Website
                </a>
                <br />
                <a
                  class="dark-grey-text"
                  href="https://github.com/pakmk/gt-freezER"
                >
                  freezER Github Repo
                </a>
              </div>
              <div class="col-sm-6">
                <p class="projects">Project Two (Creative Meet)</p>
                <img src={creativemeet} alt="" style={{ width: "100%" }} />
                <a
                  class="dark-grey-text"
                  href="https://gt-creative-meet-project02.herokuapp.com/"
                >
                  Creative Meet Website
                </a>
                <br />
                <a
                  class="dark-grey-text"
                  href="https://github.com/pakmk/gt-project2"
                >
                  Creative Meet Github Repo
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
