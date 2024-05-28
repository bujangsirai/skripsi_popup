/* @refresh reload */
import { render } from 'solid-js/web'

import './index.css'
import App from './App'

window.addEventListener('message', (event) => {
    // Do not do anything unless the message was from
    // a domain we trust.
//     if (event.origin !== 'http://localhost:5174/') {
//       console.log("gagal");
//       return;
//   }

    // Create a local copy of the variable we were passed.
    var test_parameter = event.data;
    console.log("test");
    console.log(test_parameter);
})


const root = document.getElementById('root')

render(() => <App />, root!)
