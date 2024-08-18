import React,{ useEffect } from "react";
import ReactDOM from "react-dom";

import { Remote16 } from "./Remote16";
import { Remote17 } from "./Remote17";
import { Remote18 } from "./Remote18";

const ContainerApp = () => {
    useEffect(() => {
        console.log('container up')
    }, []);


    return (
        <div style={ { border: "1px black dashed", padding: "10px" } }>
            <h1>HOST Application - React Version { React.version }</h1>
            <div>
                <div style={ { padding: "10px" } }>
                    <Remote16/>
                </div>
                <div style={ { padding: "10px" } }>
                    <Remote17/>
                </div>
                <div style={ { padding: "10px" } }>
                    <Remote18/>
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(<ContainerApp/>, document.getElementById('root'))
