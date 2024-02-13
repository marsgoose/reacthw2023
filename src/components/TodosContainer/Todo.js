import css from './Todo.module.css'

const Todo = ({todo}) => {
    const {userId,id,title,completed} = todo
    return (
        <div className={css.Todo}>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>completed: {completed.toString()}</div>
        </div>
    );
};

export {
    Todo
};