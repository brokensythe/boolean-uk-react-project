import { useState } from "react";

function useRegistration() {
    const [registered, setRegistered] = useState(true)

    function registrationFailed() {
        setRegistered(false)
    }

    function registrationSuccessful() {
        setRegistered(true)
    }

    return { registrationFailed, registrationSuccessful, registered }
}

export default useRegistration