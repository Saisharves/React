
 import React from "react";
import { CCircle,CParallelogram,CSemicircle,CTriangle,CSquare } from "./areaclass";
import { Semicircle, Triangle } from "./perimeter";
class Ans extends React.Component{
    render(){
        return(
        <><h3>Area of circle</h3><CCircle/>
        <br></br>
        <h3>Area of Triangle</h3><CTriangle/>
        <br></br>
        <h3>Area of Semicircle</h3><CSemicircle/>
        <br></br>
        <h3>Area of Square</h3><CSquare/>
        <br></br>
        <h3>Area of Paralleleogram</h3><CParallelogram/>
        <br></br>
        </>
        )
    }
}
export default Ans;

