import { useEffect, useState } from "react";

function useUsers() {
    const [users, setUsers] = useState([])
    const [userNotFound, setUserNotFound] = useState(false)
    const [passwordIncorrect, setPasswordIncorrect] = useState(false)

    useEffect(()=>{
        fetch("http://localhost:4000/users")
        .then(resp=>resp.json())
        .then(setUsers)
    }, [setUsers])

    function noSuchUser () {
        setUserNotFound(true)
    }

    function wrongPassword() {
        setPasswordIncorrect(true)
    }

    return { users, setUsers, noSuchUser, userNotFound, wrongPassword, passwordIncorrect }
}

export default useUsers