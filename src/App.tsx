import './App.css'
import FGPage from './FormGear'

import template from "./default/template.json";
import validation from "./default/validation.json";

function App() {


  window.addEventListener('message', (event) => {
            console.log('Data received:', event.data);
        }, false);

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
