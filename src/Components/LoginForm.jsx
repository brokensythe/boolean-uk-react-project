import { Link } from "react-router-dom"

function LoginForm() {
    return  (
        <form className="login-form">
            <label>
                Username
                <input required className="login-form-inputs" type="text" name="username" />
            </label>
            <label>
                Password
                <input required className="login-form-inputs" type="text" name="password" />
            </label>
            <Link className="login-link" to="/register">
                <p>Click here to register</p>
            </Link>
            <button className="login-button" type="submit">Login</button>
        </form>
        )
    }
        

export default LoginForm