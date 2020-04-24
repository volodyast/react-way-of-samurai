import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if(!props.profile)
        return <Preloader/>
 return (
    <div >
      <div>
        <img src={props.profile.data.photos.large}/>
      </div>
      <div className={s.descriptionBlock}>
          <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
          <p>Looking for a job description: ---{props.profile.data.lookingForAJobDescription}</p>
          <p>Instagram: ------------------------- {props.profile.data.contacts.instagram}</p>
  </div>
    </div>
  )
}

export default ProfileInfo;