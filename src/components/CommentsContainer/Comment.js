import css from './Comment.module.css'
import {useNavigate} from "react-router-dom";

const Comment = ({comment}) => {
    const {id,name,email,body} = comment;

   const navigate =  useNavigate()
    return (
        <div className={css.Comment}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <div>body: {body}</div>
            <button onClick={()=>navigate('/posts', {state:{commentId:id}})}>GetPosts</button>
        </div>
    );
};

export  {
    Comment
};