import { Link, useHistory } from "react-router-dom"
import useUsers from "../hooks/useUsers"
import useStore from "../hooks/useStore"

function LoginForm() {

    const setCurrentUser = useStore(store=>store.setCurrentUser)

    const { users, noSuchUser, userNotFound, wrongPassword, passwordIncorrect } = useUsers()

    const history = useHistory()

    function handlesubmit(e) {
        e.preventDefault()

        const correctUser = users.find(user=>user.username===e.target.username.value)

        if (!correctUser) {
            noSuchUser()
            return
        }

        if (correctUser.password===e.target.password.value) {
            setCurrentUser(correctUser)
            history.push("/playlists")
        }else wrongPassword()
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