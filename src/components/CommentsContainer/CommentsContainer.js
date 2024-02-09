import {useEffect, useState} from "react";

import {commentsService} from "../../services/commentsService";
import {Comments} from "./Comments"
import {CommentForm} from "./CommentForm"


const CommentsContainer = () => {
    const [comments, setComments] = useState([])


    useEffect(() => {
        commentsService.getAll().then(({data})=>setComments(data))
    }, []);
    return (
        <div>
            <CommentForm setComments={setComments}/>
            <hr/>
            <Comments comments={comments}/>
        </div>
    );
};

export {CommentsContainer};