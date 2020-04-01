import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if(!props.profile)
        return <Preloader/>
 return (
    <div >
      <div>
        <img src={props.profile.photos.large}/>
      </div>
      <div className={s.descriptionBlock}>
          <p>About me: {props.profile.aboutMe}</p>
          <p>Looking for a job description: {props.profile.lookingForAJobDescription}</p>
          <p>Instagram: {props.profile.contacts.instagram}</p>
  </div>
    </div>
  )
}

export default ProfileInfo;