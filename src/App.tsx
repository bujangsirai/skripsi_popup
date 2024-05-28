
import { createSignal } from 'solid-js';
import './App.css'
import FGPage from './FormGear'

function App() {

  const [terLoad , setTerLoad] = createSignal(false);
  const [templato , setTemplato] = createSignal(undefined);
  const [validationo , setValidationo] = createSignal(undefined);
  const [responso , setResponso] = createSignal(undefined);
  const [modo , setModo] = createSignal(undefined);

  window.addEventListener('message', (event) => {
    // Do not do anything unless the message was from
    // a domain we trust.

    console.log("epent orijin " , event.origin)
    if (event.origin !== 'https://skripsi-real.vercel.app') { return; }
    
    // Create a local copy of the variable we were passed.
    let dataReceive = event.data;
    console.log(dataReceive);

    setTemplato(dataReceive.template);
    setValidationo(dataReceive.validation);
    setResponso(dataReceive.response);
    setModo(dataReceive.mode);
    setTerLoad(true);
})




  let obj = {
    answers: [],
  };


  return (
  <div>
    {terLoad() ? 
    <FGPage
    template={templato()}
    validation={validationo()}
    response={responso()}
    mode={modo()}
/> : <p>Loading...</p>}
  </div>



  )
}

export default App
