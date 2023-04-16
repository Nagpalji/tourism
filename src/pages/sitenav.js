import React from 'react';
function SiteNav() {
    return ( <>
      <div className="d-flex justify-content-between  nav-shadow px-2">
          <div className="">
            <div className=" btn">
              <h6 className="fw-bold">
                Site Name: <span className="font-blue">Golden Temple</span>
              </h6>
            </div>
            <button className="btn btn-primary me-1 mt-1 mb-1 p-1">
              Accessibility
            </button>
            <button className="btn btn-primary me-1 mt-1 mb-1 p-1">
              Amenities
            </button>
            <button className="btn btn-primary me-1 mt-1 mb-1 p-1">
              Hygiene
            </button>
            <button className="btn btn-primary me-1 mt-1 mb-1 p-1">
              Safety & Security
            </button>
          </div>

          <div className="">
            <button className="btn btn-primary me-1 mt-1 mb-1 p-1">
              Download <span><i class="bi bi-cloud-download"></i></span>
            </button>
          </div>
        </div>
    </> );
}

export default SiteNav;
