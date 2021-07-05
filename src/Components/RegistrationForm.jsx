function RegistrationForm() {
    return (
        <form className="login-form">
            <label>
                Please pick a username
                <input required className="login-form-inputs" type="text" name="username" />
            </label>
            <label>
                Please enter a password
                <input required className="login-form-inputs" type="text" name="password" />
            </label>
            <button className="login-button" type="submit">Register</button>
        </form>
    )
}