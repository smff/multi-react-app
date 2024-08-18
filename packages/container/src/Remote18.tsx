import React, { Suspense, useEffect, useLayoutEffect, useRef } from 'react';
import ReactDOM from 'react-dom-18/client'

const legacyRoot18 = "legacyRoot18";

export const Remote18 = (props) => {


    useEffect(() => {
        import('react18/RemoteAppReact18MF').then((module) => {
            const App = module.default;

            const root = ReactDOM.createRoot(document.getElementById(legacyRoot18))
            root.render(<App/>)
        })
    }, []);

    return (
        <div>
            <div id={ legacyRoot18 }></div>
        </div>
    )
}
