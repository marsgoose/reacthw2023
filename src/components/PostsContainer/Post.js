

const Post = ({post}) => {
    const {id,title,body} = post
    return (
        <div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
        </div>
    );
};

export  {
    Post
};