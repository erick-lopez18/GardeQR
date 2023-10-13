import { Component } from "react";
import React from "react";

// Components for all of GardeQR web structure
class Valid extends Component{
    render(){
        return(
            <div className="h-screen bg-black">
                <div className="flex flex-col  w-auto h-auto  garde-bg">
                    <div className="flex flex-col py-24 place-items-center justify-center">
                        <img src="/garde-logo.png" alt="GardeQR logo" className="garde-logo"/>
                        <div>
                            <h1 className="garde-title">GardeQR 👋</h1>
                            <h2>QR is verified ✅</h2>
                            <button class="button-38" role="button">Enter verified link</button>
                            <button class="button-38" role="button">Exit</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Valid;