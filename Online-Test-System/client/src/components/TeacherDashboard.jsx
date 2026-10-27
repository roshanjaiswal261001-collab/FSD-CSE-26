
import { useState } from "react";

function TeacherDashboard({ onBack }) {
  const [questions, setQuestions] = useState([]);
  const [quizzes, setQuizzes] = useState([]);
  const [showQuestionForm, setShowQuestionForm] = useState(false);
  const [showQuizForm, setShowQuizForm] = useState(false);
  const [showQuizzes, setShowQuizzes] = useState(false);

  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [answer, setAnswer] = useState("0");
  const [quizName, setQuizName] = useState("");

  function addQuestion(e) {
    e.preventDefault();

    const newQuestion = {
      id: Date.now(),
      question,
      options: [option1, option2, option3, option4],
      answer: Number(answer)
    };

    setQuestions([...questions, newQuestion]);

    setQuestion("");
    setOption1("");
    setOption2("");
    setOption3("");
    setOption4("");
    setAnswer("0");
    setShowQuestionForm(false);
  }

  function createQuiz(e) {
    e.preventDefault();

    setQuizzes([
      ...quizzes,
      {
        id: Date.now(),
        name: quizName,
        questionCount: questions.length
      }
    ]);

    setQuizName("");
    setShowQuizForm(false);
  }

  return (
    <div className="container">
      <div className="card dashboard">
        <h1>Teacher Dashboard</h1>
        <p>Welcome, Teacher!</p>

        <div className="dashboard-buttons">
          <button
            className="primary-button"
            onClick={() => setShowQuestionForm(!showQuestionForm)}
          >
            Add Question
          </button>

          <button
            className="primary-button"
            onClick={() => setShowQuizForm(!showQuizForm)}
          >
            Create Quiz
          </button>

          <button
            className="secondary-button"
            onClick={() => setShowQuizzes(!showQuizzes)}
          >
            View Quiz
          </button>
        </div>

        {showQuestionForm && (
          <form onSubmit={addQuestion}>
            <h2>Add New Question</h2>

            <label>Question</label>
            <input
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              required
            />

            <label>Option 1</label>
            <input
              value={option1}
              onChange={(e) => setOption1(e.target.value)}
              required
            />

            <label>Option 2</label>
            <input
              value={option2}
              onChange={(e) => setOption2(e.target.value)}
              required
            />

            <label>Option 3</label>
            <input
              value={option3}
              onChange={(e) => setOption3(e.target.value)}
              required
            />

            <label>Option 4</label>
            <input
              value={option4}
              onChange={(e) => setOption4(e.target.value)}
              required
            />

            <label>Correct Answer</label>
            <select
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            >
              <option value="0">Option 1</option>
              <option value="1">Option 2</option>
              <option value="2">Option 3</option>
              <option value="3">Option 4</option>
            </select>

            <button className="primary-button" type="submit">
              Save Question
            </button>
          </form>
        )}

        {showQuizForm && (
          <form onSubmit={createQuiz}>
            <h2>Create New Quiz</h2>

            <label>Quiz Name</label>
            <input
              value={quizName}
              onChange={(e) => setQuizName(e.target.value)}
              placeholder="Enter quiz name"
              required
            />

            <p>Available questions: {questions.length}</p>

            <button className="primary-button" type="submit">
              Create Quiz
            </button>
          </form>
        )}

        {showQuizzes && (
          <div>
            <h2>Quiz List</h2>

            {quizzes.length === 0 ? (
              <p>No quizzes created yet.</p>
            ) : (
              quizzes.map((quiz) => (
                <div className="dashboard-item" key={quiz.id}>
                  <span>{quiz.name}</span>
                  <span>{quiz.questionCount} Questions</span>
                </div>
              ))
            )}
          </div>
        )}

        <h2>Added Questions: {questions.length}</h2>

        {questions.map((item, index) => (
          <div className="dashboard-item" key={item.id}>
            <span>{index + 1}. {item.question}</span>
          </div>
        ))}

        <button className="secondary-button" onClick={onBack}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default TeacherDashboard;
