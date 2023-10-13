import React, { Component } from "react";
import Camera from "./camera";


// Components for all of GardeQR web structure
class Main extends Component{
    constructor(props) {
        super(props);
        this.state = {
            showCamera: false
        }
    }
    toggleCamera =()=> {
        this.setState((prevState) => ({
          showCamera: !prevState.showCamera,
        }));
    };
    
    render(){
        return(
            <div>
                <h1 className="garde-title">GardeQR 👋</h1>
                <br></br>
                <button onClick={this.toggleCamera} class="button-38" role="button">Scan using camera</button>
                {this.state.showCamera && <Camera />}
                <button class="button-38" role="button">Scan image</button>
            </div>
        )
    }
}

export default Main;