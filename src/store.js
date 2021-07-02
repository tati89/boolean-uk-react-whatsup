import create from "zustand";

const useStore = create((set, get) => ({
  users: [],
  fetchUsers: () => {
    fetch(`http://localhost:4000/users`)
      .then((resp) => resp.json())
      .then((users) => set({ users: users }));
  },
}));

export default useStore;
