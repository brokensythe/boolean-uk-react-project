import MainHeader from "./MainHeader"
import styled from 'styled-components'
import useStore from "../hooks/useStore"
import { loggedIn } from '../helpers'

function SongPage({ className }) {

    const currentPlaylist = useStore(store=>store.currentPlaylist)
    const currentUser = useStore(store=>store.currentUser)

    const userAvailable = loggedIn(currentUser)

    if (!userAvailable) return null

    return currentPlaylist ? (
        <div className={`correction ${className}`}>
            <MainHeader />
            <main className="main-body wrapper">
                <h2>Songs from {currentPlaylist.name}</h2>
                <div className="playlist-container">
                    {currentPlaylist.songs.map(song=>
                        <div className="playlist-items">
                            <img src={song.image} alt="playlist image" className="playlist-image"/>
                            <p>{song.name}</p>
                        </div>
                    )}
                </div>
            </main>
        </div>
    ) : <h1>Loading Songs...</h1>
}

export default styled(SongPage)`
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
        cursor: pointer
    }
`