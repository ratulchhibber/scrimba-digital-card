import React from 'react';
import profilePic from '../images/ProfilePic.png'

export default function Header() {
    return (
        <div className="Header">
            <img src={profilePic} alt="Profile picture"/>
            <p className="name">Laura Smith</p>
            <p className="title">Frontend Developer</p>
            <p className="website">laurasmith.website</p>
        </div>
    )
}