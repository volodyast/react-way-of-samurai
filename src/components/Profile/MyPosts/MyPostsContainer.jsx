import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redax/profilePageReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

    let state = props.store.getState();

    let addPost = () => {
        let action = addPostActionCreator();
        props.store.dispatch(action);
    }

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    }

    return (
        <MyPosts updateNewPostText={onPostChange}
                 addPost={addPost}
                 posts={state.profilePage.postData}
                 newPostText={state.profilePage.newPostText}>
        </MyPosts>
    )
}

export default MyPostsContainer;