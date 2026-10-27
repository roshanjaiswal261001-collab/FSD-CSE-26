
function Test({
  questions,
  currentQuestion,
  selectedAnswers,
  selectAnswer,
  nextQuestion,
  previousQuestion,
  submitTest
}) {
  const question = questions[currentQuestion];

  return (
    <div className="container">
      <div className="card test-card">
        <h1>Online Test</h1>
        <p>
          Question {currentQuestion + 1} of {questions.length}
        </p>

        <h2>{question.question}</h2>

        {question.options.map((option, index) => (
          <label className="option" key={index}>
            <input
              type="radio"
              name={"question-" + currentQuestion}
              checked={selectedAnswers[currentQuestion] === index}
              onChange={() => selectAnswer(index)}
            />
            {option}
          </label>
        ))}

        <div className="button-row">
          <button
            onClick={previousQuestion}
            disabled={currentQuestion === 0}
          >
            Previous
          </button>

          {currentQuestion < questions.length - 1 ? (
            <button onClick={nextQuestion}>Next</button>
          ) : (
            <button onClick={submitTest}>Submit Test</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Test;
