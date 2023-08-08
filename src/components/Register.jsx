 const Register = () => {
    return(
<>
          <form>
            
            <label for="username">username</label>
            <imput value={username} onchange={(e=>)} setUsernameplaceholder="username" id="username" name="username" />
            <label for="password">password</label>
            <imput type="password" placeholder="password" id="password" name="password" />
             <button type="submit">Log In</button>
       </form>
       <button>Don't have an account? Register here.</button>
       </>
    )
}
export default Register;