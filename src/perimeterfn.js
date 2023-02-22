 import React from "react";
import './App.css';
import { Circle,Square,Triangle,Semicircle} from "./perimeter";
function Paralleleogram(){
    var a=3;
         var b=4;
         var peri=2*a+b;
        return(
        
            <><h3>Perimeter of Paralleleogram</h3>{peri}
            
            <h3>Perimeter of circle</h3><Circle/>
            <br></br>
            <h3>Perimeter of Square</h3><Square/>
            <br></br>
            <h3>Perimeter of Semicircle</h3><Semicircle/>
            <br></br>
            <h3>Perimeter of Triangle</h3><Triangle/>
            <br></br>
            </>
            );
     }
export default Paralleleogram;

