import React, {useEffect} from 'react';
import {posts} from "../../help/posts";
import {useNavigate} from "react-router-dom";

const PostComponent = ({id}) => {

    const post = posts.find((obj)=>obj.id === Number(id));
    const navigate = useNavigate();

    useEffect(()=>{
        if(!post){
            setTimeout(()=>{
                navigate("/", {replace: true})
            }, 3000);
        }
    }, []);
    if(!post){
        return <h2>Статья не найдена :(</h2>;
    }
    return (
        <div>
            <img src={post.imageUrl} alt="About" />
            <h1>{post.title}</h1>
            <p>
                {post.text}
            </p>
        </div>
    );
};

export default PostComponent;