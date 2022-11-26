import React from "react";
import './color.css';
export default function Color()
{
    return(
        <>
          <div className="dropmain">
            <button  className="bu">Dropdown</button>
          <div className="dropcon">
             
             <li id="a">Lime</li>
             <li id="b">Lavender</li>
             <li id="c">Crimson</li>
             <li id="d">Darkblue</li>
             <li id="e">Teal</li>
             <li id="f">Rebecca Purple</li>
             <li id="g">Ghost White</li>
             <li id="h">Aqua Marine</li>
             <li id="i">Alice Blue</li> 
            
           </div>
          </div>
        </>
    );
}