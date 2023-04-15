import React from 'react';
function sideTable() {
    return ( <>
    <div className="col-12">
          <div className="row">
            <div className="col-md-2  col-12 bg-blue">
              <div className="row">
                <div className="d-flex mt-3  mb-2 ms-2">
                  <input
                    placeholder="Enter Site Name"
                    className="input form-control p-0 ps-2 me-1"
                  />
                  <div className="ps-1 pe-1 me-1">
                    {" "}
                    <i class="bi bi-funnel text-light fw-lighter"></i>
                  </div>
                </div>

                <div className="text-light label ms-2 fw-bold">
                  Location Score
                </div>
                <div class=" ms-2 dropdown ">
                  <a
                    class="btn btn-secondary dropdown-toggle btn-sm p-0 ps-2 col-11"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Zone
                  </a>

                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li>
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>

                <div class=" ms-2 dropdown">
                  <a
                    class="btn btn-secondary dropdown-toggle btn-sm p-0 ps-2 col-11"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    State
                  </a>

                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li>
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>

                <div class=" ms-2 dropdown">
                  <a
                    class="btn btn-secondary dropdown-toggle btn-sm p-0 ps-2 col-11"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    District
                  </a>

                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li>
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
                <div></div>

                <div className="mb-1 mt-2 me-2 ms-2">
                  <div className="label text-light fw-bold ps-1 mt-2">
                    {" "}
                    Advanced Filter Score
                  </div>
                  <div className="advanced-ruler me-2 p-2 mt-1 ">
                    <div className="text-grey small-text fw-bold ">
                      Accessebility
                    </div>
                    <div className="hr pt-5"></div>
                    <div className="text-grey small-text fw-bold ">
                      Amenities
                    </div>
                    <div className="hr pt-5"></div>
                    <div className="text-grey small-text fw-bold ">
                      Amenities
                    </div>
                    <div className="hr pt-5"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5 col-12"></div>
            <div className="col-md-5 col-12">
              <Table />
            </div>
          </div>
        </div>
    </> );
}

export default sideTable;