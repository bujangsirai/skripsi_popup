import './App.css'
import FGPage from './FormGear'

import template from "./default/template.json";
import validation from "./default/validation.json";

function App() {

  window.addEventListener('message', (event) => {
    // Do not do anything unless the message was from
    // a domain we trust.
    if (event.origin !== 'http://localhost:5174/') { console.log("gagal"); return; }

    // Create a local copy of the variable we were passed.
    var test_parameter = event.data;
    console.log("test");
    console.log(test_parameter);
})


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
