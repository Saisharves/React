 import React from "react";


class CCircle extends React.Component{
    render(){
        var r=5;
    var area=3.14*r*r;
    
   return(area);
}
}

class CTriangle extends React.Component{
    render(){
        var h=3;
    var b=4;
    var area=0.5*b*h;
    return(area);
}
}

class CSquare extends React.Component{
    render(){
        var a=9;
    return(a*a);
}
}

class CParallelogram extends React.Component{
    render(){
        var side=2;
    var area=12*side;
    return (area);
}
}

class CSemicircle extends React.Component{
    render(){
        var r=3;
    var area=0.5*3.14*r*r;
    return(area);
}
}

export {CCircle,CParallelogram,CSemicircle,CTriangle,CSquare};

