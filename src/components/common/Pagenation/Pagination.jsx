import React from "react"
import s from "../../UsersPage/UsersPageComponent.module.css";


export const Pagination = (totalUsersCount, pageSize, currentPage, onPageChanged) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={s.profile}>
            <div> {pages.map(p => {
                return <div className={((currentPage === p) ? s.selectedPage : null) + ' ' + s.page}
                            onClick={(e) => {
                                onPageChanged(p);
                            }}>{p}</div>
            })}
            </div>
        </div>
    )
}