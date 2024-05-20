import { doc, getDoc } from "firebase/firestore";
import { create } from "zustand";
import { db } from "./firebase";

export const useUserStore = create((set) => ({
    currentUser: null,
    profilePic: null,
    isLoading: true,
    fetchUserInfo: async (uid) => {
        if (!uid) return set({ currentUser: null, profilePic: null , isLoading: false });
        try {
            const docRef = doc(db, "users", uid);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const userData = docSnap.data();
                set({ currentUser: userData, profilePic: userData.photoURL, isLoading: false });
            } else {
                set({ currentUser: null, profilePic: null, isLoading: false });
            }
        } catch (err) {
            console.log(err);
            return set({ currentUser: null, profilePic: null, isLoading: false });
        }
    },
}));