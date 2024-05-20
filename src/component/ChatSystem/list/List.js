import React from 'react'
import UserInfo from './userInfo/UserInfo'
import ChatList from './chatList/ChatList'

export default function List() {
  return (
    <div style={styles.list}>
        <UserInfo />
        <ChatList />
    </div>
  )
}

const styles = {
    list: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column', 
    }
  }
