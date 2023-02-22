function Circle(){
    var r=5;
    var peri=2*3.14*r;
    return(
        peri
    );
}

function Triangle(){
    var a=3;
    var b=4;
    var c=5;
    var peri=a+b+c;
    return(peri);
}

function Square(){
    var a=9;
    return(a);
}

function Semicircle(){
    var r=3;
    var peri=3.14*r+2*r;
    return(peri);
}



export {Circle,Square,Semicircle,Triangle};

