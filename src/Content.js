import React, { useState } from "react";

const Content = () => {
  const[name, setName]=useState("balaji");
    function user() {
        const value=["balaji","lokesh","white"];
        const int=Math.floor(Math.random()*3);
        setName(value[int])
       }
       return(
        <main>
          <p>
            HII {name}
          </p>
          <button onClick={user}>Tap Me</button>
        </main>
       )




       //BUTTON CLICK EVENTS
       //-----------------------------
    //    const click=()=>{
    //     return(
    //       console.log('thank you go back')
    //     )
    //  }

    //     const click2=(name)=>{
    //       return(
    //         console.log(`'thank you go back ${name}'`)
    //       )
    //    }
  // return (
  //   <main>
  //   <p>Hi {user()}</p>
  //   <button onClick={()=> click2('balaji')}>Just Tap</button>
  //   </main>
  // )

        //USESTATE
        //--------------------------------------------------
          //   const [count , setCount]=useState(99);

          //  function increase(){
          //   setCount(count+1)
          //  }

          //  function decrement(){
          //   setCount(count-1)
          //  }


          //   return (
          //       <main>
          //       <p>Hi balaji</p>
          //       <button>Subcribe</button>
          //       <button onClick={decrement}>-</button>
          //       <span>{count}</span>
          //       <button onClick={increase}>+</button>
          //       </main>
          //   )
}

export default Content;