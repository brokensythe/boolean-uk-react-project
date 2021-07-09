import styled from 'styled-components'
import useGenres from '../hooks/useGenres'
import useStore from "../hooks/useStore"
import MainHeader from './MainHeader';
import { loggedIn } from '../helpers'

function SearchPage({ className }) {

    const currentUser = useStore(store=>store.currentUser)
    const setModal = useStore(store=>store.setModal)
    const setSearchType = useStore(store=>store.setSearchType)
    const setSearchText = useStore(store=>store.setSearchText)
    const getSearchResults = useStore(store=>store.getSearchResults)
    const searchResults = useStore(store=>store.searchResults)
    const setSelectedSong = useStore(store=>store.setSelectedSong)
    const genres = useGenres()

    const userAvailable = loggedIn(currentUser)

    if (!userAvailable) return null

    function handleSubmit(e) {
        e.preventDefault()

        setSearchType(e.target["option-select"].value)
        setSearchText(e.target["search-input"].value)

        getSearchResults()
    }


    return ( genres.length<84 ? <h1>Loading Genres...</h1> :
        <div className={`correction ${className}`}>
            <MainHeader />
            <main className="main-body wrapper">
                <form onSubmit={handleSubmit} className="search-section">
                    <p>find what you're looking for here</p>
                    <select name="options" id="option-select">
                        <option value="">--please choose an option--</option>
                        <option value="artist">Artist</option>
                        <option value="track">Track</option>
                        <option value="album">Album</option>
                    </select>
                    <input type="text" id="search-input" />
                    <button type="submit">Search</button>
                </form>
                <div className="genre-container">
                        {
                            searchResults.map(({album, title, id, artist})=><div onClick={
                                ()=>{
                                    const songInfo = {
                                        id: id,
                                        name: title,
                                        artistId: artist.id,
                                        artist: artist.name,
                                        albumId: album.id,
                                        album: album.title,
                                        image: album.cover_medium
                                    }
                                    setSelectedSong(songInfo)
                                    setModal('addASong')
                                }
                            } className="genre-items">
                            <img src={album.cover_medium} alt="genre image" className="genre-image"/>
                            <p>{title}</p>
                            </div>)
                        }
                    </div>
                <h2>...Or pick from one of these Genres</h2>
                <div className="genre-container">
                    {genres.map(({ image="https://cdns-images.dzcdn.net/images/misc//250x250-000000-80-0-0.jpg", name })=><div className="genre-items">
                            <img src={image} alt="genre image" className="genre-image"/>
                            <p>{name}</p>
                    </div>)}
                </div>
            </main>
        </div>
    )
}

export default styled(SearchPage)`
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
    }

    .wrapper {
        max-width: 80%;
        margin-left: 11rem;
        margin-right: auto;
        padding-top: 1rem;
        padding-bottom: 3rem;
    }

    .search-section {
        margin-bottom: 3rem;
    }

    .genre-container {
        display: grid;
        grid-template-columns: repeat(4, 300px);
        margin-top: 3rem;
        gap: 2rem;
    }

    .genre-image {
        height: 190px;
        width: 100%;
        object-fit: cover;
        margin-bottom: 1rem;
    }

    .genre-items {
        width: 190px;
        cursor: pointer;
    }
`