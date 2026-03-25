import React, { useState } from 'react';

const Quiz = ({ quizData }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleAnswerClick = (index) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(index);
    const correct = index === quizData[currentQuestion].correctAnswer;
    setIsCorrect(correct);
    
    if (correct) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setIsCorrect(null);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
    setIsCorrect(null);
  };

  if (showScore) {
    return (
      <div className="quiz-container result text-center">
        <h3>Quiz Completed!</h3>
        <p className="score-text">You scored {score} out of {quizData.length}</p>
        <div className="progress-bar-container">
          <div 
            className="progress-bar" 
            style={{ width: `${(score / quizData.length) * 100}%` }}
          ></div>
        </div>
        <p>{score === quizData.length ? "Excellent! You've mastered this topic." : "Good effort! Keep learning and try again."}</p>
        <button className="btn btn-primary mt-3" onClick={resetQuiz}>Retake Quiz</button>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <span className="question-count">Question {currentQuestion + 1}/{quizData.length}</span>
        <div className="quiz-progress-mini">
          <div className="progress-fill" style={{ width: `${((currentQuestion) / quizData.length) * 100}%` }}></div>
        </div>
      </div>
      
      <div className="question-section">
        <h3 className="question-text">{quizData[currentQuestion].questionText}</h3>
      </div>
      
      <div className="answer-section">
        {quizData[currentQuestion].answerOptions.map((option, index) => (
          <button 
            key={index}
            className={`answer-btn ${
              selectedAnswer === index 
                ? (index === quizData[currentQuestion].correctAnswer ? 'correct' : 'incorrect')
                : (selectedAnswer !== null && index === quizData[currentQuestion].correctAnswer ? 'correct' : '')
            }`}
            onClick={() => handleAnswerClick(index)}
            disabled={selectedAnswer !== null}
          >
            <span className="option-label">{String.fromCharCode(65 + index)}</span>
            {option}
            {selectedAnswer === index && (
              <i className={`fas ${index === quizData[currentQuestion].correctAnswer ? 'fa-check-circle' : 'fa-times-circle'} status-icon`}></i>
            )}
          </button>
        ))}
      </div>
      
      {selectedAnswer !== null && (
        <div className="explanation-section fade-in">
          <p className={isCorrect ? 'text-success' : 'text-danger'}>
            <strong>{isCorrect ? 'Correct!' : 'Incorrect.'}</strong> {quizData[currentQuestion].explanation}
          </p>
          <button className="btn btn-primary mt-3" onClick={handleNextQuestion}>
            {currentQuestion + 1 === quizData.length ? 'See Results' : 'Next Question'}
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
