
import { useState } from "react";

function AdminDashboard({ onBack }) {
  const [quizzes, setQuizzes] = useState([
    { id: 1, name: "JavaScript Test", questions: 10 },
    { id: 2, name: "React Test", questions: 10 }
  ]);

  const [showResults, setShowResults] = useState(false);

  function addQuiz() {
    const name = prompt("Enter quiz name:");

    if (name && name.trim() !== "") {
      setQuizzes([
        ...quizzes,
        {
          id: Date.now(),
          name: name.trim(),
          questions: 0
        }
      ]);
    }
  }

  return (
    <div className="container">
      <div className="card dashboard">
        <h1>Admin Dashboard</h1>
        <p>Welcome, Admin!</p>

        <div className="dashboard-buttons">
          <button className="primary-button" onClick={addQuiz}>
            Add Quiz
          </button>

          <button
            className="secondary-button"
            onClick={() => setShowResults(!showResults)}
          >
            {showResults ? "Hide Results" : "View Results"}
          </button>
        </div>

        <h2>Available Quizzes</h2>

        {quizzes.map((quiz) => (
          <div className="dashboard-item" key={quiz.id}>
            <span>{quiz.name}</span>
            <span>{quiz.questions} Questions</span>
          </div>
        ))}

        {showResults && (
          <div>
            <h2>Student Results</h2>
            <p>Actual student results will appear here after integration.</p>
          </div>
        )}

        <button className="secondary-button" onClick={onBack}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default AdminDashboard;
