import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";


import {commentService} from "../../services/commentService";
import {Post} from "./Post";


const Posts = () => {
    const [post, setPost] = useState()
  const{state:{postId}} = useLocation();


    useEffect(() => {
        getPostsById(postId).then(({data})=>setPost(data))
                }, []);
    return (
        <div>
            {post.map(post=><Post key={post.id} post={post}/>)}
        </div>
    );
};

export {
    Posts
};