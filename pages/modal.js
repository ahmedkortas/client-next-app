import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import { UncontrolledCarousel, Row, Col } from "reactstrap";
import "bootswatch/dist/slate/bootstrap.min.css";
//port "bootswatch/dist/Cerulean/bootstrap.min.css";

const Tabs = () => {
  const items = [
    {
      src: require("assets/img/naturee.jpg"),
      altText: "Slide 1",
      caption: "",
      header: "",
      key: "1",
    },
    {
      src: require("assets/img/naturee2.jpg"),
      altText: "Slide 2",
      caption: "",
      header: "",
      key: "2",
    },
    {
      src: require("assets/img/sunEnergy.jpg"),
      altText: "Slide 3",
      caption: "",
      header: "",
      key: "3",
    },
  ];

  return (
    <>
      <IndexNavbar fixed />
      <div className="flex flex-wrap">
    <div className="w-full px-4 flex-1">
      <span className="text-sm block my-4 p-3 ">
      <UncontrolledCarousel style={{ height: "100px" }} items={items} />

      </span>
    </div>
    <div className="w-full px-4 flex-1">
      <span className="text-sm block my-4 p-3 ">
      <br></br>
      
      <div id='services'class="jumbotron">
        <h1 class="display-3">Our services </h1>
       
        <hr class="my-4" />
        <p>
        IRADA Consulting offers services in different areas:
        </p>
        
      </div>
      </span>
    </div>
  </div>
      
      

      
      <div className="flex flex-wrap">
        <Row>
          <div className="w-full px-4 flex-1">
            <span className="text-sm text-black block my-4 p-3 ">
              <div class="card mb-3">
                <h3 class="card-header text-xl">In the field of the environment</h3>

                <div className="flex flex-wrap justify-center">
                  <div className="w-6/12 sm:w-4/12 px-4">
                    <img
                      style={{ marginTop: "50px", marginBottom: "50px" }}
                      src="https://lh3.googleusercontent.com/proxy/gqv5fXs6pZfULcKx0dU1suwId9ifeGWkdSBbDh8HvwpERz6VwJukQs8t0jupybc-l9dPYE6d4HwG8DMZnHSW9yhXBAyiL2DKbeJ93t17v-4e3JRknTIzuoqOH8MxCias_ypA5FCev0bggFe-"
                      alt="..."
                      className="shadow-lg rounded max-w-full h-auto align-middle border-none"
                    />
                  </div>
                </div>

                <div class="card-footer text-muted">service one</div>
              </div>
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title text-xl">Description </h4>

                  <p class="card-text text-xl">
                    Environmental and Social Impact Studies Depollution studies
                    and Diagnosis of polluted sites. Solid and liquid waste
                    management, treatment and recovery program. Support for
                    clients in setting up an environmental management system
                    according to ISO14001 standards Measurements and modeling of
                    atmospheric emissions and marine pollution by hydrocarbons
                    and chemical substances. Development and animation of public
                    and social surveys.
                  </p>
                  
                </div>
              </div>
            </span>
          </div>
          <div className="w-full px-4 flex-1">
            <span className="text-sm block my-4 p-3 text-black ">
              <div class="card mb-3">
                <h3 class="card-header text-xl">In the field of industrial security</h3>

                <div className="flex flex-wrap justify-center">
                  <div className="w-6/12 sm:w-4/12 px-4">
                    <img
                      style={{ marginTop: "50px", marginBottom: "50px" }}
                      src="https://izimage.com/wp-content/uploads/2019/12/Plant-Safety-Challenges-Resized-1200x628.png"
                      alt="..."
                      className="shadow-lg rounded max-w-full h-auto align-middle border-none"
                    />
                  </div>
                </div>

                <div class="card-footer text-muted">service two</div>
              </div>
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title text-xl">Description </h4>

                  <p class="card-text text-xl">
                    Study of Dangers Fire Safety <br></br>
                    Study Emergency plans <br></br>
                    Supporting customers in setting up safety programs
                  </p>
                  
                </div>
              </div>
            </span>
          </div>
        </Row>
        <Row>
          <div className="w-full px-4 flex-1">
            <span className="text-sm text-black block my-4 p-3 ">
              <div class="card mb-3">
                <h3 class="card-header text-xl">In the area of ​​infrastructure</h3>

                <div className="flex flex-wrap justify-center">
                  <div className="w-6/12 sm:w-4/12 px-4">
                    <img
                      style={{ marginTop: "50px", marginBottom: "50px" }}
                      src="https://media.lesechos.com/api/v1/images/view/5da47f6e3e454656ec351248/1280x720/0602054046519-web-tete.jpg"
                      alt="..."
                      className="shadow-lg rounded max-w-full h-auto align-middle border-none"
                    />
                  </div>
                </div>

                <div class="card-footer text-muted">service three</div>
              </div>
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title text-xl">Description </h4>

                  <p class="card-text text-xl">
                    APS, APD and preparation of calls for tenders for hydraulic
                    works and CES <br></br>
                    development works Design and assistance in setting up
                    industrial and domestic water treatment plants<br></br>
                    Development program for industrial and urban areas Water
                    <br></br>
                    audit and development of water saving programs In the field
                    of training and assistance
                  </p>
                  
                </div>
              </div>
            </span>
          </div>
          <div className="w-full px-4 flex-1">
            <span className="text-sm block my-4 p-3 text-black ">
              <div class="card mb-3">
                <h3 class="card-header text-xl">
                  In the field of training and technical assistance
                </h3>

                <div className="flex flex-wrap justify-center">
                  <div className="w-6/12 sm:w-4/12 px-4">
                    <img
                      style={{ marginTop: "50px", marginBottom: "50px" }}
                      src="https://www.lcmtlondon.com/wp-content/uploads/2020/04/shutterstock_285147194.jpg"
                      alt="..."
                      className="shadow-lg rounded max-w-full h-auto align-middle border-none"
                    />
                  </div>
                </div>

                <div class="card-footer text-muted">service four</div>
              </div>
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title text-xl">Description </h4>

                  <p class="card-text text-xl">
                    Design of geographic databases Geographic<br></br> 
                    information system training <br></br>
                    Training in the following areas: The environment,
                    security Hygiene
                  </p>
                 
                </div>
              </div>
            </span>
          </div>
        </Row>
      </div>
    </>
  );
};

export default Tabs;