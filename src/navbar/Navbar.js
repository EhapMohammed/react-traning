import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import logo from "../logo.svg";
function Navbar(){


    return(
    <>
       <nav className="navbar">
          <p>Choose Languge</p>
          <div className="dropdown">
            <button className="btn border-secondary-subtle dropdown-toggle" type="button" data-bs-auto-close="outside"
              data-bs-toggle="dropdown" aria-expanded="false">
              English
            </button>
            <ul className="dropdown-menu">
              <li>
                <label id="lable_x" data-action="{{ route('users.change_lang_home') }}"
                  data-value="{{ $localCode }}" for="eng-us"
                  className="d-flex justify-content-around align-items-center mouse-pointer">
                  <div className="d-flex align-items-center gap-2">
                    <img src={logo} width='40' height="32"
                      alt="awqaty languages" />
                    <p className="mb-0">English</p>
                  </div>

                  {/* <!-- <input id="check_box_lang" className="form-check-input" type="radio"
                                    value="{{ $localCode }}" name="languge" id="eng-us"> --> */}
                </label>

              </li>
            </ul>
          </div>

        </nav>
    </>
    );
}

export default Navbar ;