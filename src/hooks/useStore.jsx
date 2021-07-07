import create from "zustand";

const useStore = create((set, get) => ({
    currentUser: {},
    setCurrentUser: (object) => {set(state=>({currentUser: object}))},
    modal: '',
    setModal: (string) => {set(state=>({modal: string}))},
    closeModal: () => {set(state=>({modal: ''}))}
}) )

export default useStore