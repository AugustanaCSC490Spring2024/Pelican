import React, {useState} from 'react'
import './chat.css'
import avatar from './../../../assets/avatar.png'
import phone from './../../../assets/phone.png'
import video from './../../../assets/video.png'
import info from './../../../assets/info.png'
import image from './../../../assets/img.png'
import camera from './../../../assets/camera.png'
import mic from './../../../assets/mic.png'
import emoji from './../../../assets/emoji.png' 
import EmojiPicker from 'emoji-picker-react'
import monochrome from './../../../assets/monochrome-icon.png'

export default function Chat() {
  const [openEmoji, setOpenEmoji] = useState(false);
  const [text, setText] = useState('');
   
  const handleEmojiClick = (e) => {
    setText(text + e.emoji)
    // setOpenEmoji(false)
  }

  return (
      <div style={styles.chat}>
        <div style={styles.top}>
          <div style={styles.user}>
            <img style={styles.img} src={avatar} alt="" />
            <div style={styles.profileInfo}>
              <span style={styles.infoName}>Jane Doe</span>
              <p style={styles.infoMsg}>Lorem ipsum dolor, sit amet.</p>
            </div>
          </div>
          <div style={styles.icons}> 
            <img style={styles.icon} src={phone} alt='' />
            <img style={styles.icon} src={video} alt='' />
            <img style={styles.icon} src={info} alt='' />
          </div>
          </div>
          <div style={styles.center}>
            <div style={styles.message}>
              <img style={styles.img} src={avatar} alt="" />
              <div style={styles.info}>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus 
                quis quae qui! Sint asperiores vero nobis deserunt aperiam iusto
                repellendus, optio impedit eius, reprehenderit dolorum nihil
                magnam alias, odit quam.
                </p>
                <span style={{fontSize: 13}}>1 min ago</span>
              </div>
            </div> 
            <div style={styles.messageOwn}> 
              <div style={styles.infoOwn}>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus 
                quis quae qui! Sint asperiores vero nobis deserunt aperiam iusto
                repellendus, optio impedit eius, reprehenderit dolorum nihil
                magnam alias, odit quam.
                </p>
                <span style={{fontSize: 13}}>1 min ago</span>
              </div>
            </div> 
            <div style={styles.message}>
              <img style={styles.img} src={avatar} alt="" />
              <div style={styles.info}>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus 
                quis quae qui! Sint asperiores vero nobis deserunt aperiam iusto
                repellendus, optio impedit eius, reprehenderit dolorum nihil
                magnam alias, odit quam.
                </p>
                <span style={{fontSize: 13}}>1 min ago</span>
              </div>
            </div> 
            <div style={styles.messageOwn}> 
              <img 
                src={monochrome} 
                alt='' 
                style={{width: '100%', height: '300px', borderRadius: '10px', objectFit: 'cover'  }}
              />
              <div style={styles.infoOwn}>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus 
                quis quae qui! Sint asperiores vero nobis deserunt aperiam iusto
                repellendus, optio impedit eius, reprehenderit dolorum nihil
                magnam alias, odit quam.
                </p>
                <span style={{fontSize: 13}}>1 min ago</span>
              </div>
            </div> 
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
            <button style={styles.sendButton}>Send</button>
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
    padding: '20px',
    borderBottom: '1px solid #e0e0e0',
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
  },
  input: {
    flex: 1,
    backgroundColor: 'rgba(17, 25, 40, 0.1)',
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