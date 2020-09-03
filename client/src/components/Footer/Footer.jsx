import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="container">
        <footer className="page-footer font-small blue-grey lighten-5">
          <div className="container text-center text-md-left mt-5">
            <div className="row mt-3 dark-grey-text">
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase font-weight-bold">Projects</h6>
                <hr
                  className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto"
                  style={{ width: "60px" }}
                />
                <p>
                  <a
                    className="dark-grey-text"
                    href="https://pakmk.github.io/gt-freezER/"
                  >
                    freezER Website
                  </a>
                </p>
                <p>
                  <a
                    className="dark-grey-text"
                    href="https://gt-creative-meet-project02.herokuapp.com/"
                  >
                    Creative Meet Website
                  </a>
                </p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase font-weight-bold">
                  GitHub Works
                </h6>
                <hr
                  className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto"
                  style={{ width: "60px" }}
                />
                <p>
                  <a
                    className="dark-grey-text"
                    href="https://github.com/pakmk/gt-semantic-html-homework-01"
                  >
                    Semantic HTML
                  </a>
                </p>
                <p>
                  <a
                    className="dark-grey-text"
                    href="https://github.com/pakmk/gt-js-password-generator-homework-03"
                  >
                    Password Generator Website
                  </a>
                </p>
                <p>
                  <a
                    className="dark-grey-text"
                    href="https://github.com/pakmk/gt-node.js-es6-readme-homework08"
                  >
                    Good README Generator
                  </a>
                </p>
                <p>
                  <a
                    className="dark-grey-text"
                    href="https://github.com/pakmk/gt-oop-template-engine-homework10"
                  >
                    Template Engine - Employee Summary
                  </a>
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase font-weight-bold">
                  Useful links
                </h6>
                <hr
                  className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto"
                  style={{ width: "60px" }}
                />
                <p>
                  <a className="dark-grey-text" href="https://github.com/pakmk">
                    Github
                  </a>
                </p>
                <p>
                  <a
                    className="dark-grey-text"
                    href="https://linkedin.com/in/min-pak-6a22161b1"
                  >
                    LinkedIn
                  </a>
                </p>
                <p>
                  <a
                    className="dark-grey-text"
                    href="https://docs.google.com/document/d/1fYgk5ej-ic9HbMZJnhQuHNC552CURfuHSZTBUYaQ9Jw/edit?usp=sharing"
                  >
                    Resume
                  </a>
                </p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase font-weight-bold">Contact</h6>
                <hr
                  className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto"
                  style={{ width: "60px" }}
                />
                <p>
                  <i className="fas fa-home mr-3">Atlanta, GA</i>
                </p>
                <p>
                  <i className="fas fa-envelope mr-3">pakmk8@gmail.com</i>
                </p>
                <p>
                  <i className="fas fa-phone mr-3">706-315-2469</i>
                </p>
              </div>
            </div>
          </div>
          <div className="footer-copyright text-center text-black-50 py-3">
            © 2020 Copyright
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
