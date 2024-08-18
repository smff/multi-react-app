import React, { useEffect, useId } from 'react'
import { AppReact17 } from "./AppReact17";

const RemoteAppReact17MF = () => {
    useEffect(() => {
        console.log('RemoteAppReact17MF up')
    }, []);

    return (
        <AppReact17/>
    )
}

export default RemoteAppReact17MF
