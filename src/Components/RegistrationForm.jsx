import useStore from "../hooks/useStore"
import useRegistration from "../hooks/useRegistration"
import { useHistory } from "react-router-dom"

function RegistrationForm() {

    const { registrationFailed, registrationSuccessful, registered } = useRegistration()

    const setCurrentUser = useStore(store=>store.setCurrentUser)
    
    const history = useHistory()

    function handlesubmit(e) {
        e.preventDefault()

        const newUser = {
            username: e.target.username.value,
            password: e.target.password.value
        }

        fetch("http://localhost:4000/users",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        })
        .then(resp=>{
                registrationSuccessful()
                return resp.json()
        }, resp=> registrationFailed())
        .then(data=>{
            setCurrentUser(data)
            history.push("/playlists")
        })
    }

    return (
        <>
            {registered ? null : <p className="popup">The information did not successfully reach our servers.  Please try again later</p>}
            <form onSubmit={handlesubmit} className="login-form">
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
        </>
    )
}

export default RegistrationForm