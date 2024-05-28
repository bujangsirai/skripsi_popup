import { createSignal } from 'solid-js'
import solidLogo from './assets/solid.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FGPage from './FormGear'

import template from "./default/template.json";
import validation from "./default/validation.json";

function App() {

  let obj = {
    answers: [],
  };

  return (
    <>
<FGPage
              template={template}
              validation={validation}
              response={obj}
              mode={1}
      />

    </>
  )
}

export default App
