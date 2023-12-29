import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  function handleChange(inputId, value) {
    setUserInput((prevData) => {
      return { ...prevData, [inputId]: +value }; // adding + operator infront of value insures it is converted from string to integer
    });
  }

  return (
    <>
    <Header />
    <UserInput userInput={userInput} handleChange={handleChange} />
    <Results userInput={userInput} />
  </>
  );
}

export default App;
