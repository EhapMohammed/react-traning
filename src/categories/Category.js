
import Catservices from "../catservices/Catservice";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
function Category(){

    const servicsPramiters = [
        { cate: 'Web', id: 1, name: 'Service one', price: 200, time: '00:30', description: 'descitption one' },
        { cate: 'Graphic', id: 2, name: 'Service Two', price: 30, time: '00:30', description: 'descitption two' },
        { cate: 'Editing', id: 3, name: 'Service Three', price: 500, time: '00:30', description: 'descitption three' },
        ];
        const [selectedCat,setSelectedCat] = useState({})
        const {cat}=useParams();

        useEffect(()=>{

            servicsPramiters.map(item=>{

                if (item.id==cat){

                    setSelectedCat(item);
                }
            })
        },[])

    return <div className="inside-container col-lg-6 col-12 m-auto">
            <nav className="navbar">
                <Link to={'/'}>
                    <i className="fa fa-arrow-left border p-2 rounded"></i>
                </Link>
            </nav>

            <div className="cat-cover">

                <img src="" alt=""/>

                <p>{selectedCat.cate}</p>
            </div>

            <h3 className="sec-title"> All Services</h3>

            <input type="hidden" value="" id="vendor_slug"/>

            <div id="subServicesDiv" className="all-services">
                {/* <h3 className="services-header">
                All Services
                </h3>  */}

                <div class="all-services">
                   
                 <Catservices selectedCat={selectedCat}/>

                </div>


            </div>
            </div>

}

export default Category ;