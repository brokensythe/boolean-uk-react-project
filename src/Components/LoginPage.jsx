import styled from 'styled-components'
import LoginForm from "./LoginForm"

function LoginPage({ className }) {
    return (
        <div className={`correction ${className}`}>
            <header className="header">
                <img
                src="https://boolean.co.uk/favicon-32x32.png"
                alt="logo"
                width="50px"
            />
            <h1>Playlist Editor</h1>
            </header>
            <main className="main-body">
                <LoginForm />
            </main>
        </div>
        )
}

export default styled(LoginPage)`
    &.correction {
        display: grid;
        grid-template-rows: auto 1fr;
    }

    .header {
        height: 100px;
        width: 100%;
        padding: 0 2rem;
        display: grid;
        grid-template-columns: 52px auto;
    
        align-items: center;
    
        background-color: #000d30;
        color: #fff;
        font-style: italic;
    }

    .main-body {
        display: grid;
        place-content: center;
        color: #2E3532;
    }

    .popup {
        color: red;
        font-size: 14px;
    }

    .login-form {
        display: grid;
        gap: 5px;
    }

    .login-form label {
        font-size: 1.7rem;
    }

    .login-button {
        width: 30%;
        height: 1.7rem;
        border-radius: 10px;
        border: 1px solid black;
        font-size: 15px;
        color: #2E3532;
        background-color: #ACC8E5;
        cursor: pointer;
    }

    .login-button:hover {
        transform: scale(1.1);
        transition: 100ms;
    }

    .login-form-inputs {
        margin-left: 10px;
        border-radius: 20px;
        border: 1px solid black;
        height: 1.5rem;
        padding: 0 0.3rem;
    }

    .login-link {
        text-align: right;
        font-size: 12px;
        text-decoration: none;
        color: #2E3532;
    }

    .login-link:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`