import React from 'react';
import './index.css';

function App(){
    let curtime = new Date();
curtime = curtime.getHours();
 
        let greeting ="";
        const cssStyle ={

};
if(curtime>=1 && curtime<12){
    greeting = "Good Morning";
   cssStyle.color="green";
  }
  else if(curtime>12 && curtime<15 ){
    greeting="Good Afternoon";
    cssStyle.color="orange";
  }
  else if(curtime>15 && curtime<20){
    greeting="Good Evening";
    cssStyle.color="red";
  }
  else{
    greeting ="Good Night";
    cssStyle.color="blue";
  }
    return (
        <>
         
    <div className="heading">
      <h1>Hello sir, <span style={cssStyle}>{greeting}</span></h1>
    </div>
  </>

    
    )
}

export default App;