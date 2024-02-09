import {jsonAPIService} from "./jsonAPIService";
import {urls} from "../contants/urls"
const commentsService = {
    getAll: () => jsonAPIService.get(urls.comments),
    create:(data)=>jsonAPIService.post(urls.comments, data)
}


export {
    commentsService
}