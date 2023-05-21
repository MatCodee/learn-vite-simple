import './style.css'

// importacion de modulo
import buttonStyles from "./button.module.css"

// importaciojn de json
import data from "./data.json"
//import { user } from "./data.json" // podemos optimizar el json para produccion

// importacionde modulos globales
const modules = import.meta.glob('./modules/*.js')
//console.log(modules)
for(const path in modules) {
  modules[path]().then((module => {
    module.load()
  }))  
}


import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'


// importacion de un archivo typescript
import plusOperator from './app.ts'
console.log(`suma de 2 + 3 = ${plusOperator(2,3)}`)

// contiene un json
//console.log(buttonStyles)

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
    <button id="btn">Click!</button>
    <pre>${JSON.stringify(data)}</pre>
    <pre>${JSON.stringify(data.user)}</pre>

  </div>
  
`
document.getElementById('btn').className = buttonStyles.btn
setupCounter(document.querySelector('#counter'))
