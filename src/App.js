import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./css/style.css";
import "./css/1.style.css";
import logo from "./logo.svg";

function App() {
  return (
    <>
      <Navbar />
      <section className="section--hero">
        <div className="row row--grey ml-2 mr-2">
          <div className="container container--content col-lg-3 col-md-4 col-3 mt-4">
            <div className="container col-md-6">
              <ul class="list footer--links">
                <li>
                  <a className="navbar-brand mt-3" href="#/">
                    <img src={logo} height="80" alt="" />
                  </a>
                </li>
                <li>Kishu Maharjan</li>
                <li>mhrznkishu.10@gmail.com</li>
                <li>9861233954</li>
              </ul>
              <hr />
            </div>
          </div>
          <div className="container container--content col-lg-5 col-md-6 col-5 ml-2 mr-2 mt-4">
            <div className="row ml-3 mr-3 mt-4">
              <div className="container col-lg-3 col-md-4 col-3">
                <img src={logo} height="70" alt="" />
              </div>
              <div className="container col-lg-8 col-md-9 col-8">
                <ul class="list footer--links">
                  <li>
                    <div class="input-group">
                      <textarea
                        class="form-control"
                        placeholder="Enter your status"
                        rows="6"
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row ml-3 mr-3 mt-2">
              <div className="container col-lg-3 col-md-4 col-3">
                <div className="row">
                  <img src={logo} height="50" alt="" />
                  <small className="mt-3">Photo</small>
                </div>
              </div>
              <div className="container col-lg-3 col-md-4 col-3">
                <div className="row">
                  <img src={logo} height="50" alt="" />
                  <small className="mt-3">Videos</small>
                </div>
              </div>
              <div className="container col-lg-3 col-md-4 col-3">
                <div className="row">
                  <img src={logo} height="50" alt="" />
                  <small className="mt-3">Article</small>
                </div>
              </div>
            </div>
          </div>
          <div className="container container--content col-lg-3 col-md-4 col-3 mt-4">
            <div className="container col-md-6">
              <ul class="list footer--links">
                <li>
                  <a className="navbar-brand mt-3" href="#/">
                    <img src={logo} height="80" alt="" />
                  </a>
                </li>
                <li>Kishu Maharjan</li>
                <li>mhrznkishu.10@gmail.com</li>
                <li>9861233954</li>
              </ul>
              <hr />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
