import React, { Suspense, useEffect, useLayoutEffect, useRef } from 'react';
import ReactDOM from 'react-dom-16';

const legacyRoot16 = "legacyRoot16";

export const Remote16 = (props) => {


    useEffect(() => {
        import('react16/RemoteAppReact16MF').then((module) => {
            const App = module.default;
            ReactDOM.render(<App/>, document.getElementById(legacyRoot16))
        })
    }, []);

    return (
        <div>
            <div id={ legacyRoot16 }></div>
        </div>
    )
}
