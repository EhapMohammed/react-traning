import Navbar from "./navbar/Navbar";
import React from 'react';
import Services from "./services/Services";
function App() {

  const servicsPramiters = [
    { cate: 'Web', id: 1, name: 'Service one', price: 200, time: '00:30', description: 'descitption one' },
    { cate: 'Graphic', id: 2, name: 'Service Two', price: 30, time: '00:30', description: 'descitption two' },
    { cate: 'Editing', id: 3, name: 'Service Three', price: 500, time: '00:30', description: 'descitption three' },
  ];

  const categories = servicsPramiters.map((category) =>
    <a href="/Category"  key={category.id} className="cat-card" >
      {/* <!-- <img src="" alt=""/> --> */}
      <h3>{category.cate}</h3>
    </a>
  );
  return (

    <section class="main-container">


      <div className="inside-container col-lg-6 col-12 m-auto">
        <Navbar />

        <div className="store-cover d-none">
          <img height="100%" width="100%" src="" alt="" />
        </div>
        <div className="store-bio d-none">
          <img src="" alt="" />
          <div className="bio-container">

            <h2>Store-name</h2>
            <p>Store-bio</p>

          </div>
        </div>
        <div className="promotion-banner d-none">
          <img height="100%" width="100%" src="" alt="" />
        </div>
        <h3 className="sec-title">categories</h3>
        <div className="row categories">
          {categories}
        </div>

        <h3 className="sec-title">All services</h3>

        <input type="hidden" value="" id="vendor_slug" />

        <Services servicsPramiters={servicsPramiters} />
      </div>
    </section>
  );
}

export default App;
