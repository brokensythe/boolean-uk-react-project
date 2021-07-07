import styled from 'styled-components'
import useStore from "../hooks/useStore"

function SearchPage({ className }) {

    const currentUser = useStore(store=>store.currentUser)

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
                <p>find what you're looking for here</p>
                <select name="options" id="option-select">
                    <option value="">--please choose an option--</option>
                    <option value="artist">Artist</option>
                    <option value="track">Track</option>
                    <option value="album">Album</option>
                </select>
                <input type="text" />
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
`