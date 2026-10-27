
function Result({ name, score, total, onRestart }) {
  return (
    <div className="container">
      <div className="card result-card">
        <h1>Test Result</h1>
        <p>Well done, {name}!</p>

        <h2>
          Score: {score} / {total}
        </h2>

        <p>Percentage: {(score / total) * 100}%</p>

        <button onClick={onRestart}>
          Retake Test
        </button>
      </div>
    </div>
  );
}

export default Result;
