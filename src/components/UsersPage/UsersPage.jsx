import React from "react"
import s from "./UsersPageComponent.module.css";
import User from "./User/User";

let UsersPage = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let usersElements = props.users.map(u => <User user={u} follow={props.follow}
                                                   unfollow={props.unfollow}
                                                   followingInProgress= {props.followingInProgress}/>)
    return (
        <div className={s.profile}>
            <div> {pages.map(p => {
                return <div className={((props.currentPage === p) ? s.selectedPage : null) + ' ' + s.page}
                            onClick={(e) => {
                                props.onPageChanged(p);
                            }}>{p}</div>
            })}
            </div>
            <div></div>
            <div className={s.usersItem}> {usersElements}</div>
        </div>
    )

}
export default UsersPage