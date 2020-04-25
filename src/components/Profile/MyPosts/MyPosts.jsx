import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import AddPostFormRedux from "./AddPostForm";


const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let addPost = (value) => {
        props.addPost(value.newPostBody);
    }

    return (
        <div className={s.postBlock}>
            My posts
            <AddPostFormRedux onSubmit={addPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;