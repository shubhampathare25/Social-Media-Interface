import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

const Header = ({ theme, toggleTheme }) => {
  return (
    <>
      <header className={`p-3 border-bottom ${theme === "dark" ? "text-bg-dark" : "bg-light"}`}>
        <div className="container-fluid px-4">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              className={`d-flex align-items-center mb-2 mb-lg-0 text-decoration-none ${
                theme === "dark" ? "text-white" : "link-body-emphasis"
              }`}
            >
              <svg
                className="bi me-2"
                width="40"
                height="32"
                role="img"
                aria-label="Bootstrap"
              >
                <use xlinkHref="#bootstrap"></use>
              </svg>
            </a>
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <a href="#" className={`nav-link px-2 ${theme === "dark" ? "text-secondary" : "link-secondary"}`}>
                  Home
                </a>
              </li>
              <li>
                <a href="#" className={`nav-link px-2 ${theme === "dark" ? "text-white" : "link-body-emphasis"}`}>
                  Features
                </a>
              </li>
              <li>
                <a href="#" className={`nav-link px-2 ${theme === "dark" ? "text-white" : "link-body-emphasis"}`}>
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className={`nav-link px-2 ${theme === "dark" ? "text-white" : "link-body-emphasis"}`}>
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className={`nav-link px-2 ${theme === "dark" ? "text-white" : "link-body-emphasis"}`}>
                  About
                </a>
              </li>
            </ul>
            <form
              className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
              role="search"
            >
              <input
                type="search"
                className={`form-control ${theme === "dark" ? "form-control-dark text-bg-dark" : ""}`}
                placeholder="Search..."
                aria-label="Search"
              />
            </form>
            <div className="text-end d-flex align-items-center">
              <button
                type="button"
                className={`btn btn-${theme === "light" ? "dark" : "light"} me-2`}
                onClick={toggleTheme}
              >
                {theme === "light" ? <BsFillMoonStarsFill /> : <BsFillSunFill />}
              </button>
              
              <button
                type="button"
                className={`btn btn-${theme === "dark" ? "outline-light" : "outline-dark"} me-2`}
                data-bs-toggle="modal"
                data-bs-target="#loginModal"
              >
                Login
              </button>

              <button type="button" className="btn btn-warning">
                Sign-up
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className={`modal-content ${theme === "dark" ? "text-bg-dark" : ""}`}>
            <div className="modal-header">
              <h5 className="modal-title" id="loginModalLabel">Login to Social Media</h5>
              <button type="button" className={`btn-close ${theme === "dark" ? "btn-close-white" : ""}`} data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter your email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter your password" />
                </div>
                <button type="submit" className="btn btn-primary w-100 mt-2">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;