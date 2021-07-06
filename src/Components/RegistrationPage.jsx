import "../Stylesheets/LoginPage.css"
import RegistrationForm from "./RegistrationForm"

function RegistrationPage() {
    return (
        <>
        <header className="header">
            <img
            src="https://boolean.co.uk/favicon-32x32.png"
            alt="logo"
            width="50px"
        />
        <h1>Playlist Editor</h1>
        </header>
        <main className="main-body">
            <RegistrationForm />
        </main>
        </>
    )
}

export default RegistrationPage