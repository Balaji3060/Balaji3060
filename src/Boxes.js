import React from 'react'
import img1 from './Images/1461503.webp';
import img2 from './Images/3-kljl39663grey.webp';
import img3 from './Images/40-10398369.webp';
import img4 from './Images/75-flow.webp';
import img5 from './Images/acs05974.webp';
import img6 from './Images/m-fc4358.webp';
import img7 from './Images/na-na-neck.webp';
import img8 from './Images/nord-buds-.webp';
import img9 from './Images/sprig.webp';
import img10 from './Images/xl-teetrack.webp';
function Boxes() {
  return (
    <div className='boxcontainer'>
        <div className='boxes'>
            <img src={img1} className='boximg' />
            <div>Desberry,Imara & more</div>
            <div style={{color:"green"}}>From $40</div>
            
        </div>
        <div className='boxes'>
            <img src={img2} className='boximg' />
            <div>Killer,RHX & more</div>
            <div style={{color:"green"}}>From $25</div>
        </div>
        <div className='boxes'>
            <img src={img3} className='boximg' />
            <div>Roadster,here & now</div>
            <div style={{color:"green"}}>From $35</div>
        </div>
        <div className='boxes'>
            <img src={img4} className='boximg' />
            <div>Travel & more</div>
            <div style={{color:"green"}}>From $60</div>
        </div>
        <div className='boxes'>
            <img src={img5} className='boximg' />
            <div>Phone case & more</div>
            <div style={{color:"green"}}>From $10</div>
        </div>
        <div className='boxes'>
            <img src={img6} className='boximg' />
            <div>Kids shirt & more</div>
            <div style={{color:"green"}}>From $20</div>
        </div>
        <div className='boxes'>
            <img src={img7} className='boximg' />
            <div>Jewellery & more</div>
            <div style={{color:"green"}}>From $50</div>
        </div>
        <div className='boxes'>
            <img src={img8} className='boximg' />
            <div>Treuwireless Earphones</div>
            <div style={{color:"green"}}>From $12</div>
        </div>
        <div className='boxes'>
            <img src={img9} className='boximg' />
            <div>Tempered glass & more</div>
            <div style={{color:"green"}}>From $10</div>
        </div>
        <div className='boxes'>
            <img src={img10} className='boximg' />
            <div>Mens clothes & more</div>
            <div style={{color:"green"}}>From $30</div>
        </div>

    </div>
  )
}

export default Boxes