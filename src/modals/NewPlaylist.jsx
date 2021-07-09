import styled from 'styled-components'

import useStore from '../hooks/useStore'

function NewPlaylist({ className }) {

    const currentUser = useStore(store=>store.currentUser)
    const closeModal = useStore(store=>store.closeModal)
    const getPlaylists = useStore(store=>store.getPlaylists)

    function handlesubmit(e) {
        e.preventDefault()

        const playlistInfo = {
            name: e.target.name.value,
            image: e.target.image.value,
            userId: currentUser.id,
            songs: []
        }

        fetch("http://localhost:4000/playlists",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(playlistInfo)
        })
        getPlaylists(currentUser.id)
        closeModal()
    }

    return (
        <div className={`new-playlist ${className}`}>
            <form onSubmit={handlesubmit} className="popup">
                <label htmlFor="name">Playlist Name</label>
                <input type="text" id="name" />
                <label htmlFor="image">Add an image URL for your playlist</label>
                <input type="text" id="image" />
                <button className="submit-button" type="submit">Create Playlist</button>
            </form>
        </div>
    )
}

export default styled(NewPlaylist)`
    .popup {
        display: grid;
        gap: 5px;
    }

    .submit-button {
        width: 60%;
        place-self: center;
    }
`