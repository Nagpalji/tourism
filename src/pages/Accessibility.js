import React from 'react';
import Header from './header';
import SiteNav from './sitenav';
import Chart from "react-apexcharts";
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
            <div className='col-md-4 col-12'></div>

        </div>
    </div>
    </> );
}

export default Accessibility;