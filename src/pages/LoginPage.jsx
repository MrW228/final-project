import React, { useRef } from 'react'
import '../style/loginpage.css'

function LoginPage() {
  let login = useRef()
  let pass = useRef()
  let p = useRef()
  let user_login = "_MrW"
  let user_pass = "4789"

  function handleSubmit1(e) {
    e.preventDefault()
    if (login.current.value !== user_login && pass.current.value !== user_pass) {
      p.current.textContent = "Incorrect Login and Password"
      p.current.style.color = "red"

    } else if (login.current.value !== user_login) {
      p.current.textContent = "Incorrect Login"
      p.current.style.color = "red"

    } else if (pass.current.value !== user_pass) {
      p.current.value = "Incorrect Password"
      p.current.style.color = "red"

    } else {
      p.current.style.transition = "0ms"
      p.current.value = "Logged successfully"
      p.current.style.color = "green"

      window.location.href = '/AdminPanel';

    }

  }

  return (
    <div className="container">
      <div className='loginpage'>
        <h1>Login In Page</h1>
        <form onSubmit={(e) => handleSubmit1(e)}>
          <input ref={login} type="text" placeholder='login' /> <br />
          <input ref={pass} type="password" placeholder='password' /> <br />
          <button type='sumbit'>Log In</button><br />

          <p ref={p}>.</p>
        </form>
      </div>
    </div>

  )
}

export default LoginPage
