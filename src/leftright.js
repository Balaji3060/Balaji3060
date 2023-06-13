import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import"./Sidebar.css"

import aoo1 from './Images/cs1.png';
import aoo2 from './Images/cs2.jpg';
import aoo3 from './Images/cs3.png';



function leftright() {
  return (
   <>
   <Carousel className="cas">
                <div >
                    <img src={aoo1} height="50px"/>
                    
                </div>
                <div>
                    <img src={aoo2} height="50px"/>
               
                </div>
                <div>
                    <img src={aoo3} height="50px"/>
                   
                </div>
            </Carousel>

   </>
  );
}

export default leftright;

