import {jsonAPIService} from "./jsonAPIService";
import {urls} from "../contants/urls"
const userService = {
    getAll: () => jsonAPIService.get(urls.users),
    create:(data)=>jsonAPIService.post(urls.users, data)
}


export {
    userService
}