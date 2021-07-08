import styled from 'styled-components'
import useStore from "../hooks/useStore"
import { useEffect } from "react";

function PlaylistPage({ className }) {

    const currentUser = useStore(store=>store.currentUser)
    const setModal = useStore(store=>store.setModal)
    const currentPlaylists = useStore(store=>store.currentPlaylists)
    const getPlaylists = useStore(store=>store.getPlaylists)

    useEffect(()=>{
      getPlaylists(currentUser.id)
    },[currentPlaylists])

    console.log(currentPlaylists)

    return currentPlaylists ? (
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
                <div>
                    <h2>Your Playlists</h2>
                    <div className="playlist-container">
                        {currentPlaylists.map(playlist=><div className="playlist-items">
                                <img src={playlist.image} alt="playlist image" className="playlist-image"/>
                                <p>{playlist.name}</p>
                        </div>)}
                    </div>
                </div>
                <p className="add-playlist" onClick={()=>setModal('newPlaylist')}>&#43; create a new playlist</p>
            </main>
        </div>
    ) : <h1>Loading Playlists...</h1>
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
        gap: 5rem
    }

    .wrapper {
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

    .playlist-container {
        display: grid;
        grid-template-columns: repeat(4, 350px);
    }

    .playlist-image {
        height: 190px;
        width: 100%;
        object-fit: cover
    }

    .playlist-items {
        width: 190px
    }
`