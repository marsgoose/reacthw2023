import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";


import {commentService} from "../../services/commentService";
import {Post} from "./Post";


const Posts = () => {
    const [posts, setPosts] = useState()
  const{state:{commentId}} = useLocation();


    useEffect(() => {
        commentService.getPostsById(commentId).then(({data})=>setPosts(data))
                }, []);
    return (
        <div>
            {posts.map(post=><Post key={post.id} post={post}/>)}
        </div>
    );
};

export {
    Posts
};