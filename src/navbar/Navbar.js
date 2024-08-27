import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import logo from "../logo.svg";
function Navbar(){


    return(
    <>
       <nav className="navbar">
          <p>Choose Languge</p>
          <div className="langugeDropdown dropdown">
                <button className="btn border-secondary-subtle dropdown-toggle" type="button" data-bs-auto-close="outside"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    EN
                </button>
                <ul className="dropdown-menu px-2 py-0">
                        <li>
                            <label id="lable_x" data-action=""
                                data-value="" for="en"
                                className="d-flex justify-content-between align-items-center mouse-pointer">
                                <div className="d-flex align-items-center gap-2">
                                    <img src="" width='24' height="18"
                                        alt="awqaty languages"/>
                                    <p className="mb-0">EN</p>
                                </div>

                                <input id="en" style={{width:"19px",height:"19px"}} type="radio"
                                    value="" name="languge" />
                            </label>

                        </li>

                        <li>
                            <label id="lable_x" data-action=""
                                data-value="" for="ar"
                                className="d-flex justify-content-between align-items-center mouse-pointer">
                                <div className="d-flex align-items-center gap-2">
                                    <img src="" width='24' height="18"
                                        alt="awqaty languages"/>
                                    <p className="mb-0">AR</p>
                                </div>

                                <input id="ar" style={{width:"19px",height:"19px"}} type="radio"
                                    value="" name="languge" />
                            </label>

                        </li>
                </ul>
            </div>

        </nav>
    </>
    );
}

export default Navbar ;