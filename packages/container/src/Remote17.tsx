import React, { Suspense, useEffect, useLayoutEffect, useRef } from 'react';
import ReactDOM from 'react-dom-17';

const legacyRoot17 = "legacyRoot17";

export const Remote17 = (props) => {


    useEffect(() => {
        import('react17/RemoteAppReact17MF').then((module) => {
            const App = module.default;
            ReactDOM.render(<App/>, document.getElementById(legacyRoot17))
        })
    }, []);

    return (
        <div>
            <div id={ legacyRoot17 }></div>
        </div>
    )
}
