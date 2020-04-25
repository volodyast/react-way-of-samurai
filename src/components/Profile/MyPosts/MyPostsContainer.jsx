import React from 'react';
import {addPost} from "../../../redax/profilePageReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStareToProps = (state) => {
    return {
        newPostElement: state.profilePage.newPostText,
        posts: state.profilePage.postData
    }
}


const MyPostsContainer = connect(mapStareToProps, {addPost})(MyPosts);
export default MyPostsContainer;