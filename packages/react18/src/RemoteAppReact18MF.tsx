import React, { useEffect, useId } from 'react'
import { AppReact18 } from "./AppReact18";

const RemoteAppReact18MF = () => {
    useEffect(() => {
        console.log('RemoteAppReact18MF up')
    }, []);

    return (
        <AppReact18/>
    )
}

export default RemoteAppReact18MF
