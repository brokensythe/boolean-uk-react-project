import styled from 'styled-components'

import useStore from '../hooks/useStore'

function AddASong({ className }) {

    const currentUser = useStore(store=>store.currentUser)
    const closeModal = useStore(store=>store.closeModal)
    const currentPlaylists = useStore(store=>store.currentPlaylists)
    const selectedSong = useStore(store=>store.selectedSong)

    // function handlesubmit(e) {
    //     e.preventDefault()

    //     const playlistInfo = {
    //         name: e.target.name.value,
    //         image: e.target.image.value,
    //         userId: currentUser.id,
    //         songs: []
    //     }

    //     fetch("http://localhost:4000/playlists",{
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(playlistInfo)
    //     })
    //     getPlaylists(currentUser.id)
    //     closeModal()
    // }

    return (
        <div className={`new-playlist ${className}`}>
           <div className="playlist-container">
               <h2>Which playlist should the song be added to?</h2>
                {currentPlaylists.map(playlist=><div onClick={
                    ()=>{
                        fetch(`http://localhost:4000/playlists/${playlist.id}`, {
                            method: "PATCH",
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ songs: [...playlist.songs, selectedSong ]})
                        })
                        closeModal()
                    }
                } className="playlist-items">
                        <img src={playlist.image} alt="playlist image" className="playlist-image"/>
                        <p>{playlist.name}</p>
                </div>)}
            </div>
        </div>
    )
}

export default styled(AddASong)`
    .playlist-image {
        height: 7rem;
        width: 7.5rem;
        object-fit: contain
    }

    .playlist-items {
        display: grid;
        grid-auto-flow: column;
        width: 400px;
        height: 90px;
        cursor: pointer;
        align-items: center;
        gap: 15px;
        margin-bottom: 2rem;
    }
`