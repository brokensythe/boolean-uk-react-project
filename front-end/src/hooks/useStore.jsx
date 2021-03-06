import create from "zustand";

const useStore = create((set, get) => ({
    currentUser: {},
    setCurrentUser: (object) => {set(state=>({currentUser: object}))},
    modal: '',
    setModal: (string) => {set(state=>({modal: string}))},
    closeModal: () => {set(state=>({modal: ''}))},
    currentPlaylists: [],
    getPlaylists: (id) => {
        fetch(`http://localhost:4000/users/${id}`)
        .then(resp=>resp.json())
        .then(data=>{
            set(state=>({currentPlaylists: data.playlists}))
        })
    },
    searchType:"",
    setSearchType: (string) => {set(state=>({searchType: string}))},
    searchText:"",
    setSearchText: (string) => {set(state=>({searchText: string}))},
    searchResults: [],
    setSearchResults: (array)=> {set(state=>({searchResults: array}))},
    getSearchResults: ()=>{
        fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(`https://api.deezer.com/search?q=${get().searchType}%3A%22${get().searchText}%22`)}`)
        .then(response => {
          if (response.ok) return response.json()
          throw new Error('Network response was not ok.')
        })
        .then(data => JSON.parse(data.contents))
        .then(data => {
            let myResults = []
            for (let result of data.data) {
                if (result.album.cover_medium===null) {
                    result = {...result, album: {cover_medium: "https://cdns-images.dzcdn.net/images/misc//250x250-000000-80-0-0.jpg"}}
                }
                if (myResults.map(result=>result.title).includes(result.title)){

                }
                else {
                    myResults.push(result)
                }
            }
            get().setSearchResults(myResults)
        })
    },
    selectedSong: {},
    setSelectedSong: (object)=>{set(state=>({selectedSong: object}))},
    currentPlaylist: {},
    setCurrentPlaylist: (object)=>{set(state=>({currentPlaylist: object}))},
    users: [],
    setUsers: (array)=>{set(state=>({users: array}))},
    userNotFound: false,
    usernameInDatabase: true,
    noSuchUser: ()=>{set(state=>({
        userNotFound : true,
        usernameInDatabase : false
    }))},
    passwordIncorrect: false,
    wrongPassword: ()=>{set(state=>({passwordIncorrect : true}))}
    }
) )

export default useStore