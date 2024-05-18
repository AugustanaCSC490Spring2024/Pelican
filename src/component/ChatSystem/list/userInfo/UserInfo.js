import React from 'react'  
import { auth } from '../../../../data/firebase'
import more from './../../../../assets/more.png'
import video from './../../../../assets/video.png'
import edit from './../../../../assets/edit.png'
import { useUserStore } from '../../../../data/userStore'

const getInitials = (name) => {
    let initials = name?.split(' ').map((name) => name[0]).join('')
    return initials
}

export default function UserInfo() {
    const {currentUser} = useUserStore()
    return (
        <div style={styles.userInfo}>
            <div style={styles.user}>
                {/* <div style={styles.avatar}>
                    {getInitials(auth.currentUser?.displayName)}
                </div> */}
                <img
                    style={styles.userImage}
                    src={currentUser?.photoURL}
                    alt="User"
                />
                <div>
                    <div>{currentUser?.username}</div>
                </div>
            </div>
            <div style={styles.icons}> 
                <img style={styles.icon} src={more} alt='' />
                <img style={styles.icon} src={video} alt='' />
                <img style={styles.icon} src={edit} alt='' />
            </div>
        </div>
  )
}

const styles = {
    userInfo: {
    //   flex: 1,
      padding: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    user: {
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
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
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        marginLeft: '10px',
    },
    icons: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: '10px', 
    },
    icon: {
        cursor: 'pointer',
        width: '20px',
        height: '20px',
    },
}