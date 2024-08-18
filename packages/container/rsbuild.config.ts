import { defineConfig } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'


export default defineConfig({
    html: {
        title: 'container',
    },
    server: {
        host: 'localhost',
        port: 3001,
        publicDir: {
            name: './src/public'
        }
    },
    plugins: [
        pluginReact()
    ],
    moduleFederation: {
        options: {
            name: 'container',
            remotes: {
                react16: `react16@http://localhost:3016/static/js/remoteAppReact16MF.js`,
                react17: `react17@http://localhost:3017/static/js/remoteAppReact17MF.js`,
                react18: `react18@http://localhost:3018/static/js/remoteAppReact18MF.js`,
            },
            shared: {
                "react": {
                    singleton: false,
                },
                "react-dom": {
                    singleton: false,
                }
            }
        },
    },
})
