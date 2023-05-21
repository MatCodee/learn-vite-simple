import { defineConfig,loadEnv } from "vite"
import { resolve } from 'path'

export default defineConfig (({ command, mode }) => {
    const env = loadEnv(mode, process.cwd())
    console.log(env.VITE_NAME)
    // Otra forma de importar esto
    //import.meta.env.<VariableName>

    console.log(command,mode)
    const port = 3000

    if(mode === "development") {
        console.log("Modo desarrollo")
        return {
            server: {
                port: port
            }
        }
    }else {
        console.log("Modo Produccion")
        return {
            build: {
                rollupOptions: {
                    input: {
                        main: resolve(__dirname, 'index.html'),
                        help: resolve(__dirname, 'help.html')
                    }
                }
                
            }
            /*
            configuracion para libreria
            return {
                build:{
                   lib: {
                    entry: resolve(_dirname, 'lib', 'main.js'),
                    name: 'demo',
                    fileName: (format)=>`demo.${format}.js`
                   }
                }
            }
            */
        }
    }

})