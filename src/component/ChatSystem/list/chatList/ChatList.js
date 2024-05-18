import React, {useState, useEffect} from 'react'
import plus from './../../../../assets/plus.png'
import minus from './../../../../assets/minus.png'
import search from './../../../../assets/search.png'
import avatar from './../../../../assets/avatar.png'
import { useUserStore } from '../../../../data/userStore'
import { db } from '../../../../data/firebase'
import { onSnapshot, doc, getDoc } from 'firebase/firestore'
import AddUser from './addUser/AddUser'

export default function ChatList() {
    const [addMode, setAddMode] = useState(false); 
    const [chats, setChats] = useState([]); 
    const { currentUser } = useUserStore();

    useEffect (() => {
        if (!currentUser?.uid) return;
        const unSub = onSnapshot (doc (db, "userchats", currentUser.uid), async (res) => {
            // const items = res.data().chats;
            const data = res.data();
            if (!data || !data.chats) {
                setChats([]);
                return;
            }
            const items = data.chats;
            const promises = items.map(async (item) => {
                const userDocRef = await doc(db, "users", item.receiverId);
                const userDocSnap = await getDoc(userDocRef);
                const user = userDocSnap.exists() ? userDocSnap.data() : {};
                return {...item, user};
            });
            const chatData = await Promise.all(promises);
            setChats(chatData.sort((a, b) => b.updatedAt - a.updatedAt));
        })
        return () => {
            unSub();
        };
    }, [currentUser?.uid]);

    return ( 
        <div style={styles.chatList}>
            <div style={styles.search}>
                <div style={styles.searchBar}>
                    <img style={styles.icon} src={search} alt=""/>
                    <input style={styles.input} type="text" placeholder="Search" />
                </div>
                <img 
                    style={styles.add} 
                    src={addMode ? minus : plus} 
                    alt="" 
                    onClick={() => setAddMode(!addMode)}
                />
            </div>
            {chats.map((chat) => (
                <div style={styles.item} key={chat.chatId}>
                    <img style={styles.itemImg} src={avatar} alt=""/>
                    <div style={styles.itemInfo}>
                        <div style={styles.itemName}>Name</div>
                        <div style={styles.itemMessage}>{chat.lastMessage}</div>
                    </div>
                </div>
            ))}
            
            <div style={styles.item}>
                <img style={styles.itemImg} src={avatar} alt=""/>
                <div style={styles.itemInfo}>
                    <div style={styles.itemName}>Name</div>
                    <div style={styles.itemMessage}>Message</div>
                </div>
            </div>
            <div style={styles.item}>
                <img style={styles.itemImg} src={avatar} alt=""/>
                <div style={styles.itemInfo}>
                    <div style={styles.itemName}>Name</div>
                    <div style={styles.itemMessage}>Message</div>
                </div>
            </div>
            <div style={styles.item}>
                <img style={styles.itemImg} src={avatar} alt=""/>
                <div style={styles.itemInfo}>
                    <div style={styles.itemName}>Name</div>
                    <div style={styles.itemMessage}>Message</div>
                </div>
            </div>
            <div style={styles.item}>
                <img style={styles.itemImg} src={avatar} alt=""/>
                <div style={styles.itemInfo}>
                    <div style={styles.itemName}>Name</div>
                    <div style={styles.itemMessage}>Message</div>
                </div>
            </div>
            <AddUser />
        </div>
    )
}

const styles = {
    chatList: {
      flex: 1,
      overflow: 'scroll',
    },
    search: {
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        padding: '20px',
    },
    searchBar: {
        flex: 1,
        backgroundColor: 'rgba(17, 25, 40, 0.5)',
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        borderRadius: '10px',
        padding: '10px',
    },
    input: {
        backgroundColor: 'transparent',
        border: 'none',
        outline: 'none',
        color: 'white',
        flex: 1,
    },
    icon: {
        width: '20px',
        height: '20px',
    }, 
    add: {
        width: '40px',
        height: '40px',
        backgroundColor: 'rgba(17, 25, 40, 0.5)',
        padding: '10px',
        borderRadius: '10px',
        cursor: 'pointer',
    },
    item: {
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        padding: '20px',
        borderBottom: '1px solid rgba(17, 25, 40, 0.2)',
    },
    itemImg: {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
    },
    itemInfo: {
        flex: 1,
    },
    itemName: {
        color: 'black',
        fontSize: '20px',
    },
    itemMessage: {
        color: 'black',
        fontSize: '15px',
    }
    


}