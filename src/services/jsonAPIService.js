import axios from "axios";
import {jsonBaseUrl} from "../contants/urls";

const jsonAPIService = axios.create({baseURL:jsonBaseUrl})

export {
    jsonAPIService
}
