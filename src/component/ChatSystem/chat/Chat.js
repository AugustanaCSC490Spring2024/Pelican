import { arrayUnion, doc, getDoc, onSnapshot, updateDoc } from '@firebase/firestore'
import { formatDistanceToNow } from "date-fns"
import EmojiPicker from 'emoji-picker-react'
import React, { useEffect, useRef, useState } from 'react'
import { useChatStore } from '../../../data/chatStore'
import { useUserStore } from '../../../data/userStore'
import avatar from './../../../assets/avatar.png'
import camera from './../../../assets/camera.png'
import emoji from './../../../assets/emoji.png'
import image from './../../../assets/img.png'
import info from './../../../assets/info.png'
import mic from './../../../assets/mic.png'
import phone from './../../../assets/phone.png'
import video from './../../../assets/video.png'
import { db } from './../../../data/firebase'

export default function Chat() {
  const [openEmoji, setOpenEmoji] = useState(false);
  const [text, setText] = useState(''); 
  const [chat, setChat] = useState()

  const { chatId, user } = useChatStore()
  const { currentUser } = useUserStore()

  
  const endRef = useRef(null)
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  })

  // useEffect(() => {
  //   const unSub = onSnapshot(doc(db, "chats", chatId), async (res) => {
  //     const data = res.data()
  //     setMessages(data.messages)
  //   })
  // })

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", chatId), async (res) => {
      setChat(res.data())
    })
    return () => {
      unSub()
    }
  }, [chatId])
   
  const handleEmojiClick = (e) => {
    setText(text + e.emoji)
    // setOpenEmoji(false)
  }

  const handleSend = async () => {
    if (text === '') return
    try {
      await updateDoc(doc(db, "chats", chatId), {
        messages: arrayUnion({
          text: text,
          createAt: Date.now(),
          senderId: currentUser.uid,
        })
      })

      const userIDs = [currentUser.uid, user.uid]
      userIDs.forEach(async (id) => {
        const userChatsRef = doc(db,"userchats", id)
        const userChatsSnapshot = await getDoc(userChatsRef)
        if (userChatsSnapshot.exists()){
          const userChatsData = userChatsSnapshot.data()
          const chatIndex = userChatsData.chats.findIndex(c => c.chatId === chatId)
          userChatsData.chats[chatIndex].lastMessage = text
          userChatsData.chats[chatIndex].isSeen = id === currentUser.id ? true : false
          userChatsData.chats[chatIndex].updatedAt = Date.now()

          await updateDoc(userChatsRef, {
            chats: userChatsData.chats
          })
        } 
      })
    } catch (error) {
      console.log(error)
    }
    setText('');
  }

  return (
      <div style={styles.chat}>
        <div style={styles.top}>
          <div style={styles.user}>
            <img style={styles.img} src={user?.photoURL || avatar} alt="" />
            <div style={styles.profileInfo}>
              <span style={styles.infoName}>{user?.username}</span>
              <p style={styles.infoMsg}>{text}</p>
            </div>
          </div>
          <div style={styles.icons}> 
            <img style={styles.icon} src={phone} alt='' />
            <img style={styles.icon} src={video} alt='' />
            <img style={styles.icon} src={info} alt='' />
          </div>
          </div>
          <div style={styles.center}>
            {chat?.messages?.map((message) => {
              const isOwnMessage = message.senderId === currentUser?.uid;
              const messageStyle = isOwnMessage ? styles.messageOwn : styles.message;
              const infoStyle = isOwnMessage ? styles.infoOwn : styles.info;
              
              return (
                <div key={message?.createAt} style={messageStyle}>
                  {!isOwnMessage && <img style={styles.img} src={user?.photoURL || avatar} alt="" />}
                  <div style={infoStyle}>
                    <p>{message.text}</p>
                    <span style={{ fontSize: 13 }}>{formatDistanceToNow(new Date(message.createAt), { addSuffix: true })}</span>
                  </div>
                </div>
              );
            })}
            <div ref={endRef}></div>
          </div>
          <div style={styles.bottom}>
            <div style={styles.icons}>
              <img style={styles.icon} src={image} alt="" />
              <img style={styles.icon} src={camera} alt="" />
              <img style={styles.icon} src={mic} alt="" />
            </div>
            <input 
              style={styles.input} 
              type="text" 
              placeholder="Type a message..." 
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <div style={styles.emoji}>
              <img 
                style={styles.icon} 
                src={emoji} 
                alt="" 
                onClick={() => setOpenEmoji(!openEmoji)}
              />
              <div style={styles.picker}>
                <EmojiPicker open={openEmoji} onEmojiClick={handleEmojiClick} />
              </div>
            </div>
            <button style={styles.sendButton} onClick={handleSend}>Send</button>
          </div>
      </div>
  )
}
const styles = {
  chat: {
    flex: 2,
    borderLeft: '1px solid #e0e0e0',
    borderRight: '1px solid #e0e0e0',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  top: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '15px',
    borderBottom: '1px solid #e0e0e0',
    backgroundColor: 'rgba(20, 25, 40, 0.2)',
  },
  user: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
  img: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
  },
  profileInfo: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  info: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: '10px',
    backgroundColor: 'rgba(17, 25, 40, 0.1)',
    borderRadius: '10px',
  },
  infoOwn: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'flex-end',
    padding: '10px',
    backgroundColor: 'rgba(96, 156, 255, 0.8)',
    borderRadius: '10px',
  },
  infoName: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
  infoMsg: {
    fontSize: '14px',
    fontWeight: 'lighter',
    color: 'gray',
  },
  icons: {
    display: 'flex',
    gap: '20px',
  },
  icon: {
    width: '20px',
    height: '20px',
    cursor: 'pointer',
  },
  center: {
    flex: 1,
    overflow: 'scroll',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  message: {
    maxWidth: '70%',
    display: 'flex',
    gap: '20px',
  },
  messageOwn: {
    maxWidth: '70%',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    alignSelf: 'flex-end',
  },
  bottom: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px',
    borderTop: '1px solid #e0e0e0',
    gap: '20px',
    backgroundColor: 'rgba(20, 25, 40, 0.2)',
  },
  input: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    color: 'black',
    padding: '10px', 
    border: 'none',
    outline: 'none', 
    borderRadius: '10px',
    fontSize: '16px',
  },
  emoji: {
    cursor: 'pointer',
    position: 'relative',
  },
  picker: {
    position: 'absolute',
    bottom: '50px',
    left: 0,
  },
  sendButton: {
    padding: '10px 20px',
    backgroundColor: '#1a73e8',
    color: 'white',
    borderRadius: '10px',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
  }


}