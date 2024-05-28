import './App.css'
import FGPage from './FormGear'

import template from "./default/template.json";
import validation from "./default/validation.json";

function App() {

  let obj = {
    answers: [],
  };

  window.addEventListener("message", function(event) {
    let sessionData = event.data;
    console.log("Session Data Received:", sessionData);
  }, false);


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
