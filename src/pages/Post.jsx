import React from 'react';
import PostComponent from "../components/PostComponent/PostComponent";
import {useParams} from "react-router-dom";

const Post = () => {
    let {id} = useParams();
    return (
        <div>
            {typeof parseInt(id) === typeof Number() ? <PostComponent id={id}/> : <h2>Страница не найдена</h2> }
        </div>
    );
};

export default Post;