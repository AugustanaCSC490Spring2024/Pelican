import { doc, getDoc, onSnapshot, updateDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useChatStore } from '../../../../data/chatStore'
import { db } from '../../../../data/firebase'
import { useUserStore } from '../../../../data/userStore'
import avatar from './../../../../assets/avatar.png'
import minus from './../../../../assets/minus.png'
import plus from './../../../../assets/plus.png'
import search from './../../../../assets/search.png'
import AddUser from './addUser/AddUser'

export default function ChatList() {
    const [addMode, setAddMode] = useState(false); 
    const [chats, setChats] = useState([]); 
    const { currentUser } = useUserStore();
    const { changeChat, chatId }  = useChatStore();

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
                const user = userDocSnap.data();
                return {...item, user};
            });
            const chatData = await Promise.all(promises);
            setChats(chatData.sort((a, b) => b.updatedAt - a.updatedAt));
        })
        return () => {
            unSub();
        };
    }, [currentUser?.uid]);

    const handleSelect = async(chat) => {
        const userChats = chats.map((item) => {
            const { user, ...rest } = item;
            return rest;
        })
        const chatIndex = userChats.findIndex((item) => item.chatId === chat.chatId);
        userChats[chatIndex].isSeen = true;
        const userChatsRef = doc(db, "userchats", currentUser.uid);

        try {
            await updateDoc(userChatsRef, {
                chats: userChats,
            });
            changeChat(chat.chatId, chat.user);
        } catch (error) {
            console.log(error);
        }
    }

    const getInitials = (name) => {
        let initials = name?.split(' ').map((name) => name[0]).join('')
        return initials
    }

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
            {chats.map((chat) => {
                const alterPic = chat.user?.photoURL ? (
                    <img 
                        style={styles.userImage}
                        src={chat.user.photoURL}
                        alt="User" 
                    />
                ) : (
                    <div style={{...styles.avatar, backgroundColor: 'darkblue'}}>
                        {getInitials(chat.user.username)}
                    </div>
                )
                return (
                <div 
                    style={{...styles.item, backgroundColor: chat?.isSeen ? 'transparent' : 'rgba(17, 25, 40, 0.7)'}} 
                    key={chat.chatId} 
                    onClick={() => handleSelect(chat)}
                >
                    <img style={styles.itemImg} src={chat.user.photoURL || avatar} alt=""/>
                    <div style={styles.itemInfo}>
                        <div style={styles.itemName}>{chat.user.username}</div>
                        <div style={styles.itemMessage}>{chat.lastMessage}</div>
                    </div>
                </div>
                )
            })}
            {/* {addMode &&  */}
                <AddUser />
            {/* } */}
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