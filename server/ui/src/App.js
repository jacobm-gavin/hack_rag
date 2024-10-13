import './App.css';
import { useState } from 'react';
import { GetData } from './rag_response';
import { answer } from './rag_response';
let final_question='';
let final_context='';
function App() {
  const [app_header, setApp_header]=useState('App-header');
  const [prompt, setPrompt]=useState('Prompt');
  const [question, setQuestion]=useState('Question');
  const [submit, setSubmit]=useState('Submit');
  const [css_answer, setCss_answer]=useState('Css-answer');
  const [context_prompt, setContext_prompt]=useState('Context-prompt');
  const [context_prov, setContext_prov]=useState('Context-prov');

  const [in_question, setIn_question]=useState('');
  const [in_context, setIn_context]=useState('');
  const [rag_response, setRag_response] = useState('');
  const handleInput = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    setIn_question(event.target.value);
  }
  const handleContextInput = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    setIn_context(event.target.value);
  }
  const handleAnswer = async() => {
    
    final_question=in_question;
    final_context=in_context;
    await GetData();
    let response = '';
    console.log(answer.length);
    let i = 0;
    setApp_header('App-header-new');
    setPrompt('Prompt-new');
    setQuestion('Question-new');
    setSubmit('Submit-new');
    setCss_answer('Css-answer-new');
    setContext_prompt('Context-prompt-new');
    setContext_prov('Context-prov-new');
    const writing = setInterval(function(){
        if (i<answer.length){
          console.log(answer.charAt(i));
          response += answer.charAt(i);
          setRag_response(response);
          i++;}
        else{
          clearInterval(writing);}},150);
    // console.log(answer);
    // setRag_response(answer);
    }

  return (
    <div className="App">
      <header className={app_header}>
        <p className={prompt}>Your Question:</p>
        <input className={question} value={in_question} onChange={handleInput} placeholder='Enter your question here'></input><br></br>
        <p className={context_prompt}>Your source:</p><br></br>
        <input className={context_prov} value={in_context} onChange={handleContextInput} placeholder='Enter link here'></input>
        <br></br><br></br>
        <button className={submit}onClick={handleAnswer}>Submit question</button><br></br><br></br>
        <p className={css_answer}>{rag_response}</p>
      </header>
    </div>
  );
}
console.log(final_question);
export {final_question};
export {final_context};
export default App;
