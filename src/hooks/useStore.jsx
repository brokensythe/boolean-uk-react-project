import create from "zustand";

const useStore = create((set, get) => ({
    currentUser: {},
    setCurrentUser: (object) => {set(state=>({currentUser: object}))},
}) )

export default useStore