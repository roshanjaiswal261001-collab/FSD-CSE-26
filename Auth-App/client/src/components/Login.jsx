import { useState } from 'react'
import './Login.css'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)

  function handleLogin(event) {
    event.preventDefault()
    const success = username === 'admin' && password === 'manager'
    setIsSuccess(success)
    setMessage(success ? 'Login successful.' : 'Incorrect username or password. Try admin / manager.')
  }

  function handleReset() {
    setUsername('')
    setPassword('')
    setMessage('')
    setIsSuccess(false)
  }

  return (
    <main className="login">
      <section className="card">
        <h1>Login</h1>
        <p>Use the demo credentials: admin / manager</p>
        <form onSubmit={handleLogin}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" value={username} placeholder="Enter your username" onChange={(event) => setUsername(event.target.value)} required />
          <label htmlFor="password">Password</label>
          <input id="password" type="password" value={password} placeholder="Enter your password" onChange={(event) => setPassword(event.target.value)} required />
          <div className="login-actions">
            <button className="btn" type="submit">Login</button>
            <button className="btn secondary" type="button" onClick={handleReset}>Reset</button>
          </div>
        </form>
        {message && <p className={`login-message ${isSuccess ? 'success' : 'error'}`} role="status">{message}</p>}
      </section>
    </main>
  )
}

export default Login
