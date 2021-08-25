import styled from 'styled-components'
import useStore from "../hooks/useStore"
import { useEffect } from "react";
import MainHeader from './MainHeader';
import { Link } from "react-router-dom"
import { loggedIn } from '../helpers'

function PlaylistPage({ className }) {

    const currentUser = useStore(store=>store.currentUser)
    const setModal = useStore(store=>store.setModal)
    const currentPlaylists = useStore(store=>store.currentPlaylists)
    const getPlaylists = useStore(store=>store.getPlaylists)
    const modal = useStore(store=>store.modal)
    const setCurrentPlaylist = useStore(store=>store.setCurrentPlaylist)

    const userAvailable = loggedIn(currentUser)

    if (!userAvailable) return null

    useEffect(()=>{
      getPlaylists(currentUser.id)
    },[modal])


    return currentPlaylists ? (
        <div className={`correction ${className}`}>
            <MainHeader />
            <main className="main-body wrapper">
                <h2>Hello {currentUser.username}</h2>
                <div>
                    <h2>Your Playlists</h2>
                    <div className="playlist-container">
                        {currentPlaylists.map(playlist=>
                        <Link onMouseDown={()=>{setCurrentPlaylist(playlist)}} className="playlist-link" to="/playlist">
                            <div className="playlist-items">
                                <img src={playlist.image} alt="playlist image" className="playlist-image"/>
                                <p>{playlist.name}</p>
                            </div>
                        </Link>
                        )}
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
        grid-template-columns: 52px auto auto;
    
        align-items: center;
    
        background-color: #000d30;
        color: #fff;
        font-style: italic;
    }

    .header nav {
        justify-self: right;
        margin-right: 3rem;
    }

    nav span{
        margin-left: 2rem;
        font-size: 17px;
    }

    .login-link {
        text-align: right;
        font-size: 12px;
        text-decoration: none;
        color: #fff;
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

    .playlist-link {
        text-decoration: none;
        color: #000;
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
        cursor: pointer
    }

    .add-playlist {
        font-size: 1rem;
    }

    .add-playlist:hover {
        cursor: pointer;
    }
`