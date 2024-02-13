const baseURL = 'https://jsonplaceholder.typicode.com'

const todos = '/todos'
const albums = '/albums'
const comments = '/comments'


const urls = {
    todos:{
        base:todos,

    },
    albums:{
        base:albums

    },
    comments:{
        base:comments,
        byId:(id)=>`${comments}/${id}`,
        getPostsByCommentsId:(id)=>`${comments}/${id}/posts`
    }

}

export {
    baseURL,
    urls
}