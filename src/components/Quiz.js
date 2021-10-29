import React, { useState, useEffect, useRef } from 'react';

const Quiz = ({ questions, numOfQuestions, currQuestion, onSetCurrQuestion, onSetState, updateAnswer }) => {
    const [selected] = useState('');
    const inputWrapper = useRef();
    const contBtn = (e) => {
        updateAnswer(() => [{question: questions.q, answer: selected}]);
        if(currQuestion < numOfQuestions - 1) {
            onSetCurrQuestion(currQuestion + 1);
        } else {
            onSetState(3);
        }
    }

    // Prevent auto selected input 
    useEffect(() => {
        const checkInput = inputWrapper.current.querySelector('input:checked');
        if(checkInput) {
            checkInput.checked = false;
        }
    }, [questions]);
    
    return (
        <div className="container">
            <h2>{questions.q}</h2>
            <div ref={inputWrapper}> 
                {questions.a.map((answer, i) => (
                <label className="inputs" key={i}>
                    <input type="radio" name="a" value={answer}></input>
                    {answer}
                </label>
                ))} 
            </div>
            <button className="contBtn" onClick={contBtn}>Continue</button>
        </div>
    )
}

export default Quiz;