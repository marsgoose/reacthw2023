import {urls} from "../constants/urls";
import {apiService} from './apiService'

const commentService = {
    getAll:()=>apiService.get(urls.comments.base),
    getById:(id)=>apiService.get(urls.comments.byId(id)),
    getPostsById:(commentId)=>apiService.get(urls.comments.getPostsByCommentsId(commentId))
}


export {
    commentService
}


