import { useEffect, useState } from "react";

function useRegistration() {
    const [registered, setRegistered] = useState(true)

    function registrationFailed() {
        setRegistered(false)
        console.log(registered)
    }

    function registrationSuccessful() {
        setRegistered(true)
        console.log(registered)
    }

    return { registrationFailed, registrationSuccessful, registered }
}

export default useRegistration