import { defineConfig } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'

export default defineConfig({
    html: {
        title: 'react18',
    },
    server: {
        host: 'localhost',
        port: 3018,
        publicDir: {
            name: './src/public'
        }
    },
    plugins: [
        pluginReact()
    ],
    moduleFederation: {
        options: {
            name: 'react18',
            filename: 'static/js/remoteAppReact18MF.js',
            remotes: {},
            exposes: {
                './RemoteAppReact18MF': './src/RemoteAppReact18MF.tsx'
            },
            shared: {
                "react": {
                    singleton: false,
                },
                "react-dom": {
                    singleton: false,
                }
            }
        }
    },
})
