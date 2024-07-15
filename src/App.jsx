import { useState } from "react";

import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";

function App() {
  const [ userInput, setUserInput ] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0
  });

  const isValid = (userInput.duration >0 && userInput.initialInvestment >0 && userInput.annualInvestment >0 && userInput.expectedReturn>0);

  function handleChangedValues(inputIdentifier, newValue){
    setUserInput((prevUserInput) => {
        return {
            ...prevUserInput,
            [inputIdentifier]: +newValue  //+ sets string value to number
        };
    })
  }

  let resultsData = <Results userInput={userInput}/>
  if(!isValid)
    resultsData = <p className="center">Please enter valid credentials!</p>

  return (
    <>
      <Header />

      <UserInput userInput={userInput} onChangeInput={handleChangedValues}/>
      
      {resultsData}
    </>
  )
}

export default App
