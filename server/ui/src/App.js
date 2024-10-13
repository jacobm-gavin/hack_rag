import "./App.css";
import { useState } from "react";
import { GetData } from "./rag_response";
import { answer } from "./rag_response";
let final_question = "";
function App() {
  const [in_question, setIn_question] = useState("");
  const [rag_response, setRag_response] = useState("");
  const handleInput = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    setIn_question(event.target.value);
  };
  const handleAnswer = async () => {
    final_question = in_question;
    await GetData();
    setRag_response(answer);
    console.log(rag_response + " Is the current value of rage_response");
    let response = "";
    console.log(answer.length);
    /*
    let i = 0;
    const writing = setInterval(function () {
      if (i < answer.length) {
        console.log(answer.charAt(i));
        response += answer.charAt(i);
        setRag_response(response);
        i++;
      } else {
        clearInterval(writing);
      }
    }, 150);*/
    // console.log(answer);
    // setRag_response(answer);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Your Question:</p>
        <input
          id="in_question"
          value={in_question}
          onChange={handleInput}
        ></input>
        <br></br>
        <br></br>
        <button onClick={handleAnswer}>Submit question</button>
        <br></br>
        <br></br>
        <p>{rag_response}</p>
      </header>
    </div>
  );
}
console.log(final_question);
export { final_question };
export default App;
