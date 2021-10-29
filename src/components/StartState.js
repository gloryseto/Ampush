import React from 'react';

const StartState = ({ onStartState }) => {
    return (
        <div className="container">
            <h1>Did you Escape from NY or LA?</h1>
            <button onClick={onStartState}>Start Quiz</button>
            <footer>&copy; Glory Seto</footer>
        </div>
    );
}

export default StartState;