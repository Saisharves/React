
import React from "react";



class Pcube extends React.Component{
    constructor(props){
        super(props);
        this.state={
            a:2,
            b:3,
            c:5,
            d:4
        };
    }
    changea=()=>{
        this.setState({a:"5"});
    }
    changeb=()=>{
        this.setState({b:"4"});
    }
    changec=()=>{
        this.setState({c:"3"});
    }
    changed=()=>{
        this.setState({d:"2"});
    }
    changeall=()=>{
        this.setState({a:"8",b:"9",c:"10",d:"11"});
    }
    render(){
    
    return (
        <>
            <button onClick={this.changea}>Change a</button>
            <button onClick={this.changeb}>Change b</button>
            <button onClick={this.changec}>Change c</button>
            
            <button onClick={this.changeall}>Change all</button>
        <h1>{(this.state.a**3)+(this.state.b**3)+(this.state.c**3)+(3*(this.state.a+this.state.b)*(this.state.b+this.state.c)*(this.state.a+this.state.c))}</h1>
        </>
    );
}
}

export default Pcube ;