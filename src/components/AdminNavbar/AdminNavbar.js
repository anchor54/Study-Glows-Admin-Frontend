import React, { useState, useEffect } from 'react';
import './AdminNavbar.css';
import { ReactComponent as NotificationLogo } from '../../assets/svg/admin/notification.svg'
import AdminAvatar from '../../assets/png/admin-placeholder-avatar.png'
import { userAtom } from '../../state/atoms/userAtom';
import { useRecoilState } from 'recoil';
// import  styles from './AdminNavbar.module.css';
// import { Link } from 'react-router-dom';

export const AdminNavbar = () => {
    const [date, setDate] = useState(new Date());
    const [admin] = useRecoilState(userAtom)
    
    useEffect(() => {
        const timer = setInterval(() => setDate(new Date()), 60 * 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    // adding the states 
//   const [isActive, setIsActive] = useState(false);


//   //add the active class
//   const toggleActiveClass = () => {
//     setIsActive(!isActive);
//   };


//   //clean up function to remove the active class
//   const removeActive = () => {
//     setIsActive(false)
//   }
//   const [showNavbar, setShowNavbar] = useState(false)

//   const handleShowNavbar = () => {
//     setShowNavbar(!showNavbar)
//   }
  return (
    <div className="nav-container">
            <nav className="nav">
                <div className="sec-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                        <circle cx="6.5" cy="6.5" r="6.5" fill="#2AD577"/>
                    </svg>
                    <p>Super Admin</p>
                </div>
                <div className="sec-2">
                    <ul>
                        <li>{date.getHours() > 12 ? date.getHours() % 12 : date.getHours()}:{date.getMinutes()} {date.getHours > 11 ? "PM" : "AM"}</li>
                        <li>{`${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`}</li>
                        <li><NotificationLogo /></li>
                        <li>Howdy, {admin.full_name}</li>
                        <li><img src={admin.profile_image === '' ? AdminAvatar : admin.profile_image} alt='admin placeholder avatar'/></li>
                    </ul>
                </div>
            </nav>
        </div>
  )
}
