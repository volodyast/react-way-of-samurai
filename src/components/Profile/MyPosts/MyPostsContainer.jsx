import React from 'react';
import {addPost, updateNewPostText} from "../../../redax/profilePageReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStareToProps = (state) => {
    return {
        newPostElement: state.profilePage.newPostText,
        posts: state.profilePage.postData
    }
}


const MyPostsContainer = connect(mapStareToProps, {addPost,updateNewPostText})(MyPosts);
export default MyPostsContainer;