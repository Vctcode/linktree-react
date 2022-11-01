import React from 'react'
// Style
import './ProfileSection.css'
// Images
import ShareIcon from '../../assets/Avatar-btn.png'
import ShareIconMobile from '../../assets/Avatar-btn-mobile.png'

export default function ProfileSection() {
    return (
        <div className='profile-section'>
            <div className="share-icon">
                <a href="#">
                    <img className='icon-desktop' src={ShareIcon} alt="" />
                    <img className='icon-mobile' src={ShareIconMobile} alt="" />


                </a>

            </div>

            <div id='profile_img' className="profile-img">
                <img src="" alt="" />
            </div>



            <h1 id='twitter' className='profile-name'>Vic_Oderinde</h1>

            <h2 id='slack' className='profile-name slack-name'>Victor oderinde</h2>

        </div>
    )
}