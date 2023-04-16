import React from "react";
function Header() {
  return (
    <>
      <div class="container m-3">
        <div class="row">
          <div class="col-sm">
            {" "}
            <div class="logo">
              <a
                href="/"
                title="Home"
                rel="home"
                class="header__logo"
                id="logo"
              >
                <img
                  class="national_emblem"
                  src="https://tourism.gov.in/modules/cmf/cmf_design/images/emblem-dark.png"
                  alt="national emblem"
                />
                <span class="mins-hi">पर्यटन मंत्रालय </span>
                <span class="mins">Ministry of Tourism</span>
              </a>
            </div>
          </div>
          <div class="col-sm">
            <a
              class="sw-logo1 external"
              href="https://www.g20.org/"
              title="G20, External link that open in a new windows"
            >
              <img
                src="https://tourism.gov.in//modules/cmf/cmf_design/images/G20img.jpg"
                alt="G20"
                // style="margin-right: 35px;"
              />
            </a>

            <a
              class="sw-logo1 external"
              href="https://utsav.gov.in/"
              title="Utsav, External link that open in a new windows"
            >
              <img
                src="https://tourism.gov.in//modules/cmf/cmf_design/images/utsav_logo1.jpg"
                alt="utsav"
                // style={{ marginRight: "35px" }}
              />
            </a>
            
            {/* <a
              class="sbm-logo"
              href="/swachh-bharat-mission"
              title="Swachh Bharat Mission"
            >
              <img
                src="https://tourism.gov.in//modules/cmf/cmf_design/images/swachh_bharat.jpg"
                alt="Swachh Bharat Mission"
                // style={{ width: "180px" }}
              />
            </a> */}

            <a
              class="sw-logo1 external"
              href="https://www.incredibleindia.org/content/incredible-india-v2/en.html"
              title="Incredible India, External link that open in a new windows"
            >
              <img
                src="https://tourism.gov.in//modules/cmf/cmf_design/images/visit_india_2023_new.jpg"
                alt="increbleindia"
                // style={{ marginTop: "7px", marginLeft: "10px" }}
              />
            </a>

            <a
              class="sw-logo external"
              href="https://swachhbharat.mygov.in/"
              title="Swachh Bharat, External link that open in a new windows"
            >
              <img
                src="https://tourism.gov.in//modules/cmf/cmf_design/images/swach-bharat.png"
                alt="Swachh Bharat"
              />
            </a>
          </div>
          {/* <div class="col-sm">One of three columns</div> */}
        </div>
      </div>
      {/* <header>
        <section class="wrapper header-wrapper">
          <div class="container common-container four_content header-container">
            
            <div class="header-right clearfix">
              <div class="right-content clearfix">
                <div class="float-element">
                  <a
                    class="sw-logo1 external"
                    
                    href="https://www.g20.org/"
                    title="G20, External link that open in a new windows"
                  >
                    <img
                      src="https://tourism.gov.in//modules/cmf/cmf_design/images/G20img.jpg"
                      alt="G20"
                      // style="margin-right: 35px;"
                    />
                  </a>
                  <a
                    class="sw-logo1 external"
                    
                    href="https://utsav.gov.in/"
                    title="Utsav, External link that open in a new windows"
                  >
                    <img
                      src="https://tourism.gov.in//modules/cmf/cmf_design/images/utsav_logo1.jpg"
                      alt="utsav"
                      // style={{ marginRight: "35px" }}
                    />
                  </a>
                  <a
                    class="sbm-logo"
                    href="/swachh-bharat-mission"
                    title="Swachh Bharat Mission"
                  >
                    <img
                      src="https://tourism.gov.in//modules/cmf/cmf_design/images/swachh_bharat.jpg"
                      alt="Swachh Bharat Mission"
                      // style={{ width: "180px" }}
                    />
                  </a>

                  <a
                    class="sw-logo1 external"
                    
                    href="https://www.incredibleindia.org/content/incredible-india-v2/en.html"
                    title="Incredible India, External link that open in a new windows"
                  >
                    <img
                      src="https://tourism.gov.in//modules/cmf/cmf_design/images/visit_india_2023_new.jpg"
                      alt="increbleindia"
                      // style={{ marginTop: "7px", marginLeft: "10px" }}
                    />
                  </a>

                  <a
                    class="sw-logo external"
                    
                    href="https://swachhbharat.mygov.in/"
                    title="Swachh Bharat, External link that open in a new windows"
                  >
                    <img
                      src="https://tourism.gov.in//modules/cmf/cmf_design/images/swach-bharat.png"
                      alt="Swachh Bharat"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header> */}
    </>
  );
}

export default Header;
