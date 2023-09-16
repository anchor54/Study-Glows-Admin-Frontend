import React from 'react';
import './AdminNavbar.css';
// import  styles from './AdminNavbar.module.css';
// import { Link } from 'react-router-dom';

export const AdminNavbar = () => {

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
                    <ul>
                        <li><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                            <circle cx="6.5" cy="6.5" r="6.5" fill="#2AD577"/>
                            </svg>
                        </li>
                        <li>Super Admin</li>
                    </ul>
                </div>
                <div className="sec-2">
                    <ul>
                        <li>06:55 AM  08-05-2022</li>
                        <li>Bell Icon</li>
                        <li>Howdy, username</li>
                        <li>Avatar</li>
                    </ul>
                </div>
            </nav>
        </div>
  )
}
