import React from "react";
function Table() {
  return (
    <>
      <div class="row">
        <div class="col-4 mx-auto align-center text-center">
          <div class="row m-2">
            <button className="btn buttonPink">
              <i class="fa fa-search" />
              Enter Site Name
            </button>
          </div>
          <div class="row m-2 align-center">
            {/* <button className="btn buttonPink">
  <i class="fa fa-search" />
  Zone
</button> */}
            Location Score
          </div>
          <div class="row m-2">
            <button className="btn buttonPink">
              <i class="fa fa-search" />
              Zone
            </button>
          </div>
          <div class="row m-2">
            <button className="btn buttonPink">
              <i class="fa fa-search" />
              State
            </button>
          </div>
          <div class="row m-2">
            <button className="btn buttonPink">
              <i class="fa fa-search" />
              District
            </button>
          </div>
          <div class="row m-2 align-center">
            {/* <button className="btn buttonPink">
  <i class="fa fa-search" />
  Zone
</button> */}
            Advance Filter
          </div>
        </div>
        <div class="col">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
                <th scope="col">details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>
                  <a href="/1">
                    {" "}
                    <i class="fa fa-info-circle" />{" "}
                  </a>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>
                  <a href="/1">
                    {" "}
                    <i class="fa fa-info-circle" />{" "}
                  </a>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>
                  <a href="/1">
                    {" "}
                    <i class="fa fa-info-circle" />{" "}
                  </a>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>
                  <a href="/1">
                    {" "}
                    <i class="fa fa-info-circle" />{" "}
                  </a>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>
                  <a href="/1">
                    {" "}
                    <i class="fa fa-info-circle" />{" "}
                  </a>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>
                  <a href="/1">
                    {" "}
                    <i class="fa fa-info-circle" />{" "}
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Table;
