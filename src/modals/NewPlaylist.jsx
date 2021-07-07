import styled from 'styled-components'

import useStore from '../hooks/useStore'

function NewPlaylist({ className }) {

    const currentUser = useStore(store=>store.currentUser)

    function handlesubmit(e) {
        e.preventDefault()

        const playlistInfo = {
            name: e.target.name.value,
            image: e.target.image.value,
            userId: currentUser.id,
            songs: []
        }

        
    }

    return (
        <div className={`new-playlist ${className}`}>
            <form className="popup">
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