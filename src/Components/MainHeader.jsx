import { Link } from "react-router-dom"
import useStore from "../hooks/useStore"

function MainHeader() {

    const setCurrentUser = useStore(store=>store.setCurrentUser)
    const currentUser = useStore(store=>store.currentUser)

    return (
        <header className="header">
                <img
                src="https://boolean.co.uk/favicon-32x32.png"
                alt="logo"
                width="50px"
                />
                <h1>Playlist Editor</h1>
                <nav>
                    <Link className="login-link" to="/playlists">
                        <span>Your Playlists</span>
                    </Link>
                    <Link className="login-link" to="/search">
                        <span>Search</span>
                    </Link>
                    <Link onClick={()=>setCurrentUser({})} className="login-link" to="/login">
                        <span>Logout</span>
                    </Link>
                </nav>
            </header>
    )
}

export default MainHeader