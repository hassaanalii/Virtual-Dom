import React from 'react';
import ReactDOM from 'react-dom';



function SetTimer(){
    var temp = new Date().toLocaleTimeString();
    
    var element = "<div> <h1>JavaScript</h1> <input type='text'></input> <p>"+temp+"</p></div>"

    
    document.getElementById("root").innerHTML = element
}




ReactDOM.render(<div> <h1>Python</h1> <input type='text'></input> <p>{new Date().toLocaleTimeString()}</p></div>,document.getElementById("root2"))
setInterval(SetTimer, 1000)

