import { defineConfig } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'

export default defineConfig({
    html: {
        title: 'react16',
    },
    server: {
        host: 'localhost',
        port: 3016,
        publicDir: {
            name: './src/public'
        }
    },
    plugins: [
        pluginReact()
    ],
    moduleFederation: {
        options: {
            name: 'react16',
            filename: 'static/js/remoteAppReact16MF.js',
            remotes: {},
            exposes: {
                './RemoteAppReact16MF': './src/RemoteAppReact16MF.tsx'
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
