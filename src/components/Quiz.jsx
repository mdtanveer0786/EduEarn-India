import React, { useState } from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

const Quiz = ({ quizData }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  if (!quizData || quizData.length === 0) {
    return null;
  }

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
    const percentage = Math.round((score / quizData.length) * 100);
    return (
      <div className="quiz-container result text-center">
        <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
          {percentage >= 70 ? (
            <CheckCircle2 size={40} className="text-green-500" />
          ) : (
            <XCircle size={40} className="text-red-500" />
          )}
        </div>
        <h3 className="text-2xl font-bold mb-2">Quiz Completed!</h3>
        <p className="score-text">{score} / {quizData.length} correct ({percentage}%)</p>
        <div className="progress-bar-container">
          <div 
            className="progress-bar" 
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <p className="text-muted mb-6">
          {percentage === 100 
            ? "🎉 Perfect score! You've mastered this topic." 
            : percentage >= 70 
              ? "👏 Great job! You have a solid understanding." 
              : "📚 Keep learning! Review the article and try again."}
        </p>
        <button className="btn btn-primary" onClick={resetQuiz}>Retake Quiz</button>
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
            <span style={{ flex: 1 }}>{option}</span>
            {selectedAnswer !== null && index === quizData[currentQuestion].correctAnswer && (
              <CheckCircle2 size={20} className="text-green-500" />
            )}
            {selectedAnswer === index && index !== quizData[currentQuestion].correctAnswer && (
              <XCircle size={20} className="text-red-500" />
            )}
          </button>
        ))}
      </div>
      
      {selectedAnswer !== null && (
        <div className="explanation-section fade-in">
          <p className={isCorrect ? 'text-success' : 'text-danger'}>
            <strong>{isCorrect ? '✅ Correct!' : '❌ Incorrect.'}</strong>{' '}
            {quizData[currentQuestion].explanation}
          </p>
          <button className="btn btn-primary mt-4" onClick={handleNextQuestion}>
            {currentQuestion + 1 === quizData.length ? 'See Results' : 'Next Question →'}
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
