import { useHistory } from "react-router-dom"

export function loggedIn(currentUser) {
    const history = useHistory()
    if (!Object.keys(currentUser).length) {
        history.push("/login")
        return false
    }
    return true
}