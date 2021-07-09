import { Link } from "react-router-dom"

function MainHeader() {
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
                </nav>
            </header>
    )
}

export default MainHeader