import './App.css';
import React, { useState } from 'react';
import StartState from './components/StartState';
import EndState from './components/EndState';
import Quiz from './components/Quiz';
import quizQuestions from './components/questions.json';


const App = () => {
  const [state, setState] = useState(1);
  const startQuiz = () => {
    setState(2);
  }
  const [currQuestion, setCurrQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  
  return (
    <div className="App">
      {/* Start State: Display the title of quiz and "Start Quiz" button */}
      {state == 1 && <StartState 
        onStartState={startQuiz} />}

      {/* Ask the questions */}
      {state == 2 && <Quiz 
        questions={quizQuestions.questions[currQuestion]}
        updateAnswer={setAnswers}
        numOfQuestions={quizQuestions.questions.length}
        currQuestion={currQuestion}
        onSetCurrQuestion={setCurrQuestion}
        onSetState={setState}/>}

      {/* End State: Display the results */}
      {state == 3 && <EndState 
        results={answers}
        data={quizQuestions.questions}
        checkAnswer={() => {}}/>}
    </div>
  );
}

export default App;
