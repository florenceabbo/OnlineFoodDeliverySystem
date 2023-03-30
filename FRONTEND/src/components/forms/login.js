import './login.css';

export const Login = () => {
  return (
    <div className='login'>
      <form>
      <h1>Log In</h1>
        <label>Email</label><br></br>
        <input type='email' name='email'/><br></br><br></br>
        <label>Password</label><br></br>
        <input type='password' name='password'/><br></br><br></br>
        <button className='b1'>LogIn</button>
      </form>
    </div>
  )
}