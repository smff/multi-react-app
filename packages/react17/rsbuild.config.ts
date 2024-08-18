import { defineConfig } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'

export default defineConfig({
    html: {
        title: 'react17',
    },
    server: {
        host: 'localhost',
        port: 3017,
        publicDir: {
            name: './src/public'
        }
    },
    plugins: [
        pluginReact()
    ],
    moduleFederation: {
        options: {
            name: 'react17',
            filename: 'static/js/remoteAppReact17MF.js',
            remotes: {},
            exposes: {
                './RemoteAppReact17MF': './src/RemoteAppReact17MF.tsx'
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
