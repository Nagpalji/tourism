import React,{useState} from "react";
import Header from "./header";
import SiteNav from "./sitenav";
import golden1 from '../images/golden1.jpg';
import golden2 from '../images/golden2.jpg';
import golden3 from '../images/golden3.jpeg';
import golden5 from '../images/golden5.jpg';
import golden4 from '../images/golden4.jpeg';
function Site() {
const[expand , setExpand]=useState(false)
  return (
    <div className="whole-page">
      <Header />
      <div className="main-header">
      < SiteNav/>
       <div className="m-2 row">
        <div className="col-md-8 col-12">
            <h6 className="">About</h6>
            <div className="about">
            The Golden Temple is an open house of worship for all people, 
            from all walks of life and faiths. It has a square plan with four entrances, and a circumambulation path around the pool. The four entrances to the gurudwara symbolises the Sikh belief in equality and the Sikh view that all people are welcome into their holy place.[14] The complex is a collection of buildings around the sanctum and the pool.
            One of these is Akal Takht.
          {expand && <div> Additional buildings include a clock tower, the offices of the Gurdwara Committee, a Museum and a langar – a free Sikh community-run kitchen that offers a vegetarian meal to all visitors without discrimination.[5] Over 150,000 people visit the holy shrine everyday for worship.[15] The Gurdwara complex has been nominated as a UNESCO World Heritage Site, 
            and its application is pending on the tentative list of UNESCO.[16]</div>} <button className="btn text-muted p-0" onClick={()=>{setExpand(!expand)}}> {expand?'show less' :'[Expand]'}</button> 
            </div>

            <div className="mt-3">
            <h6>Tourist Overall Perception</h6>
            <div className="border-overall p-3">
                <div className="row px-4">
                    <div className="col-md-9 col-12">
                        <div className="row justify-content-center align-items-center">
                        <div className="col-md-4 col-12">
                    <span id="boot-icon" class="bi bi-emoji-smile-fill" style={{color:"rgb(56, 201, 7)" , fontSize:'6rem' }}></span> 
                    <div className="fw-bold"> Site Overall</div>
                    </div>
                    <div className="col-md-4 col-12">
                    <span id="boot-icon" class="bi bi-emoji-smile-fill" style={{color:"rgb(121, 249, 79)" , fontSize:'6rem' }}></span> 
                    <div className="fw-bold">Accessibility</div>
                    </div><div className="col-md-4 col-12">
                    <span id="boot-icon" class="bi bi-emoji-smile-fill" style={{color:"rgb(121, 249, 79)" , fontSize:'6rem' }}></span> 
                    <div className="fw-bold"> Amenities</div>
                    </div><div className="col-md-4 col-12">
                    <span id="boot-icon" class="bi bi-emoji-smile-fill" style={{color:"rgb(56, 201, 7)" , fontSize:'6rem' }}></span> 
                    <div className="fw-bold"> Hygiene</div>
                    </div><div className="col-md-4 col-12">
                    <span id="boot-icon" class="bi bi-emoji-smile-fill" style={{color:"rgb(56, 201, 7)" , fontSize:'6rem' }}></span> 
                    <div className="fw-bold"> Safety & Security</div>
                    </div>
                        </div>
                    

                    </div>
                    <div className="col-md-3 col-12">
                        <div className="d-flex align-items-center gap-2">
                        <span id="boot-icon" class="bi bi-emoji-smile-fill" style={{color:"rgb(56, 201, 7)" , fontSize:'3rem' }}></span> 
                        <div> 90 % or above</div>
                        </div>

                        <div className="d-flex align-items-center gap-2">
                        <span id="boot-icon" class="bi bi-emoji-smile-fill" style={{color:"rgb(121, 249, 79)" , fontSize:'3rem' }}></span> 
                        <div> 90 % or above</div>
                        </div>
 
                        <div className="d-flex align-items-center gap-2">
                        <span id="boot-icon" class="bi bi-emoji-expressionless-fill" style={{color:"rgb(255, 210, 48)" , fontSize:'3rem' }}></span> 
                        <div> 90 % or above</div>
                        </div>

                        <div className="d-flex align-items-center gap-2">
                        <span id="boot-icon" class="bi bi-emoji-frown-fill" style={{color:"rgb(237, 95, 30)" , fontSize:'3rem' }}></span> 
                        <div> 90 % or above</div>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                        <span id="boot-icon" class="bi bi-emoji-frown-fill" style={{color:"rgb(255, 0, 0)" , fontSize:'3rem' }}></span> 
                        <div> 90 % or above</div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
        </div>
       
        <div className="col-md-4 col-12">
          <div className="side-image-bar">
              <img src={golden3} alt="goldentemple" height={300} width={500}/>
              <div className="d-flex">
                <img src={golden1} alt="goldentemple" height={200}/>
                <img src={golden2} alt="goldentemple" height={200}/>
                <img src={golden3} alt="goldentemple" height={200}/>
              </div>
<div className="d-flex">
<img src={golden4} alt="goldentemple"/>
<img src={golden5} alt="goldentemple"/>
</div>
          </div>
        </div>
       
        
       </div>
      </div>
    </div>
  );
}

export default Site;
