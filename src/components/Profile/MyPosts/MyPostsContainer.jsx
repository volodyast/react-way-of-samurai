import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redax/profilePageReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStareToProps = (state) => {
    return {
        newPostElement: state.profilePage.newPostText,
        posts: state.profilePage.postData
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            let action = addPostActionCreator();
            dispatch(action)
        },
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        }
    }
}

const MyPostsContainer = connect(mapStareToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;