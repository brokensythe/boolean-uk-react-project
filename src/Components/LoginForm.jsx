function LoginForm() {
    return  <form className="login-form">
    <label>
        Username
        <input className="login-form-inputs" type="text" name="username" />
    </label>
    <label>
        Password
        <input className="login-form-inputs" type="text" name="password" />
    </label>
    <p className="login-link">Click here to register</p>
    <button className="login-button" type="submit">Login</button>
</form>
}

export default LoginForm