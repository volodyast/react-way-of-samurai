import loading from "../../../assets/image/preload.svg";
import React from "react";

let Preloader = (props) => {
    console.log('yes')
    return <div style={{backgroundColor: 'white'}}>
        <img src={loading}/>
    </div>
}
export default Preloader;