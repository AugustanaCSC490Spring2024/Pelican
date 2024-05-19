import { collection, serverTimestamp, setDoc } from "@firebase/firestore";
// import "./addUser.css";
import { useState } from "react";
import { db } from "../../../../../data/firebase";
import { getDocs, query, where, doc, updateDoc, arrayUnion } from "@firebase/firestore";
import { useUserStore } from "../../../../../data/userStore";
import avatar from "../../../../../assets/avatar.png";
import { toast } from "react-toastify";

const AddUser = ( ) => {
    const [user, setUser] = useState(null);
    const { currentUser } = useUserStore();

    const handleSearch = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target); 
        const username = formData.get("username");
        try {
            const userRef = collection(db, "users");
            const q = query(userRef, where("username", "==", username));
            const querySnapshot = await getDocs(q);
            if (!querySnapshot.empty) { 
                setUser(querySnapshot.docs[0].data());
            }
            
        } catch (error) {
            console.log(error);
        }
    };

    const handleAdd = async ( ) => {
        const chatRef = collection(db, "chats");
        const userChatsRef = collection(db, "userchats");

        try {
            const newChatRef = doc(chatRef);

            await setDoc(newChatRef, {
                createdAt: serverTimestamp(),
                messages: [],
            })
            await updateDoc(doc(userChatsRef, user.uid), {
                chats: arrayUnion({
                    chatId: newChatRef.id,
                    lastMessage: "",
                    receiverId: currentUser.uid,
                    updatedAt: Date.now(),
                }),
            }, { merge: true }); 

            await updateDoc(doc(userChatsRef, currentUser.uid), {
                chats: arrayUnion({
                    chatId: newChatRef.id,
                    lastMessage: "",
                    receiverId: user.uid,
                    updatedAt: Date.now(),
                }),
            }, { merge: true }); 

            console.log(newChatRef.id);
            toast.success("User added successfully");
        } catch (error) {
            console.log(error);
            toast.error("Failed to add user");
        }
    }
    return (
        <div style={styles.addUser}>
            <form onSubmit={handleSearch} style={{ display: 'flex', gap: 20}}>
                <input 
                    type="text" 
                    placeholder="Username" 
                    name="username" 
                    style={styles.input}    
                />
                <button style={styles.button}>Search</button>
            </form>
            {user && <div style={styles.user}>
                <div style={styles.detail}>
                    <img 
                        src={user.avatr || avatar} 
                        alt="" 
                        style={styles.userImage}
                    />
                    <span>{user.username}</span>
                </div>
                <button style={styles.button} onClick={handleAdd}>Add User</button>
            </div>}
        </div>
    );
};
export default AddUser;

const styles = {
    addUser: {
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
        gap: '20px',
    },
    user: {
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        justifyContent: 'space-between',
    },
    avatar: {
        backgroundColor: 'blue',
        borderRadius: '50%',
        color: 'white',
        width: '40px',
        height: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    userImage: {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
    },
    detail: {
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
    },
    button: {
        padding: '10px',
        backgroundColor: "#1a73e8",
        color: 'white',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
    },
    input: {
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #e0e0e0',
    },
    search: {
        display: 'flex',
        gap: '20px',
    },
    icon: {
        width: '20px',
        height: '20px',
    },
    add: {
        width: '20px',
        height: '20px',
        cursor: 'pointer',
    },
    item: {
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        padding: '10px',
        borderRadius: '5px',
        cursor: 'pointer',
        backgroundColor: 'rgba(17, 25, 40, 0.1)',
    },
    itemImg: {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
    },
    itemInfo: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
    },
    itemName: {
        fontSize: '1.2rem',
    },
    itemMessage: {
        color: 'gray',
    },
    chatList: {
        flex: 1,
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
    },
    searchBar: {
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
    },
}