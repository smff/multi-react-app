import React, { useEffect, useId } from 'react'
import { AppReact16 } from "./AppReact16";

const RemoteAppReact16MF = () => {
    useEffect(() => {
        console.log('RemoteAppReact16MF up')
    }, []);

    return (
        <AppReact16/>
    )
}

export default RemoteAppReact16MF
