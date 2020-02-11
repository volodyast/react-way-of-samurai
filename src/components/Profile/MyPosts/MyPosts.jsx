import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
    let postsElements = props.profilePage.postData.map(p => <Post message={p.message} likesCount={p.likesCount}/>);
    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updatePostText(text);
    }

    return (
        <div className={s.postBlock}>
            My posts
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.profilePage.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;