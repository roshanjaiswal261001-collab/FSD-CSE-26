
import { useState } from "react";
import "./App.css";
import questions from "./question.js";
import AdminDashboard from "./components/AdminDashboard";
import TeacherDashboard from "./components/TeacherDashboard";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Student");
  const [page, setPage] = useState("login");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  function startTest(e) {
    e.preventDefault();

    if (!name.trim() || !email.trim()) {
      alert("Please enter your name and email.");
      return;
    }

    if (role === "Student") {
      setCurrentQuestion(0);
      setSelectedAnswers({});
      setPage("test");
    } else if (role === "Admin") {
      setPage("admin");
    } else {
      setPage("teacher");
    }
  }

  function selectAnswer(index) {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion]: index
    });
  }

  function calculateScore() {
    let score = 0;

    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.answer) {
        score++;
      }
    });

    return score;
  }

  function logout() {
    setName("");
    setEmail("");
    setRole("Student");
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setPage("login");
  }

  if (page === "login") {
    return (
      <div className="container">
        <div className="card login-card">
          <h1>Online Test System</h1>
          <p className="subtitle">Login to continue</p>

          <form onSubmit={startTest}>
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
            />

            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />

            <label>Select Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="Student">Student</option>
              <option value="Admin">Admin</option>
              <option value="Teacher">Teacher</option>
            </select>

            <button type="submit" className="primary-button">
              Continue
            </button>
          </form>

          <p className="small-text">
            Online Test System using React and JavaScript
          </p>
        </div>
      </div>
    );
  }

  if (page === "admin") {
    return <AdminDashboard onBack={logout} />;
  }

  if (page === "teacher") {
    return <TeacherDashboard onBack={logout} />;
  }

  if (page === "test") {
    const question = questions[currentQuestion];

    return (
      <div className="container">
        <div className="card test-card">
          <div className="test-header">
            <div>
              <h1>Online Test</h1>
              <p>Student: {name}</p>
            </div>

            <span className="question-count">
              Question {currentQuestion + 1} of {questions.length}
            </span>
          </div>

          <div className="progress-bar">
            <div
              className="progress"
              style={{
                width:
                  ((currentQuestion + 1) / questions.length) * 100 + "%"
              }}
            ></div>
          </div>

          <h2>{question.question}</h2>

          <div className="options">
            {question.options.map((option, index) => (
              <label
                key={index}
                className={
                  selectedAnswers[currentQuestion] === index
                    ? "option selected"
                    : "option"
                }
              >
                <input
                  type="radio"
                  name={"question-" + currentQuestion}
                  checked={selectedAnswers[currentQuestion] === index}
                  onChange={() => selectAnswer(index)}
                />
                {option}
              </label>
            ))}
          </div>

          <div className="button-row">
            <button
              className="secondary-button"
              disabled={currentQuestion === 0}
              onClick={() => setCurrentQuestion(currentQuestion - 1)}
            >
              Previous
            </button>

            {currentQuestion < questions.length - 1 ? (
              <button
                className="primary-button"
                onClick={() => setCurrentQuestion(currentQuestion + 1)}
              >
                Next
              </button>
            ) : (
              <button
                className="submit-button"
                onClick={() => {
                  if (
                    window.confirm("Are you sure you want to submit?")
                  ) {
                    setPage("result");
                  }
                }}
              >
                Submit Test
              </button>
            )}
          </div>

          <p className="small-text">
            Answered: {Object.keys(selectedAnswers).length} / {questions.length}
          </p>
        </div>
      </div>
    );
  }

  if (page === "result") {
    const score = calculateScore();
    const incorrect = questions.length - score;

    return (
      <div className="container">
        <div className="card result-card">
          <h1>Test Result</h1>
          <p className="subtitle">Well done, {name}!</p>

          <div className="score-circle">
            <h2>{score}/{questions.length}</h2>
            <p>Your Score</p>
          </div>

          <div className="result-details">
            <div>
              <span>Correct Answers</span>
              <strong>{score}</strong>
            </div>

            <div>
              <span>Incorrect / Unanswered</span>
              <strong>{incorrect}</strong>
            </div>

            <div>
              <span>Percentage</span>
              <strong>{(score / questions.length) * 100}%</strong>
            </div>
          </div>

          <button className="primary-button" onClick={logout}>
            Back to Login
          </button>
        </div>
      </div>
    );
  }

  return null;
}

export default App;
