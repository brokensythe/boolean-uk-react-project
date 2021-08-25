import useStore from "../hooks/useStore"
import useRegistration from "../hooks/useRegistration"
import { useHistory } from "react-router-dom"
import { useEffect } from "react";

function RegistrationForm() {

    const { registrationFailed, registrationSuccessful, registered } = useRegistration()

    const setCurrentUser = useStore(store=>store.setCurrentUser)
    const users = useStore(store=>store.users)
    const noSuchUser = useStore(store=>store.noSuchUser)
    const usernameInDatabase = useStore(store=>store.usernameInDatabase)
    const setUsers = useStore(store=>store.setUsers)
    
    const history = useHistory()

    useEffect(()=>{
        fetch("http://localhost:4000/users")
        .then(resp=>resp.json())
        .then(setUsers)
    }, [setUsers])

    function handlesubmit(e) {
        e.preventDefault()

        const userExists = users.find(user=>user.username===e.target.username.value)

        if (userExists) {
            noSuchUser()
            return
        } 

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
            {usernameInDatabase ? null : <p className="popup">This username is already taken</p>}
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