import "../Stylesheets/LoginPage.css"
import LoginForm from "./LoginForm"

function LoginPage() {
    return <>
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
    <footer>
        &#169; Ade Inc. circa 2021
    </footer>
    </>
}

export default LoginPage