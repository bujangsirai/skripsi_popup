import './App.css'
import FGPage from './FormGear'

import template from "./default/template.json";
import validation from "./default/validation.json";

function App() {


  console.log("window.my_special_setting")
  let meBe = localStorage.getItem('testing');
  console.log(meBe);

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
