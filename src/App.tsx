import './App.css'
import FGPage from './FormGear'

import template from "./default/template.json";
import validation from "./default/validation.json";

function App() {


  window.addEventListener('message', (event) => {

    if (event.origin !== 'http://localhost:5174') {
      console.log('data sesat');
      return; // Ignore messages from other origins
      }
    console.log('Data received:', event.data);
       } );

  let obj = {
    answers: [],
  };


  return (
      <FGPage
            template={template}
              validation={validation}
              response={obj}
              mode={1}
      />
  )
}

export default App
