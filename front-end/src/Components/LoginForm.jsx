import { Link, useHistory } from "react-router-dom"
import useStore from "../hooks/useStore"
import { useEffect } from "react";

function LoginForm() {

    const currentUser = useStore(store=>store.currentUser)
    const setCurrentUser = useStore(store=>store.setCurrentUser)
    const users = useStore(store=>store.users)
    const setUsers = useStore(store=>store.setUsers)
    const noSuchUser = useStore(store=>store.noSuchUser)
    const wrongPassword = useStore(store=>store.wrongPassword)
    const passwordIncorrect = useStore(store=>store.passwordIncorrect)
    const userNotFound = useStore(store=>store.userNotFound)

    const history = useHistory()

    // useEffect(()=>{
    //     fetch("http://localhost:4000/users")
    //     .then(resp=>resp.json())
    //     .then(setUsers)
    // }, [setUsers])

    async function handlesubmit(e) {
        e.preventDefault()

        const loginDetails = {
            username: e.target.username.value,
            password: e.target.password.value
        }

        await fetch("http://localhost:4000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loginDetails)
        })
        .then(setCurrentUser)

        console.log(currentUser)
        

        // const correctUser = users.find(user=>user.username===e.target.username.value)

        // if (!correctUser) {
        //     noSuchUser()
        //     return
        // }

        // if (correctUser.password===e.target.password.value) {
        //     setCurrentUser(correctUser)
        //     history.push("/playlists")
        // }else wrongPassword()
    }

    return  (
        <>  {passwordIncorrect ? <p className="popup">You have entered the wrong password</p> : null}
            {userNotFound ? <p className="popup">We cannot find any users with that username in our systems</p> : null}
            <form onSubmit={handlesubmit} className="login-form">
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
        </>
        )
    }
        

export default LoginForm