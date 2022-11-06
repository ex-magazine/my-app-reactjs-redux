import React, {Component} from "react";

/*
//Nhan gia tri cua props trong class component bang this.props
class Welcome extends Component {
    state = {  } 
    render() { 
        console.log(this.props);
        return (
            <>
                <h1>Hello {this.props.name}</h1>
            </>
        );
    }
}
 
export default Welcome;

*/
//Nhan props trong functional components bang cach chi dinh tham so trong function
const Welcome = (props) => {
   
    return (
        <>
            <h1> Xin chao {props.name} </h1>
        </>
    );
};

export default Welcome;