import { Link, useParams } from "react-router-dom";
import Calendar from "../calender/Calender";
import Times from "../Times.js";
import { servicsPramiters } from "../Jsonapis.js";
import { useEffect, useState } from "react";



function Pickdate() {

    
    const [selectedservice,setSelectedservice] = useState({})

    const params = useParams();
    useEffect(()=>{
        servicsPramiters.map(service=> {
            if (service.name==params.service_name){

                setSelectedservice(service);
            }
        })
    },[])

    // const [selectedService,setselectedService] = useState(params.service_name);
    

  
  return ( <div className="inside-container col-lg-6 col-12 m-auto">
                <nav className="navbar">
                <Link to={"/"}>
                    <i className="fa fa-arrow-left border p-2 rounded"></i>
                </Link>
                </nav>
                <div className="service-details-ho col-lg-5 col-12 p-3 p-md-4">
                <div className="service-data">
                    <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <rect width="48" height="48" rx="8" fill="#F0F4F7" />
                    <path
                        d="M18.1667 15.8337V12.3337C18.1667 11.6893 18.689 11.167 19.3334 11.167H28.6667C29.3111 11.167 29.8334 11.6893 29.8334 12.3337V15.8337H34.5C35.1444 15.8337 35.6667 16.356 35.6667 17.0003V33.3337C35.6667 33.978 35.1444 34.5003 34.5 34.5003H13.5C12.8557 34.5003 12.3334 33.978 12.3334 33.3337V17.0003C12.3334 16.356 12.8557 15.8337 13.5 15.8337H18.1667ZM14.6667 27.5003V32.167H33.3334V27.5003H14.6667ZM22.8334 22.8337V25.167H25.1667V22.8337H22.8334ZM20.5 13.5003V15.8337H27.5V13.5003H20.5Z"
                        fill="#0F53ED"
                    />
                    </svg>
                    {/* <img src="" alt="" /> */}
                    <div className="serv-name w-100">
                    <p className="text-muted fw-semibold"></p>
                    <h1 className="fw-bolder" style={{ fontSize: "23px" }}>{selectedservice.name}</h1>
                    <div className="serv-price d-flex justify-content-between">
                        {selectedservice.price}
                        <span>
                        <i className="far fa-clock me-1"></i>{selectedservice.time}
                        </span>
                    </div>
                    </div>
                </div>

                {/* <p className="text-muted mt-3 fw-bold"> <i className="far fa-clock me-1"></i> 1 hr 15 min</p> */}
                {/* ck date goes here */}
                <div className="my-2" id="s-details">
                {selectedservice.description}
                </div>
                <div className="show-more-less-buttons">
                    <span className="show-more-btn" onclick="showMore()"></span>
                    <span className="show-less-btn" onclick="showLess()"></span>
                </div>
                </div>

                <div className="date-time-pg col-lg-7 col-12">
                <input type="hidden" value="" id="date_val" />
                <input type="hidden" value="" id="single_event_date" />
                <input type="hidden" value="" id="time_val" />
                <input type="hidden" value="" id="timezone" />

                <div className="zone-container">
                    <label for="time_zone" className="col-12 fw-bold form-label">
                        Time Zone
                    </label>
                    <div className="d-flex align-items-center gap-2">
                    <svg
                        width="21"
                        height="21"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                    d="M8 16C3.58172 16 0 12.4182 0 8C0 3.58172 3.58172 0 8 0C12.4182 0 16 3.58172 16 8C16 12.4182 12.4182 16 8 16ZM6.16802 14.1339C5.39794 12.5007 4.92586 10.6994 4.82185 8.8H1.64951C1.9664 11.3412 3.77311 13.4198 6.16802 14.1339ZM6.42456 8.8C6.54488 10.751 7.10224 12.5838 8 14.2016C8.89776 12.5838 9.45512 10.751 9.57544 8.8H6.42456ZM14.3505 8.8H11.1782C11.0742 10.6994 10.6021 12.5007 9.832 14.1339C12.2269 13.4198 14.0336 11.3412 14.3505 8.8ZM1.64951 7.2H4.82185C4.92586 5.30062 5.39794 3.49926 6.16802 1.86605C3.77311 2.58026 1.9664 4.6588 1.64951 7.2ZM6.42456 7.2H9.57544C9.45512 5.24898 8.89776 3.4162 8 1.79839C7.10224 3.4162 6.54488 5.24898 6.42456 7.2ZM9.832 1.86605C10.6021 3.49926 11.0742 5.30062 11.1782 7.2H14.3505C14.0336 4.6588 12.2269 2.58026 9.832 1.86605Z"
                    fill="#3A3B4E"
                    />
                    </svg>

                    <select
                        name="time_zone"
                        id="time_zone"
                        className="col-12 time_zone form-control"
                    >
                        <option value="Egypt">Egypt</option>
                        <option value="Kuwait">Kuwait</option>
                        <option value="Saudi Arabia">Saudi Arabia</option>
                    </select>
                    </div>
                </div>

                <div id="datePicker" className="date-picker col-lg-12 ">
                    <h3 className="services-header">Select a day</h3>
                    {/* HTML code for button and date picker container */}
                    <div className="form-group">
                     <Calendar />
                    </div>
                </div>

                <Times selectedservice={selectedservice}/>
                </div>
            </div>
  );
}

export default Pickdate;
