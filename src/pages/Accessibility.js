import React from 'react';
import Header from './header';
import SiteNav from './sitenav';
import golden2 from '../images/golden2.jpg';
import golden1 from '../images/golden1.jpg'
import golden3 from '../images/golden3.jpeg';
import page3 from '../images/page3.jpg';
import Barchart from './barchart';
function Accessibility() {
    return ( <>
    <Header/>
    <div className='main-header'>
        <SiteNav/>
        <div className='row m-2'>
            <div className='col-md-8 col-12'>
                <h6 className='p-1'>1. Overall Score on Accessebility </h6>
                <Barchart/>
                <div className='border-overall'></div>
                <h6 className='p-1 pt-4'>2. Score on public transport facility near Golden Temple</h6>
                <Barchart/>
            </div>
            <div className='col-md-4 col-12'>
                <div className='side-image-bar'>
                    <div className='d-flex'>
<img src={page3} alt='satellite image' height={'300'}/>
<img src={golden1} alt='golden temple' height={'300'}/>
                    </div>
                    <div className='d-flex'>
                        <img src={golden2} alt='golden temple' height={'400'}/>
                        <img src={golden3} alt='golden temple' height={'400'}/>
                    </div>
                </div>
            </div>

        </div>
    </div>
    </> );
}

export default Accessibility;