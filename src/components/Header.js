import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Header = () => {
    const navigate = useNavigate();
    const userInfo = useSelector((store) => store.user);
    console.log('user', userInfo);
    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate("/");
          }).catch((error) => {
            navigate("/error");
          });
    }

    return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
        <img
            src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
            alt='logo'
            className='w-56'            
        />
        {userInfo && 
            <div className='flex p-10'>
                <span className='mr-2 bg-slate-300 p-1 rounded shadow'>Hello {userInfo?.displayName}</span>
                <img
                    src='https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg'
                    alt='user-icon'
                    className='w-5 h-5 mr-2 mt-1'
                />
                <button onClick={handleSignOut}>Sign Out</button>
            </div>
        }
    </div>
  )
}

export default Header