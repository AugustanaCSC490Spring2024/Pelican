import React, {useEffect} from 'react'
import List from './list/List'
import Chat from './chat/Chat'
import Detail from './detail/Detail'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../data/firebase';
import { useUserStore } from '../../data/userStore'
import Notification from '../notification/Notification'
import { useChatStore } from '../../data/chatStore';

export default function ManageChat() {
    const {currentUser, isLoading, fetchUserInfo} = useUserStore()
    const {chatId} = useChatStore();

    useEffect (( ) => {
        const unSub = onAuthStateChanged (auth, (user) => {
            fetchUserInfo(user?.uid);
        });
        return () => {
            unSub();
        };
    }, [fetchUserInfo]);

    console.log(currentUser);

    if (isLoading) return <div className="loading">Loading...</div>

    return (
        <div style={styles.container}>
            <List />
            {chatId && <Chat />}
            <Detail />
            <Notification />
        </div>
  )
}

const styles = {
    container: {
        display: 'flex',
        width: '100%',
        height: '100vh',
        backgroundColor: '#f0f0f0'
    }
}

