import './App.css'
import FGPage from './FormGear'

import template from "./default/template.json";
import validation from "./default/validation.json";

function App() {

  let obj = {
    answers: [],
  };


  // Function to retrieve session data from sessionStorage
  function getSessionData() {
    let sessionData = sessionStorage.getItem("sessionData");
    if (sessionData) {
      sessionData = JSON.parse(sessionData);
      console.log("Session Data Retrieved:", sessionData);

      // Display session data in the popup
      document.getElementById("sessionData").innerText = JSON.stringify(sessionData);
    } else {
      console.log("No session data found");
    }
  }

  // Retrieve session data when the popup is fully loaded
  window.onload = getSessionData;

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
