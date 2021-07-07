import styled from 'styled-components'
import useStore from "../hooks/useStore"

function PlaylistPage({ className }) {

    const currentUser = useStore(store=>store.currentUser)
    const setModal = useStore(store=>store.setModal)

    console.log(currentUser)

    return (
        <div className={`correction ${className}`}>
            <header className="header">
                <img
                src="https://boolean.co.uk/favicon-32x32.png"
                alt="logo"
                width="50px"
            />
            <h1>Playlist Editor</h1>
            </header>
            <main className="main-body wrapper">
                <h2>Hello {currentUser.username}</h2>
                <h2>Your Playlists</h2>
                {/* some mapping goes here for the playlists */}
                <p className="add-playlist" onClick={()=>setModal('newPlaylist')}>&#43; create a new playlist</p>
            </main>
        </div>
    )
}

export default styled(PlaylistPage)`
    &.correction {
        display: grid;
        grid-template-rows: auto 1fr;
    }

    .header {
        height: 100px;
        width: 100%;
        padding: 0 2rem;
        display: grid;
        grid-template-columns: 52px auto;
    
        align-items: center;
    
        background-color: #000d30;
        color: #fff;
        font-style: italic;
    }

    .main-body {
        display: grid;
        justify-content: center;
        align-content: space-between;
    }

    .wrapper {
        max-width: 80%;
        margin-left: 11rem;
        margin-right: auto;
        padding-top: 1rem;
        padding-bottom: 1rem;
    }

    .add-playlist {
        font-size: 1rem;
    }

    .add-playlist:hover {
        cursor: pointer;
    }
`