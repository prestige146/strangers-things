 const Register = () => {
    return(
<>
          <form>
            
            <label for="username">username</label>
            <input value={username} onchange={(e=>)} setUsernameplaceholder="username" id="username" name="username" />
            <label for="password">password</label>
            <input type="password" placeholder="password" id="password" name="password" />
             <button type="submit">Log In</button>
       </form>
       <button>Don't have an account? Register here.</button>
       </>
    )
}
export default Register;