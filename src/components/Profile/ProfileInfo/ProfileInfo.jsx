import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if(!props.profile)
        return <Preloader/>
    console.log(props)
 return (
    <div >
      <div>
        <img src={props.profile.data.photos.large}/>
      </div>
      <div className={s.descriptionBlock}>
          <p>About me: --------------------------{props.profile.data.aboutMe}</p>
          <p>Looking for a job description: ---{props.profile.data.lookingForAJobDescription}</p>
          <p>Instagram: ------------------------- {props.profile.data.contacts.instagram}</p>
  </div>
    </div>
  )
}

export default ProfileInfo;