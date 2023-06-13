import"./Sidebar.css"
import shopping from "../src/Images/shopping-cart-icon-30.png";
function SideBar() {
    return (
        <>
        <div className="headercontainer">
        <div className="header" >
            <h1 className="header_1">GSM Reatil</h1>
            <p className="header_2">Fullfill your Budget</p>
        </div>
        <div className="header1">
           <div className="header_3">
               <div className="header_5">
                  <select className="select">
                   <option >All</option>
                  </select>
                  <div>
                  <input type="text" className="input"></input>
                  <button className="search">search</button>
                  </div>
                 <div className="sign" >
                   <div className="welcome">Welcome GSM </div>
                   <div className="welcome">Signin here </div>
                 </div>
                 <div className="image1">
                   <img src="https://www.freeiconspng.com/thumbs/shopping-cart-icon/shopping-cart-icon-30.png"></img>
                   <div className="card">Card</div>
                  </div>
              
                </div>
              
           </div>
           <div className="header_4">
               <button className="btn1">COOCKING MATERIALS </button>
               <button className="btn1">BEVERAGES MIX & SNACKS</button>
               <button className="btn1">PERSONAL CARE</button>
               <button className="btn1">HOUSE HOLD CARE & CLEANING</button>
           </div>
        </div>
         </div>  
        </>
    )
}

export default SideBar;