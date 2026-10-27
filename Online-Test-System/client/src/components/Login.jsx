
function Login({ name, setName, email, setEmail, onStart }) {
  return (
    <div className="container">
      <div className="card login-card">
        <h1>Online Test System</h1>
        <p>Enter your details to start the test</p>

        <form onSubmit={onStart}>
          <label>Student Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button type="submit" className="primary-button">
            Start Test
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
